# simple-control 一个可扩展的后台管理模板

### 项目使用JWT进行权限验证
开发过程中使用的[DuckyGo(一个同时支持Session以及JWT的高性能高可用 Golang Restful API 脚手架 ！)](https://github.com/L-HeliantHuS/DuckyGo)作为后端. 

### SRC目录结构
```
├─api        // 存放用来和后端交互的API
├─assets     // 静态文件目录
│  └─img
├─components // 各种小组件
├─plugins    // axios之类的第三方插件
├─router     // Vue-router存放目录
└─views      // 自己扩展显示的Vue视图
    └─user
```

### 开发进度
还在开发,  `zeitUI`有点鸡肋, 感觉要换个第三方UI库了。
