all:
	echo "Build with target 'win' for windows or 'linux' for linux / OSX"
	echo "Build with target 'browser' to open in firefox"

# Windows
win: app.js
	node app.js

# Linux / OSX
linux: app.js
	sudo node app.js

# Firefox
browser: public/index.html
	firefox public/index.html
