#Administration manual 

##### Late Term Assignment - Hugbúnaðarfræði 2018
 
Our project is hosted on an Azure Cloud machine, with Jenkins built into it for continuous integration.  
Setup for that environment is done through the following steps: 
 
1.  In the server of your choice, set up your web server of choice. In our case, we are using IIS on a windows machine, however, any web server works for our project. 
 
2.  Install Node.js into your machine, version 11.0.0 from [https://nodejs.org/en/](https://nodejs.org/en/) is highly recommended. 
 
3.  Install Jenkins to your server and perform the following steps: 
	1. In the initial setup, select the GIT plugin as a dependent. 
	2. Once the initial setup has been concluded, create a new freestyle deployment map. 
	3. Add the git repository [https://github.com/eysin/TicTacToe.git](https://github.com/eysin/TicTacToe.git) into the source control management. Credentials aren’t required since the repo is public. Also select the branch you want the server to monitor. 
	4. For build trigger, select "GitHub hook trigger for GITScm polling". 
	5. In the build sections, add the following commands in the appropriate CLI interface, we're using "Windows Batch Command" for our windows server. 
    	1. "npm install" fetches the modules needed to build the project. 
    	2. "npm run build" Creates a deployable build folder for the project. 
    	3. "npm test" runs the test case to see if the build is valid or not. 
    	4. For this step, we have a windows command that fetches the contents of the build/folder and copies it over to the wwwroot folder for our windows server. Any command that copies files over could be used for the same effect, depending on the OS the server is running on. 
	6. Then, in the git repository, add the following under Settings->Webhooks: http://<Server-Location>:8080/github-webhook/, and have it trigger on each push to master. 

Once the following steps have been concluded, you should have a web server set up that automatically fetches each change on the master branch of the project, tests it and deploys it to the web server. 
 
If, however, you simply want a static version of the website built, all you need is Node.js installed, and a web server to access.  
In order to deploy the project in that manner, you should run "npm install" in the project's root folder, in order to get all of the package dependencies, then run "npm run build" to run the automatic script that creates a ready-to-deploy version of the project, and then you can take the contents from the build/ folder that has just been created and move it to the web server of your choice.