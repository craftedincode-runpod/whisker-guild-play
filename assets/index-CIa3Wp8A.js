(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const O=[{id:"pip",name:"Pip",emoji:"🐈",title:"Guild Founder",traitIds:["fisherpaw","lucky"],baseStats:{atk:8,def:5,hp:40,spd:10},recruitCost:0,unlockGold:0,flavour:"A scrappy orange who started the guild with a ball of yarn and a dream."},{id:"misty",name:"Misty",emoji:"🐈‍⬛",title:"Night Forager",traitIds:["herbalist","swift"],baseStats:{atk:6,def:6,hp:35,spd:14},recruitCost:50,unlockGold:0,flavour:"Silent as fog. Brings back herbs you did not know you needed."},{id:"bruno",name:"Bruno",emoji:"🐯",title:"Mouser Captain",traitIds:["hunter","brawler"],baseStats:{atk:12,def:8,hp:55,spd:8},recruitCost:120,unlockGold:80,flavour:"Claims every mouse in the alley pays him rent."},{id:"suki",name:"Suki",emoji:"😺",title:"Needle Cat",traitIds:["craftsoul","swift"],baseStats:{atk:7,def:7,hp:38,spd:12},recruitCost:200,unlockGold:200,flavour:"Sews pouches from sock scraps. Fashionably late to every fight."},{id:"gumbo",name:"Gumbo",emoji:"😸",title:"Camp Cook",traitIds:["chef","tanky"],baseStats:{atk:5,def:10,hp:60,spd:6},recruitCost:350,unlockGold:400,flavour:"His stew has healed more adventurers than any potion."},{id:"nyx",name:"Nyx",emoji:"🙀",title:"Shadow Scratcher",traitIds:["brawler","lucky","napper"],baseStats:{atk:15,def:9,hp:48,spd:16},recruitCost:600,unlockGold:900,flavour:"Appears only when the dungeon needs a finishing claw."}],T=[{id:"fishing",name:"Fishing",emoji:"🎣",description:"Cast into puddles, fountains, and suspicious bathtubs.",baseYield:1,baseInterval:4,resourceId:"fish",unlockLevel:1},{id:"foraging",name:"Foraging",emoji:"🌿",description:"Sniff out herbs, berries, and the good cardboard.",baseYield:1,baseInterval:3.5,resourceId:"herb",unlockLevel:1},{id:"mousing",name:"Mousing",emoji:"🐭",description:"Hunt vermin for glory, snacks, and bragging rights.",baseYield:1,baseInterval:5,resourceId:"mouse",unlockLevel:1},{id:"crafting",name:"Crafting",emoji:"🧵",description:"Turn scraps into gear the guild can actually use.",baseYield:0,baseInterval:6,resourceId:"scrap",unlockLevel:3},{id:"cooking",name:"Cooking",emoji:"🍲",description:"Cook fish and mice into meals that buff adventurers.",baseYield:0,baseInterval:5,resourceId:"meal",unlockLevel:5},{id:"combat",name:"Combat",emoji:"⚔️",description:"Idle auto-combat in guild expedition zones.",baseYield:0,baseInterval:0,resourceId:"",unlockLevel:1}];function N(e){return Math.floor(20*Math.pow(e,1.55)+10)}function be(e){return 1+(e-1)*.08}function ee(e,i,t){const a=Math.max(.35,1-(i-1)*.015);return Math.max(.8,e*a*t)}const x=[{id:"laundry_basket",name:"Laundry Basket Caverns",emoji:"🧺",description:"Damp tunnels of forgotten laundry. Perfect for rookies.",enemyIds:["crumb_mite","dust_bunny","sock_spectre"],recommendedPower:15,unlockGold:0,unlockCombatLevel:1,flavour:"The guild's first expedition. Mind the static."},{id:"under_couch",name:"Under-Couch Catacombs",emoji:"🛋️",description:"Lost toys, lost coins, and things that skitter.",enemyIds:["dust_bunny","sock_spectre","laundry_golem"],recommendedPower:35,unlockGold:150,unlockCombatLevel:3,flavour:"Deeper fluff. Higher stakes."},{id:"vacuum_fortress",name:"Vacuum Fortress",emoji:"🏰",description:"A humming citadel of suction and despair.",enemyIds:["vacuum_scout","laundry_golem","upright_tyrant"],recommendedPower:70,unlockGold:500,unlockCombatLevel:6,flavour:"Only the brave — or the very fluffy — enter."},{id:"dog_park",name:"Dog Park Badlands",emoji:"🏞️",description:"Open ground. Loud enemies. No trees tall enough.",enemyIds:["bark_pup","leash_wraith","park_alpha"],recommendedPower:110,unlockGold:1200,unlockCombatLevel:10,flavour:"The final proving ground of this slice."},{id:"kitchen_depths",name:"Kitchen Depths",emoji:"🍳",description:"Steam, spices, and a kettle that stares back.",enemyIds:["crumb_mite","kettle_drake","dust_bunny"],recommendedPower:90,unlockGold:800,unlockCombatLevel:8,flavour:"Side path for cooks and crafters."}],ke=1;function $e(){const e={};for(const a of T)e[a.id]={level:1,xp:0,assignedCatId:null,progress:0};const i={};for(const a of O)i[a.id]={id:a.id,recruited:a.id==="pip",gear:{weapon:null,armor:null,accessory:null}};e.fishing.assignedCatId="pip";const t=Date.now();return{version:ke,gold:25,skills:e,cats:i,inventory:[{defId:"twig_claw",qty:1,uid:"starter-weapon"},{defId:"cardboard_vest",qty:1,uid:"starter-armor"}],unlockedZones:[x[0].id],combat:{zoneId:x[0].id,party:["pip"],enemyId:null,enemyHp:0,enemyMaxHp:0,partyHp:{pip:40},tickAcc:0,kills:0,running:!0},log:[],logSeq:0,lastTickAt:t,createdAt:t,totalPlayMs:0,flags:{seenTutorial:!1,offlinePending:!1},cosmeticsOwned:[],passActive:!1,adsRemoved:!1,stats:{totalKills:0,totalGoldEarned:0,totalGathered:0,highestCombatLevel:1}}}function y(e,i,t){e.logSeq+=1,e.log.unshift({id:e.logSeq,t:Date.now(),text:i,kind:t}),e.log.length>80&&(e.log.length=80)}function M(e,i,t,a=!1){if(!a){const o=e.inventory.find(l=>l.defId===i&&!l.equippedTo&&l.qty>0&&!E(i));if(o&&!E(i))return o.qty+=t,o.uid;if(!E(i)){const l=`stack-${i}-${e.logSeq+Math.random().toString(36).slice(2,7)}`;return e.inventory.push({defId:i,qty:t,uid:l}),l}}let n="";for(let o=0;o<t;o++)n=`gear-${i}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,e.inventory.push({defId:i,qty:1,uid:n});return n}const Pe=new Set(["twig_claw","fishbone_dagger","yarn_whip","vacuum_fang","cardboard_vest","sock_mail","fluff_plate","lucky_bell","herb_amulet","sunbeam_charm"]);function E(e){return Pe.has(e)}function te(e,i,t){let a=t;for(const n of e.inventory){if(n.defId!==i||n.equippedTo||E(i))continue;const o=Math.min(n.qty,a);if(n.qty-=o,a-=o,a<=0)break}return e.inventory=e.inventory.filter(n=>n.qty>0),a<=0}function L(e,i){return e.inventory.filter(t=>t.defId===i&&!t.equippedTo).reduce((t,a)=>t+a.qty,0)}function we(e){return Math.floor(e.atk*1.5+e.def+e.hp*.15+e.spd*.5)}const ie="whisker-guild-save-v1";function R(e){try{e.lastTickAt=Date.now(),localStorage.setItem(ie,JSON.stringify(e))}catch(i){console.warn("Save failed",i)}}function Te(){try{const e=localStorage.getItem(ie);if(!e)return null;const i=JSON.parse(e);return!i||typeof i!="object"?null:(i.version!==ke&&console.warn("Save version mismatch; starting fresh would wipe. Attempting load anyway."),i)}catch(e){return console.warn("Load failed",e),null}}function qe(){return localStorage.removeItem(ie),$e()}const z={dust_bunny:{id:"dust_bunny",name:"Dust Bunny",emoji:"🐰",hp:25,atk:4,def:1,xp:8,gold:3,lootTable:[{itemId:"dust_core",chance:.35},{itemId:"scrap",chance:.5,qty:2}],flavour:"Fluffy. Aggressive. Allergic to baths."},sock_spectre:{id:"sock_spectre",name:"Sock Spectre",emoji:"👻",hp:40,atk:6,def:2,xp:14,gold:6,lootTable:[{itemId:"scrap",chance:.7,qty:3},{itemId:"yarn",chance:.4,qty:2},{itemId:"cardboard_vest",chance:.08}],flavour:"The missing half. It wants revenge."},laundry_golem:{id:"laundry_golem",name:"Laundry Golem",emoji:"👕",hp:80,atk:10,def:5,xp:28,gold:14,lootTable:[{itemId:"scrap",chance:.8,qty:5},{itemId:"yarn_whip",chance:.06},{itemId:"sock_mail",chance:.05}],flavour:"Animated by static cling and spite."},vacuum_scout:{id:"vacuum_scout",name:"Vacuum Scout",emoji:"🧹",hp:70,atk:12,def:4,xp:32,gold:18,lootTable:[{itemId:"vacuum_filter",chance:.25},{itemId:"dust_core",chance:.4},{itemId:"twig_claw",chance:.1}],flavour:"Beep-boop. Target: all soft things."},upright_tyrant:{id:"upright_tyrant",name:"Upright Tyrant",emoji:"🤖",hp:160,atk:18,def:8,xp:70,gold:45,lootTable:[{itemId:"vacuum_filter",chance:.5},{itemId:"vacuum_fang",chance:.04},{itemId:"lucky_bell",chance:.08}],flavour:"The final form of household horror."},bark_pup:{id:"bark_pup",name:"Bark Pup",emoji:"🐶",hp:55,atk:11,def:3,xp:24,gold:12,lootTable:[{itemId:"pelt",chance:.35},{itemId:"mouse",chance:.3,qty:2}],flavour:"Friendly. Too friendly. Boundary issues."},leash_wraith:{id:"leash_wraith",name:"Leash Wraith",emoji:"⛓️",hp:100,atk:15,def:6,xp:48,gold:28,lootTable:[{itemId:"dog_whistle",chance:.12},{itemId:"herb_amulet",chance:.06},{itemId:"pelt",chance:.45,qty:2}],flavour:"Once walked a dog. Now walks nightmares."},park_alpha:{id:"park_alpha",name:"Park Alpha",emoji:"🐺",hp:220,atk:24,def:10,xp:110,gold:70,lootTable:[{itemId:"dog_whistle",chance:.25},{itemId:"fluff_plate",chance:.05},{itemId:"sunbeam_charm",chance:.03}],flavour:"Owns the stick. Owns the park. Owns your fear."},crumb_mite:{id:"crumb_mite",name:"Crumb Mite",emoji:"🪲",hp:18,atk:3,def:0,xp:5,gold:2,lootTable:[{itemId:"herb",chance:.4,qty:2},{itemId:"berry",chance:.2}],flavour:"Tiny. Crunchy. Underfoot forever."},kettle_drake:{id:"kettle_drake",name:"Kettle Drake",emoji:"🐲",hp:120,atk:16,def:7,xp:55,gold:35,lootTable:[{itemId:"fin",chance:.3},{itemId:"fishbone_dagger",chance:.07},{itemId:"potion",chance:.15}],flavour:"Whistles before it breathes steam."}},h={twig_claw:{id:"twig_claw",name:"Twig Claw",emoji:"🪵",slot:"weapon",rarity:"common",stats:{atk:3},sellPrice:15,flavour:"Pointy enough. Barely."},fishbone_dagger:{id:"fishbone_dagger",name:"Fishbone Dagger",emoji:"🦴",slot:"weapon",rarity:"uncommon",stats:{atk:7,spd:2},sellPrice:45,flavour:"Smells victorious.",craftable:{skill:"crafting",level:3,ingredients:[{id:"fish",qty:8},{id:"scrap",qty:4}],gold:20}},yarn_whip:{id:"yarn_whip",name:"Yarn Whip",emoji:"🧶",slot:"weapon",rarity:"uncommon",stats:{atk:5,spd:5},sellPrice:40,flavour:"Entangles ankles and dignity.",craftable:{skill:"crafting",level:2,ingredients:[{id:"yarn",qty:6},{id:"scrap",qty:3}],gold:15}},vacuum_fang:{id:"vacuum_fang",name:"Vacuum Fang",emoji:"🦷",slot:"weapon",rarity:"rare",stats:{atk:14,spd:3},sellPrice:120,flavour:"Forged from a defeated upright.",craftable:{skill:"crafting",level:8,ingredients:[{id:"scrap",qty:20},{id:"pelt",qty:5},{id:"fin",qty:3}],gold:80}},cardboard_vest:{id:"cardboard_vest",name:"Cardboard Vest",emoji:"📦",slot:"armor",rarity:"common",stats:{def:3,hp:10},sellPrice:18,flavour:"Structural integrity: temporary."},sock_mail:{id:"sock_mail",name:"Sock Mail",emoji:"🧦",slot:"armor",rarity:"uncommon",stats:{def:6,hp:20},sellPrice:55,flavour:"Warm. Slightly damp. Protective.",craftable:{skill:"crafting",level:4,ingredients:[{id:"scrap",qty:12},{id:"yarn",qty:4}],gold:25}},fluff_plate:{id:"fluff_plate",name:"Fluff Plate",emoji:"🛡️",slot:"armor",rarity:"rare",stats:{def:12,hp:40},sellPrice:140,flavour:"Looks soft. Hits like a couch.",craftable:{skill:"crafting",level:9,ingredients:[{id:"pelt",qty:10},{id:"scrap",qty:15},{id:"yarn",qty:8}],gold:100}},lucky_bell:{id:"lucky_bell",name:"Lucky Bell",emoji:"🔔",slot:"accessory",rarity:"uncommon",stats:{spd:4,atk:2},sellPrice:50,flavour:"Jingles when loot is near."},herb_amulet:{id:"herb_amulet",name:"Herb Amulet",emoji:"🏵️",slot:"accessory",rarity:"uncommon",stats:{hp:15,def:2},sellPrice:48,flavour:"Keeps the sneezes away. Mostly.",craftable:{skill:"crafting",level:5,ingredients:[{id:"herb",qty:15},{id:"berry",qty:5}],gold:30}},sunbeam_charm:{id:"sunbeam_charm",name:"Sunbeam Charm",emoji:"☀️",slot:"accessory",rarity:"rare",stats:{atk:5,def:5,spd:5,hp:20},sellPrice:160,flavour:"A pocket of perfect nap weather.",craftable:{skill:"crafting",level:10,ingredients:[{id:"fin",qty:5},{id:"berry",qty:10},{id:"pelt",qty:5}],gold:120}},dust_core:{id:"dust_core",name:"Dust Bunny Core",emoji:"💨",rarity:"common",sellPrice:10,flavour:"Still trying to hop away."},vacuum_filter:{id:"vacuum_filter",name:"Vacuum Filter",emoji:"🌀",rarity:"uncommon",sellPrice:35,flavour:"Smells like fear and lint."},dog_whistle:{id:"dog_whistle",name:"Broken Dog Whistle",emoji:"🐕",rarity:"rare",sellPrice:80,flavour:"Silent. Ominous. Valuable."}},C={fish:{id:"fish",name:"Puddle Fish",emoji:"🐟",sellPrice:3,flavour:"Still flopping. Optimistic."},herb:{id:"herb",name:"Courtyard Herb",emoji:"🌿",sellPrice:2,flavour:"Smells like adventure and sneeze."},mouse:{id:"mouse",name:"Alley Mouse",emoji:"🐭",sellPrice:4,flavour:"Negotiated poorly."},scrap:{id:"scrap",name:"Sock Scrap",emoji:"🧦",sellPrice:1,flavour:"One half of a forgotten pair."},meal:{id:"meal",name:"Camp Stew",emoji:"🍲",sellPrice:12,flavour:"Warm. Suspicious. Effective."},fin:{id:"fin",name:"Shiny Fin",emoji:"✨",sellPrice:8,flavour:"Catches the light — and buyers."},berry:{id:"berry",name:"Moon Berry",emoji:"🫐",sellPrice:5,flavour:"Only ripens when nobody is looking."},pelt:{id:"pelt",name:"Soft Pelt",emoji:"🧶",sellPrice:6,flavour:" ethically sourced from dust bunnies."},yarn:{id:"yarn",name:"Guild Yarn",emoji:"🧶",sellPrice:2,flavour:"Currency of serious crafters."},potion:{id:"potion",name:"Purr Potion",emoji:"🧪",sellPrice:18,flavour:"One sip, three extra lives (metaphorically)."}},B={fisherpaw:{id:"fisherpaw",name:"Fisherpaw",bonus:{kind:"skill",skill:"fishing",mult:1.25},flavour:"Loves the splash. Hates getting wet. Paradox."},herbalist:{id:"herbalist",name:"Herbal Nose",bonus:{kind:"skill",skill:"foraging",mult:1.25},flavour:"Can smell catnip from three courtyards away."},hunter:{id:"hunter",name:"Born Hunter",bonus:{kind:"skill",skill:"mousing",mult:1.3},flavour:"The squeak is the dinner bell."},craftsoul:{id:"craftsoul",name:"Craftsoul",bonus:{kind:"skill",skill:"crafting",mult:1.2},flavour:"Tiny paws, precise stitches."},chef:{id:"chef",name:"Sous-Meow",bonus:{kind:"skill",skill:"cooking",mult:1.25},flavour:"Insists every stew needs a garnish."},brawler:{id:"brawler",name:"Street Brawler",bonus:{kind:"combat",mult:1.15},flavour:"Fought a vacuum and lived to tell it."},swift:{id:"swift",name:"Swift Paws",bonus:{kind:"gather_speed",mult:.85},flavour:"Faster gather ticks (lower interval)."},lucky:{id:"lucky",name:"Lucky Whiskers",bonus:{kind:"loot",mult:1.2},flavour:"Slightly better loot drop rates."},tanky:{id:"tanky",name:"Fluff Wall",bonus:{kind:"combat",mult:1.1},flavour:"Extra cushion against claws."},napper:{id:"napper",name:"Strategic Napper",bonus:{kind:"skill",skill:"combat",mult:1.05},flavour:"Rest between fights restores a little edge."}};function D(e){const i=O.find(t=>t.id===e);if(!i)throw new Error(`Unknown cat ${e}`);return i}function ae(e){return O.filter(i=>{var t;return(t=e.cats[i.id])==null?void 0:t.recruited})}function Ge(e){return O.filter(i=>{var t;return!((t=e.cats[i.id])!=null&&t.recruited)})}function j(e,i){var o;const t=D(i),a={...t.baseStats},n=((o=e.cats[i])==null?void 0:o.gear)??{};for(const l of["weapon","armor","accessory"]){const r=n[l];if(!r)continue;const s=e.inventory.find(f=>f.uid===r);if(!s)continue;const c=h[s.defId];if(c!=null&&c.stats)for(const[f,d]of Object.entries(c.stats))a[f]=(a[f]??0)+(d??0)}for(const l of t.traitIds){const r=B[l];(r==null?void 0:r.bonus.kind)==="combat"&&(a.atk=Math.floor(a.atk*r.bonus.mult),a.def=Math.floor(a.def*(1+(r.bonus.mult-1)*.5)))}return a}function Ae(e,i){return i.reduce((t,a)=>t+we(j(e,a)),0)}function ne(e,i,t){if(!t)return .35;const a=D(t);let n=1;for(const o of a.traitIds){const l=B[o];l&&l.bonus.kind==="skill"&&l.bonus.skill===i&&(n*=l.bonus.mult)}return n}function oe(e,i){if(!i)return 1.5;const t=D(i);let a=1;for(const n of t.traitIds){const o=B[n];(o==null?void 0:o.bonus.kind)==="gather_speed"&&(a*=o.bonus.mult)}return a}function Se(e,i){let t=1;for(const a of i){const n=D(a);for(const o of n.traitIds){const l=B[o];(l==null?void 0:l.bonus.kind)==="loot"&&(t*=l.bonus.mult)}}return t}function je(e,i){var a;const t=D(i);return(a=e.cats[i])!=null&&a.recruited?{ok:!1,reason:"Already recruited"}:e.gold<t.recruitCost?{ok:!1,reason:`Need ${t.recruitCost} gold`}:(e.gold<t.unlockGold&&t.unlockGold>0,t.unlockGold>0&&e.stats.totalGoldEarned<t.unlockGold?{ok:!1,reason:`Earn ${t.unlockGold} total gold first`}:{ok:!0})}function He(e,i){if(!je(e,i).ok)return!1;const a=D(i);return e.gold-=a.recruitCost,e.cats[i].recruited=!0,!0}const Ie=[{id:"camp_stew",name:"Camp Stew",emoji:"🍲",skill:"cooking",level:1,ingredients:[{id:"fish",qty:2},{id:"herb",qty:1}],output:{id:"meal",qty:1},flavour:"A humble bowl that somehow buffs courage."},{id:"mouse_skewer",name:"Mouse Skewer",emoji:"🍢",skill:"cooking",level:3,ingredients:[{id:"mouse",qty:2},{id:"herb",qty:2}],output:{id:"meal",qty:2},flavour:"Street food of champions."},{id:"purr_potion",name:"Purr Potion",emoji:"🧪",skill:"cooking",level:6,ingredients:[{id:"berry",qty:3},{id:"herb",qty:4},{id:"fish",qty:1}],output:{id:"potion",qty:1},gold:10,flavour:"Restores more than pride."},{id:"berry_glaze",name:"Berry-Glazed Fish",emoji:"🍽️",skill:"cooking",level:8,ingredients:[{id:"fish",qty:3},{id:"berry",qty:4}],output:{id:"meal",qty:3},flavour:"Fancy enough for the guild charter dinner."},{id:"yarn_bundle",name:"Yarn Bundle",emoji:"🧶",skill:"crafting",level:1,ingredients:[{id:"scrap",qty:3}],output:{id:"yarn",qty:2},flavour:"Unravel, rewind, repeat."}],Z=[];function H(e,i,t){const a=e.skills[i];if(!a)return;a.xp+=t;let n=0;for(;a.xp>=N(a.level)&&n<50;)a.xp-=N(a.level),a.level+=1,n++,Z.push({skill:i,level:a.level}),y(e,`⭐ ${Oe(i)} leveled up to ${a.level}!`,"level"),i==="combat"&&(e.stats.highestCombatLevel=Math.max(e.stats.highestCombatLevel,a.level))}function Oe(e){var i;return((i=T.find(t=>t.id===e))==null?void 0:i.name)??e}function Re(e,i,t){var n;if(i==="combat")return!1;const a=T.find(o=>o.id===i);if(!a)return!1;if(e.skills.combat.level<a.unlockLevel&&a.unlockLevel>1,a.unlockLevel>1){const o=e.skills.fishing.level+e.skills.foraging.level+e.skills.mousing.level;o<a.unlockLevel&&e.skills[i].level<a.unlockLevel&&i==="crafting"&&o<5&&e.skills.crafting.level<=1&&e.stats.totalGathered<20}if(t){if(!((n=e.cats[t])!=null&&n.recruited))return!1;for(const[o,l]of Object.entries(e.skills))o!==i&&l.assignedCatId===t&&(l.assignedCatId=null);e.combat.party=e.combat.party.filter(o=>o!==t),e.combat.party.length}return e.skills[i].assignedCatId=t,!0}function Fe(e,i){for(const t of T){if(t.id==="combat"||(t.id==="crafting"||t.id==="cooking")&&t.id==="cooking")continue;const a=e.skills[t.id];t.id==="crafting"&&a.level<=1&&e.stats.totalGathered<15;const n=a.assignedCatId;if(!n)continue;const o=oe(e,n),l=ee(t.baseInterval,a.level,o);for(a.progress+=i;a.progress>=l;)a.progress-=l,Be(e,t.id)}}function Be(e,i){const t=T.find(c=>c.id===i),a=e.skills[i],n=a.assignedCatId,o=ne(e,i,n),l=Math.max(1,Math.floor(t.baseYield*be(a.level)*o));t.resourceId&&(M(e,t.resourceId,l),e.stats.totalGathered+=l,i==="fishing"&&Math.random()<.08+a.level*.005&&(M(e,"fin",1),y(e,"✨ Bonus Shiny Fin!","gather")),i==="foraging"&&Math.random()<.1+a.level*.005&&M(e,"berry",1),i==="mousing"&&Math.random()<.07+a.level*.004&&M(e,"pelt",1),i==="crafting"&&Math.random()<.15&&M(e,"yarn",1));const r=Math.floor(4+a.level*.5+Math.random()*3);H(e,i,r);const s=C[t.resourceId];Math.random()<.25&&y(e,`${t.emoji} ${(s==null?void 0:s.name)??t.resourceId} ×${l}`,"gather")}function U(e,i){return T.find(a=>a.id===i).unlockLevel<=1?!0:i==="crafting"?e.stats.totalGathered>=15||e.skills.crafting.level>1:i==="cooking"?e.skills.crafting.level>=2||e.stats.totalGathered>=40:!0}function De(e,i){var n;const t=Ie.find(o=>o.id===i);if(!t||!U(e,t.skill)||e.skills[t.skill].level<t.level||t.gold&&e.gold<t.gold)return!1;for(const o of t.ingredients)if(L(e,o.id)<o.qty)return!1;for(const o of t.ingredients)te(e,o.id,o.qty);t.gold&&(e.gold-=t.gold);const a=!!((n=h[t.output.id])!=null&&n.slot);return M(e,t.output.id,t.output.qty,a),H(e,t.skill,12+t.level*3),y(e,`${t.emoji} Crafted ${t.name}!`,"loot"),!0}function Ne(e,i){const t=h[i];if(!(t!=null&&t.craftable))return!1;const a=t.craftable;if(!U(e,a.skill)||e.skills[a.skill].level<a.level||a.gold&&e.gold<a.gold)return!1;for(const n of a.ingredients)if(L(e,n.id)<n.qty)return!1;for(const n of a.ingredients)te(e,n.id,n.qty);return a.gold&&(e.gold-=a.gold),M(e,i,1,!0),H(e,a.skill,15+a.level*4),y(e,`${t.emoji} Crafted ${t.name}!`,"loot"),!0}function Ue(e,i,t){const a=C[i],n=h[i],o=(a==null?void 0:a.sellPrice)??(n==null?void 0:n.sellPrice)??1,l=L(e,i),r=Math.min(l,t);if(r<=0)return 0;te(e,i,r);const s=r*o;return e.gold+=s,e.stats.totalGoldEarned+=s,s}function We(e){const i=x.find(a=>a.id===e),t=i.enemyIds[Math.floor(Math.random()*i.enemyIds.length)];return z[t]}function le(e){const i=e.combat;!i.running||!i.zoneId||i.party.length===0||i.enemyId&&i.enemyHp>0||Ke(e)}function Ke(e){const i=e.combat;if(!i.zoneId)return;const t=We(i.zoneId);i.enemyId=t.id,i.enemyMaxHp=t.hp,i.enemyHp=t.hp;for(const a of i.party)if((i.partyHp[a]??0)<=0){const n=j(e,a);i.partyHp[a]=n.hp}y(e,`${t.emoji} A wild ${t.name} appears!`,"combat")}function Ye(e,i){const t=e.combat;if(!t.running||!t.zoneId||t.party.length===0||(le(e),!t.enemyId))return;t.tickAcc+=i;const a=t.party.reduce((o,l)=>o+j(e,l).spd,0)/Math.max(1,t.party.length),n=Math.max(.45,1.4-a*.03);for(;t.tickAcc>=n;)if(t.tickAcc-=n,Ze(e),(!t.enemyId||t.enemyHp<=0)&&le(e),t.party.every(o=>(t.partyHp[o]??0)<=0)){y(e,"💀 The party is down! Retreating to lick wounds…","combat");for(const o of t.party)t.partyHp[o]=Math.floor(j(e,o).hp*.5);t.enemyId=null,t.enemyHp=0,t.tickAcc=-2;break}}function Ze(e){const i=e.combat;if(!i.enemyId)return;const t=z[i.enemyId];if(!t)return;let a=0;for(const s of i.party){if((i.partyHp[s]??0)<=0)continue;const f=j(e,s).atk+Math.floor(Math.random()*4),d=Math.max(1,f-Math.floor(t.def*.5));a+=d}if(i.enemyHp-=a,a>0&&y(e,`⚔️ Party deals ${a} dmg to ${t.name}.`,"combat"),i.enemyHp<=0){Xe(e,t);return}const n=i.party.filter(s=>(i.partyHp[s]??0)>0);if(n.length===0)return;const o=n[Math.floor(Math.random()*n.length)],l=j(e,o),r=Math.max(1,t.atk+Math.floor(Math.random()*3)-Math.floor(l.def*.4));i.partyHp[o]=Math.max(0,(i.partyHp[o]??0)-r),y(e,`${t.emoji} ${t.name} hits for ${r}.`,"combat")}function Xe(e,i){var l,r,s,c;const t=e.combat;t.kills+=1,e.stats.totalKills+=1;const a=i.gold+Math.floor(Math.random()*Math.max(1,Math.floor(i.gold*.3)));e.gold+=a,e.stats.totalGoldEarned+=a;const n=i.xp;H(e,"combat",n),y(e,`✨ Defeated ${i.name}! +${a}🥇 +${n} XP`,"loot");const o=Se(e,t.party);for(const f of i.lootTable)if(Math.random()<f.chance*o){const d=f.qty??1,u=E(f.itemId);M(e,f.itemId,d,u);const p=((l=h[f.itemId])==null?void 0:l.name)??((r=C[f.itemId])==null?void 0:r.name)??f.itemId,q=((s=h[f.itemId])==null?void 0:s.emoji)??((c=C[f.itemId])==null?void 0:c.emoji)??"📦";y(e,`${q} Loot: ${p}${d>1?" ×"+d:""}`,"loot")}for(const f of t.party){const d=j(e,f).hp;t.partyHp[f]=Math.min(d,(t.partyHp[f]??0)+Math.floor(d*.08))}t.enemyId=null,t.enemyHp=0}function se(e,i){const t=x.find(n=>n.id===i);return!t||!e.unlockedZones.includes(i)||e.skills.combat.level<t.unlockCombatLevel?!1:(e.combat.zoneId=i,e.combat.enemyId=null,e.combat.enemyHp=0,e.combat.tickAcc=0,y(e,`${t.emoji} Expedition moved to ${t.name}.`,"system"),!0)}function ze(e,i){const t=x.find(a=>a.id===i);return t?e.unlockedZones.includes(i)?!0:e.gold<t.unlockGold||e.skills.combat.level<t.unlockCombatLevel?!1:(e.gold-=t.unlockGold,e.unlockedZones.push(i),y(e,`${t.emoji} Unlocked zone: ${t.name}!`,"system"),!0):!1}function Ve(e,i){const t=i.filter(a=>{var n;return(n=e.cats[a])==null?void 0:n.recruited}).slice(0,3);if(t.length!==0){e.combat.party=t;for(const a of t)(e.combat.partyHp[a]==null||e.combat.partyHp[a]<=0)&&(e.combat.partyHp[a]=j(e,a).hp);for(const a of Object.values(e.skills))a.assignedCatId&&t.includes(a.assignedCatId)&&(a.assignedCatId=null);y(e,`🐈 Party set: ${t.join(", ")}`,"system")}}function Je(e,i){e.combat.running=!e.combat.running,y(e,e.combat.running?"▶️ Expedition resumed.":"⏸️ Expedition paused.","system")}function re(e,i){const t=x.find(a=>a.id===i);return t?e.unlockedZones.includes(i)?{unlocked:!0,canBuy:!1}:e.skills.combat.level<t.unlockCombatLevel?{unlocked:!1,canBuy:!1,reason:`Need Combat Lv ${t.unlockCombatLevel}`}:e.gold<t.unlockGold?{unlocked:!1,canBuy:!1,reason:`Need ${t.unlockGold} gold`}:{unlocked:!1,canBuy:!0}:{unlocked:!1,canBuy:!1,reason:"Unknown"}}let V=0;function Me(e,i){const t=Math.min(i,.25);let a=i;for(Z.length=0;a>0;){const n=Math.min(t,a);Fe(e,n),Ye(e,n),a-=n}return e.totalPlayMs+=i*1e3,e.lastTickAt=Date.now(),V+=i,V>=5&&(V=0,R(e)),{levelUps:Z.splice(0,Z.length)}}const de=480*60*1e3;function Qe(e,i=Date.now()){const t=i-e.lastTickAt;if(t<15e3)return null;const a=t>de,n=Math.min(t,de),o=n/1e3,l={elapsedMs:n,gold:0,kills:0,gathered:{},xp:{},capped:a};for(const s of T){if(s.id==="combat"||s.id==="cooking")continue;const c=e.skills[s.id];if(!c.assignedCatId)continue;const f=oe(e,c.assignedCatId),d=ee(s.baseInterval,c.level,f),u=Math.floor(o/d);if(u<=0)continue;const p=ne(e,s.id,c.assignedCatId),q=Math.max(1,Math.floor(s.baseYield*be(c.level)*p)),g=u*q;s.resourceId&&(M(e,s.resourceId,g),l.gathered[s.resourceId]=(l.gathered[s.resourceId]??0)+g,e.stats.totalGathered+=g);const I=u*Math.floor(4+c.level*.5);if(H(e,s.id,I),l.xp[s.id]=(l.xp[s.id]??0)+I,s.id==="fishing"){const S=Math.floor(u*.08);S>0&&(M(e,"fin",S),l.gathered.fin=(l.gathered.fin??0)+S)}}if(e.combat.running&&e.combat.zoneId&&e.combat.party.length>0){const s=x.find(c=>c.id===e.combat.zoneId);if(s){const c=Math.min(2,.6+e.skills.combat.level*.05),f=Math.max(3,7/c),d=Math.floor(o/f);l.kills=d,e.combat.kills+=d,e.stats.totalKills+=d;let u=0,p=0;const q=Se(e,e.combat.party);for(let g=0;g<d;g++){const I=s.enemyIds[g%s.enemyIds.length],S=z[I];if(S){u+=S.gold,p+=S.xp;for(const P of S.lootTable)if(Math.random()<P.chance*q*.7){const Y=P.qty??1;M(e,P.itemId,Y,E(P.itemId)),l.gathered[P.itemId]=(l.gathered[P.itemId]??0)+Y}}}e.gold+=u,e.stats.totalGoldEarned+=u,l.gold=u,H(e,"combat",p),l.xp.combat=p,e.combat.enemyId=null,e.combat.enemyHp=0}}e.lastTickAt=i,e.flags.offlinePending=!0;const r=Math.floor(n/6e4);return y(e,`💤 While you were away (${r}m${a?", capped":""}): ${l.kills} kills, +${l.gold} gold`,"offline"),l}function et(e){const i=Math.floor(e/1e3),t=Math.floor(i/3600),a=Math.floor(i%3600/60),n=i%60;return t>0?`${t}h ${a}m`:a>0?`${a}m ${n}s`:`${n}s`}function xe(e,i,t){var r;if(!((r=e.cats[i])!=null&&r.recruited))return!1;const a=e.inventory.find(s=>s.uid===t);if(!a||a.qty<1)return!1;const n=h[a.defId];if(!(n!=null&&n.slot))return!1;const o=n.slot,l=e.cats[i].gear[o];if(l){const s=e.inventory.find(c=>c.uid===l);s&&delete s.equippedTo}if(a.equippedTo&&a.equippedTo!==i){const s=e.cats[a.equippedTo];if(s)for(const c of Object.keys(s.gear))s.gear[c]===t&&(s.gear[c]=null)}if(e.cats[i].gear[o]=t,a.equippedTo=i,y(e,`${n.emoji} Equipped ${n.name} on ${i}.`,"system"),e.combat.party.includes(i)){const s=j(e,i).hp;e.combat.partyHp[i]=Math.min(s,e.combat.partyHp[i]??s)}return!0}function _e(e,i,t){var o;const a=(o=e.cats[i])==null?void 0:o.gear[t];if(!a)return;const n=e.inventory.find(l=>l.uid===a);n&&delete n.equippedTo,e.cats[i].gear[t]=null}function tt(e,i){i.querySelector("[data-gold]").textContent=`🥇 ${Math.floor(e.gold).toLocaleString()}`}function ce(e,i){const t=e.combat,a=t.enemyId?z[t.enemyId]:null,n=x.find(d=>d.id===t.zoneId),o=a&&t.enemyMaxHp>0?Math.max(0,t.enemyHp/t.enemyMaxHp*100):0,l=t.party.map(d=>{const u=O.find(I=>I.id===d),p=j(e,d),q=t.partyHp[d]??p.hp,g=Math.max(0,q/p.hp*100);return`<div class="party-chip">
        <div class="pe">${u.emoji}</div>
        <div>${u.name}</div>
        <div class="bar hp" style="height:6px;margin-top:4px"><i style="width:${g}%"></i></div>
      </div>`}).join(""),r=x.map(d=>{const u=re(e,d.id),p=t.zoneId===d.id?"selected":"";return u.unlocked?`<option value="${d.id}" ${p}>${d.emoji} ${d.name}</option>`:`<option value="${d.id}" disabled>${d.emoji} ${d.name} (locked)</option>`}).join(""),s=x.filter(d=>!e.unlockedZones.includes(d.id)).map(d=>{const u=re(e,d.id);return`<button class="btn small secondary" data-unlock-zone="${d.id}" ${u.canBuy?"":"disabled"}>
        Unlock ${d.emoji} ${d.name} (${d.unlockGold}🥇${u.reason?" — "+u.reason:""})
      </button>`}).join(""),c=Ae(e,t.party),f=(n==null?void 0:n.recommendedPower)??0;i.innerHTML=`
    <div class="card" style="padding:10px">
      <div class="skill-head">
        <div class="skill-name">${(n==null?void 0:n.emoji)??"🗺️"} ${(n==null?void 0:n.name)??"No zone"}</div>
        <span class="badge">Power ${c}${f?` / ~${f}`:""}</span>
      </div>
      <div class="btn-row" style="margin-top:4px">
        <select class="assign" data-zone-select style="max-width:100%;flex:1">${r}</select>
        <button class="btn small ${t.running?"secondary":""}" data-toggle-combat>
          ${t.running?"⏸️ Pause":"▶️ Resume"}
        </button>
      </div>
      ${s?`<div class="btn-row">${s}</div>`:""}
    </div>

    <div class="arena">
      ${a?`<div class="enemy-emoji">${a.emoji}</div>
             <div class="enemy-name">${a.name}</div>
             <div class="muted" style="margin-bottom:6px">${a.flavour}</div>
             <div class="bar-label"><span>HP</span><span>${Math.max(0,Math.ceil(t.enemyHp))} / ${t.enemyMaxHp}</span></div>
             <div class="bar enemy"><i style="width:${o}%"></i></div>`:`<div class="enemy-emoji">💤</div><div class="enemy-name">Waiting…</div>
             <div class="muted">${t.running?"Searching for foes":"Expedition paused"}</div>`}
      <div class="party-row">${l||'<div class="muted">No party — assign cats in Guild</div>'}</div>
      <div class="muted" style="margin-top:8px">Kills this run: ${t.kills} · Combat Lv ${e.skills.combat.level}</div>
    </div>

    <div class="card">
      <div class="card-title">📜 Expedition Log</div>
      <div class="log" data-combat-log>
        ${e.log.slice(0,40).map(d=>`<div class="log-line ${d.kind}">${ot(d.text)}</div>`).join("")}
      </div>
    </div>

    <div class="card">
      <div class="card-title">🐈 Party (max 3)</div>
      <div class="card-sub">Cats in the party fight idle. They can't gather at the same time.</div>
      ${ae(e).map(d=>{const u=t.party.includes(d.id),p=j(e,d.id);return`<div class="list-item">
            <div class="emoji">${d.emoji}</div>
            <div class="body">
              <div class="name">${d.name} <span class="muted">${d.title}</span></div>
              <div class="meta">ATK ${p.atk} · DEF ${p.def} · HP ${p.hp} · SPD ${p.spd} · PWR ${we(p)}</div>
            </div>
            <div class="actions">
              <button class="btn small ${u?"secondary":""}" data-party-toggle="${d.id}">
                ${u?"Remove":"Add"}
              </button>
            </div>
          </div>`}).join("")}
    </div>
  `}function ue(e,i){const t=ae(e),a=T.filter(n=>n.id!=="combat");i.innerHTML=`
    <div class="card">
      <div class="card-title">🛠️ Gathering Skills</div>
      <div class="card-sub">Assign a cat to a skill. They gather idle. Traits matter.</div>
      ${a.map(n=>{const o=e.skills[n.id],l=U(e,n.id),r=N(o.level),s=Math.min(100,o.xp/r*100),c=o.assignedCatId,f=oe(e,c),d=c?ee(n.baseInterval,o.level,f):0,u=c&&d>0?Math.min(100,o.progress/d*100):0,p=ne(e,n.id,c),q=['<option value="">— none —</option>',...t.map(g=>{const I=Object.entries(e.skills).some(([P,Y])=>P!==n.id&&Y.assignedCatId===g.id)||e.combat.party.includes(g.id),S=c===g.id?"selected":"";return`<option value="${g.id}" ${S}>${g.emoji} ${g.name}${I&&c!==g.id?" (busy)":""}</option>`})].join("");return l?`<div class="skill-row">
            <div class="skill-head">
              <div class="skill-name">${n.emoji} ${n.name} <span class="badge">Lv ${o.level}</span></div>
              <select class="assign" data-assign-skill="${n.id}">${q}</select>
            </div>
            <div class="muted" style="margin-bottom:4px">${n.description} · ×${p.toFixed(2)} yield${c?` · ~${d.toFixed(1)}s`:""}</div>
            <div class="bar-label"><span>XP</span><span>${Math.floor(o.xp)} / ${r}</span></div>
            <div class="bar xp"><i style="width:${s}%"></i></div>
            ${n.id==="cooking"?'<div class="muted" style="margin-top:4px">Cook recipes in the Craft tab. Assign a cook for flavour XP later.</div>':c?`<div class="bar-label" style="margin-top:4px"><span>Gather</span><span>${Math.floor(u)}%</span></div>
                   <div class="bar"><i style="width:${u}%"></i></div>`:'<div class="muted" style="margin-top:4px">Assign a cat to start gathering</div>'}
          </div>`:`<div class="skill-row" style="opacity:0.55">
              <div class="skill-head">
                <div class="skill-name">${n.emoji} ${n.name} <span class="badge locked">Locked</span></div>
              </div>
              <div class="muted">${n.id==="crafting"?"Gather 15 resources to unlock":"Unlock crafting first (or gather more)"}</div>
            </div>`}).join("")}
    </div>

    <div class="card">
      <div class="card-title">⚔️ Combat Skill</div>
      <div class="bar-label"><span>Level ${e.skills.combat.level}</span>
        <span>${Math.floor(e.skills.combat.xp)} / ${N(e.skills.combat.level)}</span></div>
      <div class="bar xp"><i style="width:${Math.min(100,e.skills.combat.xp/N(e.skills.combat.level)*100)}%"></i></div>
      <div class="muted" style="margin-top:6px">Gains XP from expedition kills.</div>
    </div>
  `}function it(e,i){const t=ae(e),a=Ge(e);i.innerHTML=`
    <div class="card">
      <div class="card-title">🏰 Whisker Guild</div>
      <div class="card-sub">Recruit cat adventurers and equip them. <span class="placeholder-tag">placeholder text</span></div>
      <div class="grid-2">
        <div class="stat-pill">Cats <b>${t.length}/${O.length}</b></div>
        <div class="stat-pill">Kills <b>${e.stats.totalKills}</b></div>
        <div class="stat-pill">Gold earned <b>${e.stats.totalGoldEarned}</b></div>
        <div class="stat-pill">Gathered <b>${e.stats.totalGathered}</b></div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">Roster</div>
      ${t.map(n=>{const o=j(e,n.id),l=n.traitIds.map(c=>B[c]).filter(Boolean).map(c=>`<span class="badge">${c.name}</span>`).join(" "),r=e.cats[n.id].gear,s=["weapon","armor","accessory"].map(c=>{const f=r[c],d=f?e.inventory.find(p=>p.uid===f):null,u=d?h[d.defId]:null;return u?`${u.emoji}`:"·"}).join(" ");return`<div class="list-item">
            <div class="emoji">${n.emoji}</div>
            <div class="body">
              <div class="name">${n.name} <span class="muted">· ${n.title}</span></div>
              <div class="meta">${n.flavour}</div>
              <div class="meta" style="margin-top:4px">${l}</div>
              <div class="meta">ATK ${o.atk} DEF ${o.def} HP ${o.hp} SPD ${o.spd} · Gear ${s}</div>
            </div>
            <div class="actions">
              <button class="btn small secondary" data-manage-cat="${n.id}">Gear</button>
            </div>
          </div>`}).join("")}
    </div>

    <div class="card">
      <div class="card-title">Recruit</div>
      ${a.length===0?'<div class="muted">All cats recruited. Guild complete for this slice!</div>':a.map(n=>{const o=je(e,n.id),l=n.traitIds.map(r=>{var s;return(s=B[r])==null?void 0:s.name}).filter(Boolean).join(", ");return`<div class="list-item">
                  <div class="emoji">${n.emoji}</div>
                  <div class="body">
                    <div class="name">${n.name} <span class="muted">· ${n.title}</span></div>
                    <div class="meta">${n.flavour}</div>
                    <div class="meta">Traits: ${l}</div>
                    <div class="meta">Cost ${n.recruitCost}🥇${n.unlockGold?` · need ${n.unlockGold} total gold earned`:""}</div>
                  </div>
                  <div class="actions">
                    <button class="btn small" data-recruit="${n.id}" ${o.ok?"":"disabled"}>
                      ${o.ok?"Recruit":o.reason??"Locked"}
                    </button>
                  </div>
                </div>`}).join("")}
    </div>
  `}function at(e,i){const t=U(e,"crafting"),a=U(e,"cooking"),n=Object.values(h).filter(l=>l.craftable),o=Ie;i.innerHTML=`
    <div class="card">
      <div class="card-title">🧵 Crafting Station</div>
      <div class="card-sub">Crafting Lv ${e.skills.crafting.level} · Cooking Lv ${e.skills.cooking.level}</div>
      ${t?"":'<div class="muted">Gather more to unlock crafting.</div>'}
    </div>

    <div class="card">
      <div class="card-title">Gear Recipes</div>
      ${n.map(l=>{const r=l.craftable,s=e.skills[r.skill].level>=r.level&&t,c=r.ingredients.every(p=>L(e,p.id)>=p.qty),f=!r.gold||e.gold>=r.gold,d=s&&c&&f,u=r.ingredients.map(p=>{var I,S;const q=L(e,p.id);return`${((I=C[p.id])==null?void 0:I.emoji)??((S=h[p.id])==null?void 0:S.emoji)??""}${p.id} ${q}/${p.qty}`}).join(" · ");return`<div class="list-item">
            <div class="emoji">${l.emoji}</div>
            <div class="body">
              <div class="name rarity-${l.rarity}">${l.name}</div>
              <div class="meta">${l.flavour}</div>
              <div class="meta">Req ${r.skill} Lv ${r.level}${r.gold?` · ${r.gold}🥇`:""}</div>
              <div class="meta">${u}</div>
            </div>
            <div class="actions">
              <button class="btn small" data-craft-item="${l.id}" ${d?"":"disabled"}>Craft</button>
            </div>
          </div>`}).join("")}
    </div>

    <div class="card">
      <div class="card-title">🍲 Cooking</div>
      ${a?"":'<div class="muted">Unlock cooking by progressing crafting / gathering.</div>'}
      ${o.map(l=>{const r=e.skills[l.skill].level>=l.level&&(l.skill!=="cooking"||a)&&(l.skill!=="crafting"||t),s=l.ingredients.every(u=>L(e,u.id)>=u.qty),c=!l.gold||e.gold>=l.gold,f=r&&s&&c,d=l.ingredients.map(u=>{var g;const p=L(e,u.id);return`${((g=C[u.id])==null?void 0:g.emoji)??""}${p}/${u.qty}`}).join(" ");return`<div class="list-item">
            <div class="emoji">${l.emoji}</div>
            <div class="body">
              <div class="name">${l.name}</div>
              <div class="meta">${l.flavour}</div>
              <div class="meta">${l.skill} Lv ${l.level} · ${d}${l.gold?` · ${l.gold}🥇`:""}</div>
            </div>
            <div class="actions">
              <button class="btn small" data-craft-recipe="${l.id}" ${f?"":"disabled"}>Make</button>
            </div>
          </div>`}).join("")}
    </div>
  `}function nt(e,i){const t=Object.values(C).map(o=>({r:o,qty:L(e,o.id)})).filter(o=>o.qty>0),a=e.inventory.filter(o=>E(o.defId)&&o.qty>0),n=e.inventory.filter(o=>!E(o.defId)&&!C[o.defId]&&o.qty>0);i.innerHTML=`
    <div class="card">
      <div class="card-title">🎒 Inventory</div>
      <div class="card-sub">Sell resources for gold. Equip gear from the Guild tab.</div>
    </div>

    <div class="card">
      <div class="card-title">Resources</div>
      ${t.length===0?'<div class="muted">Empty — assign cats to gather.</div>':t.map(({r:o,qty:l})=>`<div class="list-item">
            <div class="emoji">${o.emoji}</div>
            <div class="body">
              <div class="name">${o.name} ×${l}</div>
              <div class="meta">${o.flavour} · ${o.sellPrice}🥇 each</div>
            </div>
            <div class="actions" style="display:flex;flex-direction:column;gap:4px">
              <button class="btn small secondary" data-sell="${o.id}" data-qty="1">Sell 1</button>
              <button class="btn small secondary" data-sell="${o.id}" data-qty="10">Sell 10</button>
              <button class="btn small" data-sell="${o.id}" data-qty="all">Sell all</button>
            </div>
          </div>`).join("")}
    </div>

    <div class="card">
      <div class="card-title">Gear</div>
      ${a.length===0?'<div class="muted">No gear yet.</div>':a.map(o=>{const l=h[o.defId];if(!l)return"";const r=l.stats?Object.entries(l.stats).map(([s,c])=>`${s.toUpperCase()}+${c}`).join(" "):"";return`<div class="list-item">
                  <div class="emoji">${l.emoji}</div>
                  <div class="body">
                    <div class="name rarity-${l.rarity}">${l.name}</div>
                    <div class="meta">${l.flavour}</div>
                    <div class="meta">${r}${o.equippedTo?` · on ${o.equippedTo}`:" · unequipped"}</div>
                  </div>
                </div>`}).join("")}
    </div>

    ${n.length?`<div class="card"><div class="card-title">Other loot</div>
      ${n.map(o=>{const l=h[o.defId];return`<div class="list-item">
            <div class="emoji">${(l==null?void 0:l.emoji)??"📦"}</div>
            <div class="body">
              <div class="name">${(l==null?void 0:l.name)??o.defId} ×${o.qty}</div>
              <div class="meta">${(l==null?void 0:l.flavour)??""} · sell ${(l==null?void 0:l.sellPrice)??1}🥇</div>
            </div>
            <div class="actions">
              <button class="btn small secondary" data-sell="${o.defId}" data-qty="all">Sell</button>
            </div>
          </div>`}).join("")}</div>`:""}

    <div class="card">
      <div class="card-title">⚙️ Save</div>
      <div class="btn-row">
        <button class="btn secondary small" data-save-now>Save now</button>
        <button class="btn secondary small" data-reset-save>Reset save…</button>
      </div>
      <div class="muted" style="margin-top:8px">Autosaves every ~5s. Offline progress applies on load.</div>
    </div>
  `}function ot(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function X(e,i){const t=O.find(r=>r.id===i),a=j(e,i),n=e.cats[i].gear,o=e.inventory.filter(r=>E(r.defId)&&r.qty>0&&(!r.equippedTo||r.equippedTo===i)),l=["weapon","armor","accessory"].map(r=>{const s=n[r],c=s?e.inventory.find(u=>u.uid===s):null,f=c?h[c.defId]:null,d=o.filter(u=>{var p;return((p=h[u.defId])==null?void 0:p.slot)===r}).map(u=>{const p=h[u.defId],q=u.uid===s?"selected":"";return`<option value="${u.uid}" ${q}>${p.emoji} ${p.name}</option>`}).join("");return`<div style="margin-bottom:10px">
        <div class="muted" style="margin-bottom:4px">${r} ${f?`— ${f.emoji} ${f.name}`:"— empty"}</div>
        <select class="assign" data-equip-slot="${r}" data-equip-cat="${i}" style="max-width:100%;width:100%">
          <option value="">— unequip —</option>
          ${d}
        </select>
      </div>`}).join("");return`
    <p>${t.emoji} <b>${t.name}</b> — ATK ${a.atk} DEF ${a.def} HP ${a.hp} SPD ${a.spd}</p>
    ${l}
  `}let Q=null;function lt(e){Q=e}function $(e,i="normal"){if(!Q)return;const t=document.createElement("div");t.className="toast"+(i==="levelup"?" levelup":""),t.textContent=e,Q.appendChild(t),setTimeout(()=>t.remove(),2600)}let A=null;function st(e){A=e}function W(e){if(!A)return;A.innerHTML="",A.hidden=!1;const i=document.createElement("div");i.className="modal-backdrop",i.innerHTML=`
    <div class="modal" role="dialog">
      <h2>${e.title}</h2>
      <div class="modal-body">${e.bodyHtml}</div>
      <div class="btn-row" style="margin-top:14px">
        <button class="btn block" data-ok>${e.okText??"Nice!"}</button>
      </div>
    </div>`,A.appendChild(i);const t=()=>{var a;A.hidden=!0,A.innerHTML="",(a=e.onOk)==null||a.call(e)};i.querySelector("[data-ok]").addEventListener("click",t),i.addEventListener("click",a=>{a.target===i&&t()})}const Ce=new URLSearchParams(location.search),K=Ce.get("debug")==="1";K&&document.body.classList.add("debug");let _=K?Number(Ce.get("speed")||10):1;(!Number.isFinite(_)||_<1)&&(_=1);let m=Te()??$e(),F="combat",me=performance.now(),J=0,v=!0;const w=document.getElementById("app");w.innerHTML=`
  <header class="header">
    <div class="header-title">🐈 Whisker Guild</div>
    <div class="header-gold" data-gold>🥇 0</div>
  </header>
  ${K?`<div class="debug-bar" data-debug>
    <strong>DEBUG</strong>
    <label>Speed <input type="range" min="1" max="50" value="${_}" data-speed /> <span data-speed-label>${_}×</span></label>
    <button class="btn small secondary" data-debug-gold>+1k gold</button>
    <button class="btn small secondary" data-debug-xp>+50 combat XP</button>
  </div>`:""}
  <div class="toast-host" data-toasts></div>
  <div data-modal hidden></div>
  <main class="screen-wrap">
    <section class="screen active" data-screen="combat"></section>
    <section class="screen" data-screen="skills"></section>
    <section class="screen" data-screen="guild"></section>
    <section class="screen" data-screen="craft"></section>
    <section class="screen" data-screen="bag"></section>
  </main>
  <nav class="nav">
    <button class="nav-btn active" data-tab="combat"><span class="ico">⚔️</span>Combat</button>
    <button class="nav-btn" data-tab="skills"><span class="ico">🛠️</span>Skills</button>
    <button class="nav-btn" data-tab="guild"><span class="ico">🐈</span>Guild</button>
    <button class="nav-btn" data-tab="craft"><span class="ico">🧵</span>Craft</button>
    <button class="nav-btn" data-tab="bag"><span class="ico">🎒</span>Bag</button>
  </nav>
`;lt(w.querySelector("[data-toasts]"));st(w.querySelector("[data-modal]"));const rt=w.querySelector(".header"),b={combat:w.querySelector('[data-screen="combat"]'),skills:w.querySelector('[data-screen="skills"]'),guild:w.querySelector('[data-screen="guild"]'),craft:w.querySelector('[data-screen="craft"]'),bag:w.querySelector('[data-screen="bag"]')};var fe,pe,ve,ge;{const e=Qe(m);if(e){const i=[`<div class="summary-line"><span>Away for</span><span>${et(e.elapsedMs)}${e.capped?" (capped 8h)":""}</span></div>`,`<div class="summary-line"><span>Gold</span><span>+${e.gold}</span></div>`,`<div class="summary-line"><span>Kills</span><span>+${e.kills}</span></div>`];for(const[t,a]of Object.entries(e.gathered)){const n=((fe=C[t])==null?void 0:fe.name)??((pe=h[t])==null?void 0:pe.name)??t,o=((ve=C[t])==null?void 0:ve.emoji)??((ge=h[t])==null?void 0:ge.emoji)??"📦";i.push(`<div class="summary-line"><span>${o} ${n}</span><span>+${a}</span></div>`)}for(const[t,a]of Object.entries(e.xp))i.push(`<div class="summary-line"><span>${t} XP</span><span>+${a}</span></div>`);W({title:"💤 While you were away",bodyHtml:i.join(""),okText:"Collect",onOk:()=>{m.flags.offlinePending=!1,R(m)}})}}m.flags.seenTutorial||W({title:"Welcome to Whisker Guild",bodyHtml:`
      <p>You run a guild of cat adventurers. <span class="placeholder-tag">placeholder</span></p>
      <p>• Assign cats to <b>Skills</b> to gather idle.</p>
      <p>• Send a party to <b>Combat</b> zones — auto-fight with a text log.</p>
      <p>• <b>Craft</b> gear, <b>Recruit</b> more cats, check back for offline progress.</p>
      <p class="muted">Tip: add <code>?debug=1</code> to the URL for speed controls.</p>
    `,okText:"Let's go",onOk:()=>{m.flags.seenTutorial=!0,R(m)}});function dt(e){F=e,w.querySelectorAll(".nav-btn").forEach(i=>{i.classList.toggle("active",i.dataset.tab===e)}),Object.keys(b).forEach(i=>{b[i].classList.toggle("active",i===e)}),v=!0,k()}w.querySelectorAll(".nav-btn").forEach(e=>{e.addEventListener("click",()=>{dt(e.dataset.tab)})});var he,ye;if(K){const e=w.querySelector("[data-speed]"),i=w.querySelector("[data-speed-label]");e==null||e.addEventListener("input",()=>{_=Number(e.value),i.textContent=`${_}×`}),(he=w.querySelector("[data-debug-gold]"))==null||he.addEventListener("click",()=>{m.gold+=1e3,m.stats.totalGoldEarned+=1e3,$("+1000 gold"),v=!0}),(ye=w.querySelector("[data-debug-xp]"))==null||ye.addEventListener("click",()=>{H(m,"combat",50),$("+50 combat XP"),v=!0})}function k(){if(tt(m,rt),!v&&F==="combat"){ce(m,b.combat),G(b.combat);return}if(!v&&F==="skills"){ue(m,b.skills),G(b.skills);return}switch(F){case"combat":ce(m,b.combat),G(b.combat);break;case"skills":ue(m,b.skills),G(b.skills);break;case"guild":it(m,b.guild),G(b.guild);break;case"craft":at(m,b.craft),G(b.craft);break;case"bag":nt(m,b.bag),G(b.bag);break}v=!1}function G(e){e.querySelectorAll("[data-zone-select]").forEach(i=>{i.addEventListener("change",()=>{se(m,i.value),v=!0,k()})}),e.querySelectorAll("[data-toggle-combat]").forEach(i=>{i.addEventListener("click",()=>{Je(m),v=!0,k()})}),e.querySelectorAll("[data-unlock-zone]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.unlockZone;ze(m,t)&&($("Zone unlocked!"),se(m,t)),v=!0,k()})}),e.querySelectorAll("[data-party-toggle]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.partyToggle;let a=[...m.combat.party];if(a.includes(t))a=a.filter(n=>n!==t);else if(a.length<3)a.push(t);else{$("Party full (max 3)");return}if(a.length===0){$("Need at least one cat in the party");return}Ve(m,a),v=!0,k()})}),e.querySelectorAll("[data-assign-skill]").forEach(i=>{i.addEventListener("change",()=>{const t=i.dataset.assignSkill,a=i.value||null;Re(m,t,a),$(a?`Assigned to ${t}`:`Cleared ${t}`),v=!0,k()})}),e.querySelectorAll("[data-recruit]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.recruit;He(m,t)&&$(`Recruited ${t}!`),v=!0,k()})}),e.querySelectorAll("[data-manage-cat]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.manageCat;W({title:"Equip gear",bodyHtml:X(m,t),okText:"Done"}),queueMicrotask(()=>{document.querySelectorAll("[data-equip-slot]").forEach(a=>{a.addEventListener("change",()=>{const n=a.dataset.equipSlot,o=a.dataset.equipCat,l=a.value;l?xe(m,o,l):_e(m,o,n);const r=document.querySelector(".modal-body");r&&(r.innerHTML=X(m,o)),document.querySelectorAll("[data-equip-slot]").forEach(s=>{s.addEventListener("change",()=>{})}),W({title:"Equip gear",bodyHtml:X(m,t),okText:"Done",onOk:()=>{v=!0,k()}}),Le(t),$("Gear updated"),v=!0})})})})}),e.querySelectorAll("[data-craft-item]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.craftItem;Ne(m,t)&&$("Crafted!"),v=!0,k()})}),e.querySelectorAll("[data-craft-recipe]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.craftRecipe;De(m,t)&&$("Cooked!"),v=!0,k()})}),e.querySelectorAll("[data-sell]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.sell,a=i.dataset.qty,n=L(m,t),o=a==="all"?n:Number(a),l=Ue(m,t,o);l>0&&$(`Sold for ${l} gold`),v=!0,k()})}),e.querySelectorAll("[data-save-now]").forEach(i=>{i.addEventListener("click",()=>{R(m),$("Saved")})}),e.querySelectorAll("[data-reset-save]").forEach(i=>{i.addEventListener("click",()=>{confirm("Reset all progress?")&&(m=qe(),$("Save reset"),v=!0,k())})})}function Le(e){document.querySelectorAll("[data-equip-slot]").forEach(i=>{i.addEventListener("change",()=>{const t=i.dataset.equipSlot,a=i.dataset.equipCat,n=i.value;n?xe(m,a,n):_e(m,a,t),W({title:"Equip gear",bodyHtml:X(m,e),okText:"Done",onOk:()=>{v=!0,k()}}),Le(e),$("Gear updated")})})}function Ee(e){const i=Math.min(.1,(e-me)/1e3);me=e;const t=i*_,a=Me(m,t);for(const o of a.levelUps)$(`⭐ ${o.skill} → Lv ${o.level}!`,"levelup"),v=!0;J+=i,(J>=(F==="combat"||F==="skills"?.25:.6)||v)&&(J=0,k()),requestAnimationFrame(Ee)}k();requestAnimationFrame(Ee);document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&R(m)});window.addEventListener("beforeunload",()=>R(m));window.__WG__={getState:()=>m,setSpeed:e=>{_=Math.max(1,Math.min(100,e))},save:()=>R(m),reset:()=>{m=qe(),v=!0,k()},tick:e=>{Me(m,e)}};console.info(`[Whisker Guild] ready${K?` (debug, ${_}×)`:""}`);
//# sourceMappingURL=index-CIa3Wp8A.js.map
