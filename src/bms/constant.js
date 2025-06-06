export const allMenu = [
  {
    id: 1,
    pathName: 'Home',
    menuName: '首页',
    menuIcon: 'el-icon-s-home',
    permissionStr: 'Home'
  },
  {
    id: 2,
    pathName: 'Business',
    menuName: '业务管理',
    menuIcon: 'el-icon-s-platform',
    permissionStr: 'Business',
    children: [
      {
        id: 3,
        pathName: 'SMS',
        menuName: '短信息管理',
        menuIcon: 'el-icon-chat-line-round',
        permissionStr: 'Business:SMS'
      },
       {
        id: 4,
        pathName: 'SMSDataRules',
        menuName: '短信数据规则',
        menuIcon: 'el-icon-chat-line-round',
        permissionStr: 'Business:SMSDataRules'
      }
    ]
  },
  {
    id: 5,
    pathName: 'Config',
    menuName: '系统设置',
    menuIcon: 'el-icon-s-tools',
    permissionStr: 'Config',
    children: [
      {
        id: 6,
        pathName: 'Account',
        menuName: '账号管理',
        menuIcon: 'el-icon-user-solid',
        permissionStr: 'Config:UserRoles'

      },
      {
        id: 7,
        pathName: 'UserRoles',
        menuName: '角色管理',
        menuIcon: 'el-icon-user',
        permissionStr: 'Config:UserRoles'

      }
    ]
  }
]
