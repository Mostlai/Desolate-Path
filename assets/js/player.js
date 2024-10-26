let player = JSON.parse(localStorage.getItem("playerData"));
let inventoryOpen = false;
let leveled = false;
const lvlupSelect = document.querySelector("#lvlupSelect");
const lvlupPanel = document.querySelector("#lvlupPanel");

const playerExpGain = () => {

    let exp_mod = 1
    if (player.skills.includes("Jingyan")) {
        // 战斗获得的经验增加20%
        exp_mod=1.2;
    }

    player.exp.expCurr += Math.ceil(enemy.rewards.exp*exp_mod);
    player.exp.expCurrLvl += Math.ceil(enemy.rewards.exp*exp_mod);

    while (player.exp.expCurr >= player.exp.expMax) {
        playerLvlUp();
    }
    if (leveled) {
        lvlupPopup();
    }

    playerLoadStats();
}

// Levels up the player
const playerLvlUp = () => {
    leveled = true;

    // Calculates the excess exp and the new exp required to level up
    let expMaxIncrease = Math.floor(((player.exp.expMax * 1.1) + 100) - player.exp.expMax);
    if (player.lvl > 100) {
        expMaxIncrease = 1000000;
    }
    let excessExp = player.exp.expCurr - player.exp.expMax;
    player.exp.expCurrLvl = excessExp;
    player.exp.expMaxLvl = expMaxIncrease;

    // Increase player level and maximum exp
    player.lvl++;
    player.exp.lvlGained++;
    player.exp.expMax += expMaxIncrease;

    // Increase player bonus stats per level
    player.bonusStats.hp += 4;
    player.bonusStats.atk += 2;
    player.bonusStats.def += 2;
    player.bonusStats.atkSpd += 0.15;
    player.bonusStats.critRate += 0.1;
    player.bonusStats.critDmg += 0.25;
}

