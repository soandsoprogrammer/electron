const { app, Menu } = require('electron')

// 定义菜单模板
const menuTemplate = [
  {
    label: '文件',
    submenu: [
      { label: '新建', accelerator: 'CmdOrCtrl+N', click: () => console.log('新建文件') },
      { label: '打开', accelerator: 'CmdOrCtrl+O', click: () => console.log('打开文件') },
      { type: 'separator' }, // 分隔线
      { label: '退出', role: 'quit' }
    ]
  },
  {
    label: '编辑',
    submenu: [
      { label: '撤销', role: 'undo' },
      { label: '重做', role: 'redo' },
      { type: 'separator' },
      { label: '剪切', role: 'cut' },
      { label: '复制', role: 'copy' },
      { label: '粘贴', role: 'paste' }
    ]
  },
  {
    label: '视图',
    submenu: [
      { label: '重新加载', role: 'reload' },
      { label: '开发者工具', role: 'toggleDevTools' }
    ]
  }
]

app.whenReady().then(() => {
  // 构建菜单并设置为应用菜单
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)

  // 创建窗口...
})
