const createEquipment = (pre_rarity=null) => {
    const equipment = {
        category: null,
        attribute: null,
        type: null,
        rarity: null,
        lvl: null,
        tier: null,
        value: null,
        lock: 0,
        stats: [],
    };

    // Generate random equipment attribute
    const equipmentAttributes = ["Damage", "Defense"];
    equipment.attribute = equipmentAttributes[Math.floor(Math.random() * equipmentAttributes.length)];

    // Generate random equipment name and type based on attribute
    if (equipment.attribute == "Damage") {
        const equipmentCategories = ["Sword", "Axe", "Hammer", "Dagger", "Flail", "Scythe"];
        equipment.category = equipmentCategories[Math.floor(Math.random() * equipmentCategories.length)];
        equipment.type = "Weapon";
    } else if (equipment.attribute == "Defense") {
        const equipmentTypes = ["Armor", "Shield", "Helmet"];
        equipment.type = equipmentTypes[Math.floor(Math.random() * equipmentTypes.length)];
        if (equipment.type == "Armor") {
            const equipmentCategories = ["Plate", "Chain", "Leather"];
            equipment.category = equipmentCategories[Math.floor(Math.random() * equipmentCategories.length)];
        } else if (equipment.type == "Shield") {
            const equipmentCategories = ["Tower", "Kite", "Buckler"];
            equipment.category = equipmentCategories[Math.floor(Math.random() * equipmentCategories.length)];
        } else if (equipment.type == "Helmet") {
            const equipmentCategories = ["Great Helm", "Horned Helm"];
            equipment.category = equipmentCategories[Math.floor(Math.random() * equipmentCategories.length)];
        }
    }

    // Generate random equipment rarity
    const rarityChances = {
        "Common": 0.7,
        "Uncommon": 0.2,
        "Rare": 0.04,
        "Epic": 0.03,
        "Legendary": 0.02,
        "Heirloom": 0.01
    };

    const randomNumber = Math.random();
    let cumulativeChance = 0;

    for (let rarity in rarityChances) {
        cumulativeChance += rarityChances[rarity];
        if (randomNumber <= cumulativeChance) {
            equipment.rarity = rarity;
            break;
        }
    }

    if(pre_rarity!=null) equipment.rarity = pre_rarity;

    // Determine number of times to loop based on equipment rarity
    let loopCount;
    switch (equipment.rarity) {
        case "Common":
            loopCount = 2;
            break;
        case "Uncommon":
            loopCount = 3;
            break;
        case "Rare":
            loopCount = 4;
            break;
        case "Epic":
            loopCount = 5;
            break;
        case "Legendary":
            loopCount = 6;
            break;
        case "Heirloom":
            loopCount = 8;
            break;
        // 灵宝
        case "LB":
            loopCount = 9;
            break;
        // 先天灵宝
        case "XTLB":
            loopCount = 10
            break;
        // 臻宝
        case "ZB":
            loopCount = 11
            break;
        // 道宝
        case "DB":
            loopCount = 12
            break;
    }

    // Generate and append random stats to the stats array
    const physicalStats = ["atk", "atkSpd", "vamp", "critRate", "critDmg"];
    const damageyStats = ["atk", "atk", "vamp", "critRate", "critDmg", "critDmg"];
    const speedyStats = ["atkSpd", "atkSpd", "atk", "vamp", "critRate", "critRate", "critDmg"];
    const defenseStats = ["hp", "hp", "def", "def", "atk"];
    const dmgDefStats = ["hp", "def", "atk", "atk", "critRate", "critDmg"];
    let statTypes;
    if (equipment.attribute == "Damage") {
        if (equipment.category == "Axe" || equipment.category == "Scythe") {
            statTypes = damageyStats;
        } else if (equipment.category == "Dagger" || equipment.category == "Flail") {
            statTypes = speedyStats;
        } else if (equipment.category == "Hammer") {
            statTypes = dmgDefStats;
        } else {
            statTypes = physicalStats;
        }
    } else if (equipment.attribute == "Defense") {
        statTypes = defenseStats;
    }
    let equipmentValue = 0;
    for (let i = 0; i < loopCount; i++) {
        let statType = statTypes[Math.floor(Math.random() * statTypes.length)];

        // Stat scaling for equipment
        const maxLvl = dungeon.progress.floor * dungeon.settings.enemyLvlGap + (dungeon.settings.enemyBaseLvl - 1);
        const minLvl = maxLvl - (dungeon.settings.enemyLvlGap - 1);
        // 设置装备等级上限
        let ecap = 250;
        let etcap = 0;
        if(player.hardloop>=1){
            let activelvlv = Math.round((dungeon.settings.enemyScaling - 1) * 10);
            let curse = Math.round((dungeon.settings.enemyScaling - 1) * 10);
            if(activelvlv>=curse){
                ecap = 250 + Math.ceil(player.hardloop/2);
                etcap = 0 + Math.floor(player.hardloop/10);
            }
        }
        equipment.lvl = randomizeNum(minLvl, maxLvl);
        if (equipment.lvl > ecap) {
            equipment.lvl = ecap;
        }
        // Set stat scaling and equipment tier Tier 10 cap
        // 内鬼
        let es_mod = 0;
        if (player.skills.includes("Gaoping")) {
            es_mod = 0.3
        }
        let enemyScaling = dungeon.settings.enemyScaling + es_mod;
        if (enemyScaling > 2) {
            enemyScaling = 2;
        }
        let statMultiplier = (enemyScaling - 1) * equipment.lvl;
        equipment.tier = Math.round(((enemyScaling - 1) * 10 + etcap));
        let hpScaling = (40 * randomizeDecimal(0.5, 1.5)) + ((40 * randomizeDecimal(0.5, 1.5)) * statMultiplier);
        let atkDefScaling = (16 * randomizeDecimal(0.5, 1.5)) + ((16 * randomizeDecimal(0.5, 1.5)) * statMultiplier);
        let cdAtkSpdScaling = (3 * randomizeDecimal(0.5, 1.5)) + ((3 * randomizeDecimal(0.5, 1.5)) * statMultiplier);
        let crVampScaling = (2 * randomizeDecimal(0.5, 1.5)) + ((2 * randomizeDecimal(0.5, 1.5)) * statMultiplier);

        // Set randomized numbers to respective stats and increment sell value
        if (statType === "hp") {
            statValue = randomizeNum(hpScaling * 0.5, hpScaling);
            equipmentValue += statValue;
        } else if (statType === "atk") {
            statValue = randomizeNum(atkDefScaling * 0.5, atkDefScaling);
            equipmentValue += statValue * 2.5;
        } else if (statType === "def") {
            statValue = randomizeNum(atkDefScaling * 0.5, atkDefScaling);
            equipmentValue += statValue * 2.5;
        } else if (statType === "atkSpd") {
            statValue = randomizeDecimal(cdAtkSpdScaling * 0.5, cdAtkSpdScaling);
            if (statValue > 15) {
                statValue = 15 * randomizeDecimal(0.5, 1);
                loopCount++;
            }
            equipmentValue += statValue * 8.33;
        } else if (statType === "vamp") {
            statValue = randomizeDecimal(crVampScaling * 0.5, crVampScaling);
            if (statValue > 8) {
                statValue = 8 * randomizeDecimal(0.5, 1);
                loopCount++;
            }
            equipmentValue += statValue * 20.83;
        } else if (statType === "critRate") {
            statValue = randomizeDecimal(crVampScaling * 0.5, crVampScaling);
            if (statValue > 10) {
                statValue = 10 * randomizeDecimal(0.5, 1);
                loopCount++;
            }
            equipmentValue += statValue * 20.83;
        } else if (statType === "critDmg") {
            statValue = randomizeDecimal(cdAtkSpdScaling * 0.5, cdAtkSpdScaling);
            equipmentValue += statValue * 8.33;
        }

        // Cap maximum stat rolls for equipment rarities
        if (equipment.rarity == "Common" && loopCount > 3) {
            loopCount--;
        } else if (equipment.rarity == "Uncommon" && loopCount > 4) {
            loopCount--;
        } else if (equipment.rarity == "Rare" && loopCount > 5) {
            loopCount--;
        } else if (equipment.rarity == "Epic" && loopCount > 6) {
            loopCount--;
        } else if (equipment.rarity == "Legendary" && loopCount > 7) {
            loopCount--;
        } else if (equipment.rarity == "Heirloom" && loopCount > 9) {
            loopCount--;
        } else if (equipment.rarity == "LB" && loopCount > 10) {
            loopCount--;
        } else if (equipment.rarity == "XTLB" && loopCount > 11) {
            loopCount--;
        } else if (equipment.rarity == "ZB" && loopCount > 12) {
            loopCount--;
        } else if (equipment.rarity == "DB" && loopCount > 13) {
            loopCount--;
        }

        // Check if stat type already exists in stats array
        let statExists = false;
        for (let j = 0; j < equipment.stats.length; j++) {
            if (Object.keys(equipment.stats[j])[0] == statType) {
                statExists = true;
                break;
            }
        }

        // If stat type already exists, add values together
        if (statExists) {
            for (let j = 0; j < equipment.stats.length; j++) {
                if (Object.keys(equipment.stats[j])[0] == statType) {
                    equipment.stats[j][statType] += statValue;
                    break;
                }
            }
        }

        // If stat type does not exist, add new stat to stats array
        else {
            equipment.stats.push({ [statType]: statValue });
        }
    }
    equipment.value = Math.round(equipmentValue * 3);
    player.inventory.equipment.push(JSON.stringify(equipment));

    saveData();
    showInventory();
    showEquipment();

    const itemShow = {
        category: equipment.category,
        rarity: equipment.rarity,
        lvl: equipment.lvl,
        tier: equipment.tier,
        icon: equipmentIcon(equipment.category),
        stats: equipment.stats
    }
    return itemShow;
}