// Refresh the player stats
const playerLoadStats = () => {
    showEquipment();
    showInventory();
    applyEquipmentStats();

    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    if (player.stats.hp > player.stats.hpMax) {
        player.stats.hp = player.stats.hpMax;
    }
    player.stats.hpPercent = Number((player.stats.hp / player.stats.hpMax) * 100).toFixed(2).replace(rx, "$1");
    player.exp.expPercent = Number((player.exp.expCurrLvl / player.exp.expMaxLvl) * 100).toFixed(2).replace(rx, "$1");

    // Generate battle info for player if in combat
    if (player.inCombat || playerDead) {
        const playerCombatHpElement = document.querySelector('#player-hp-battle');
        const playerHpDamageElement = document.querySelector('#player-hp-dmg');
        const playerExpElement = document.querySelector('#player-exp-bar');
        const playerInfoElement = document.querySelector('#player-combat-info');
        playerCombatHpElement.innerHTML = `&nbsp${nFormatter(player.stats.hp)}/${nFormatter(player.stats.hpMax)}(${player.stats.hpPercent}%)`;
        playerCombatHpElement.style.width = `${player.stats.hpPercent}%`;
        playerHpDamageElement.style.width = `${player.stats.hpPercent}%`;
        playerExpElement.style.width = `${player.exp.expPercent}%`;
        playerInfoElement.innerHTML = `${player.name} Lv.${player.lvl} (${player.exp.expPercent}%)`;
    }

    // Header
    document.querySelector("#player-name").innerHTML = `<i class="fas fa-user"></i>${player.name} Lv.${player.lvl}`;
    document.querySelector("#player-exp").innerHTML = `<p style="width: -webkit-fill-available;">经验</p> ${nFormatter(player.exp.expCurr)}/${nFormatter(player.exp.expMax)} (${player.exp.expPercent}%)`;
    document.querySelector("#player-gold").innerHTML = `<i class="fa-solid fa-gem" style="color: #ff8000;"></i>${nFormatter(player.gold)}`;

    // Player Stats
    playerHpElement.innerHTML = `${nFormatter(player.stats.hp)}/${nFormatter(player.stats.hpMax)} (${player.stats.hpPercent}%)`;
    playerAtkElement.innerHTML = nFormatter(player.stats.atk);
    playerDefElement.innerHTML = nFormatter(player.stats.def);
    playerAtkSpdElement.innerHTML = player.stats.atkSpd.toFixed(2).replace(rx, "$1");
    playerVampElement.innerHTML = (player.stats.vamp).toFixed(2).replace(rx, "$1") + "%";
    playerCrateElement.innerHTML = (player.stats.critRate).toFixed(2).replace(rx, "$1") + "%";
    playerCdmgElement.innerHTML = (player.stats.critDmg).toFixed(2).replace(rx, "$1") + "%";

    // Player Bonus Stats
    document.querySelector("#bonus-stats").innerHTML = `
    <h4>属性加成</h4>
    <p><i class="fas fa-heart"></i>气血+${player.bonusStats.hp.toFixed(2).replace(rx, "$1")}%</p>
    <p><i class="ra ra-sword"></i>攻击+${player.bonusStats.atk.toFixed(2).replace(rx, "$1")}%</p>
    <p><i class="ra ra-round-shield"></i>护体+${player.bonusStats.def.toFixed(2).replace(rx, "$1")}%</p>
    <p><i class="ra ra-plain-dagger"></i>攻速+${player.bonusStats.atkSpd.toFixed(2).replace(rx, "$1")}%</p>
    <p><i class="ra ra-dripping-blade"></i>汲元+${player.bonusStats.vamp.toFixed(2).replace(rx, "$1")}%</p>
    <p><i class="ra ra-lightning-bolt"></i>暴击几率+${player.bonusStats.critRate.toFixed(2).replace(rx, "$1")}%</p>
    <p><i class="ra ra-focused-lightning"></i>暴击伤害+${player.bonusStats.critDmg.toFixed(2).replace(rx, "$1")}%</p>`;
}
function getRareNmae(txt){
    if(txt=='Common') return '凡品'
    if(txt=='Uncommon') return '良品'
    if(txt=='Rare') return '上品'
    if(txt=='Epic') return '超品'
    if(txt=='Legendary') return '传世'
    if(txt=='Heirloom') return '绝世'
    if(txt=='LB') return '灵宝'
    if(txt=='XTLB') return '先天灵宝'
    if(txt=='ZB') return '臻宝'
    if(txt=='DB') return '道宝'
}
// Opens inventory
const openInventory = () => {
    sfxOpen.play();

    dungeon.status.exploring = false;
    inventoryOpen = true;
    let openInv = document.querySelector('#inventory');
    let dimDungeon = document.querySelector('#dungeon-main');
    openInv.style.display = "flex";
    dimDungeon.style.filter = "brightness(50%)";

    sellAllElement.onclick = function () {
        sfxOpen.play();
        openInv.style.filter = "brightness(50%)";
        let rarity = sellRarityElement.value;

        defaultModalElement.style.display = "flex";
        if (rarity == "All") {
            defaultModalElement.innerHTML = `
            <div class="content">
                <p>卖出所有装备?</p>
                <div class="button-container">
                    <button id="sell-confirm">全部卖出</button>
                    <button id="sell-cancel">取消</button>
                </div>
            </div>`;
        } else {
            defaultModalElement.innerHTML = `
            <div class="content">
                <p>卖出所有<span class="${rarity}">${getRareNmae(rarity)}</span> 装备?</p>
                <div class="button-container">
                    <button id="sell-confirm">全部卖出</button>
                    <button id="sell-cancel">取消</button>
                </div>
            </div>`;
        }

        let confirm = document.querySelector('#sell-confirm');
        let cancel = document.querySelector('#sell-cancel');
        confirm.onclick = function () {
            // 卖出所有
            sellAll(rarity);
            defaultModalElement.style.display = "none";
            defaultModalElement.innerHTML = "";
            openInv.style.filter = "brightness(100%)";
        };
        cancel.onclick = function () {
            sfxDecline.play();
            defaultModalElement.style.display = "none";
            defaultModalElement.innerHTML = "";
            openInv.style.filter = "brightness(100%)";
        };
    };
    sellRarityElement.onclick = function () {
        sfxOpen.play();
    };
    sellRarityElement.onchange = function () {
        let rarity = sellRarityElement.value;
        sellRarityElement.className = rarity;
    };
}

