function getCmdids() {
  const fs = require('fs');
  const protoPath = './proto/';
  console.log('找到proto文件。请稍后。');
  const protoFiles = fs.readdirSync(protoPath);
  let protoStr = '';
  protoFiles.forEach(file => {
    const content = fs.readFileSync(protoPath + file, 'utf-8');
    const cmdId = content.match(/CMD_ID = (\d+);/);
    if (cmdId) {
      protoStr += `"${cmdId[1]}": "${file.replace('.proto', '')}",\n`;
    }
  })
  fs.writeFileSync('./packetIds.json', protoStr);
}
getCmdids();
console.log('操作成功完成。请查看./cmdids.json。');

 
