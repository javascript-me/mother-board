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

1、 由于在lib/main.js里面使用了ES6的语法，所以package.json中的“script” -> “build”里面必须加入“-t babelify”来对其进行“转编译”。如果不加这个指令，会出现编译错误。

待办：

1、完善build script。
2、完善grunt。
3、(done)找到对ES6进行单元测试的更好的方法。
