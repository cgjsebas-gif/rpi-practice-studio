const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const ctx=vm.createContext({});vm.runInContext(fs.readFileSync('orbit-core.js','utf8'),ctx);const C=ctx.OrbitCore;
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name)};
test('Past scheduled events do not count',()=>{assert.equal(C.completed({status:'confirmed',end:{date:'2020-01-01'}}),false);assert.equal(C.completed({summary:'Not completed homework'}),false)});
test('Explicit completion markers only',()=>{for(const e of [{completed:true},{status:'completed'},{summary:'[DONE] HW'},{summary:'✅ Physics'},{extendedProperties:{private:{orbitariumCompleted:'true'}}}])assert(C.completed(e));assert(!C.completed({status:'cancelled',completed:true}))});
test('Stable source IDs and calendar namespaces',()=>{const e={id:'x',title:'[ASSIGNMENT] Derivatives',completed:true};assert.notEqual(C.normalize(e,'google','a').key,C.normalize(e,'google','b').key);assert.equal(C.normalize(e).key,C.normalize(e).key)});
test('Repeated sync merges and keeps manual entries',()=>{const a=C.normalize({id:'a',title:'Manual',completed:true}),b=C.normalize({id:'b',title:'[DEADLINE] Calendar',completed:true},'google');const merged=C.merge([a,b],[b]);assert.equal(merged.length,2)});
test('Unknown completion date remains unknown',()=>assert.equal(C.normalize({id:'x',title:'HW',completed:true}).completedAt,null));
test('Invalid records rejected',()=>{for(const p of [null,{}, {id:'x',completed:true},{title:'x',completed:true}])assert.equal(C.normalize(p),null)});
test('Deterministic topic themes and lore',()=>{assert.equal(C.themeFor('Calculus'),'cyber');assert.equal(C.themeFor('Organic Chemistry'),'crystal');assert.equal(C.themeFor('Physics'),'ice');let p=C.normalize({id:'x',title:'HW',completed:true});assert.deepEqual(C.world(p),C.world(p));assert(C.sprite(p).includes('crispEdges'))});
test('Imported text cannot enter SVG markup',()=>{const p=C.normalize({id:'x',title:'<script>',completed:true,theme:'<script>'});assert(!C.sprite(p).includes('<script>'))});
test('10,000 records merge without duplication',()=>{const a=Array.from({length:10000},(_,i)=>C.normalize({id:String(i),title:'HW '+i,completed:true}));assert.equal(C.merge(a,a).length,10000)});
console.log(count+' Orbitarium checks passed');

test('Only leading assignment or deadline calendar tags qualify',()=>{for(const title of ['[ASSIGNMENT] HW','[DEADLINE] Exam','[assignment] Quiz'])assert(C.eligible({title}));for(const title of ['Lecture','Office hours','Reminder [ASSIGNMENT]','[DONE] HW',' [DEADLINE] HW','[ASSIGNMENTS] HW']){assert(!C.eligible({title}));assert.equal(C.normalize({id:'x',title,completed:true},'google'),null)}assert(C.normalize({id:'manual',title:'Untagged manual work',completed:true}));assert(!C.completed({title:'[ASSIGNMENT] HW'}))});
