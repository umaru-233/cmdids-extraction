function getCmdids() {
    const fs = require('fs');
    const protoPath = './proto/';
    console.log('找到proto文件。请稍后。');
    const protoFiles = fs.readdirSync(protoPath);
    let protoStr = '';
    protoFiles.forEach(file => {
      const content = fs.readFileSync(protoPath + file, 'utf-8');
      let cmdId = content.match(/CMD_ID = (\d+);/);
       if (cmdId === null) {
           let cmdId = content.match(/CmdId: (\d+)/);
           if (cmdId) {
               protoStr += `public static final int ${file.replace('.proto', '')} = ${cmdId[1]};\n`;
           }
       }
       else {
            protoStr += `public static final int ${file.replace('.proto', '')} = ${cmdId[1]};\n`;
       }
    })
    fs.writeFileSync('./PacketOpcodes.java', 'package emu.grasscutter.net.packet;\nimport java.util.Arrays;\nimport java.util.HashSet;\nimport java.util.List;\npublic class PacketOpcodes {\n    public static final int NONE = 0;\n\n','utf-8');
    fs.appendFileSync('./PacketOpcodes.java', protoStr,'utf-8');
    const appendFileContent = "\npublic static final HashSet<Integer> BANNED_PACKETS = new HashSet<Integer>() {{\n    add(PacketOpcodes.WindSeedClientNotify);\n    add(PacketOpcodes.PlayerLuaShellNotify);\n    }};\n}\n";
    fs.appendFileSync('./PacketOpcodes.java', appendFileContent, 'utf-8');
  }
  getCmdids();
  console.log('操作成功完成。请查看./PacketOpcodes.java。');
