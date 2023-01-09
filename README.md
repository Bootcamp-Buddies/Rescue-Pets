# Project 2: Rescue Pets

## Badges

[![License: CC0-1.0](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

In this project our team was tasked with building an application using the MVC process. We've built a pet adoption website where users can sign up for an account, view pets available for adoption, add pets to the database for others to adopt, and of course select pets to adopt themselves. This appplication was built using technologies such as handlebars, node and express js, mysql and sequelize, bcrypt, and other npm packages. The app is deployed to Heroku. See below for relevant links.

[Github Repository](https://github.com/Bootcamp-Buddies/Rescue-Pets)<br>
[Deployed Website](https://powerful-ravine-90978.herokuapp.com/)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Credits](#credits)
- [Contributors](#contributors)

## Installation

**1. Clone to ***your computer*** using SSH from GitHub:**
```
git clone https://github.com/Bootcamp-Buddies/Rescue-Pets
```
**2. You'll need to run to install the node required dependencies after you clone the install by running:**
```
npm install
```
**3. You will need to make an .env file to handle the MySQL connection, an example file (.env.EXAMPLE) has been included for you to reference. Contents of .env.EXAMPLE are:**
```
DB_NAME='techblog_db'
DB_USER=''
DB_PASSWORD=''
```
**4. You will then need to run the following commands in your MySQL server command line to build the database and tables and then seed/populate the tables needed:**
```
- mysql -u root -p
- <enter password>
- SOURCE db/schema.sql
```
**5. You will need to seed the database:**
```
npm run seed
```
**6. Finally to start node server you need to type the following command:**
```
npm start
```
**7. Open a browser to test using http://localhost:3001**

## Usage

The usage of this project is to allow our group to turn this project in for grading to the MSU Bootcamp academic grading team.

## License

Read more about [MIT license](https://opensource.org/licenses/MIT).

## Tests

N/A

## Credits

Credit to the MSU Bootcamp and instructors for training and training materials to resolve some of these issues.<br>
_Programs, packages used:_<br>
[Node.js](https://nodejs.org/en/)<br>
[Sequelize](https://sequelize.org/)<br>
[Express JS](https://expressjs.com/)<br>
[Mysql2 npm package](https://www.npmjs.com/package/mysql2)<br>
[dotenv npm package](https://www.npmjs.com/package/dotenv)<br>
[express-handlebars](https://www.npmjs.com/package/express-handlebars)<br>
[bcrypt](https://www.npmjs.com/package/bcrypt)<br>
[express-session](https://www.npmjs.com/package/express-session)<br>
[connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)

## Contributors:

_Use the following options to contact me for questions:_<br>
[jscobie](https://github.com/jscobie)<br>
[sgsetts](https://github.com/sgsetts)<br>
[thafer1](https://github.com/thafer1)<br>
[yeezyhub](https://github.com/yeezyhub)
