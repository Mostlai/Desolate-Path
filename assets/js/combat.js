const combatPanel = document.querySelector("#combatPanel")
let enemyDead = false;
let playerDead = false;

// ========== Validation ==========
const hpValidation = () => {
    // Prioritizes player death before the enemy
    if (player.stats.hp < 1) {
        player.stats.hp = 0;
        playerDead = true;
        player.deaths++;
        if(player.bank==undefined) player.bank=0;
        player.bank = player.bank+ Math.ceil(player.gold*0.3)
        player.gold = 0
        addCombatLog(`你死了!`);
        addCombatLog(`30%的灵石自动存入了钱庄`);
        document.querySelector("#battleButton").addEventListener("click", function () {
            sfxConfirm.play();
            playerDead = false;

            // Reset all the necessary stats and return to menu
            let dimDungeon = document.querySelector('#dungeon-main');
            dimDungeon.style.filter = "brightness(100%)";
            dimDungeon.style.display = "none";
            combatPanel.style.display = "none";
            runLoad("title-screen", "flex");

            clearInterval(dungeonTimer);
            clearInterval(playTimer);
            progressReset();
        });
        endCombat();
    } else if (enemy.stats.hp < 1) {
        // Gives out all the reward and show the claim button
        enemy.stats.hp = 0;
        enemyDead = true;
        player.kills++;
        dungeon.statistics.kills++;
        addCombatLog(`${enemy.name} 神魂俱灭! (${new Date(combatSeconds * 1000).toISOString().substring(14, 19)})`);
        addCombatLog(`你得到了${nFormatter(enemy.rewards.exp)}经验.`)
        if (player.skills.includes("Jingyan")) {
            addCombatLog(`【资深】使你额外获得${nFormatter(Math.ceil(enemy.rewards.exp*0.2))}经验.`)
        }
        playerExpGain();

        let gold_mod = 1;
        let g_md = 1;
        if (player.skills.includes("Lingshi")) {
            // 战斗获得的灵石增加30%
            gold_mod=1.3
        }
        if(player.ert==1){g_md=2}
        addCombatLog(`${enemy.name} 掉落了 <i class="fa-solid fa-gem" style="color: #ff8000;"></i>${nFormatter(enemy.rewards.gold*gold_mod*g_md)} 灵石.`)
        if (player.skills.includes("Lingshi")) {
            addCombatLog(`【帝王宝库】使你额外获得${nFormatter(Math.ceil(enemy.rewards.gold*0.3))}经验.`)
        }
        player.gold += enemy.rewards.gold*gold_mod*g_md;
        playerLoadStats();
        if (enemy.rewards.drop) {
            createEquipmentPrint("combat");
        }

        // Recover 20% of players health
        player.stats.hp += Math.round((player.stats.hpMax * 20) / 100);
        playerLoadStats();

        // Close the battle panel
        document.querySelector("#battleButton").addEventListener("click", function () {
            sfxConfirm.play();

            // Clear combat backlog and transition to dungeon exploration
            let dimDungeon = document.querySelector('#dungeon-main');
            dimDungeon.style.filter = "brightness(100%)";
            bgmDungeon.play();

            dungeon.status.event = false;
            combatPanel.style.display = "none";
            enemyDead = false;
            combatBacklog.length = 0;
        });
        endCombat();
    }
}
function getDtype(txt){
    if(txt=='crit damage') return '暴击';
    if(txt=='damage') return '普通';
    return txt;
}
// ========== Attack Functions ==========
const playerAttack = () => {
    if (!player.inCombat) {
        return;
    }
    if (player.inCombat) {
        sfxAttack.play();
    }

    // Calculates the damage and attacks the enemy
    let crit;
    let damage = player.stats.atk * (player.stats.atk / (player.stats.atk + enemy.stats.def));
    // Randomizes the damage by 90% - 110%
    let dmgRange = 0.9 + Math.random() * 0.2;
    damage = damage * dmgRange;
    // Check if the attack is a critical hit
    let crit_mod = 1
    let dmg_mod = 1
    if (player.skills.includes("Baoji")) {
        crit_mod = 1.7
        dmg_mod = 0.6
    }
    if (player.skills.includes("Gongji")) {
        crit_mod = 0
        dmg_mod = 1.3
    }

    if (Math.floor(Math.random() * 100) < player.stats.critRate) {
        crit = true;
        dmgtype = "crit damage";
        damage = Math.round(damage * crit_mod * (1 + (player.stats.critDmg / 100)));
        if (player.skills.includes("Baoji")) {
            addCombatLog(`【狂热之心】使你额外造成${Math.round(damage * (crit_mod-1) * (1 + (player.stats.critDmg / 100)))}伤害.`)
        }
    } else {
        crit = false;
        dmgtype = "damage";
        damage = Math.round(damage * dmg_mod);
        if (player.skills.includes("Gongji")) {
            addCombatLog(`【仁慈之心】使你额外造成${Math.round(damage * dmg_mod)}伤害.`)
        }
    }

    // Skill effects
    objectValidation();
    if (player.skills.includes("Remnant Razor")) {
        // Attacks deal extra 8% of enemies' current health on hit
        damage += Math.round((8 * enemy.stats.hp) / 100);
    }
    if (player.skills.includes("Titan's Will")) {
        // Attacks deal extra 5% of your maximum health on hit
        damage += Math.round((5 * player.stats.hpMax) / 100);
    }
    if (player.skills.includes("Devastator")) {
        // Deal 30% more damage but you lose 30% base attack speed
        damage = Math.round(damage + ((30 * damage) / 100));
    }
    if (player.skills.includes("Rampager")) {
        // Increase base attack by 5 after each hit. Stack resets after battle.
        player.baseStats.atk += 5;
        objectValidation();
        player.tempStats.atk += 5;
        saveData();
    }
    if (player.skills.includes("Blade Dance")) {
        // Gain increased attack speed after each hit. Stack resets after battle
        player.baseStats.atkSpd += 0.3;
        objectValidation();
        player.tempStats.atkSpd += 0.3;
        saveData();
    }
    // 快启动
    if (player.skills.includes("Kuaiqidong")) {
        // 基础攻速增加100%，但是每次攻击逐步降低攻速。战斗后重置
        player.baseStats.atkSpd -= 0.01;
        objectValidation();
        player.tempStats.atkSpd -= 0.01;
        saveData();
    }
    // 血衣
    let atkspd_mod = 1;
    if (player.skills.includes("Kuangbao")) {
        // 血量位于50%以下获得狂暴,增加50%攻速和30%攻击
        if(player.stats.hp<=player.stats.hpMax*0.5){
            addCombatLog(`你身披【血衣】,眼目猩红`)
            damage = Math.ceil(dmg*1.3);
            atkspd_mod = 0.5;
        }
    }
    let atk_timer = player.stats.atkSpd;
    atk_timer = atk_timer * atkspd_mod;


    //汲元效果
    let lt_mod = 1;
    if (player.skills.includes("JiyuanXiaoguo")) {
        addCombatLog(`你的【饮灵之躯】源源不断的吸收对方的气血`)
        lt_mod = 1.3;
    }
    if (player.skills.includes("Yinxue")) {
        addCombatLog(`你的【饮血】源源不断的吸收对方的气血`)
        lt_mod = 2;
    }
    if (player.skills.includes("Huichun")) {
        addCombatLog(`你的【大回春术】滋养你的身体,你转瞬间容光焕发!`)
        addCombatLog(`恢复了${Math.ceil(player.stats.hpMax*0.02)}气血`)
        player.stats.hp += Math.ceil(player.stats.hpMax*0.02)
    }

    if (player.skills.includes("QixueHun")) {
        addCombatLog(`你的【气血之魂】加强了攻击的威力!`)
        let hpPercentage = (player.stats.hp / player.stats.hpMax) * 100;
        if (hpPercentage < 70) {
            let hpLossPercentage = 100 - hpPercentage;
            let additionalDamage = (hpLossPercentage * 2);
            damage += Math.ceil(damage*(additionalDamage/100));
        } 
    }

    if (player.skills.includes("Daotian")) {
        if (Math.floor(Math.random() * 100) < 5) {
            player.bonusStats.hp += Math.ceil(damage*0.01);
            addCombatLog(`【盗天】你窃走天地精华!!`)
        }
    }
    if (player.skills.includes("Luantian")) {
        if (Math.floor(Math.random() * 100) < 5) {
            player.bonusStats.hp += Math.ceil(damage*0.01);
            addCombatLog(`【乱天】你打乱了天序!!`)
        }
    }
    if (player.skills.includes("Baitian")) {
        if (Math.floor(Math.random() * 100) < 5) {
            player.bonusStats.def += Math.ceil(damage*0.01);
            addCombatLog(`【败天】你削减了天时!!`)
        }
    }
    if (player.skills.includes("Lutian")) {
        if (Math.floor(Math.random() * 100) < 5) {
            player.bonusStats.atk += Math.ceil(damage*0.005);
            addCombatLog(`【戮天】你破灭了某处!!`)
        }
    }
    if (player.skills.includes("Zhutian")) {
        if (Math.floor(Math.random() * 100) < 5) {
            player.bonusStats.critDmg += 0.5;
            addCombatLog(`【诛天】你诛灭了某处!!`)
        }
    }
    
    if (player.skills.includes("Daitian")) {
        if (Math.floor(Math.random() * 100) < 1) {
            damage = enemy.stats.hp;
            addCombatLog(`【代天】宣布对方立即失败`)
        }
    }

    //眩晕
    if (player.skills.includes("Xuanyun")) {
        if (Math.floor(Math.random() * 100) < 15) {
            enemy.stats.atk = Math.floor(enemy.stats.atk  - enemy.stats.atk*0.05)
            addCombatLog(`你向对方头上猛地一击,对方顿时感觉头晕目眩,浑身无力`)
        }
    }

    if (player.skills.includes("GoldG")) {
        let dmod = 1;
        dmod = 1+ (player.gold/1000)*0.01;
        damage = Math.floor(damage*dmod);
        player.gold = player.gold-Math.floor(damage*0.05)
        addCombatLog(`你的灵石源源不断的向对方砸去`)
    }
    if (player.skills.includes("PoorG")) {
        if(player.gold<1000){
            damage = damage+50;
            addCombatLog(`穷神祝福你`)
        }
    }

    if (player.skills.includes("HL")) {
        damage = Math.floor(damage * 1.3);
        if (Math.floor(Math.random() * 100) < 30) {
            damage = 0
            addCombatLog(`哎呀,打歪了`)
        }
    }

    // Lifesteal formula
    let lifesteal = Math.round(damage * lt_mod * (player.stats.vamp / 100));

    // Apply the calculations to combat
    enemy.stats.hp -= damage;
    player.stats.hp += lifesteal;
    addCombatLog(`${player.name} 对  ${enemy.name}造成了 ` + nFormatter(damage) + ` ${getDtype(dmgtype)} 伤害`);
    hpValidation();
    playerLoadStats();
    enemyLoadStats();

    // Damage effect
    let enemySprite = document.querySelector("#enemy-sprite");
    enemySprite.classList.add("animation-shake");
    setTimeout(() => {
        enemySprite.classList.remove("animation-shake");
    }, 200);

    // Damage numbers
    const dmgContainer = document.querySelector("#dmg-container");
    const dmgNumber = document.createElement("p");
    dmgNumber.classList.add("dmg-numbers");
    if (crit) {
        dmgNumber.style.color = "gold";
        dmgNumber.innerHTML = nFormatter(damage) + "!";
    } else {
        dmgNumber.innerHTML = nFormatter(damage);
    }
    dmgContainer.appendChild(dmgNumber);
    setTimeout(() => {
        dmgContainer.removeChild(dmgContainer.lastElementChild);
    }, 370);

    // Attack Timer
    if (player.inCombat) {
        setTimeout(() => {
            if (player.inCombat) {
                playerAttack();
            }
        }, (1000 / atk_timer));
    }
}

