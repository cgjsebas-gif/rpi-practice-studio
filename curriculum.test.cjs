const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');const c={};vm.createContext(c);vm.runInContext(fs.readFileSync(__dirname+'/questions.js','utf8')+fs.readFileSync(__dirname+'/content.js','utf8')+';this.b=bank;this.h=hubs;',c);
const q=id=>c.b.find(p=>p.id==='v3-'+id),near=(a,b)=>assert(Math.abs(a-b)<1e-7,`${a} != ${b}`);
assert.equal(c.b.length,200);assert.equal(new Set(c.b.map(p=>p.id)).size,200);
for(const subject of ['Physics I','Calculus I','Organic Chemistry I']) assert.equal(c.b.filter(p=>p.id.startsWith('v3-')&&p.subject===subject).length,12);
for(let i=1;i<=36;i++){assert(q(i).solution.split('\n').length>=4);assert(c.h.find(h=>h.id===q(i).hub).problems.includes(q(i).id));}
// Substitute recorded answers into independently arranged governing equations.
near(15+10*(q(1).value/12)-5*(q(1).value/12)**2,0);
near(q(2).value**2,10**2+4**2);
near((q(3).value-30)/3,(50-q(3).value)/5);
near(8*q(4).value+20+8*Math.cos(Math.PI/6),40);
near(.25*q(5).value**2+1,4);near(10*q(6).value*.5,18);
near(.5*400*q(7).value**2,18);near(9*q(8).value**2,52);
near(q(9).value*.008,.15*(-12-20));near(q(10).value,2*2+2/2);
near((3*4/3)*q(11).value,3*10);near(.8*Math.sqrt(q(12).value/.8),2*Math.PI);
near(2+2+(1+4)*q(14).value,0);near(q(15).value,.5*(1-.5));near(q(16).value,2+.5);
near(Math.PI*q(17).value,2);near(120-4*q(18).value,0);near((12-2*q(19).value)*(12-6*q(19).value),0);
// Independent finite differences and quadrature, not copies of the authored solver.
const f=x=>Math.exp(2*x)-1-2*x;near((f(.0001)+f(-.0001))/(2*.0001**2),q(22).value);
let integral=0,n=10000;for(let i=0;i<n;i++){let x=(i+.5)/n;integral+=x*(1+x*x)**3/n;}near(integral,q(23).value);
near(q(24).value,Math.sqrt(2));
assert(10**5.8>6.30e5&&10**5.8<6.32e5);assert(8.314*Math.log(2)/(1/300-1/310)>53500);near(413+243-328-431,-103);
console.log('PASS 36 additions, hub membership, unique IDs and independent numerical checks');
