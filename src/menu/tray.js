import { Tray, Menu, nativeImage, BrowserWindow } from 'electron'
import icon from '../../resources/icon.png?asset'

let tray = null

export const createTray = () => {
  if (tray) return tray

  const image = nativeImage.createFromPath(icon)
  tray = new Tray(image)

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '显示',
      click: () => {
        const win = BrowserWindow.getAllWindows()[0]
        if (win) {
          if (win.isMinimized()) win.restore()
          win.show()
          win.focus()
        }
      }
    },
    {
      label: '隐藏',
      click: () => {
        const win = BrowserWindow.getAllWindows()[0]
        if (win) win.hide()
      }
    },
    { type: 'separator' },
    { label: '重载', role: 'reload' },
    {
      label: '开发者工具',
      click: () => {
        const win = BrowserWindow.getAllWindows()[0]
        if (win) win.webContents.toggleDevTools()
      }
    },
    { type: 'separator' },
    { label: '退出', role: 'quit' }
  ])

  tray.setToolTip('Electron App')
  tray.setContextMenu(contextMenu)

  tray.on('double-click', () => {
    const win = BrowserWindow.getAllWindows()[0]
    if (win) {
      if (win.isMinimized()) win.restore()
      win.show()
      win.focus()
    }
  })

  return tray
}
