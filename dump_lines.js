const fs=require('fs');
const path='c:/Users/Elhom/Documents/GitHub/all-plumbing-solutions-web/webmaster electrical Set/electrical-landing-generator.html';
const lines=fs.readFileSync(path,'utf8').split(/\r?\n/);
console.log('total',lines.length);
for(let i=450;i<520;i++){
  console.log((i+1)+": "+lines[i]);
}
