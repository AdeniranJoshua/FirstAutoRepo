Racing Exercise
* The estimate for this ticket will be 8 points
* This exercise has been completed to the best of my knowledge there are things I had not implemented before which I had to learn the basics for this exercise, lots more to know & understand.
Among them is working with wdio,yarn,chai,creating a github account so I could repro my work to you.
Issues with Sourcetree and github are reasons why it was not delivered on time.
Please see the read.md file on the best way to run the test.

Racing Post UI Automation Suite
=====================================

This is automation suite to test functionality of the Racing Post website. 

The project has 2 tests that can be located within the feature file feature/RaceCards.feature

  #### Included Tests
Scenario 1 - Big race event displays next upcomming event

Scenario 2 - Runners Tab - Runner Index Buttons are named correctly and displayed in expected order

  #### You will need:

- node and npm installed (https://nodejs.org/en/download/)
- yarn installed (https://classic.yarnpkg.com/lang/en/)
- Chrome Browser Installed (Version 86 or above)


  #### Setup:
From the projects base directory run the following cmd in a Terminal window

    npm install @wdio/cli
    
Followed by the cmd

    npm install

This will install all of the required dependencies to execute the automation suite
  #### Executing Test:
In order to execute the automation suite navigate to the Project directory within a Terminal/CMD window and run the command: 

    yarn test

Thhe tests should now start running in a chrome browser window.

To run the tests and generate a report execute the cmd

    yarn test:report

This will execute the test generate an Allure report and open it in a browser window.

In the absence of yarn being installed the following cmd can be executed from the base directory of the project, but the report will not be generated.

    npx wdio run ./wdio.conf.js
