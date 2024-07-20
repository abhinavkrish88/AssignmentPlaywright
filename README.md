Preconditions for Setting Playwright : Windows
a) VSCode - Download link : https://code.visualstudio.com/download
b) NodeJs - https://nodejs.org/en/download/package-manager/current
c) Java - For running Allure Reports

How to Setup and Run tets Cases in Playwright:

a) Open cloned repository folder in VsCode.
b) Open terminal and type command - npm install
c) Run command to Run test Cases in terminal:  npx playwright test test-3.spec.ts --project chromium  --headed
d) Run commmand to open Allure reports in terminal (Make Sure java should be installed successfully): npx allure serve allure-results


Features :

a) Created Tets cases in test-3.spec.ts file under test folder. 
b) Inside test-3.spec.ts; There are two test cases one is for UI and API testing.
c) Created Page Object Model under pages so that data should be reuable and Enhanced scalability.
d) Integrated with allure reports and integrated Screenshots.
