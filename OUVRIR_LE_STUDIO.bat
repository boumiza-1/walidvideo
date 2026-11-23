@echo off
cd /d "%~dp0"
call npm.cmd install
if errorlevel 1 (
  echo Erreur pendant npm install. Verifiez Internet et Node.js.
  pause
  exit /b 1
)
call npm.cmd run dev
pause
