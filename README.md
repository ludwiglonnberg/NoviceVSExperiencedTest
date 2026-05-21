# React + Vite

This is app is based on React and Vite and therefore to test run this code, make sure to have node.js installed on your system. 

to run this code type the following commands into your terminal

````
npm install #this makes sure you have all the packages needed

npm run dev #this will run the code locally and provide you with a link
````

# Some notes regarding file structure and naming

The code from the participants are all in the components folder. There were four participants, two novices and two experienced programmers. 

When looking in the components folder you will see four subfolders

````
testE1
testE2
testN1
testN2
````
the E indicates that the test is from an experienced programmer and the N indicates novice. 

Within each folder you will also find the chat logs with chatGPT-4o from each user. 

# Changing which test to view

This can be done by simply changing the imports of the `App.jsx`, located at the top of that file. Since all component files are named the same way, you only need to change the subfolder of the components folder e.g. 

/components/`testE1`/UserFetch to /components/`testN1`/UserFetch if you were viewing the first experienced test and want to view the first novice test.
