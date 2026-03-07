const fs=require('fs');
const html=fs.readFileSync('c:/Users/Elhom/Documents/GitHub/all-plumbing-solutions-web/webmaster electrical Set/electrical-landing-generator.html','utf8');
let match=html.match(/<script>([\s\S]*)<\/script>/);
if(!match){console.log('no script?'); process.exit(1);} 
let code=match[1];
try{ new Function(code); console.log('script syntax OK'); }
catch(e){ console.error('syntax error',e); }
