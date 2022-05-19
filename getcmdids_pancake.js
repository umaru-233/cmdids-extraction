const fs = require('fs');
const protoPath = './proto/';

const protoFiles = fs.readdirSync(protoPath);
let protoStr = '';

for (const file of protoFiles) {
    console.log(`Processing ${file.name}`);
    const content = fs.readFileSync(protoPath + file, 'utf-8');
    const cmdId = content.match(/CMD_ID = (\d+);/);
    if (cmdId) protoStr += `"${cmdId[1]}": "${file.replace('.proto', '')}",\n`;
}

fs.writeFileSync('./packetIds.json', protoStr);
console.log('Done! Written to ./packetIds.json');
