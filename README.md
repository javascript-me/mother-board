mother-board
---------------------

### 安装全局的依赖

npm install -g grunt-cli

### 安装开发相关的依赖

npm install

### 第一种编译的方法

npm run build

### 第二种编译的方法

grunt

### 跑编译的结果

node dist/mother-board.js

### 打开dist/index.html文件

### 生成最小化的文件

npm run uglifyjs

### 跑最小的文件

node dist/mother-board.min.js

### 跑单元测试的方法

npm run test

### 注意：

1. package.json中的“script” -> “build”里面有片段“[ babelify --presets [es2015] ]”，其中的空格至关重要。
2. 文件.babelrc会被package.json中的“script” -> “test”里面的指令“mocha --compilers js:babel-core/register test”使用到。
3. grunt的命令一定要来自全局，所以要执行“npm install -g grunt-cli”。
4. package.json里面一定要加入以下这个部分，否则grunt指令跑不起来。

```
  "dependencies": {
    "grunt": "0.4.5"
  }
```

### 疑问：

1. package.json里面的dependencies是不是devDependencies的一个子集？

