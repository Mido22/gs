module.exports = function (grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    var copy = {}
     , defaultTasks = []
     , clean = {}
    ;

    copy.dest = {
	    expand: true,
	    cwd: 'public/',
	    src: '**',
	    dest: 'dest/',
		rename: function(dest, src) {
			return dest + src.replace(/\.html$/, ".jsp");
		} 
  	};

  	clean.dest = ['dest/'];

    grunt.initConfig({
		copy:copy	
		, clean: clean
    });
    grunt.registerTask('default', []);
    grunt.registerTask('copy11', ['clean:dest', 'copy:dest']);
}