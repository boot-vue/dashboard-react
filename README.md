

```jason
src/util/axios: 封装axios, 自定义配置

App组件: 顶层路由控制,根据store里的token是否有值进行路由

src/store: store容器, reducers与saga中间件进行了拆分,每个组件维护自己的, 最后在这里组合, 所有的异步数据请求都交给saga来干

src/page/login: 用户名&密码提交saga中间件处理,获取token存储到store中

src/mock: mock api数据(登录默认root,root)详见mock.js文件
```

### 页面结构: 左(导航) 右(head+content)

