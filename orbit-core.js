/* Pure data model: stable IDs, explicit completion, deterministic worlds. */
(function(root){
'use strict';
const themes={cyber:{name:'Cyber-grid',colors:['#153448','#29d6ce','#c3fff2'],biome:'fractal cities and neon canyons',weather:'binary auroras',creature:'tiny abacus foxes'},ice:{name:'Ice',colors:['#25456c','#77cced','#eefaff'],biome:'crystal glaciers and frozen observatories',weather:'diamond snow',creature:'magnetic snow-owls'},forest:{name:'Forest',colors:['#193d36','#54a86b','#d3eda3'],biome:'ink-leaf forests and storybook wetlands',weather:'luminous pollen rain',creature:'bookmark dragons'},volcanic:{name:'Volcanic',colors:['#51294a','#f56a50','#ffda81'],biome:'obsidian libraries and ember mountains',weather:'copper meteor showers',creature:'clockwork salamanders'},crystal:{name:'Crystal',colors:['#432e69','#ae83f2','#f3c9ff'],biome:'chiral crystal gardens and violet seas',weather:'prismatic mist',creature:'six-winged molecular moths'}};
function hash(s){let n=2166136261;for(const c of s)n=Math.imul(n^c.charCodeAt(0),16777619);return n>>>0}
function themeFor(s){return /calc|math|algebra/i.test(s)?'cyber':/chem|molecul|orgo/i.test(s)?'crystal':/physics|science|lab/i.test(s)?'ice':/history/i.test(s)?'volcanic':'forest'}
function completed(e){return e.status!=='cancelled'&&(e.completed===true||e.status==='completed'||e.extendedProperties?.private?.orbitariumCompleted==='true'||/^\s*(\[DONE\]|✅)/i.test(e.summary||''))}
function normalize(e,source='manual',calendar='primary'){
 if(!e||typeof e!=='object'||!completed(e))return null;
 const title=String(e.title||e.summary||'').trim().slice(0,180);if(!title)return null;
 const id=String(e.id||'').slice(0,500);if(!id)return null;
 const topic=String(e.topic||e.course||'Independent study').slice(0,120);
 const key=String(e.key||JSON.stringify([source,calendar,id]));
 const date=e.completedAt&&Number.isFinite(Date.parse(e.completedAt))?e.completedAt:null;
 return {key,id,title,topic,source,calendar,completed:true,completedAt:date,theme:themes[e.theme]?e.theme:themeFor(title+' '+topic),notes:String(e.notes||'').slice(0,2000)};
}
function world(p){const n=hash(p.key),t=themes[p.theme];return {name:['Astra','Luma','Kepler','Nori','Vela','Solara'][n%6]+'-'+(n%997+1),seed:n,bio:`Forged by your work on “${p.title}”, this world shelters ${t.biome}. Its skies carry ${t.weather}; ${t.creature} preserve each hard-won discovery. Explorers call this the ${p.topic} archive.`}}
function merge(current,incoming){const map=new Map(current.map(p=>[p.key,p]));for(const p of incoming){if(p)map.set(p.key,{...map.get(p.key),...p})}return [...map.values()]}
function sprite(p){const t=themes[p.theme],seed=hash(p.key);let r='';for(let y=0;y<20;y++)for(let x=0;x<20;x++){if((x-9.5)**2+(y-9.5)**2>86)continue;const v=hash(seed+':'+x+':'+y);let color=t.colors[(v%11<3)?2:(x+y>22?0:1)];if(p.theme==='cyber'&&(x%4===0||y%4===0))color=t.colors[0];r+=`<rect x="${x}" y="${y}" width="1" height="1" fill="${color}"/>`}return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" shape-rendering="crispEdges">${r}</svg>`}
root.OrbitCore={themes,themeFor,hash,completed,normalize,world,merge,sprite};
})(typeof window==='undefined'?globalThis:window);
