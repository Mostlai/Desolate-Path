let player=JSON["\u0070\u0061\u0072\u0073\u0065"](localStorage["\u0067\u0065\u0074\u0049\u0074\u0065\u006d"]("ataDreyalp".split("").reverse().join("")));let inventoryOpen=![];let leveled=![];const lvlupSelect=document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("\u0023\u006c\u0076\u006c\u0075\u0070\u0053\u0065\u006c\u0065\u0063\u0074");const lvlupPanel=document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("lenaPpulvl#".split("").reverse().join(""));const playerExpGain=()=>{let _0x548a92=0xb4971^0xb4978;if(player["\u0073\u006b\u0069\u006c\u006c\u0073"]["\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0073"]("naygniJ".split("").reverse().join(""))){_0x548a92=1.2;}player['exp']['expCurr']+=Math["\u0063\u0065\u0069\u006c"](enemy['rewards']["\u0065\u0078\u0070"]*_0x548a92);player['exp']["\u0065\u0078\u0070\u0043\u0075\u0072\u0072\u004c\u0076\u006c"]+=Math['ceil'](enemy['rewards']['exp']*_0x548a92);while(player['exp']["\u0065\u0078\u0070\u0043\u0075\u0072\u0072"]>=player["\u0065\u0078\u0070"]["\u0065\u0078\u0070\u004d\u0061\u0078"]){playerLvlUp();}if(leveled){lvlupPopup();}playerLoadStats();};const playerLvlUp=()=>{leveled=!![];let _0x36c328=Math["\u0066\u006c\u006f\u006f\u0072"](player['exp']["\u0065\u0078\u0070\u004d\u0061\u0078"]*1.1+(0xce9c2^0xce9a6)-player["\u0065\u0078\u0070"]["\u0065\u0078\u0070\u004d\u0061\u0078"]);if(player["\u006c\u0076\u006c"]>(0xd8288^0xd82ec)){_0x36c328=0xf4240;}let _0x2af83e=player['exp']["\u0065\u0078\u0070\u0043\u0075\u0072\u0072"]-player['exp']["\u0065\u0078\u0070\u004d\u0061\u0078"];player['exp']['expCurrLvl']=_0x2af83e;player['exp']['expMaxLvl']=_0x36c328;player['lvl']++;player["\u0065\u0078\u0070"]["\u006c\u0076\u006c\u0047\u0061\u0069\u006e\u0065\u0064"]++;player['exp']['expMax']+=_0x36c328;player["\u0062\u006f\u006e\u0075\u0073\u0053\u0074\u0061\u0074\u0073"]["\u0068\u0070"]+=0xb4689^0xb468d;player["\u0062\u006f\u006e\u0075\u0073\u0053\u0074\u0061\u0074\u0073"]['atk']+=0x8a47c^0x8a47e;player['bonusStats']['def']+=0x5d8e3^0x5d8e1;player["\u0062\u006f\u006e\u0075\u0073\u0053\u0074\u0061\u0074\u0073"]['atkSpd']+=0.15;player["\u0062\u006f\u006e\u0075\u0073\u0053\u0074\u0061\u0074\u0073"]['critRate']+=0.1;player["\u0062\u006f\u006e\u0075\u0073\u0053\u0074\u0061\u0074\u0073"]["\u0063\u0072\u0069\u0074\u0044\u006d\u0067"]+=0.25;};const playerLoadStats=()=>{showEquipment();showInventory();applyEquipmentStats();let _0x1b1327=/\.0+$|(\.[0-9]*[1-9])0+$/;if(player['stats']["\u0068\u0070"]>player["\u0073\u0074\u0061\u0074\u0073"]["\u0068\u0070\u004d\u0061\u0078"]){player["\u0073\u0074\u0061\u0074\u0073"]["\u0068\u0070"]=player["\u0073\u0074\u0061\u0074\u0073"]['hpMax'];}player["\u0073\u0074\u0061\u0074\u0073"]['hpPercent']=Number(player['stats']["\u0068\u0070"]/player['stats']['hpMax']*0x64)['toFixed'](0x95963^0x95961)['replace'](_0x1b1327,'$1');player["\u0065\u0078\u0070"]["\u0065\u0078\u0070\u0050\u0065\u0072\u0063\u0065\u006e\u0074"]=Number(player['exp']['expCurrLvl']/player['exp']["\u0065\u0078\u0070\u004d\u0061\u0078\u004c\u0076\u006c"]*0x64)['toFixed'](0x2)['replace'](_0x1b1327,"1$".split("").reverse().join(""));if(player["\u0069\u006e\u0043\u006f\u006d\u0062\u0061\u0074"]||playerDead){const _0x2905c1=document['querySelector']("elttab-ph-reyalp#".split("").reverse().join(""));const _0x521bc8=document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("gmd-ph-reyalp#".split("").reverse().join(""));const _0x5a01ca=document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]('#player-exp-bar');const _0x4d783c=document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("ofni-tabmoc-reyalp#".split("").reverse().join(""));_0x2905c1["\u0069\u006e\u006e\u0065\u0072\u0048\u0054\u004d\u004c"]="psbn&".split("").reverse().join("")+nFormatter(player['stats']["\u0068\u0070"])+"\u002f"+nFormatter(player['stats']["\u0068\u0070\u004d\u0061\u0078"])+'('+player["\u0073\u0074\u0061\u0074\u0073"]['hpPercent']+"\u0025\u0029";_0x2905c1["\u0073\u0074\u0079\u006c\u0065"]['width']=player["\u0073\u0074\u0061\u0074\u0073"]["\u0068\u0070\u0050\u0065\u0072\u0063\u0065\u006e\u0074"]+'%';_0x521bc8['style']['width']=player['stats']['hpPercent']+"\u0025";_0x5a01ca["\u0073\u0074\u0079\u006c\u0065"]['width']=player['exp']["\u0065\u0078\u0070\u0050\u0065\u0072\u0063\u0065\u006e\u0074"]+'%';_0x4d783c["\u0069\u006e\u006e\u0065\u0072\u0048\u0054\u004d\u004c"]=player['name']+".vL ".split("").reverse().join("")+player["\u006c\u0076\u006c"]+"( ".split("").reverse().join("")+player["\u0065\u0078\u0070"]['expPercent']+"\u0025\u0029";}document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("eman-reyalp#".split("").reverse().join(""))['innerHTML']='<i\x20class=\x22fas\x20fa-user\x22></i>'+player['name']+'\x20Lv.'+player['lvl'];document['querySelector']("pxe-reyalp#".split("").reverse().join(""))['innerHTML']='<p\x20style=\x22width:\x20-webkit-fill-available;\x22>经验</p>\x20'+nFormatter(player['exp']["\u0065\u0078\u0070\u0043\u0075\u0072\u0072"])+'/'+nFormatter(player['exp']['expMax'])+'\x20('+player['exp']['expPercent']+")%".split("").reverse().join("");document['querySelector']('#player-gold')['innerHTML']=">i/<>\";0008ff# :roloc\"=elyts \"meg-af dilos-af\"=ssalc i<".split("").reverse().join("")+nFormatter(player['gold']);playerHpElement['innerHTML']=nFormatter(player['stats']['hp'])+'/'+nFormatter(player['stats']['hpMax'])+'\x20('+player['stats']["\u0068\u0070\u0050\u0065\u0072\u0063\u0065\u006e\u0074"]+")%".split("").reverse().join("");playerAtkElement['innerHTML']=nFormatter(player['stats']['atk']);playerDefElement['innerHTML']=nFormatter(player['stats']['def']);playerAtkSpdElement["\u0069\u006e\u006e\u0065\u0072\u0048\u0054\u004d\u004c"]=player['stats']['atkSpd']['toFixed'](0x28a92^0x28a90)['replace'](_0x1b1327,'$1');playerVampElement['innerHTML']=player['stats']['vamp']['toFixed'](0x2fd65^0x2fd67)['replace'](_0x1b1327,"1$".split("").reverse().join(""))+'%';playerCrateElement["\u0069\u006e\u006e\u0065\u0072\u0048\u0054\u004d\u004c"]=player['stats']['critRate']['toFixed'](0x2)['replace'](_0x1b1327,'$1')+'%';playerCdmgElement['innerHTML']=player["\u0073\u0074\u0061\u0074\u0073"]['critDmg']['toFixed'](0x5890f^0x5890d)['replace'](_0x1b1327,'$1')+'%';document['querySelector']("\u0023\u0062\u006f\u006e\u0075\u0073\u002d\u0073\u0074\u0061\u0074\u0073")["\u0069\u006e\u006e\u0065\u0072\u0048\u0054\u004d\u004c"]='\x0a\x20\x20\x20\x20<h4>属性加成</h4>\x0a\x20\x20\x20\x20<p><i\x20class=\x22fas\x20fa-heart\x22></i>气血+'+player['bonusStats']['hp']['toFixed'](0x88613^0x88611)["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](_0x1b1327,'$1')+'%</p>\x0a\x20\x20\x20\x20<p><i\x20class=\x22ra\x20ra-sword\x22></i>攻击+'+player['bonusStats']["\u0061\u0074\u006b"]['toFixed'](0x8b5bc^0x8b5be)['replace'](_0x1b1327,"1$".split("").reverse().join(""))+"+\u4F53\u62A4>i/<>\"dleihs-dnuor-ar ar\"=ssalc i<>p<    \n>p/<%".split("").reverse().join("")+player["\u0062\u006f\u006e\u0075\u0073\u0053\u0074\u0061\u0074\u0073"]['def']['toFixed'](0x57205^0x57207)['replace'](_0x1b1327,"1$".split("").reverse().join(""))+'%</p>\x0a\x20\x20\x20\x20<p><i\x20class=\x22ra\x20ra-plain-dagger\x22></i>攻速+'+player['bonusStats']['atkSpd']['toFixed'](0x403cd^0x403cf)["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](_0x1b1327,'$1')+"+\u5143\u6C72>i/<>\"edalb-gnippird-ar ar\"=ssalc i<>p<    \n>p/<%".split("").reverse().join("")+player['bonusStats']['vamp']['toFixed'](0x2)['replace'](_0x1b1327,"1$".split("").reverse().join(""))+'%</p>\x0a\x20\x20\x20\x20<p><i\x20class=\x22ra\x20ra-lightning-bolt\x22></i>暴击几率+'+player['bonusStats']["\u0063\u0072\u0069\u0074\u0052\u0061\u0074\u0065"]['toFixed'](0x2)['replace'](_0x1b1327,'$1')+'%</p>\x0a\x20\x20\x20\x20<p><i\x20class=\x22ra\x20ra-focused-lightning\x22></i>暴击伤害+'+player['bonusStats']['critDmg']['toFixed'](0x2)['replace'](_0x1b1327,"1$".split("").reverse().join(""))+'%</p>';};function getRareNmae(_0x1f36d1){if(_0x1f36d1=="\u0043\u006f\u006d\u006d\u006f\u006e")return'凡品';if(_0x1f36d1=='Uncommon')return'良品';if(_0x1f36d1=="eraR".split("").reverse().join(""))return'上品';if(_0x1f36d1=='Epic')return'超品';if(_0x1f36d1=='Legendary')return'传世';if(_0x1f36d1=="moolrieH".split("").reverse().join(""))return'绝世';if(_0x1f36d1=="BL".split("").reverse().join(""))return'灵宝';if(_0x1f36d1=='XTLB')return'先天灵宝';if(_0x1f36d1=='ZB')return'臻宝';if(_0x1f36d1=="\u0044\u0042")return"\u5B9D\u9053".split("").reverse().join("");}const openInventory=()=>{sfxOpen['play']();dungeon['status']['exploring']=![];inventoryOpen=!![];let _0x12fd81=document['querySelector']("yrotnevni#".split("").reverse().join(""));let _0x531f78=document['querySelector']('#dungeon-main');_0x12fd81['style']['display']="xelf".split("").reverse().join("");_0x531f78['style']['filter']=")%05(ssenthgirb".split("").reverse().join("");sellAllElement['onclick']=function(){sfxOpen['play']();_0x12fd81['style']['filter']='brightness(50%)';let _0x32740d=sellRarityElement['value'];defaultModalElement['style']['display']="\u0066\u006c\u0065\u0078";if(_0x32740d=='All'){defaultModalElement['innerHTML']=">vid/<            \n>vid/<                \n>nottub/<\u6D88\u53D6>\"lecnac-lles\"=di nottub<                    \n>nottub/<\u51FA\u5356\u90E8\u5168>\"mrifnoc-lles\"=di nottub<                    \n>\"reniatnoc-nottub\"=ssalc vid<                \n>p/<?\u5907\u88C5\u6709\u6240\u51FA\u5356>p<                \n>\"tnetnoc\"=ssalc vid<            \n".split("").reverse().join("");}else{defaultModalElement['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>卖出所有<span\x20class=\x22'+_0x32740d+'\x22>'+getRareNmae(_0x32740d)+'</span>\x20装备?</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22button-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22sell-confirm\x22>全部卖出</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22sell-cancel\x22>取消</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';}let _0x59e0a5=document['querySelector']('#sell-confirm');let _0x28494d=document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]('#sell-cancel');_0x59e0a5['onclick']=function(){sellAll(_0x32740d);defaultModalElement['style']['display']="enon".split("").reverse().join("");defaultModalElement['innerHTML']='';_0x12fd81["\u0073\u0074\u0079\u006c\u0065"]['filter']=")%001(ssenthgirb".split("").reverse().join("");};_0x28494d['onclick']=function(){sfxDecline['play']();defaultModalElement["\u0073\u0074\u0079\u006c\u0065"]['display']="enon".split("").reverse().join("");defaultModalElement['innerHTML']="";_0x12fd81['style']['filter']='brightness(100%)';};};sellRarityElement['onclick']=function(){sfxOpen['play']();};sellRarityElement['onchange']=function(){let _0x122757=sellRarityElement['value'];sellRarityElement['className']=_0x122757;};};const closeInventory=()=>{sfxDecline['play']();let _0x4d4300=document['querySelector']('#inventory');let _0x195e40=document['querySelector']("niam-noegnud#".split("").reverse().join(""));_0x4d4300['style']['display']='none';_0x195e40['style']['filter']=")%001(ssenthgirb".split("").reverse().join("");inventoryOpen=![];if(!dungeon['status']["\u0070\u0061\u0075\u0073\u0065\u0064"]){dungeon['status']['exploring']=!![];}};const continueExploring=()=>{if(!inventoryOpen&&!dungeon['status']['paused']){dungeon['status']['exploring']=!![];}};const lvlupPopup=()=>{sfxLvlUp['play']();addCombatLog('你升级了!\x20(Lv.'+(player['lvl']-player['exp']['lvlGained'])+'\x20>\x20Lv.'+player['lvl']+')');player['stats']['hp']+=Math['round'](player['stats']["\u0068\u0070\u004d\u0061\u0078"]*(0x5f49b^0x5f48f)/0x64);playerLoadStats();lvlupPanel['style']["\u0064\u0069\u0073\u0070\u006c\u0061\u0079"]='flex';combatPanel['style']['filter']='brightness(50%)';const _0x301054={'hp':Number(Number((0x9da3d^0x9da37)*randomizeDecimal(0.5,1.5))['toFixed'](0x1)),'hpval':Number(Number(player['stats']['hpMax']*0.05*randomizeDecimal(0.5,1.5))["\u0074\u006f\u0046\u0069\u0078\u0065\u0064"](0x1)),'atk':Number(Number(0x8*randomizeDecimal(0.5,1.5))['toFixed'](0x1)),"\u0061\u0074\u006b\u0076\u0061\u006c":Number(Number(player['stats']['atk']*0.07*randomizeDecimal(0.5,1.5))["\u0074\u006f\u0046\u0069\u0078\u0065\u0064"](0xa3ddd^0xa3ddc)),'def':Number(Number((0x83edd^0x83ed5)*randomizeDecimal(0.5,1.5))['toFixed'](0xcdf59^0xcdf58)),"\u0064\u0065\u0066\u0076\u0061\u006c":Number(Number(player['stats']['def']*0.07*randomizeDecimal(0.5,1.5))["\u0074\u006f\u0046\u0069\u0078\u0065\u0064"](0x4b578^0x4b579)),'atkSpd':Number(Number(0x3*randomizeDecimal(0.5,1.5))['toFixed'](0x1)),'vamp':Number(Number(0.5*randomizeDecimal(0.5,1.5))["\u0074\u006f\u0046\u0069\u0078\u0065\u0064"](0x1)),'critRate':Number(Number(0x1*randomizeDecimal(0.5,1.5))['toFixed'](0x1)),'critDmg':Number(Number((0x1da82^0x1da84)*randomizeDecimal(0.5,1.5))["\u0074\u006f\u0046\u0069\u0078\u0065\u0064"](0x1))};generateLvlStats(0x6255c^0x6255e,_0x301054);};function replaceNmae(_0x488054){if(_0x488054=='hp')return"\u8840\u6C14".split("").reverse().join("");if(_0x488054=='hpval')return'基础气血';if(_0x488054=='atk')return"\u51FB\u653B".split("").reverse().join("");if(_0x488054=='atkval')return'基础攻击';if(_0x488054=='def')return'护体';if(_0x488054=="lavfed".split("").reverse().join(""))return"\u4F53\u62A4\u7840\u57FA".split("").reverse().join("");if(_0x488054=="pmav".split("").reverse().join(""))return"\u6c72\u5143";if(_0x488054=="dpSkta".split("").reverse().join(""))return"\u653b\u901f";if(_0x488054=='critRate')return'暴击几率';if(_0x488054=='critDmg')return'暴击伤害';if(_0x488054=='dRate')return"\u6210\u52A0\u843D\u6389\u5B9D\u7075".split("").reverse().join("");if(_0x488054=="etaRdl".split("").reverse().join(""))return"\u843D\u6389\u77F3\u7075".split("").reverse().join("");if(_0x488054=='edRate')return'经验掉落';if(_0x488054=='cdRate')return'诅咒碎片掉落';if(_0x488054=='rdRate')return'裂隙碎片掉落';if(_0x488054=="etaRdp".split("").reverse().join(""))return"\u5e1d\u8005\u788e\u7247\u6389\u843d";if(_0x488054=='hdRate')return'煎熬象征掉落';}function normalizeRarityChances(_0x290d78){const _0x4966e6=Object['values'](_0x290d78)['reduce']((_0x381614,_0x3d30f0)=>_0x381614+_0x3d30f0,0x0);const _0x581687={};for(const[_0x55c0a3,_0x279ef2]of Object['entries'](_0x290d78)){_0x581687[_0x55c0a3]=_0x279ef2/_0x4966e6;}return _0x581687;}function getRandomRarity(_0x5b4f38){const _0x3e0a5f=normalizeRarityChances(_0x5b4f38);const _0x12f421=Math['random']();let _0x5320cf=0x0;for(const[_0x342318,_0x4a935f]of Object['entries'](_0x3e0a5f)){_0x5320cf+=_0x4a935f;if(_0x12f421<_0x5320cf){return _0x342318;}}return'Common';}const generateLvlStats=(_0x33602a,_0x3fa412)=>{let _0x26c897=[];let _0x44eb1e=["ph".split("").reverse().join(""),'atk',"fed".split("").reverse().join(""),'atkSpd','vamp',"etaRtirc".split("").reverse().join(""),'critDmg',"lavph".split("").reverse().join(""),'atkval',"lavfed".split("").reverse().join("")];while(_0x26c897['length']<0x4){let _0x4fbce0=Math['floor'](Math['random']()*_0x44eb1e['length']);if(!_0x26c897['includes'](_0x44eb1e[_0x4fbce0])){_0x26c897['push'](_0x44eb1e[_0x4fbce0]);}}const _0x49a408=()=>{lvlupSelect["\u0069\u006e\u006e\u0065\u0072\u0048\u0054\u004d\u004c"]=" :\u4F59\u5269>4h<                \n>\"daeh-tnetnoc\"=ssalc vid<            \n>1h/<!\u7EA7\u5347>1h<            \n".split("").reverse().join("")+player['exp']['lvlGained']+'</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22lvlReroll\x22>重掷\x20'+_0x33602a+"        \n>vid/<            \n>nottub/<2/".split("").reverse().join("");};_0x49a408();_0x3fa412={"\u0068\u0070":Number(Number(0xa*randomizeDecimal(0.5,1.5))['toFixed'](0x1)),"\u0068\u0070\u0076\u0061\u006c":Number(Number(player['stats']['hpMax']*0.05*randomizeDecimal(0.5,1.5))["\u0074\u006f\u0046\u0069\u0078\u0065\u0064"](0x49508^0x49509)),'atk':Number(Number(0x8*randomizeDecimal(0.5,1.5))['toFixed'](0x1)),'atkval':Number(Number(player['stats']['atk']*0.005*randomizeDecimal(0.3,1.7))['toFixed'](0x99d18^0x99d19)),'def':Number(Number(0x8*randomizeDecimal(0.5,1.5))['toFixed'](0x1)),'defval':Number(Number(player['stats']['def']*0.05*randomizeDecimal(0.5,1.5))['toFixed'](0x1)),'atkSpd':Number(Number(0x3*randomizeDecimal(0.5,1.5))['toFixed'](0x1)),'vamp':Number(Number(0.5*randomizeDecimal(0.5,1.5))['toFixed'](0x1)),'critRate':Number(Number(0x1*randomizeDecimal(0.5,1.5))['toFixed'](0x64283^0x64282)),"\u0063\u0072\u0069\u0074\u0044\u006d\u0067":Number(Number(0x6*randomizeDecimal(0.5,1.5))["\u0074\u006f\u0046\u0069\u0078\u0065\u0064"](0x1))};const _0x1b1851={'Common':0.7,'Uncommon':0.4,'Rare':0.16,'Epic':0.08,'Legendary':0.05};const _0x4e28c1={"\u0043\u006f\u006d\u006d\u006f\u006e":0x1,'Uncommon':1.2,'Rare':1.5,'Epic':0x2,'Legendary':2.2};let _0x257eab=[];for(let _0x4055ec=0x0;_0x4055ec<(0xa995a^0xa995e);_0x4055ec++){const _0x533b20=Math['random']();let _0x1b13b1=0x0;let _0x481cf3="nommoC".split("").reverse().join("");_0x481cf3=getRandomRarity(_0x1b1851);console['log'](_0x481cf3);_0x257eab['push'](_0x481cf3);}const _0x15642d=document['querySelector']('#lvlReroll');_0x15642d['addEventListener']("\u0063\u006c\u0069\u0063\u006b",function(){if(_0x33602a>0x0){sfxSell['play']();_0x49a408();generateLvlStats(_0x33602a,_0x3fa412);}else{sfxDeny["\u0070\u006c\u0061\u0079"]();}});try{for(let _0x2cbdf2=0xae9c1^0xae9c1;_0x2cbdf2<(0xa49fa^0xa49fe);_0x2cbdf2++){let _0x556d23=document['createElement']('button');_0x556d23['id']='lvlSlot'+_0x2cbdf2;let _0x436faf=document['createElement']('h3');_0x436faf['innerHTML']='<span\x20class=\x27'+_0x257eab[_0x2cbdf2]+">'".split("").reverse().join("")+replaceNmae(_0x257eab[_0x2cbdf2])+'-'+replaceNmae(_0x26c897[_0x2cbdf2])+"PU ".split("").reverse().join("")+">naps/<".split("").reverse().join("");_0x556d23['appendChild'](_0x436faf);let _0x5d6119=document['createElement']('p');if(!_0x26c897[_0x2cbdf2]['includes']('val')){_0x5d6119['innerHTML']='<span\x20class=\x27'+_0x257eab[_0x2cbdf2]+'\x27>'+replaceNmae(_0x26c897[_0x2cbdf2])+"\u5347\u63D0".split("").reverse().join("")+Number(Number(_0x3fa412[_0x26c897[_0x2cbdf2]]*_0x4e28c1[_0x257eab[_0x2cbdf2]])['toFixed'](0x272a3^0x272a2))+'%</span>';}else{_0x5d6119['innerHTML']='<span\x20class=\x27'+_0x257eab[_0x2cbdf2]+">'".split("").reverse().join("")+replaceNmae(_0x26c897[_0x2cbdf2])+"\u5347\u63D0".split("").reverse().join("")+Number(Number(_0x3fa412[_0x26c897[_0x2cbdf2]]*_0x4e28c1[_0x257eab[_0x2cbdf2]])['toFixed'](0x1))+"\u003c\u002f\u0073\u0070\u0061\u006e\u003e";}_0x556d23["\u0061\u0070\u0070\u0065\u006e\u0064\u0043\u0068\u0069\u006c\u0064"](_0x5d6119);_0x556d23['addEventListener']('click',function(){sfxItem['play']();if(!_0x26c897[_0x2cbdf2]['includes']("\u0076\u0061\u006c")){player['bonusStats'][_0x26c897[_0x2cbdf2]]+=Number(Number(_0x3fa412[_0x26c897[_0x2cbdf2]]*_0x4e28c1[_0x257eab[_0x2cbdf2]])['toFixed'](0x1));}else{if(_0x26c897[_0x2cbdf2]==="lavph".split("").reverse().join("")){player['stats']['hp']+=Number(Number(_0x3fa412[_0x26c897[_0x2cbdf2]]*_0x4e28c1[_0x257eab[_0x2cbdf2]])['toFixed'](0x1));player['stats']['hpMax']+=Number(Number(_0x3fa412[_0x26c897[_0x2cbdf2]]*_0x4e28c1[_0x257eab[_0x2cbdf2]])['toFixed'](0x56a21^0x56a20));}if(_0x26c897[_0x2cbdf2]==="lavkta".split("").reverse().join("")){player['stats']['atk']+=Number(Number(_0x3fa412[_0x26c897[_0x2cbdf2]]*_0x4e28c1[_0x257eab[_0x2cbdf2]])['toFixed'](0x1));}if(_0x26c897[_0x2cbdf2]==='defval'){player['stats']['def']+=Number(Number(_0x3fa412[_0x26c897[_0x2cbdf2]]*_0x4e28c1[_0x257eab[_0x2cbdf2]])['toFixed'](0x1));}}if(player['exp']['lvlGained']>0x1){player['exp']['lvlGained']--;generateLvlStats(0x8b0ca^0x8b0c8,_0x3fa412);}else{player['exp']['lvlGained']=0x0;lvlupPanel['style']['display']="enon".split("").reverse().join("");combatPanel['style']['filter']="\u0062\u0072\u0069\u0067\u0068\u0074\u006e\u0065\u0073\u0073\u0028\u0031\u0030\u0030\u0025\u0029";leveled=![];}playerLoadStats();saveData();});lvlupSelect['appendChild'](_0x556d23);}}catch(_0x5771c2){}};