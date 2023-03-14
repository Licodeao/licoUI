# 快速开始

#### 安装组件库

```bash
  npm install lico-ui
```

#### 引用组件库

> 在 main.js 中引用组件库

```javascript
// 全部引入
import "lico-ui/dist/css/index.css";
import LUI from "lico-ui";
Vue.use(LUI);
```

```javascript
// 按需引入
import "lico-ui/dist/css/demo.css";
import { Demo } from "lico-ui";
Vue.use(Demo);
```
