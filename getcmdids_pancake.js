function npm_run_devstart() {
  const fs = require('fs');
  const protoPath = './proto/';
  console.log('Found proto files.Please wait...');
  const protoFiles = fs.readdirSync(protoPath);
  let protoStr = '';
  protoFiles.forEach(file => {
    const content = fs.readFileSync(protoPath + file, 'utf-8');
    const cmdId = content.match(/CMD_ID = (\d+);/);
    if (cmdId) {
      protoStr += `"${cmdId[1]}": "${file.replace('.proto', '')}",\n`;
    }
  })
  fs.writeFileSync('./cmdids.json', protoStr);
}
npm_run_devstart();
console.log('done!Please check the ./cmdids.json file.');

 
