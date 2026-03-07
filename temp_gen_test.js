const fs=require('fs');
const genPath='c:/Users/Elhom/Documents/GitHub/all-plumbing-solutions-web/webmaster electrical Set/electrical-landing-generator.html';
let text=fs.readFileSync(genPath,'utf8');
let m=text.match(/const TMPL = `([\s\S]*?)`;/);
if(!m){console.log('TMPL not found');process.exit(1);} 
let tmpl=m[1];
let fd={PAGE_TITLE:'test',META_DESCRIPTION:'desc',CANONICAL_URL:'url',OG_IMAGE_URL:'img',OG_DESCRIPTION:'og',SCHEMA_NAME:'name',SCHEMA_DESCRIPTION:'desc2',SCHEMA_PHONE:'p',SCHEMA_CITY:'c',SCHEMA_COUNTRY:'co',SCHEMA_HOURS:'h',SCHEMA_AREA:'a',MAP_CENTER_LAT:'51.5',MAP_CENTER_LNG:'-0.1',MAP_ZOOM:'12',MAP_LOC_1_LAT:'51.5',MAP_LOC_1_LNG:'-0.1',MAP_LOC_1_NAME:'loc'};
function buildHTML(){
  let html=tmpl;
  Object.keys(fd).forEach(tag=>{
    let val=fd[tag];
    if(val&&val.trim()) html=html.split('['+tag+']').join(val);
  });
  html=html.split('<\\/script>').join('<'+'/'+'script>');
  return html;
}
let out=buildHTML();
fs.writeFileSync('out.html',out);
console.log('Written out.html length',out.length);
let idx=out.indexOf('leaflet.js');
console.log('Snippet around leaflet script:');
console.log(out.slice(idx-100,idx+200));
