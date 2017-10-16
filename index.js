const { app, BrowserWindow } = require('electron')

let win

app.on('ready', function () {
  win = new BrowserWindow({ width: 1270, height: 900 })

  win.loadURL(`file://${__dirname}/index.html`)
})
