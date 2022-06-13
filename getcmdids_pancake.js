function getCmdids() {
    const fs = require('fs');
    const protoPath = './proto/';
    console.log('Extracting CMDIDs...');
    const protoFiles = fs.readdirSync(protoPath);
    let protoStr = '';
    protoFiles.forEach(file => {
        const content = fs.readFileSync(protoPath + file, 'utf-8');
        let cmdId = content.match(/CMD_ID = (\d+);/);
        if (cmdId === null) {
            let cmdId = content.match(/CmdId: (\d+)/);
            if (cmdId) {
                protoStr += `   "${cmdId[1]}": "${file.replace('.proto', '')}",\n`;
            }
        }
        else {
            protoStr += `   "${cmdId[1]}": "${file.replace('.proto', '')}",\n`;
        }
    })
    fs.writeFileSync('./Output/packetIds.json', '{\n   "13371337": "PacketHead",\n', 'utf-8');
    fs.appendFileSync('./Output/packetIds.json', protoStr);
    const appendFileContent = '}';
    fs.appendFileSync('./Output/packetIds.json', appendFileContent, 'utf-8');
}
getCmdids();
console.log('Done! Please check ./Output/packetIds.json');
