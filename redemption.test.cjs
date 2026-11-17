const assert=require('node:assert/strict'),E=require('./engine.js');
const a=(attemptId,correct,confidence='Confident')=>({id:'q',attemptId,correct,status:correct?'correct':'incorrect',confidence,at:new Date().toISOString()});
assert.equal(typeof E.redemption,'function');
assert.deepEqual(E.redemption([a('1',false),a('2',true)]),['q']);
assert.deepEqual(E.redemption([a('1',false),a('2',true),a('2',true)]),['q']);
assert.deepEqual(E.redemption([a('1',false),a('2',true),a('3',true)]),[]);
assert.deepEqual(E.redemption([a('1',true,'Guessed')]),['q']);
assert.deepEqual(E.redemption([a('1',false),a('2',true),a('3',false),a('4',true)]),['q']);
assert(E.reviewDue([a('1',true,'Guessed')],['q']).includes('q'));
console.log('PASS redemption requires distinct consecutive confident successes');

assert.deepEqual(E.redemption([{...a('1',true),failedAttempt:true},a('2',true)]),['q']);
const raw=E.defaults();raw.session={ids:['q'],index:0,started:1,mode:'Timed exam',responses:{0:{status:'submitted',answer:'A',confidence:'Guessed'}}};raw.drafts.q={answer:'A',scratchpad:'Keep my notes'};
const restored=E.sanitize(raw,['q'],[]);assert.equal(restored.session.responses[0].confidence,'Guessed');assert.equal(restored.drafts.q.scratchpad,'Keep my notes');