const enemyAttack = () => {
    if (!player.inCombat) {
        return;
    }
    if (player.inCombat) {
        sfxAttack.play();
    }

    // Calculates the damage and attacks the player
    let damage = enemy.stats.atk * (enemy.stats.atk / (enemy.stats.atk + player.stats.def));
    let lifesteal = Math.round(enemy.stats.atk * (enemy.stats.vamp / 100));
    // Randomizes the damage by 90% - 110%
    let dmgRange = 0.9 + Math.random() * 0.2;
    damage = damage * dmgRange;
    // Check if the attack is a critical hit
    if (Math.floor(Math.random() * 100) < enemy.stats.critRate) {
        // 战斗盔甲免疫暴击
        if(player.skills.includes("ZDKJ")){
            dmgtype = "damage";
            damage = Math.round(damage);
        }else{
            dmgtype = "crit damage";
            damage = Math.round(damage * (1 + (enemy.stats.critDmg / 100)));
        }
    } else {
        dmgtype = "damage";
        damage = Math.round(damage);
    }

    // Skill effects
    if (player.skills.includes("Paladin's Heart")) {
        // You receive 25% less damage
        damage = Math.round(damage - ((25 * damage) / 100));
    }

    // 风中格挡
    if (player.skills.includes("Shanbi")) {
        // 有30%概率闪避敌方攻击,闪避时有40%的概率能反击敌人造成50%原本受到的伤害
        if (Math.floor(Math.random() * 100) < 30) {
            let t_damage = Math.ceil(damage*0.5);
            damage = 0;
            addCombatLog(`你于风中隐藏,对方的攻击如同石牛如海`)
            if (Math.floor(Math.random() * 100) < 40) {
                enemy.stats.hp -= t_damage;
                addCombatLog(`你于风中展开弹反,对方的攻势竟倒飞而去`)
            }
        }
    }

    if (player.skills.includes("GoldS")) {
        let dmod = 1;
        dmod = (player.gold/1000)*0.01;
        damage = Math.max(1,Math.floor(damage*(1-dmod)));
        player.gold = player.gold-Math.floor(damage*0.05)
        addCombatLog(`你的灵石守护着你`)
    }
    if (player.skills.includes("PoorS")) {
        if(player.gold<1000){
            damage = Math.max(1,damage-30);
            addCombatLog(`穷神祝福你`)
        }
    }
    
    if (player.skills.includes("Jingfan")) {
        let hpPercentage = (player.stats.hp / player.stats.hpMax) * 100;
        if (hpPercentage < 30) {
            addCombatLog(`你的【脆镜反射】反射了同样的伤害回去!`)
            enemy.stats.hp -= damage;
        } 
    }
    

    // Apply the calculations
    // 至高气息
    if (player.skills.includes("ZGQX")) {
        if(player.stats.hp-damage<=0){
            damage = player.stats.hp - 5;
        }
    }

    //异界守护
    if (player.skills.includes("YJSH")) {
        if (Math.floor(Math.random() * 100) < 99) {
            if(dmgtype == 'damage'){
                damage = 0;
                addCombatLog(`你被异界气息笼罩,完全无视了这次攻击`)
            }
        }
        damage = damage*10;
        if(damage!=0) addCombatLog(`你被这个世界排斥!!`)
    }

    if (player.skills.includes("DCJJ")) {
        if (player.stats.hp == player.stats.hpMax) {
            damage = Math.floor(damage*0.5);
            addCombatLog(`你的【多重坚甲】守护着你`)
        }
    }


    player.stats.hp -= damage;
    // Aegis Thorns skill
    objectValidation();
    if (player.skills.includes("Aegis Thorns")) {
        // Enemies receive 15% of the damage they dealt
        enemy.stats.hp -= Math.round((15 * damage) / 100);
    }
    // 内鬼
    if (player.skills.includes("Neigui")) {
        if (Math.floor(Math.random() * 100) < 10) {
            enemy.stats.hp -= damage;
            addCombatLog(`有内鬼,中止交易`)
        }
    }
    enemy.stats.hp += lifesteal;
    addCombatLog(`${enemy.name} 对 ${player.name} 造成了` + nFormatter(damage) + ` ${getDtype(dmgtype)} 伤害`);
    hpValidation();
    playerLoadStats();
    enemyLoadStats();

    // Damage effect
    let playerPanel = document.querySelector('#playerPanel');
    playerPanel.classList.add("animation-shake");
    setTimeout(() => {
        playerPanel.classList.remove("animation-shake");
    }, 200);

    // Attack Timer
    if (player.inCombat) {
        setTimeout(() => {
            if (player.inCombat) {
                enemyAttack();
            }
        }, (1000 / enemy.stats.atkSpd));
    }
}

