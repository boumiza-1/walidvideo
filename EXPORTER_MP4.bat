@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Les dependances ne sont pas installees. Lancez OUVRIR_LE_STUDIO.bat d'abord.
  pause
  exit /b 1
)
call npm.cmd run render
if errorlevel 1 (
 echo Une erreur s'est produite durant le rendu.
) else (
 echo Video exportee dans out\walid-site-40s.mp4
)
pause
