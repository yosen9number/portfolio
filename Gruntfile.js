module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        less: {
            style: {
                files: {
                    "css/style.css": ["less/style.less"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                },
            },
        }
    });

}