// ========== Combat Backlog ==========
const combatBacklog = [];

// Add a log to the combat backlog
const addCombatLog = (message) => {
    combatBacklog.push(message);
    updateCombatLog();
}

// Displays every combat activity
const updateCombatLog = () => {
    let combatLogBox = document.getElementById("combatLogBox");
    combatLogBox.innerHTML = "";

    for (let message of combatBacklog) {
        let logElement = document.createElement("p");
        logElement.innerHTML = message;
        combatLogBox.appendChild(logElement);
    }

    if (enemyDead) {
        let button = document.createElement("div");
        button.className = "decision-panel";
        button.innerHTML = `<button id="battleButton">取得</button>`;
        combatLogBox.appendChild(button);
    }

    if (playerDead) {
        let button = document.createElement("div");
        button.className = "decision-panel";
        button.innerHTML = `<button id="battleButton">回到菜单</button>`;
        combatLogBox.appendChild(button);
    }

    combatLogBox.scrollTop = combatLogBox.scrollHeight;
}

// Combat Timer
let combatSeconds = 0;

const startCombat = (battleMusic) => {
    bgmDungeon.pause();
    sfxEncounter.play();
    battleMusic.play();
    player.inCombat = true;

    // Starts the timer for player and enemy attacks along with combat timer
    setTimeout(playerAttack, (1000 / player.stats.atkSpd));
    setTimeout(enemyAttack, (1000 / enemy.stats.atkSpd));
    let dimDungeon = document.querySelector('#dungeon-main');
    dimDungeon.style.filter = "brightness(50%)";

    playerLoadStats();
    enemyLoadStats();

    dungeon.status.event = true;
    combatPanel.style.display = "flex";

    combatTimer = setInterval(combatCounter, 1000);
}

