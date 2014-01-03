using-grunt-curl-to-build-in-php-and-create-html
================================================

How to use grunt-curl to create a html site out of php, this demo also creates css from sass and concats multiple js files into one file, all while using watch to wait for changes

##Setup
###Grunt
	0. Install node, grunt, sass, etc
	1. Create package.json using 
		$ npm init
	2. Install grunt for the project
		http://gruntjs.com/getting-started
		$ npm install grunt --save-dev
	3. Set up Gruntfile.js
	4. Install grunt-contrib-watch
		https://github.com/gruntjs/grunt-contrib-watch
		$ npm install grunt --save-dev
		add it to Gruntfile.js: grunt.loadNpmTasks('grunt-contrib-watch');
	5. Install grunt-contrib-sass
		https://github.com/gruntjs/grunt-contrib-sass
		$ npm install grunt-contrib-sass --save-dev
		add it to Gruntfile.js: grunt.loadNpmTasks('grunt-contrib-sass');
	6. Install grunt-contrib-uglify
		https://github.com/gruntjs/grunt-contrib-uglify
		$ npm install grunt-contrib-uglify --save-dev
		add it to Gruntfile.js: grunt.loadNpmTasks('grunt-contrib-uglify');
	7. Install grunt-curl
		https://github.com/twolfson/grunt-curl
		$ npm install grunt-curl --save-dev
		add it to the Gruntfile.js: grunt.loadNpmTasks('grunt-curl');
	8. Set up sass, uglify and curl, then set up to watch them
		* Check out the Gruntfile.js
	9. Turn on the php!
		$ cd project-directory
		$ php -S "0.0.0.0:8080"
		* at this point, you can see your files using php @ http://0.0.0.0:8080/app/php except the css and js will be in the wrong folders because the goal is to get it all into the build folder
	8. Watch and build!
		$ cd project-directory
		$ grunt
		now if you save a js, scss or php file, it will be compiled/concatenated into the build folder
		
###Folder Structure

	project root folder
		+- 	app (where all the parts live)
			+- js 
				+-	libraries
				script.js (the main project javascript)
			+- php
				+- inc (include files)
				index.php (example file)
			+-	styles
				+-	base (sample folder for SASS)
				styles.scss (main SASS file)
		+-	build (where the final project is compiled to)
			+-	js
				script.js (final js file, concat'd using uglify + grunt)
			+-	styles
				styles.css (final css file, compiled using SASS + grunt)
			index.html (compiled using curl + grunt)