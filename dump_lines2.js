const fs=require('fs');
const path='c:/Users/Elhom/Documents/GitHub/all-plumbing-solutions-web/webmaster electrical Set/electrical-landing-generator.html';
const lines=fs.readFileSync(path,'utf8').split(/\r?\n/);
console.log('total lines',lines.length);
let start=850;
let end=960;
for(let i=start-1;i<end && i<lines.length;i++){
  console.log((i+1)+": "+lines[i]);
}
