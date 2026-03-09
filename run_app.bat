@echo off
echo Starting Atlas Deployment Hub...
echo.
echo Checking for Node.js...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/ to run this app.
    pause
    exit /b
)

echo Starting local server on http://localhost:3000
echo (This window must stay open while using the app)
echo.
npx serve -s dist -l 3000
pause
