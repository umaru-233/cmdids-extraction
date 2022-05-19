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
        protoStr += `public static final int ${file.replace('.proto', '')} = ${cmdId[1]};\n`;
      }
    })
    fs.writeFileSync('./cmdids.txt', protoStr);
  }
  getCmdids();
  console.log('操作成功完成。请查看./cmdids.txt。');
   