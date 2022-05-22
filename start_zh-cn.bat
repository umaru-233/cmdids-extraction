@echo off
title cmdid提取工具 1.0.2
echo. 版本：1.0.2
echo. 开发者：umaru
echo. 构建日期：May 22, 2022
echo. 欢迎使用cmdid提取工具。
echo. 警告：请将所有欲提取的proto文件放在./proto/目录内，否则程序将无法运行。
echo. 在开始前，请确定你已安装nodejs。如果未安装，请前往此处下载。
echo. https://nodejs.org/
goto menu
:menu
echo.[1] Pancake 格式
echo.[2] Grasscutter 格式
set /p choose_format=请按1或2 
if %choose_format%==1 goto :pancake
if %choose_format%==2 goto :grasscutter
:pancake
rem 
node getcmdids_pancake_zh-cn.js
pause
.\packetIds.json
exit
:grasscutter
node getcmdids_grasscutter_zh-cn.js
pause
.\PacketOpcodes.java
exit
