// filepath: /Users/admin/Documents/GitHub/Hygge/electron/main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Optional
    },
  });

  // Load your React app
  mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});