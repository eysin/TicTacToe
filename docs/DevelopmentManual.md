#Development Manual 

##### Late Term Assignment - Hugbúnaðarfræði 2018

The TicTacToe project is stored in GitHub under the git repository https://github.com/eysin/TicTacToe. 
In order to fetch the source code from the repository, you have two options: 

1.  Fetch the code, using the browser of your choice, into a folder of your choice in your machine, and editing the code from there. This is not recommended since pushing and merging is difficult to do exclusively through the web interface.  

2.  Install the GIT CLI straight to your machine, navigate in the cli into the folder which will contain the source code for the project, and run the following commands. 
    1. "git init" to initialize the directory as a git project. 
    2. "git remote add origin [https://github.com/eysin/TicTacToe.git](https://github.com/eysin/TicTacToe.git)" To remotely link the repo. 
    3. "git pull origin master" to then fetch the master branch of the project. 

By following either of those steps, you should now have the source code in your machine. However, that is not all that is required to build the project.


Our TicTacToe uses the Node.js infrastructure in order to run, and it needs to be installed before development can start. 

You can fetch the latest version of Node [here](https://nodejs.org/en/), but the project, at its current stage is using version 11.0.0, so it's highly recommended that you fetch that. 

Once Node.js has been installed onto your machine, open the CLI of your choice, navigate that into your project folder, and run the following commands:

1. "npm install" This fetches all the node modules that are required for the project. 
2. "npm start" This starts a localhost server where your code can be tested on. 
  
Optionally, the command "npm test" runs our test case for the website, and all tests are required to succeed for the changes to the master branch to deploy to our web server. 