const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win = null
app.on('ready',()=>{
    win = new BrowserWindow({
        width:800,
        height:200
    })
    win.loadURL(url.format({
        pathname:path.resolve(__dirname,'./html/index.html'),
        protocol:'file:',
        slashes:true
    }))
})