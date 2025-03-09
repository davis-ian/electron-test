var _a = require("electron"), app = _a.app, BrowserWindow = _a.BrowserWindow;
var path = require("path");
function createWindow() {
    var win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    // In development, use the Vite dev server
    if (!app.isPackaged) {
        win.loadURL("http://localhost:5173");
        win.webContents.openDevTools();
    }
    else {
        // In production, load the built files
        win.loadFile(path.join(__dirname, "../dist/index.html"));
    }
}
app.whenReady().then(function () {
    createWindow();
    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
