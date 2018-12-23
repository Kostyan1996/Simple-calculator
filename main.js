const { app, BrowserWindow, Menu } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadFile('index.html');

    win.on('closed', function() {
        win = null; // Это надо только если приложение не закрывается
        app.quit();
    });

    //Menu.setApplicationMenu(null);
}

app.on('ready', createWindow);