const endCombat = () => {
    bgmBattleMain.stop();
    bgmBattleGuardian.stop();
    bgmBattleBoss.stop();
    sfxCombatEnd.play();
    player.inCombat = false;
    // Skill validation
    if (player.skills.includes("Rampager")) {
        // Remove Rampager attack buff
        objectValidation();
        player.baseStats.atk -= player.tempStats.atk;
        player.tempStats.atk = 0;
        saveData();
    }
    if (player.skills.includes("Blade Dance")) {
        // Remove Blade Dance attack speed buff
        objectValidation();
        player.baseStats.atkSpd -= player.tempStats.atkSpd;
        player.tempStats.atkSpd = 0;
        saveData();
    }
    // 快启动
    if (player.skills.includes("Kuaiqidong")) {
        // 基础攻速增加100%，但是每次攻击逐步降低攻速。战斗后重置
        objectValidation();
        player.baseStats.atkSpd -= player.tempStats.atkSpd;
        player.tempStats.atkSpd = 0;
        saveData();
    }

    // Stops every timer in combat
    clearInterval(combatTimer);
    combatSeconds = 0;
}

const combatCounter = () => {
    combatSeconds++;
}

const showCombatInfo = () => {
    document.querySelector('#combatPanel').innerHTML = `
    <div class="content">
        <div class="battle-info-panel center" id="enemyPanel">
            <p>${enemy.name} Lv.${enemy.lvl}</p>
            <div class="battle-bar empty-bar hp bb-hp">
                <div class="battle-bar dmg bb-hp" id="enemy-hp-dmg"></div>
                <div class="battle-bar current bb-hp" id="enemy-hp-battle">
                    &nbsp${nFormatter(enemy.stats.hp)}/${nFormatter(enemy.stats.hpMax)}<br>(${enemy.stats.hpPercent}%)
                </div>
            </div>
            <div id="dmg-container"></div>
            <img src="./assets/sprites/${enemy.image.name}${enemy.image.type}" alt="${enemy.name}" width="${enemy.image.size}" id="enemy-sprite">
        </div>
        <div class="battle-info-panel primary-panel" id="playerPanel">
            <p id="player-combat-info"></p>
            <div class="battle-bar empty-bar bb-hp">
                <div class="battle-bar dmg bb-hp" id="player-hp-dmg"></div>
                <div class="battle-bar current bb-hp" id="player-hp-battle">
                    &nbsp${nFormatter(player.stats.hp)}/${nFormatter(player.stats.hpMax)}(${player.stats.hpPercent}%)
                </div>
            </div>
            <div class="battle-bar empty-bar bb-xb">
                <div class="battle-bar current bb-xb" id="player-exp-bar">exp</div>
            </div>
        </div>
        <div class="logBox primary-panel">
            <div id="combatLogBox"></div>
        </div>
    </div>
    `;
}