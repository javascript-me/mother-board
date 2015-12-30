module.exports=function(grunt){
    grunt.initConfig({
        browserify:{
            dist:{
                options:{
                    transform:[['babelify',{'loose':"all"}]]
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

