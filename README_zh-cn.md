[EN](README.MD)|中文

# cmdid提取工具
>这是 Genshin Impact 的 CMD IDs/Packet IDs 提取工具。

## 用法
**开始之前，请确保已安装nodejs。如果尚未安装，可以在 [此处](https://nodejs.org/) 下载。**

### 步骤一.克隆/下载这个项目

### 步骤二.将所有proto文件置于 `./proto`

### 步骤三.运行 `start.bat` 或者 `node getcmdids_pancake.js`

### 步骤四.文件将在 `./Output` 中生成

#更新
Sycamore0：
 - 修复了选择 `pancake模式` 后依旧执行 `grasscutter模式` 的问题。
 - 选择 `pancake模式` 将生成packetIds.json。
 - 修改了 `grasscutter` 格式生成的文件名。
 - 在生成的文件中添加了一些文本。
 - 您可能依旧需要修改一下 `packetids.json` 的格式。
 - 在使用pancake格式时自动添加  `"13371337": "PacketHead",` 。
 - 改变文件的生成位置。
 - 不再在文件生成后打开文件。

JuliusPtolemy：
 - 修复了对2.7proto的cmdids提取异常的问题。
 - 批处理文件中包含的文件格式。
 - 使 `PacketOpcodes.java` 适配当前的Grasscutter。
 - 编辑控制台日志。
