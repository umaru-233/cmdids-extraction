@echo off
color 1F
title Cmdids Extraction Tool 1.0.0 
echo. Version:1.0.0 
echo. Developer:umaru
echo. Build date:May 20, 2022
echo. Welcome to use cmdids Extraction tool.
echo. Warning: Please put all proto files in ./proto/ directory, otherwise the tool will not run.
echo. Before you start, make sure nodejs is installed. If you haven't installed it, you can download it here.
echo. https://nodejs.org/
goto menu
:menu
echo.[1] Pancake format 
echo.[2] Grasscutter format
echo.[3] ÖÐÎÄ
set /p choose_format=Please press 1, 2 or 3 
if %choose_format%==1 goto :pancake
if %choose_format%==2 goto :grasscutter
if %choose_format%==3 goto :start_zh-cn
:pancake
rem 
node getcmdids_pancake.js
pause
:grasscutter
node getcmdids_grasscutter.js
pause
:start_zh-cn
start_zh-cn.bat