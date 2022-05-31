/*

I never debug this.
Maybe it cannot work well.
Based on Boba Rewritten.

*/

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
      protoStr += `   "${file.replace('.proto', '')}": "${cmdId[1]}",\n`;
    }
  })

  fs.writeFileSync('./packetIds-boba.json', '{\n   ','utf-8');
  fs.appendFileSync('./packetIds-boba.json', protoStr);
  const appendFileContent = '}';

  fs.appendFileSync('./packetIds-boba.json', appendFileContent, 'utf-8');
}

getCmdids();

console.log('(test)操作成功完成。请查看./packetIds-boba.json。');
