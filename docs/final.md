# Whizzper - Crime of PGC 

## Team Members:
  * Alicia Afriyie
  * Nicolas Castiblanco
  * Terrence Diko
  * Gabriel "Isaac" Feliz
  * Amari Smith
  
## Whizzper Link
[Whizzper](https://whizzper.herokuapp.com/)

## Information Problem
The citizens of Prince George's County should be able to see crime statistics of the county in a visual format. The current data format is in one large file that keeps growing. Residents need a tool that allows them to view crime occurrences of all types throughout the county. They also need an outlet to report crimes anonymously, especially if they don't feel comfortable contacting law enforcement. 

## Stakeholders/Target Browsers
Current and potential ressidents of the county may be interested in the crimes that occur. Depending on the progressiion of the application, law eforcement agencies may be interested in integrating the application into their systems to follow up on the anonymously reported crimes.
The application can be used by anny browser application on mobile and desktop devices. 

## Data
The data used to create this application is labled as [Crime Incidents February 2017 to Present](https://data.princegeorgescountymd.gov/Public-Safety/Crime-Incidents-February-2017-to-Present/wb4e-w4nf/data) which we pulled from the [PGC Data Website](https://data.princegeorgescountymd.gov/).

## Strategies and Solutions
In order to solver the probelm, we wanted to implement an interactive map that allowed users to view the locations of crimes. This tool allows the user to view the map in grayscale or street form, for accessbility purposes. Then, they can filter which crimes they want to see and which they want to hide. The user will also be able to report crimes anonymously through a form page. With these tools, users can sort through data using their preference. 

## Technical System Rationale
* Leaflet Js
  * Used to pipoint the location of crimes pulled from API
  * Interactive map that allows the user to zoom in and out showing street details
* MongoDB
  * Used as database that holds the records of crimes reported by users

## Evaluation
As a team, we felt as though our implementations met our goal to solve the information problem. With more time, there are a number of features we can add to improve user experience and website functionality. Nonethless, our collaborative efforts created an application that we are pleased to present. 

## Challenges
In the beginning of our projects, we found ourselves lost on where to start. We initially implemented the Tableau API but later relalized that we not sufficent as wwe were pulling data from a file rather than an API. This prompted us to implement Leaflet into our application, which took a good amount of time as it was a tool we were not familiar with. Once we implemented the javascript, we needed to make sure we could pull every crime object, plot it on the map based on the longitude and laitude, then implement a filter the user could manipulate to see the data. A few late night sessions occurred to make sure filtering and data gathiering worked properly.

## Future Developments
 * Implement a search feature that returns details on crimes in a table format
 * Require some form of user credentials be used to ensure the site has some form of security
 * Provide mre filtering options to help users narrow down their search
 * Pinpoint user reported crimes on the map after they submit details through the forms page
