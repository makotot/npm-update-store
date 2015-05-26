var app = require('app'),
  BrowserWindow = require('browser-window');

require('crash-reporter').start();


var mainWin;

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  mainWin = new BrowserWindow({
    width: 700,
    height: 800
  });

  mainWin.loadUrl('file://' + __dirname + '/index.html');
  mainWin.openDevTools();

  mainWin.on('closed', function () {
    mainWin = null;
  });
});

