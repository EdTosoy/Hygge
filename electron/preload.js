// filepath: /Users/admin/Documents/GitHub/Hygge/electron/preload.js
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  sendNotification: (message) => {
    new Notification("Notification", { body: message });
  },
});