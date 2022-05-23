[EN](README.MD)|中文
## cmdid提取工具

这是Genshin Impact的cmdid提取工具。


警告：请在`/proto`目录放入所有proto文件，否则该工具将不会运行。



开始之前，请确保已安装nodejs。
- 如果尚未安装，可以在 [此处](https://nodejs.org/) 下载。
## 如何使用

步骤一.克隆/下载这个项目


步骤二.将所有proto文件置于/proto/

步骤三.使用 `start.bat` 或者 `node getcmdids_pancake.js` 运行
## 版本1.0.2
 - 修复了选择 `pancake模式` 后依旧执行 `grasscutter模式` 的问题。
 - 选择 `pancake模式` 将生成packetIds.json。
 - 修改了 `grasscutter` 格式生成的文件名。
 - 在生成的文件中添加了一些文本。
 - 您可能依旧需要修改一下 `packetids.json` 的格式。
 - 在使用pancake格式时自动添加  `"13371337": "PacketHead",` 。


