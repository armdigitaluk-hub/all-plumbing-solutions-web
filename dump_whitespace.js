const fs=require('fs');
const lines=fs.readFileSync('c:/Users/Elhom/Documents/GitHub/all-plumbing-solutions-web/webmaster electrical Set/electrical-landing-generator.html','utf8').split(/\r?\n/);
for(let i=1154;i<=1166;i++){
  let line=lines[i]||'';
  console.log((i+1)+': '+line.replace(/ /g,'·').replace(/\t/g,'\t'));
}
