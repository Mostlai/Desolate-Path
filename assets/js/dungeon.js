const dungeonActivity=document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("ytivitcAnoegnud#".split("").reverse().join(""));const dungeonAction=document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("noitcAnoegnud#".split("").reverse().join(""));const dungeonTime=document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("\u0023\u0064\u0075\u006e\u0067\u0065\u006f\u006e\u0054\u0069\u006d\u0065");const floorCount=document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("\u0023\u0066\u006c\u006f\u006f\u0072\u0043\u006f\u0075\u006e\u0074");const roomCount=document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("\u0023\u0072\u006f\u006f\u006d\u0043\u006f\u0075\u006e\u0074");let dungeon={"\u0072\u0061\u0074\u0069\u006e\u0067":0x1f4,"\u0067\u0072\u0061\u0064\u0065":"\u0045","\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073":{'floor':0x1,'room':0x1,"\u0066\u006c\u006f\u006f\u0072\u004c\u0069\u006d\u0069\u0074":0x64,"\u0072\u006f\u006f\u006d\u004c\u0069\u006d\u0069\u0074":0x5},"\u0073\u0065\u0074\u0074\u0069\u006e\u0067\u0073":{"\u0065\u006e\u0065\u006d\u0079\u0042\u0061\u0073\u0065\u004c\u0076\u006c":0x1,"\u0065\u006e\u0065\u006d\u0079\u004c\u0076\u006c\u0047\u0061\u0070":0x5,"\u0065\u006e\u0065\u006d\u0079\u0042\u0061\u0073\u0065\u0053\u0074\u0061\u0074\u0073":0x1,"\u0065\u006e\u0065\u006d\u0079\u0053\u0063\u0061\u006c\u0069\u006e\u0067":1.1},'status':{'exploring':![],"\u0070\u0061\u0075\u0073\u0065\u0064":!![],'event':![]},'statistics':{'kills':0x0,"\u0072\u0075\u006e\u0074\u0069\u006d\u0065":0x0},"\u0062\u0061\u0063\u006b\u006c\u006f\u0067":[],"\u0061\u0063\u0074\u0069\u006f\u006e":0x0};dungeonActivity["\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072"]("kcilc".split("").reverse().join(""),function(){dungeonStartPause();});const initialDungeonLoad=()=>{if(localStorage["\u0067\u0065\u0074\u0049\u0074\u0065\u006d"]("ataDnoegnud".split("").reverse().join(""))!==null){dungeon=JSON['parse'](localStorage['getItem']("\u0064\u0075\u006e\u0067\u0065\u006f\u006e\u0044\u0061\u0074\u0061"));dungeon['status']={"\u0065\u0078\u0070\u006c\u006f\u0072\u0069\u006e\u0067":![],'paused':!![],'event':![]};updateDungeonLog();}loadDungeonProgress();dungeonTime['innerHTML']=new Date(dungeon["\u0073\u0074\u0061\u0074\u0069\u0073\u0074\u0069\u0063\u0073"]["\u0072\u0075\u006e\u0074\u0069\u006d\u0065"]*(0xc9f93^0xc9c7b))['toISOString']()["\u0073\u006c\u0069\u0063\u0065"](0x8a249^0x8a242,0x93849^0x9385a);dungeonAction["\u0069\u006e\u006e\u0065\u0072\u0048\u0054\u004d\u004c"]="...\u4E2D\u606F\u8C03".split("").reverse().join("");dungeonTime["\u0069\u006e\u006e\u0065\u0072\u0048\u0054\u004d\u004c"]="00:00:00".split("").reverse().join("");let _0x50ffbc=0xf03f9^0xf0011;let _0x573acc="\u7D22\u63A2".split("").reverse().join("");if(player["\u006e\u006d\u006b"]==(0xb5c2b^0xb5c2a)){_0x50ffbc=0x94c55^0x94c9d;_0x573acc=")2X\u5EA6\u901F(\u7D22\u63A2".split("").reverse().join("");}dungeonActivity['innerHTML']=_0x573acc;dungeonTimer=setInterval(dungeonEvent,_0x50ffbc);playTimer=setInterval(dungeonCounter,0xbd85d^0xbdbb5);};const dungeonStartPause=()=>{if(!dungeon['status']['paused']){sfxPause["\u0070\u006c\u0061\u0079"]();dungeonAction['innerHTML']='调息中...';let _0x1f8123="\u7D22\u63A2".split("").reverse().join("");if(player["\u006e\u006d\u006b"]==(0xc0d25^0xc0d24)){_0x1f8123=")2X\u5EA6\u901F(\u7D22\u63A2".split("").reverse().join("");}dungeonActivity['innerHTML']=_0x1f8123;dungeon["\u0073\u0074\u0061\u0074\u0075\u0073"]["\u0065\u0078\u0070\u006c\u006f\u0072\u0069\u006e\u0067"]=![];dungeon["\u0073\u0074\u0061\u0074\u0075\u0073"]["\u0070\u0061\u0075\u0073\u0065\u0064"]=!![];}else{sfxUnpause["\u0070\u006c\u0061\u0079"]();let _0x38760e="\u4E2D\u7D22\u63A2".split("").reverse().join("");if(player["\u006e\u006d\u006b"]==(0xde568^0xde569)){_0x38760e="\u63a2\u7d22\u4e2d\u002e\u002e\u002e\u0028\u901f\u5ea6\u0058\u0032\u0029";}dungeonAction['innerHTML']=_0x38760e;dungeonActivity["\u0069\u006e\u006e\u0065\u0072\u0048\u0054\u004d\u004c"]="\u505C\u6682".split("").reverse().join("");dungeon['status']["\u0065\u0078\u0070\u006c\u006f\u0072\u0069\u006e\u0067"]=!![];dungeon["\u0073\u0074\u0061\u0074\u0075\u0073"]['paused']=![];}};const dungeonCounter=()=>{player["\u0070\u006c\u0061\u0079\u0074\u0069\u006d\u0065"]++;dungeon['statistics']["\u0072\u0075\u006e\u0074\u0069\u006d\u0065"]++;dungeonTime['innerHTML']=new Date(dungeon['statistics']['runtime']*(0x60e1a^0x60df2))['toISOString']()["\u0073\u006c\u0069\u0063\u0065"](0xb,0x13);saveData();};const loadDungeonProgress=()=>{if(dungeon['progress']['room']>dungeon["\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073"]["\u0072\u006f\u006f\u006d\u004c\u0069\u006d\u0069\u0074"]){dungeon['progress']['room']=0x49966^0x49967;dungeon["\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073"]['floor']++;}floorCount['innerHTML']='世界\x20'+dungeon['progress']["\u0066\u006c\u006f\u006f\u0072"];roomCount['innerHTML']=" \u57DF\u5730".split("").reverse().join("")+dungeon["\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073"]['room'];};const dungeonEvent=()=>{if(dungeon['status']['exploring']&&!dungeon["\u0073\u0074\u0061\u0074\u0075\u0073"]['event']){dungeon['action']++;let _0x3b8b00;let _0x41ce13;let _0x5502cc=["\u0062\u006c\u0065\u0073\u0073\u0069\u006e\u0067","esruc".split("").reverse().join(""),"\u0074\u0072\u0065\u0061\u0073\u0075\u0072\u0065","ymene".split("").reverse().join(""),"\u0065\u006e\u0065\u006d\u0079","gnihton".split("").reverse().join(""),"gnihton".split("").reverse().join(""),"\u006e\u006f\u0074\u0068\u0069\u006e\u0067",'nothing','monarch'];if(dungeon['action']>0x2&&dungeon['action']<0x6){_0x5502cc['push']('nextroom');}else if(dungeon['action']>(0x9a265^0x9a260)){_0x5502cc=["moortxen".split("").reverse().join("")];}const _0x10ef3d=_0x5502cc[Math['floor'](Math['random']()*_0x5502cc["\u006c\u0065\u006e\u0067\u0074\u0068"])];switch(_0x10ef3d){case'nextroom':dungeon['status']['event']=!![];_0x3b8b00='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22decision-panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice1\x22>进入</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice2\x22>无视</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';if(dungeon["\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073"]['room']==dungeon['progress']['roomLimit']){addDungeonLog(">naps/<\u4F1A\u673A\u7684\u57DF\u5730\u4E2A\u4E00\u4E0B\u5165\u8FDB\u4E2A\u4E00\u4E86\u73B0\u53D1\u4F60>\"moolrieH\"=ssalc naps<".split("").reverse().join(""),_0x3b8b00);}else{addDungeonLog('你发现了一条小道.',_0x3b8b00);}document['querySelector']("1eciohc#".split("").reverse().join(""))["\u006f\u006e\u0063\u006c\u0069\u0063\u006b"]=function(){sfxConfirm['play']();if(dungeon['progress']['room']==dungeon['progress']["\u0072\u006f\u006f\u006d\u004c\u0069\u006d\u0069\u0074"]){guardianBattle();}else{_0x41ce13=randomizeNum(0xb9b34^0xb9b35,0x3);if(_0x41ce13==(0xf13f6^0xf13f7)){incrementRoom();mimicBattle("rood".split("").reverse().join(""));addDungeonLog('你移动到下一个地域.');}else if(_0x41ce13==0x2){incrementRoom();_0x3b8b00='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22decision-panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice1\x22>打开乾坤袋</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice2\x22>无视</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';addDungeonLog(".\u888B\u5764\u4E7E>i/<>\"gnillor-esactius-af dilos-af\"=ssalc i<\u4E2A\u4E00\u4E86\u85CF\u57CB\u91CC\u90A3.\u70B9\u5B9D\u85CF\u4E2A\u4E00\u4E86\u73B0\u53D1\u5E76\u57DF\u5730\u4E2A\u4E00\u4E0B\u5230\u52A8\u79FB\u4F60".split("").reverse().join(""),_0x3b8b00);document['querySelector']('#choice1')['onclick']=function(){chestEvent();};document['querySelector']('#choice2')['onclick']=function(){dungeon['action']=0x0;ignoreEvent();};if(player['ai']==0x1){document['querySelector']('#choice2')['click']();}}else{dungeon["\u0073\u0074\u0061\u0074\u0075\u0073"]['event']=![];incrementRoom();addDungeonLog('你移动到下一个地域.');}}};document['querySelector']('#choice2')['onclick']=function(){dungeon["\u0061\u0063\u0074\u0069\u006f\u006e"]=0xcc2ae^0xcc2ae;ignoreEvent();};if(player['ai']==(0x60438^0x60439)){document['querySelector']("2eciohc#".split("").reverse().join(""))["\u0063\u006c\u0069\u0063\u006b"]();}break;case'treasure':dungeon['status']["\u0065\u0076\u0065\u006e\u0074"]=!![];_0x3b8b00='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22decision-panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice1\x22>打开乾坤袋</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice2\x22>无视</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';addDungeonLog('你发现了一个藏宝点.那里埋藏了一个<i\x20class=\x22fa-solid\x20fa-suitcase-rolling\x22></i>乾坤袋.',_0x3b8b00);document['querySelector']("1eciohc#".split("").reverse().join(""))['onclick']=function(){chestEvent();};document['querySelector']("2eciohc#".split("").reverse().join(""))["\u006f\u006e\u0063\u006c\u0069\u0063\u006b"]=function(){ignoreEvent();};if(player['ao']==(0xedb0b^0xedb0a)){document['querySelector']('#choice1')['click']();}if(player['ai']==0x1){document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]('#choice2')['click']();}break;case'nothing':nothingEvent();break;case'enemy':dungeon['status']['event']=!![];_0x3b8b00='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22decision-panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice1\x22>迎战</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice2\x22>逃跑</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';generateRandomEnemy();addDungeonLog(" \u4E86\u9047\u906D\u4F60".split("").reverse().join("")+enemy['name']+'.',_0x3b8b00);player['inCombat']=!![];document['querySelector']('#choice1')['onclick']=function(){engageBattle();};document['querySelector']('#choice2')['onclick']=function(){fleeBattle();};if(player['aa']==0x1){document['querySelector']("\u0023\u0063\u0068\u006f\u0069\u0063\u0065\u0031")['click']();}break;case"gnisselb".split("").reverse().join(""):_0x41ce13=randomizeNum(0x7cf29^0x7cf28,0x60458^0x6045a);if(_0x41ce13==0x1){dungeon['status']['event']=!![];blessingValidation();let _0xf3ccc8=player['blessing']*(0x1f4*(player['blessing']*0.5))+(0xd1abf^0xd1851);_0x3b8b00='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22decision-panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice1\x22>成交</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice2\x22>无视</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';addDungeonLog(">\"nommoC\"=ssalc naps<>i/<>\";0008ff# :roloc\"=elyts \"meg-af dilos-af\"=ssalc i<\u4F9B\u63D0\u610F\u613F\u4F60 .\u50CF\u96D5\u5929\u7737\u4E2A\u4E00\u4E86\u73B0\u53D1\u4F60>\"yradnegeL\"=ssalc naps<".split("").reverse().join("")+nFormatter(_0xf3ccc8)+'</span>灵石来获得眷天?\x20(眷天Lv.'+player['blessing']+"\u0029\u003c\u002f\u0073\u0070\u0061\u006e\u003e",_0x3b8b00);document['querySelector']("1eciohc#".split("").reverse().join(""))['onclick']=function(){if(player['gold']<_0xf3ccc8){sfxDeny['play']();addDungeonLog("\u77F3\u7075\u7684\u591F\u8DB3\u6709\u6CA1\u4F60".split("").reverse().join(""));}else{player['gold']-=_0xf3ccc8;sfxConfirm["\u0070\u006c\u0061\u0079"]();statBlessing();}dungeon['status']['event']=![];};document['querySelector']('#choice2')['onclick']=function(){ignoreEvent();};if(player["\u0061\u0069"]==0x1){document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]('#choice2')['click']();}}else{nothingEvent();}break;case'curse':_0x41ce13=randomizeNum(0x1,0x41f54^0x41f57);if(_0x41ce13==(0xd7172^0xd7173)){dungeon['status']['event']=!![];let _0x53398f=Math['round']((dungeon['settings']['enemyScaling']-0x1)*0xa);let _0x21c2a2=_0x53398f*((0xedad5^0xefdc5)*(_0x53398f*0.5))+0x1388;_0x3b8b00='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22decision-panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice1\x22>成交</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice2\x22>无视</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice3\x22>砸毁</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';addDungeonLog(">\"nommoC\"=ssalc naps<>i/<>\";0008ff# :roloc\"=elyts \"meg-af dilos-af\"=ssalc i<\u4F9B\u63D0\u610F\u613F\u4F60 .\u50CF\u96D5\u5929\u5F03\u4E2A\u4E00\u4E86\u73B0\u53D1\u4F60>\"moolrieH\"=ssalc naps<".split("").reverse().join("")+nFormatter(_0x21c2a2)+"\u003c\u002f\u0073\u0070\u0061\u006e\u003e\u003f\u8fd9\u4f1a\u52a0\u5f3a\u654c\u4eba\u4f46\u4e5f\u4f1a\u63d0\u9ad8\u6218\u5229\u54c1\u54c1\u8d28\u0028\u5f03\u5929\u004c\u0076\u002e"+_0x53398f+"\u3002\u7EA7\u7B49\u5929\u5F03\u4F4E\u964D\u4F1A\u6BC1\u7838\u3002>naps/<)".split("").reverse().join(""),_0x3b8b00);document['querySelector']("1eciohc#".split("").reverse().join(""))['onclick']=function(){if(player["\u0067\u006f\u006c\u0064"]<_0x21c2a2){sfxDeny['play']();addDungeonLog('你没有足够的灵石');}else{player['gold']-=_0x21c2a2;sfxConfirm['play']();cursedTotem(_0x53398f);}dungeon['status']['event']=![];};document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]('#choice2')["\u006f\u006e\u0063\u006c\u0069\u0063\u006b"]=function(){ignoreEvent();};document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("3eciohc#".split("").reverse().join(""))['onclick']=function(){anticursedTotem(_0x53398f);dungeon['status']['event']=![];};if(player['ai']==0x1){document['querySelector']('#choice2')['click']();}}else{nothingEvent();}break;case'monarch':_0x41ce13=randomizeNum(0x1,0x7);if(_0x41ce13==0x1){dungeon['status']['event']=!![];_0x3b8b00='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22decision-panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice1\x22>进入</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22choice2\x22>无视</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';addDungeonLog('<span\x20class=\x22Heirloom\x22\x20style=\x22border:\x202px\x20solid;padding:\x202px;border-radius:\x205px;\x22>你发现了一个散布着恐怖威压的地方</span>',_0x3b8b00);document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]('#choice1')['onclick']=function(){specialBossBattle();};document["\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u006f\u0072"]("2eciohc#".split("").reverse().join(""))['onclick']=function(){ignoreEvent();};if(player['ai']==(0x371ab^0x371aa)){document['querySelector']('#choice2')['click']();}}else{nothingEvent();}}}};const engageBattle=()=>{showCombatInfo();startCombat(bgmBattleMain);addCombatLog('你遭遇了\x20'+enemy['name']+'.');updateDungeonLog();};const mimicBattle=_0x2e7c3e=>{generateRandomEnemy(_0x2e7c3e);showCombatInfo();startCombat(bgmBattleMain);addCombatLog(" \u4E86\u9047\u906D\u4F60".split("").reverse().join("")+enemy['name']+'.');addDungeonLog('你遭遇了\x20'+enemy['name']+'.');};const guardianBattle=()=>{incrementRoom();generateRandomEnemy("naidraug".split("").reverse().join(""));showCombatInfo();startCombat(bgmBattleGuardian);addCombatLog(" \u62A4\u5B88\u57DF\u5730".split("").reverse().join("")+enemy['name']+"\u9053\u4E4B\u6B7B\u53D6\u6709\u5DF2\uFF0C\u9014\u9053\u7684\u4F60\u4E86\u4F4F\u6321 ".split("").reverse().join(""));addDungeonLog('你移动到下一个地域');};const specialBossBattle=()=>{generateRandomEnemy('sboss');showCombatInfo();startCombat(bgmBattleBoss);addCombatLog(" \u541B\u5E1D".split("").reverse().join("")+enemy['name']+"\uFF01\u6765\u9192\u7ECF\u5DF2 ".split("").reverse().join(""));addDungeonLog('帝君\x20'+enemy['name']+"\uFF01\u6765\u9192\u7ECF\u5DF2 ".split("").reverse().join(""));};const fleeBattle=()=>{let _0x3f5af4=randomizeNum(0x26194^0x26195,0x7de16^0x7de14);if(_0x3f5af4==0x1){sfxConfirm['play']();addDungeonLog("\u4f60\u8bbe\u6cd5\u9003\u8dd1");player['inCombat']=![];dungeon["\u0073\u0074\u0061\u0074\u0075\u0073"]["\u0065\u0076\u0065\u006e\u0074"]=![];}else{addDungeonLog("!\u4E86\u8D25\u5931\u8DD1\u9003\u4F60".split("").reverse().join(""));showCombatInfo();startCombat(bgmBattleMain);addCombatLog('你遭遇了\x20'+enemy['name']+'.');addCombatLog("!\u4E86\u8D25\u5931\u8DD1\u9003\u4F60".split("").reverse().join(""));}};const chestEvent=()=>{sfxConfirm['play']();let _0x3c094a=randomizeNum(0x1,0x4);if(_0x3c094a==(0xb3995^0xb3994)){mimicBattle("\u0063\u0068\u0065\u0073\u0074");}else if(_0x3c094a==0x2){if(dungeon['progress']['floor']==0x1){goldDrop();}else{createEquipmentPrint('dungeon');}dungeon['status']["\u0065\u0076\u0065\u006e\u0074"]=![];}else if(_0x3c094a==(0x88930^0x88933)){goldDrop();dungeon['status']['event']=![];}else{addDungeonLog('乾坤袋是空的');dungeon['status']['event']=![];}};const goldDrop=()=>{sfxSell["\u0070\u006c\u0061\u0079"]();let _0x2e3e0d=randomizeNum(0x233c2^0x233f0,0x1f4)*dungeon["\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073"]['floor'];addDungeonLog(">i/<>\";0008ff# :roloc\"=elyts \"meg-af dilos-af\"=ssalc i< \u4E86\u5230\u627E\u4F60".split("").reverse().join("")+nFormatter(_0x2e3e0d)+'.');player['gold']+=_0x2e3e0d;playerLoadStats();};const nothingEvent=()=>{let _0x574c3b=randomizeNum(0x1,0x5);if(_0x574c3b==0x1){addDungeonLog("\u4f60\u5c55\u5f00\u63a2\u7d22\u4f46\u662f\u4e00\u65e0\u6240\u83b7\u002e");}else if(_0x574c3b==(0x1a83d^0x1a83f)){addDungeonLog("\u4f60\u53d1\u73b0\u4e86\u4e00\u4e2a\u4e7e\u5764\u888b\uff0c\u8fd0\u6c14\u771f\u5dee\uff0c\u7a7a\u7684\u002e");}else if(_0x574c3b==(0xced7b^0xced78)){addDungeonLog('你发现了一具灵兽尸体.');if(Math["\u0066\u006c\u006f\u006f\u0072"](Math['random']()*(0xa459b^0xa45ff))<=0x14){addDungeonLog('你把灵兽妖丹卖了个好价钱.');goldDrop();}}else if(_0x574c3b==0x4){addDungeonLog('你发现了一具不知名尸体.');if(Math["\u0066\u006c\u006f\u006f\u0072"](Math['random']()*(0xaedfe^0xaed9a))<=0x14){addDungeonLog('这人身上还有点钱.');goldDrop();}}else if(_0x574c3b==(0xb2daa^0xb2daf)){addDungeonLog('这里什么也找不到.');}};function replaceNmae(_0x3e9f7b){if(_0x3e9f7b=='Common')return"\u666e\u901a";if(_0x3e9f7b=="nommocnU".split("").reverse().join(""))return"\u7cbe\u826f";if(_0x3e9f7b=="eraR".split("").reverse().join(""))return"\u6709\u7A00".split("").reverse().join("");if(_0x3e9f7b=='Epic')return'史诗';if(_0x3e9f7b=="yradnegeL".split("").reverse().join(""))return"\u8BF4\u4F20".split("").reverse().join("");if(_0x3e9f7b=="ph".split("").reverse().join(""))return"\u8840\u6C14".split("").reverse().join("");if(_0x3e9f7b=="lavph".split("").reverse().join(""))return"\u8840\u6C14\u7840\u57FA".split("").reverse().join("");if(_0x3e9f7b=="\u0061\u0074\u006b")return'攻击';if(_0x3e9f7b=='atkval')return'基础攻击';if(_0x3e9f7b=='def')return"\u4F53\u62A4".split("").reverse().join("");if(_0x3e9f7b=='defval')return"\u4F53\u62A4\u7840\u57FA".split("").reverse().join("");if(_0x3e9f7b=='vamp')return"\u5143\u6C72".split("").reverse().join("");if(_0x3e9f7b=="dpSkta".split("").reverse().join(""))return'攻速';if(_0x3e9f7b=='critRate')return'暴击几率';if(_0x3e9f7b=='critDmg')return'暴击伤害';if(_0x3e9f7b=='dRate')return'灵宝掉落加成';if(_0x3e9f7b=='ldRate')return'灵石掉落';if(_0x3e9f7b=="etaRde".split("").reverse().join(""))return'经验掉落';if(_0x3e9f7b=='cdRate')return"\u843D\u6389\u7247\u788E\u5492\u8BC5".split("").reverse().join("");if(_0x3e9f7b=="etaRdr".split("").reverse().join(""))return'裂隙碎片掉落';if(_0x3e9f7b=='pdRate')return"\u843D\u6389\u7247\u788E\u8005\u5E1D".split("").reverse().join("");if(_0x3e9f7b=='hdRate')return'煎熬象征掉落';}const statBlessing=()=>{sfxBuff['play']();let _0x12e8b3=['hp',"kta".split("").reverse().join(""),'def','atkSpd','vamp','critRate',"gmDtirc".split("").reverse().join("")];let _0x55d1ba=_0x12e8b3[Math['floor'](Math['random']()*_0x12e8b3["\u006c\u0065\u006e\u0067\u0074\u0068"])];let _0x445747;switch(_0x55d1ba){case"ph".split("").reverse().join(""):_0x445747=0xa;player['bonusStats']["\u0068\u0070"]+=_0x445747;break;case'atk':_0x445747=0x8;player["\u0062\u006f\u006e\u0075\u0073\u0053\u0074\u0061\u0074\u0073"]['atk']+=_0x445747;break;case'def':_0x445747=0x8;player["\u0062\u006f\u006e\u0075\u0073\u0053\u0074\u0061\u0074\u0073"]['def']+=_0x445747;break;case"dpSkta".split("").reverse().join(""):_0x445747=0xc8776^0xc8775;player['bonusStats']['atkSpd']+=_0x445747;break;case"pmav".split("").reverse().join(""):_0x445747=0.5;player['bonusStats']['vamp']+=_0x445747;break;case"etaRtirc".split("").reverse().join(""):_0x445747=0x78811^0x78810;player['bonusStats']['critRate']+=_0x445747;break;case'critDmg':_0x445747=0xc735f^0xc7359;player['bonusStats']['critDmg']+=_0x445747;break;}addDungeonLog('你获得了\x20'+_0x445747+'%\x20的额外\x20'+replaceNmae(_0x55d1ba)+'\x20眷天效果。\x20(眷天等级\x20Lv.'+player["\u0062\u006c\u0065\u0073\u0073\u0069\u006e\u0067"]+".vL \u7EA7\u7B49\u5929\u7737 > ".split("").reverse().join("")+(player['blessing']+(0x89fb2^0x89fb3))+')');blessingUp();playerLoadStats();saveData();};const cursedTotem=_0x215bac=>{sfxBuff["\u0070\u006c\u0061\u0079"]();let _0x23be6a=0xa98b3^0xa98b2;if(player['hardloop']>=0x1){_0x23be6a=0x1+Math['ceil'](player['hardloop']*0.09);addDungeonLog("\u3011\u6210\u52A0\u71AC\u714E\u96BE\u82E6\u53D7\u5929\u5F03\u6B21\u672C\u3010 ".split("").reverse().join(""));}dungeon['settings']['enemyScaling']+=0.1*_0x23be6a;addDungeonLog('\x20所遇到中的敌人变得更强,战利品质量提高了。\x20(弃天等级\x20Lv.'+_0x215bac+'\x20>\x20弃天等级\x20Lv.'+(_0x215bac+0x1)+')');saveData();};const anticursedTotem=_0x1f63ad=>{sfxBuff['play']();let _0x38bcfb=0x1;if(player['hardloop']>=(0xa1d72^0xa1d73)){_0x38bcfb=(0xef5c9^0xef5c8)+Math['ceil'](player['hardloop']*0.09);}dungeon['settings']['enemyScaling']-=0.1*_0x38bcfb;dungeon["\u0073\u0065\u0074\u0074\u0069\u006e\u0067\u0073"]['enemyScaling']=Math['max'](1.1,dungeon['settings']['enemyScaling']);addDungeonLog("\u964D\u4E0B\u6240\u6709\u7EA7\u7B49\u5929\u5F03".split("").reverse().join(""));saveData();};const ignoreEvent=()=>{sfxConfirm["\u0070\u006c\u0061\u0079"]();dungeon['status']["\u0065\u0076\u0065\u006e\u0074"]=![];addDungeonLog('你无视了他并继续探索');};const incrementRoom=()=>{dungeon['progress']['room']++;dungeon["\u0061\u0063\u0074\u0069\u006f\u006e"]=0x0;loadDungeonProgress();};const blessingUp=()=>{blessingValidation();player['blessing']++;};const blessingValidation=()=>{if(player['blessing']==undefined){player["\u0062\u006c\u0065\u0073\u0073\u0069\u006e\u0067"]=0x1;}};const updateDungeonLog=_0x1d7b87=>{let _0x466811=document['querySelector']('#dungeonLog');_0x466811['innerHTML']='';for(let _0x57ed5e of dungeon['backlog']['slice'](-0x32)){let _0xa07b0d=document['createElement']('p');_0xa07b0d['innerHTML']=_0x57ed5e;_0x466811['appendChild'](_0xa07b0d);}if(typeof _0x1d7b87!=='undefined'){let _0x26b4c9=document["\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074"]('div');_0x26b4c9['innerHTML']=_0x1d7b87;_0x466811['appendChild'](_0x26b4c9);}_0x466811['scrollTop']=_0x466811['scrollHeight'];};const addDungeonLog=(_0x10b29f,_0x590c27)=>{dungeon['backlog']['push'](_0x10b29f);updateDungeonLog(_0x590c27);};const evaluateDungeon=()=>{let _0x5db9b2=0x1f4;};