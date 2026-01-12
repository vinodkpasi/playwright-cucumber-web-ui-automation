### Instructions

- Clone the repo using below command.

  **git clone repo_url**

- Install Node.js from below URL.

    **https://nodejs.org/en/download**

- Open the command prompt in the the root directory of the project.

- Run the below commands to install the dependencies.

      **npm install**

      **npx playwright install**

### Application Credential

- Because of security reason email credentials are not present inside any file. You need to set it using environment variables.
- Open the command prompt in the root directory.
- Run the **SET BASEURL=BASEURL** command to set the email.
- Run the **SET EMAIL=EMAIL** command to set the email.
- Run the **SET PASSWORD=PASSWORD** command to set the email password.
- Run the **SET BROWSER=chrome|firefox|webkit** command to set the browser. Default is chrome.
- Run the **SET HEADLESS=true|false** command to set the browser headless mode. Default is false.
- Run the **SET REPORT_OVERWRITE=true|false** command to overwrite/preserve the report. Default is true.
- You can also set all above keys using app.env file located in the root  
  directory.

### Execution

- Open the command prompt in the root directory.
- Run the **npm run execute** command to execute the test cases.

### Report & Logs

- Multiple Cucumber Html Report is integrated.
- After execution, report file **index.html** is created under **test-results\reports** directory.
- Screenshot and video will be attached for failed scenarios.
- Logs files are available under **test-results\logs** directory.
- Video files are available under **test-results\videos** directory.

### Retry for failed scenarios

- By defaut, failed scenarios will run again.
- You can configure the retry behavior for scenarios using **retry** attribute of **cucumber.json** file located under the root directory.

### Retry for failed tests

- Run the **npm run execute:failed** command to execute the failed test cases.
- You can configure the retry behavior using **rerun** attribute of **cucumber.json** file located under the root directory.

### Parallel execution

- By default, 3 scenarios will be executed in the serial mode.
- To run the scenarios in the parallel mode you can set the count using the **default-->parallel** attribute of **cucumber.json** file located under the root directory.
- You can set **parallel:1** for serial execution.
