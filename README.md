mother-board
---------------------

安装所有的依赖

npm install

第一种编译的方法

npm run build

第二种编译的方法

grunt

跑编译的结果

node dist/mother-board.js

生成最小化的文件

npm run uglifyjs

跑最小的文件

node dist/mother-board.min.js

跑单元测试的方法

npm run test

注意：

1、package.json中的“script” -> “build”里面有片段“[ babelify --presets [es2015] ]”，其中的空格至关重要。
2、文件.babelrc会被package.json中的“script” -> “test”里面的指令“mocha --compilers js:babel-core/register test”使用到。


