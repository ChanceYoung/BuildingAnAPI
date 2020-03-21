# BuildingAnAPI
Package-lock.json keeps track of child files, this is important in case of a version update where the child updates to a broken version. If there are errors saying "This might be a problem with npm" Delete the package-lock.json and run the command: npm install

The package.json file is the configuration settings. The "scripts" key is useful because you can run command line scripts from it. For example if my entry point file is "index.js" I can create a script that runs it at startup "start":"node index.js". 

require brings the node module into the repo. 

Servers have a request and a response. When I send a request to the server, the server will send a response based on the request. 

JSON.stringify() takes any object in javascript and turn it into a string in JSON. 
