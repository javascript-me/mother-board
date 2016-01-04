module.exports=function(grunt){
    grunt.initConfig({
        browserify:{
            dist:{
                options:{
                    transform:[['babelify',{'presets':"es2015"}]]
                },
                files: {
                    './dist/mother-board.js':['./lib/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('build',["browserify"]);

    grunt.registerTask('default',["build"]);
};