const equipmentIcon = (equipment) => {
    if (equipment == "Sword") {
        return '<i class="ra ra-relic-blade"></i>';
    } else if (equipment == "Axe") {
        return '<i class="ra ra-axe"></i>';
    } else if (equipment == "Hammer") {
        return '<i class="ra ra-flat-hammer"></i>';
    } else if (equipment == "Dagger") {
        return '<i class="ra ra-bowie-knife"></i>';
    } else if (equipment == "Flail") {
        return '<i class="ra ra-chain"></i>';
    } else if (equipment == "Scythe") {
        return '<i class="ra ra-scythe"></i>';
    } else if (equipment == "Plate") {
        return '<i class="ra ra-vest"></i>';
    } else if (equipment == "Chain") {
        return '<i class="ra ra-vest"></i>';
    } else if (equipment == "Leather") {
        return '<i class="ra ra-vest"></i>';
    } else if (equipment == "Tower") {
        return '<i class="ra ra-shield"></i>';
    } else if (equipment == "Kite") {
        return '<i class="ra ra-heavy-shield"></i>';
    } else if (equipment == "Buckler") {
        return '<i class="ra ra-round-shield"></i>';
    } else if (equipment == "Great Helm") {
        return '<i class="ra ra-knight-helmet"></i>';
    } else if (equipment == "Horned Helm") {
        return '<i class="ra ra-helmet"></i>';
    } else if (equipment == "Bowie Knife") {
        return '<i class="ra ra-bowie-knife"></i>';
    } else if (equipment == "Frostfire") {
        return '<i class="ra ra-frostfire"></i>';
    } else if (equipment == "Pendant") {
        return '<i class="ra ra-gem-pendant"></i>';
    }
}
function getEquipmentName(equipment) {
    if (equipment == "Sword") return '灵剑';
    if (equipment == "Axe") return '斩魂斧';
    if (equipment == "Hammer") return '天锤';
    if (equipment == "Dagger") return '飞刀';
    if (equipment == "Flail") return '锁链锤';
    if (equipment == "Scythe") return '夺命镰';
    if (equipment == "Plate") return '铠甲';
    if (equipment == "Chain") return '链甲';
    if (equipment == "Leather") return '法灵皮甲';
    if (equipment == "Tower") return '护法盾';
    if (equipment == "Kite") return '幻影风盾';
    if (equipment == "Buckler") return '小圆盾';
    if (equipment == "Great Helm") return '无双头盔';
    if (equipment == "Horned Helm") return '角盔';
    if (equipment == "Bowie Knife") return '龙骨刃';
    if (equipment == "Frostfire") return '焰形石';
    if (equipment == "Pendant") return '御符';
}
function replaceNmae(txt){
    if(txt=='hp') return '气血'
    if(txt=='atk') return '攻击'
    if(txt=='def') return '护体'
    if(txt=='vamp') return '汲元'
    if(txt=='atkSpd') return '攻速'
    if(txt=='critRate') return '暴击几率'
    if(txt=='critDmg') return '暴击伤害'
}
// Show full detail of the item
const showItemInfo = (item, icon, type, i) => {
    sfxOpen.play();

    dungeon.status.exploring = false;
    let itemInfo = document.querySelector("#equipmentInfo");
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let dimContainer = document.querySelector(`#inventory`);
    if (item.tier == undefined) {
        item.tier = 1;
    }
    let as_mod = 0;
    if(player.ascend>=1){
        as_mod = (0.01*player.ascend);
    }
    itemInfo.style.display = "flex";
    dimContainer.style.filter = "brightness(50%)";
    itemInfo.innerHTML = `
            <div class="content">
                <h3 class="${item.rarity}">${icon}${getRareNmae(item.rarity)} ${getEquipmentName(item.category)}</h3>
                <h5 class="lvltier ${item.rarity}"><b>Lv.${item.lvl} 阶位 ${item.tier}</b></h5>
                <ul>
                ${item.stats.map(stat => {
        if (Object.keys(stat)[0] === "critRate" || Object.keys(stat)[0] === "critDmg" || Object.keys(stat)[0] === "atkSpd" || Object.keys(stat)[0] === "vamp") {
            return `<li style='display: flex;justify-content: space-between;'>${replaceNmae(Object.keys(stat)[0])}+${stat[Object.keys(stat)[0]].toFixed(2).replace(rx, "$1")}% <span style='color:lawngreen'>(+${(stat[Object.keys(stat)[0]]*as_mod).toFixed(1)}%)</span></li>`;
        }
        else {
            return `<li style='display: flex;justify-content: space-between;'>${replaceNmae(Object.keys(stat)[0])}+${stat[Object.keys(stat)[0]]} <span style='color:lawngreen'>(+${(stat[Object.keys(stat)[0]]*as_mod).toFixed(1)})</span></li>`;
        }
    }).join('')}
                </ul>
                <div class="button-container">
                    <button id="un-equip">${getTypeName(type)}</button>
                    <button id="sell-equip"><i class="fa-solid fa-gem" style="color: #ff8000;"></i>${nFormatter(item.value)}</button>
                    <button id="close-item-info">关闭</button>
                </div>
            </div>`;

    // Equip/Unequip button for the item
    let unEquip = document.querySelector("#un-equip");
    unEquip.onclick = function () {
        if (type == "Equip") {
            // Remove the item from the inventory and add it to the equipment
            if (player.equipped.length >= 6) {
                sfxDeny.play();
            } else {
                sfxEquip.play();

                // Equip the item
                player.inventory.equipment.splice(i, 1);
                player.equipped.push(item);

                itemInfo.style.display = "none";
                dimContainer.style.filter = "brightness(100%)";
                playerLoadStats();
                saveData();
                continueExploring();
            }
        } else if (type == "Unequip") {
            sfxUnequip.play();

            // Remove the item from the equipment and add it to the inventory
            player.equipped.splice(i, 1);
            player.inventory.equipment.push(JSON.stringify(item));

            itemInfo.style.display = "none";
            dimContainer.style.filter = "brightness(100%)";
            playerLoadStats();
            saveData();
            continueExploring();
        }
    };

    // Sell equipment
    let sell = document.querySelector("#sell-equip");
    sell.onclick = function () {
        sfxOpen.play();
        itemInfo.style.display = "none";
        defaultModalElement.style.display = "flex";
        defaultModalElement.innerHTML = `
        <div class="content">
            <p>卖掉 <span class="${item.rarity}">${icon}${getRareNmae(item.rarity)} ${getEquipmentName(item.category)}</span>?</p>
            <div class="button-container">
                <button id="sell-confirm">卖出</button>
                <button id="sell-cancel">取消</button>
            </div>
        </div>`;

        let confirm = document.querySelector("#sell-confirm");
        let cancel = document.querySelector("#sell-cancel");
        confirm.onclick = function () {
            sfxSell.play();

            // Sell the equipment
            if (type == "Equip") {
                player.gold += item.value;
                player.inventory.equipment.splice(i, 1);
            } else if (type == "Unequip") {
                player.gold += item.value;
                player.equipped.splice(i, 1);
            }

            defaultModalElement.style.display = "none";
            defaultModalElement.innerHTML = "";
            dimContainer.style.filter = "brightness(100%)";
            playerLoadStats();
            saveData();
            continueExploring();
        }
        cancel.onclick = function () {
            sfxDecline.play();
            defaultModalElement.style.display = "none";
            defaultModalElement.innerHTML = "";
            itemInfo.style.display = "flex";
            continueExploring();
        }
    };

    // Close item info
    let close = document.querySelector("#close-item-info");
    close.onclick = function () {
        sfxDecline.play();

        itemInfo.style.display = "none";
        dimContainer.style.filter = "brightness(100%)";
        continueExploring();
    };
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
function getTypeName(txt){
    if (txt == "Equip") return '装备';
    if (txt == "Unequip") return '卸下';
    return txt
}
// Show inventory
const showInventory = () => {
    // Clear the inventory container
    let playerInventoryList = document.getElementById("playerInventory");
    playerInventoryList.innerHTML = "";

    if (player.inventory.equipment.length == 0) {
        playerInventoryList.innerHTML = "乾坤袋空空如也";
    }

    for (let i = 0; i < player.inventory.equipment.length; i++) {
        const item = JSON.parse(player.inventory.equipment[i]);

        // Create an element to display the item's name
        let itemDiv = document.createElement('div');
        let icon = equipmentIcon(item.category);
        if(item.lock==undefined){
            item.lock=0;
            player.inventory.equipment[i] = JSON.stringify(item)
        }

        let lock_icon = '<i class="fa-solid fa-unlock" style="color: white"></i>'
        if(item.lock==1) lock_icon = '<i class="fa-solid fa-lock" style="color: lawngreen"></i>'

        itemDiv.className = "items";
        itemDiv.innerHTML = `<span><p class="${item.rarity}">${icon}${getRareNmae(item.rarity)} ${getEquipmentName(item.category)}</p></span>`;
        itemDiv.addEventListener('click', function () {
            let type = "Equip";
            showItemInfo(item, icon, type, i);
        });

        let lock_span = document.createElement('span');
        lock_span.innerHTML = `<span id="locki">${lock_icon}</span>`;
        itemDiv.appendChild(lock_span);
        lock_span.addEventListener('click', function () {
            if(item.lock==1){
                item.lock=0;
                lock_icon = '<i class="fa-solid fa-unlock" style="color: white"></i>'
                if(item.lock==1) lock_icon = '<i class="fa-solid fa-lock" style="color: lawngreen"></i>'
                player.inventory.equipment[i] = JSON.stringify(item);
                lock_span.innerHTML = `<span id="locki">${lock_icon}</span>`;
            }else{
                item.lock=1;
                lock_icon = '<i class="fa-solid fa-unlock" style="color: white"></i>'
                if(item.lock==1) lock_icon = '<i class="fa-solid fa-lock" style="color: lawngreen"></i>'
                player.inventory.equipment[i] = JSON.stringify(item);
                lock_span.innerHTML = `<span id="locki">${lock_icon}</span>`;
            }
        });

        // Add the itemDiv to the inventory container
        playerInventoryList.appendChild(itemDiv);
    }
}

// Show equipment
const showEquipment = () => {
    // Clear the inventory container
    let playerEquipmentList = document.getElementById("playerEquipment");
    playerEquipmentList.innerHTML = "";

    // Show a message if a player has no equipment
    if (player.equipped.length == 0) {
        playerEquipmentList.innerHTML = "没有可装备的.";
    }

    for (let i = 0; i < player.equipped.length; i++) {
        const item = player.equipped[i];

        // Create an element to display the item's name
        let equipDiv = document.createElement('div');
        let icon = equipmentIcon(item.category);
        equipDiv.className = "items";
        equipDiv.innerHTML = `<button class="${item.rarity}">${icon}</button>`;
        equipDiv.addEventListener('click', function () {
            let type = "Unequip";
            showItemInfo(item, icon, type, i);
        });

        // Add the equipDiv to the inventory container
        playerEquipmentList.appendChild(equipDiv);
    }
}

// Apply the equipment stats to the player
const applyEquipmentStats = () => {
    // Reset the equipment stats
    player.equippedStats = {
        hp: 0,
        atk: 0,
        def: 0,
        atkSpd: 0,
        vamp: 0,
        critRate: 0,
        critDmg: 0
    };

    for (let i = 0; i < player.equipped.length; i++) {
        const item = player.equipped[i];

        // Iterate through the stats array and update the player stats
        item.stats.forEach(stat => {
            for (const key in stat) {
                let as_mod = 1;
                if(player.ascend>=1){
                    as_mod = 1 + (0.01*player.ascend);
                }
                player.equippedStats[key] += stat[key]*as_mod;
            }
        });
    }
    calculateStats();
}

const unequipAll = () => {
    for (let i = player.equipped.length - 1; i >= 0; i--) {
        const item = player.equipped[i];
        player.equipped.splice(i, 1);
        player.inventory.equipment.push(JSON.stringify(item));
    }
    playerLoadStats();
    saveData();
}

const sellAll = (rarity) => {
    if (rarity == "All") {
        if (player.inventory.equipment.length !== 0) {
            sfxSell.play();
            for (let i = 0; i < player.inventory.equipment.length; i++) {
                const equipment = JSON.parse(player.inventory.equipment[i]);
                if(equipment.lock==0){
                    player.gold += equipment.value;
                    player.inventory.equipment.splice(i, 1);
                    i--;
                }
            }
            playerLoadStats();
            saveData();
        } else {
            sfxDeny.play();
        }
    } else {
        let rarityCheck = false;
        for (let i = 0; i < player.inventory.equipment.length; i++) {
            const equipment = JSON.parse(player.inventory.equipment[i]);
            if (equipment.rarity === rarity) {
                rarityCheck = true;
                break;
            }
        }
        if (rarityCheck) {
            sfxSell.play();
            for (let i = 0; i < player.inventory.equipment.length; i++) {
                const equipment = JSON.parse(player.inventory.equipment[i]);
                if (equipment.rarity === rarity && equipment.lock==0) {
                    player.gold += equipment.value;
                    player.inventory.equipment.splice(i, 1);
                    i--;
                }
            }
            playerLoadStats();
            saveData();
        } else {
            sfxDeny.play();
        }
    }
}

const createEquipmentPrint = (condition,pre_rarity=null) => {
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let item = createEquipment(pre_rarity);
    let panel = `
        <div class="primary-panel" style="padding: 0.5rem; margin-top: 0.5rem;">
                <h4 class="${item.rarity}"><b>${item.icon}${getRareNmae(item.rarity)} ${getEquipmentName(item.category)}</b></h4>
                <h5 class="${item.rarity}"><b>Lv.${item.lvl} 阶位 ${item.tier}</b></h5>
                <ul>
                ${item.stats.map(stat => {
        if (Object.keys(stat)[0] === "critRate" || Object.keys(stat)[0] === "critDmg" || Object.keys(stat)[0] === "atkSpd" || Object.keys(stat)[0] === "vamp") {
            return `<li>${replaceNmae(Object.keys(stat)[0])}+${stat[Object.keys(stat)[0]].toFixed(2).replace(rx, "$1")}%</li>`;
        }
        else {
            return `<li>${replaceNmae(Object.keys(stat)[0])}+${stat[Object.keys(stat)[0]]}</li>`;
        }
    }).join('')}
            </ul>
        </div>`;
    if (condition == "combat") {
        addCombatLog(`
        ${enemy.name}掉落了<span class="${item.rarity}">${getRareNmae(item.rarity)} ${getEquipmentName(item.category)}</span>.<br>${panel}`);
    } else if (condition == "dungeon") {
        addDungeonLog(`
        你获得了<span class="${item.rarity}">${getRareNmae(item.rarity)} ${getEquipmentName(item.category)}</span>.<br>${panel}`);
    }
}