// Closes inventory
const closeInventory = () => {
    sfxDecline.play();

    let openInv = document.querySelector('#inventory');
    let dimDungeon = document.querySelector('#dungeon-main');
    openInv.style.display = "none";
    dimDungeon.style.filter = "brightness(100%)";
    inventoryOpen = false;
    if (!dungeon.status.paused) {
        dungeon.status.exploring = true;
    }
}

// Continue exploring if inventory is not open and the game is not paused
const continueExploring = () => {
    if (!inventoryOpen && !dungeon.status.paused) {
        dungeon.status.exploring = true;
    }
}

// Shows the level up popup
const lvlupPopup = () => {
    sfxLvlUp.play();
    addCombatLog(`你升级了! (Lv.${player.lvl - player.exp.lvlGained} > Lv.${player.lvl})`);

    // Recover 20% extra hp on level up
    player.stats.hp += Math.round((player.stats.hpMax * 20) / 100);
    playerLoadStats();

    // Show popup choices
    lvlupPanel.style.display = "flex";
    combatPanel.style.filter = "brightness(50%)";
    const percentages = {
        "hp": Number(Number(10 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "hpval": Number(Number(player.stats.hpMax * 0.05 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "atk": Number(Number(8 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "atkval": Number(Number(player.stats.atk * 0.07 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "def": Number(Number(8 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "defval": Number(Number(player.stats.def * 0.07 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "atkSpd": Number(Number(3 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "vamp": Number(Number(0.5 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "critRate": Number(Number(1 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "critDmg": Number(Number(6 * randomizeDecimal(0.9, 1.1)).toFixed(1))
    };
    generateLvlStats(2, percentages);
}
function replaceNmae(txt){
    if(txt=='hp') return '气血'
    if(txt=='hpval') return '基础气血'
    if(txt=='atk') return '攻击'
    if(txt=='atkval') return '基础攻击'
    if(txt=='def') return '护体'
    if(txt=='defval') return '基础护体'
    if(txt=='vamp') return '汲元'
    if(txt=='atkSpd') return '攻速'
    if(txt=='critRate') return '暴击几率'
    if(txt=='critDmg') return '暴击伤害'
    if(txt=='dRate') return '灵宝掉落加成'
    if(txt=='ldRate') return '灵石掉落'
    if(txt=='edRate') return '经验掉落'
    if(txt=='cdRate') return '诅咒碎片掉落'
    if(txt=='rdRate') return '裂隙碎片掉落'
    if(txt=='pdRate') return '帝者碎片掉落'
    if(txt=='hdRate') return '煎熬象征掉落'
}
// Generates random stats for level up popup

function normalizeRarityChances(chances) {
    const total = Object.values(chances).reduce((acc, chance) => acc + chance, 0);
    const normalized = {};
  
    for (const [rarity, chance] of Object.entries(chances)) {
        normalized[rarity] = chance / total;
    }
  
    return normalized;
}


function getRandomRarity(rarityChances) {
    const normalizedRarityChances = normalizeRarityChances(rarityChances);
    const randomNum = Math.random(); // 生成 0 到 1 之间的随机数
    let cumulativeProbability = 0;

    for (const [rarity, chance] of Object.entries(normalizedRarityChances)) {
        cumulativeProbability += chance; // 累加概率
        if (randomNum < cumulativeProbability) {
            return rarity; // 返回符合条件的稀有度
        }
    }

    return 'Common'; // 万一没有返回，安全返回
}

const generateLvlStats = (rerolls, percentages) => {
    let selectedStats = [];
    let stats = ["hp", "atk", "def", "atkSpd", "vamp", "critRate", "critDmg", "hpval", "atkval", "defval"];
    while (selectedStats.length < 4) {
        let randomIndex = Math.floor(Math.random() * stats.length);
        if (!selectedStats.includes(stats[randomIndex])) {
            selectedStats.push(stats[randomIndex]);
        }
    }

    const loadLvlHeader = () => {
        lvlupSelect.innerHTML = `
            <h1>升级!</h1>
            <div class="content-head">
                <h4>剩余: ${player.exp.lvlGained}</h4>
                <button id="lvlReroll">重掷 ${rerolls}/2</button>
            </div>
        `;
    }
    loadLvlHeader();

    percentages = {
        "hp": Number(Number(10 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "hpval": Number(Number(player.stats.hpMax * 0.05 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "atk": Number(Number(8 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "atkval": Number(Number(player.stats.atk * 0.005 * randomizeDecimal(0.3, 1.7)).toFixed(1)),
        "def": Number(Number(8 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "defval": Number(Number(player.stats.def * 0.05 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "atkSpd": Number(Number(3 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "vamp": Number(Number(0.5 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "critRate": Number(Number(1 * randomizeDecimal(0.9, 1.1)).toFixed(1)),
        "critDmg": Number(Number(6 * randomizeDecimal(0.9, 1.1)).toFixed(1))
    };

    const rarityChances = {
        "Common": 0.7,
        "Uncommon": 0.4,
        "Rare": 0.16,
        "Epic": 0.08,
        "Legendary": 0.05
    };
    
    const rarityChances_add = {
        "Common": 1,
        "Uncommon": 1.2,
        "Rare": 1.5,
        "Epic": 2,
        "Legendary": 2.2
    };
    let Prarity_list = []
    for (let i = 0; i < 4; i++) {
        const randomNumber = Math.random();
        let cumulativeChance = 0;
        let Prarity = "Common";
        Prarity = getRandomRarity(rarityChances)
        console.log(Prarity)
        Prarity_list.push(Prarity)
    }

    const lvlReroll = document.querySelector("#lvlReroll");
    lvlReroll.addEventListener("click", function () {
        if (rerolls > 0) {
            sfxSell.play();
            rerolls--;
            loadLvlHeader();
            generateLvlStats(rerolls, percentages);
        } else {
            sfxDeny.play();
        }
    });

    try {
        for (let i = 0; i < 4; i++) {
            let button = document.createElement("button");
            button.id = "lvlSlot" + i;

            let h3 = document.createElement("h3");
            h3.innerHTML = `<span class='${Prarity_list[i]}'>`+replaceNmae(Prarity_list[i]) + '-' + replaceNmae(selectedStats[i]) + " UP"+"</span>";
            button.appendChild(h3);
            let p = document.createElement("p");
            if(!selectedStats[i].includes("val")){
                p.innerHTML = `<span class='${Prarity_list[i]}'>${replaceNmae(selectedStats[i])}提升${Number(Number(percentages[selectedStats[i]]*rarityChances_add[Prarity_list[i]]).toFixed(1))}%</span>`;
            }else{
                p.innerHTML = `<span class='${Prarity_list[i]}'>${replaceNmae(selectedStats[i])}提升${Number(Number(percentages[selectedStats[i]]*rarityChances_add[Prarity_list[i]]).toFixed(1))}</span>`;
            }
            button.appendChild(p);

            // Increase the selected stat for player
            button.addEventListener("click", function () {
                sfxItem.play();
                if(!selectedStats[i].includes("val")){
                    player.bonusStats[selectedStats[i]] += Number(Number(percentages[selectedStats[i]]*rarityChances_add[Prarity_list[i]]).toFixed(1));
                }else{
                    if(selectedStats[i] === 'hpval'){
                        player.stats.hp +=  Number(Number(percentages[selectedStats[i]]*rarityChances_add[Prarity_list[i]]).toFixed(1));
                        player.stats.hpMax +=  Number(Number(percentages[selectedStats[i]]*rarityChances_add[Prarity_list[i]]).toFixed(1));
                    }
                    if(selectedStats[i] === 'atkval'){
                        player.stats.atk +=  Number(Number(percentages[selectedStats[i]]*rarityChances_add[Prarity_list[i]]).toFixed(1));
                    }
                    if(selectedStats[i] === 'defval'){
                        player.stats.def +=  Number(Number(percentages[selectedStats[i]]*rarityChances_add[Prarity_list[i]]).toFixed(1));
                    }
                }

                if (player.exp.lvlGained > 1) {
                    player.exp.lvlGained--;
                    generateLvlStats(2, percentages);
                } else {
                    player.exp.lvlGained = 0;
                    lvlupPanel.style.display = "none";
                    combatPanel.style.filter = "brightness(100%)";
                    leveled = false;
                }

                playerLoadStats();
                saveData();
            });

            lvlupSelect.appendChild(button);
        }
    } catch (err) { }
}