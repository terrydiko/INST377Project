# Whizzper Developer Manual

## Installation
### Getting Started
Make sure you have the latest version of [Node.js](https://nodejs.org/en/download/) installed
Clone the repository using a shell client, such as GitHub Desktop
```github
git clone https://github.com/terrydiko/INST377Project.git
```

### Dependencies
Install all node dependencies inside the application directory
```github
  npm install
 ```
 
Npm packages include:
  * body-parser - Body parsing middleware of Node.js
  * express - Server framework of Node.js
  * mongoose - Database used for backend querying
  
## Deployment
Change directory (cd) to the application folder and start the application server
```github
npm run start-watch
```
Open your preferred internet browser and type in:
```github
localhost:4000
```

## Server API

### Endpoints

##### GET:
  * GET requests can be retrieved from (crimes)[/crimes]
  * GET requests retrieves list of locally reported crimes
##### POST:
  * POST adds data to (crime)[/crime]
  * POST requests to data of crimeType, street address, longitude, and latitude

## Current Bugs/Issues
 * Site has slow loading times due to server pulling data from API all at once. 
 * The website requires no user credentials for access, which could lead to cyber security issues.
 * Users can filter crimes by type but not by street, date, etc.

## Future Development
 * Include more filtering options on the main page to give the user more control over viewing data
 * Expand the website idea to other counties within Maryland such as Montgomery, Calverton, Anne Arundel
 * Allow user to input a date or another piece of information to get specific information from crimes mathcing the input
