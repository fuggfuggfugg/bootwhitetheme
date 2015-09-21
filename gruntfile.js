module.exports = function(grunt){ 
 
  grunt.initConfig({ 
        pkg: grunt.file.readJSON('package.json') ,
        serve: {
	        options: {
	            port: 9002
	        }
	    }
  });
 
  grunt.registerTask('default', function() { 
      grunt.log.writeln('Hello, from the default grunt task!'); 
  });
 
 grunt.loadNpmTasks('grunt-serve');
}