import{j as p,r as d,R as f,a as y}from"./vendor.b6f413d9.js";const b=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};b();const E=[{character:"berseker",stats:["crit","swiftness"],engravingsEarly:["mayhem","masters tenacity"],engravingsLate:["cursed doll","keen blunt weapon","raid captain","master of ambush","grudge"]},{character:"paladin",stats:["swiftness","specialization"],engravingsEarly:["blessed aura","awakening"],engravingsLate:["expert","spirit absorption","heavy armor","drop of ether","vital point hit","judment"]},{character:"gunlancer",stats:["swiftness","crit"],engravingsEarly:["lone knight","super charge"],engravingsLate:["master brawler","keen blunt weapon","adrenaline","precise dagger","combat readiness","spirit absorption"]},{character:"striker",stats:["swiftness","crit"],engravingsEarly:["esoteric flurry","master of ambush"],engravingsLate:["keen blunt weapon","adrenaline","adrenaline","spirit absoption"]},{character:"wardancer",stats:["crit","swiftness"],engravingsEarly:["first intention","raid captain"],engravingsLate:["keen blunt weapon","master of ambush","lighting fury","grudge","cursed doll","increases mass"]},{character:"scrapper",stats:["crit","swiftness"],engravingsEarly:["ultimate skill taijutsu","adrenaline"],engravingsLate:["master of ambush","grudge","cursed doll","keen blunt weapon"]},{character:"soulfist",stats:["specialization","crit"],engravingsEarly:["precise dagger","robust spirit"],engravingsLate:["adrenaline","grudge","cursed doll","master of ambush","awakening","mass increase"]},{character:"peacemaker",stats:["crit","specialization"],engravingsEarly:["peacemaker","hit master"],engravingsLate:["adrenaline","keen blunt weapon","raid captain","spirit absorption"]},{character:"artillerist",stats:["crit","swiftness"],engravingsEarly:["firepower enchancement","hit master"],engravingsLate:["adrenaline","keen blunt weapon","barricade","grudge","cursed doll"]},{character:"deadeye",stats:["specialization","crit"],engravingsEarly:["enchanced weapon","master of ambush"],engravingsLate:["adrenaline","keen blunt weapon","spirit absorption","enchanced weapon","cursed doll","raid captain","grudge"]},{character:"sharpshooter",stats:["crit","specialization"],engravingsEarly:["death strike","loyal companion","hit master"],engravingsLate:["keen blunt weapon","raid captain","cursed doll","grudge","loyal companion","death strike"]},{character:"bard",stats:["specialization","swiftness"],engravingsEarly:["awakening","desesperate salvation"],engravingsLate:["expert","spirit absorption","heavy armor","max mp increase"]},{character:"sorceress",stats:["specialization","swiftness","crit"],engravingsEarly:["igniter","all out attack"],engravingsLate:["hit master","precise dager","grudge","cursed doll"]},{character:"shadowhunter",stats:["crit","swiftness"],engravingsEarly:["perfect suppression","master of ambush"],engravingsLate:["keen blunt weapon","precise dager","adrenaline","spirit absorption","raid captain","grudge","cursed doll","increases mass"]},{character:"deathblade",stats:["specialization","crit"],engravingsEarly:["surge","master of ambush"],engravingsLate:["keen blunt weapon","sight focus","super charge","grudge","cursed doll","adrenaline","grudge"]}],u=["expert","cursed doll","keen blunt weapon","raid captain","master of ambush","grudge","blessed aura","lone knight","super charge","awakening","mayhem","desesperate salvation","robust spirit","firepower enchancement","masters tenacity","ultimate skill taijutsu","first intention","spirit absorption","heavy armor","drop of ether","vital point hit","judment","adrenaline","precise dagger","combat readiness","esoteric flurry"],k=["crit","swiftness","domination","specialization"],n=p.exports.jsx,g=p.exports.jsxs;function w(){const[s,l]=d.exports.useState([]),[i,c]=d.exports.useState([]),[t,r]=d.exports.useState([]);u.sort();const o=()=>{l([]),c([]),window.location.reload()},h=e=>{e.target.checked&&l(a=>[...a,e.target.value]),e.target.checked||l(a=>[a.pop()])},m=e=>{e.target.checked&&c(a=>[...a,e.target.value]),e.target.checked||c(a=>[a.pop()])},v=()=>{r([]),E.map(e=>{if(e.engravingsEarly.includes(s[0])&&e.engravingsEarly.includes(s[1])&&r(a=>[...a,`${e.engravingsEarly[0]} y ${e.engravingsEarly[1]} Son Bisses para ${e.character} en Early`]),e.engravingsLate.includes(s[0])&&e.engravingsLate.includes(s[1])&&r(a=>[...a,`${e.engravingsEarly[0]} y ${e.engravingsEarly[1]} son bisses para ${e.character} en Endgame`]),e.engravingsLate.includes(s[0])&&e.engravingsLate.includes(s[1])&&e.stats.includes(i[0])&&e.stats.includes(i[1]))return r(a=>[...a,`Biss collar ${e.character} endgame`]);if(e.engravingsLate.includes(s[0])&&e.engravingsLate.includes(s[1])&&e.stats.includes(i[0])&&r(a=>[...a,`Biss joyer\xEDa  ${e.character} endgame`]),e.engravingsEarly.includes(s[0])&&e.engravingsEarly.includes(s[1])&&e.stats.includes(i[0])&&e.stats.includes(i[1]))return r(a=>[...a,`Biss collar  ${e.character} Early`]);if(e.engravingsEarly.includes(s[0])&&e.engravingsEarly.includes(s[1])&&e.stats.includes(i[0]))return r(a=>[...a,`Biss joyer\xEDa  ${e.character} Early`]);if(e.engravingsEarly.includes(s[0])||e.engravingsEarly.includes(s[1]))return r(a=>[...a,`Un engraving bueno para  ${e.character} en Early`]);if(e.engravingsLate.includes(s[0])||e.engravingsLate.includes(s[1]))return r(a=>[...a,`Un engraving bueno para  ${e.character} en Late`])})};return g("div",{className:"App",children:[g("div",{className:"engravings-container",children:[u.map(e=>g("div",{children:[n("input",{onClick:a=>h(a),type:"checkbox",id:e,name:e,value:e}),n("label",{className:"engraving",htmlFor:e,children:e})]},e)),g("div",{className:"buttons-container",children:[n("button",{onClick:v,children:"Save"}),n("button",{onClick:o,children:"Reset"})]})]}),n("div",{className:"stats-container",children:k.map(e=>g("div",{children:[n("input",{onClick:a=>m(a),type:"checkbox",id:e,name:e,value:e}),n("label",{htmlFor:e,children:e})]},e))}),n("div",{className:"result-container",children:t.map(e=>n("p",{children:e},e))})]})}f.render(n(y.StrictMode,{children:n(w,{})}),document.getElementById("root"));