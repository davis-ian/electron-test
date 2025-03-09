const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = process.env.NODE_ENV === "development";
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    if (isDev) {
        // In development, wait for Vite dev server
        win.loadURL("http://127.0.0.1:5173");
        win.webContents.openDevTools();
    }
    else {
        // In production, load the built files
        win.loadFile(path.resolve(__dirname, "..", "dist", "index.html"));
    }
    return win;
}
app.whenReady().then(() => {
    const mainWindow = createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
