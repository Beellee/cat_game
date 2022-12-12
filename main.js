const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');

//const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'darwin'

// Create the main window
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Bri gift <3',
        width: 810,
        height: 835
    });

    //open dev tools if in dev mode
   /* if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    */

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

//Create About window
function createAboutWindow(){
    const aboutWindow = new BrowserWindow({
        title: 'About Bri gift <3',
        width: 400,
        height: 523
    });

    aboutWindow.loadFile(path.join(__dirname, './renderer/about.html'));
}


//App is ready 
app.whenReady().then(() => {
    createMainWindow();

    //Implement menu
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
    })
});

// Menu template 
const menu = [
    ...(isMac ? [{
        label: app.name,
        submenu: [
            {
                label: 'About',
                click: createAboutWindow
            },
        ],
    }] : []),
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                click: () => app.quit(),
                accelerator: 'CmdOrCtrl+W'
            }
        ]
    },
    ...(!isMac ? [{
        label: 'Help',
        submenu: [
            {
                label:'About', 
                click: createAboutWindow 
            },
        ],
    }] : [])
];

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit()
    }
})
