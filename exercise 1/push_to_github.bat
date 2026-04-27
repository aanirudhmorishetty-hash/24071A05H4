@echo off
echo ========================================================
echo Pushing Hospman to GitHub (exercise 1)
echo ========================================================
echo.

cd /d "%~dp0"
cd ..

echo [*] Cloning repository...
git clone https://github.com/aanirudhmorishetty-hash/24071A05H4.git
if %ERRORLEVEL% NEQ 0 (
    echo [!] Failed to clone repository. Make sure git is installed.
    pause
    exit /b
)

cd 24071A05H4
mkdir "exercise 1"

echo [*] Copying project files...
robocopy "..\Hospman" "exercise 1" /E /XD node_modules .git dist repo

echo [*] Committing to Git...
git add .
git commit -m "Add Hospman project as exercise 1"

echo [*] Pushing to GitHub...
git push origin main

echo.
echo ========================================================
echo Done! You can close this window now.
echo ========================================================
pause
