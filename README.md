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

browserify test/hello-test.js -t babelify -o dist/hello-test-bundle.js && mocha dist/hello-test-bundle.js

注意：

1、 由于在lib/main.js里面使用了ES6的语法，所以package.json中的“script” -> “build”里面必须加入“-t babelify”来对其进行“转编译”。如果不加这个指令，会出现编译错误。

