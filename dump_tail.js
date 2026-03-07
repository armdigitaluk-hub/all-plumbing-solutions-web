const fs=require('fs');
const path='c:/Users/Elhom/Documents/GitHub/all-plumbing-solutions-web/webmaster electrical Set/electrical-landing-generator.html';
const content=fs.readFileSync(path,'utf8');
const lines=content.split(/\r?\n/);
console.log('total lines',lines.length);
console.log('last 20 lines:');
console.log(lines.slice(-20).join('\n'));
