# Module IIM Back-end Web Development
## Continuous Assessment 1 
## Student: Nathalie Flores - Id: 21520
## Lecturer: George Blanaru

## Assignment Description  
Develop a web application API using Node.js that can perform CRUD operations on a Mongo DB database. You are free to choose the type of data the application will store (e.g. users, cars, animals, etc.). The data should be complex enough, containing different types of values (Strings, ints, Booleans, etc.).

## Additional Information 
[40%] All CRUD operations are working as intended (e.g. the right data is retrieved while using an index, data is being deleted by a criteria, retrieve one or multiple documents).
[10%] The application is connecting to the right database. It can connect to Atlas (cloud) or a local database.
[10%] The data is complex: it contains at least one index (unique entry); has at least 3 types of variables and there are sufficient entries already in the database.
[10%] Code is readable: consistency, right indentation, comments.
[20%] The application is accompanied by a short report (max. 500 words) or a ReadMe file. The report should explain the developing process of the application.
[10%] Creativity: Do your own research and add any other functionality to your application.(e.g. multiple variable types – Boolean, array, json array, etc.; basic front-end; database complexity; multiple objects, etc.)

## Running the Project
1. To use this run: 
- npm init (to initialize your Node.Js project).<br>
- npm install express (to install express for routes).<br>
- npm install mongoose (to install the mongodb database driver).<br>
- npm install bodyparser (to be able to use multiple http requests).<br>
- npm install –g nodemon (restarts the application when you save the document).<br>
2. Works with Postman localhost: 3000

## Project Summary
In this project, I learned how to do uses Postman, how to create a Mongo database and how to connect Postman to a database. Postman was used as an API testing tool, not as a database testing tool. Data queries were performed to retrieve, insert, or delete data from the database. Postman created those values directly in a variable. And those values were verified concerning the answer.

### Initial Ideas
After a brief explanation about the Javascript language, each of us made a selection of the topic and the class that we would develop individually. The project was coded from scratch following the teacher's instructions. In my case, I choose "Book" as the object class to work with. I think it could be a very complex class. However, just for a proper learning process, I did not incorporate multiple complex types of variables

### Contextualizing
Book as a class. <br>
Title, author, ISBN, yearPublication and publishingHouse as characteristics of the object.

## Development Process. 
1. Created the Book Class.
2. Install Node.js. 
3. Install and establish a connection with Postman. In computer programming, create, read, update, and delete (CRUD) are the four basic functions of persistent storage.
• Create (post request with Postman). 
• Read (get request with Postman).
• Update (put request with Postman).
• Delete (delete request with Postman).
4. Set up the link to your Atlas/MongoDB database. That includes logging into Atlas, clicking on the Clusters tab and then clicking Connect.
5. Set up the schema to work with Atlas and Postman. Also, that includes to modified our CRUD previous coding.

### Libraries 
1. Express
2. BodyParser
3. Mongoose

### References and adaptation explanations
Based on the project:
[JS FILES - DROPBOXURL](https://dorsetdemo-my.sharepoint.com/personal/george_blanaru_faculty_dorset-college_ie/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fgeorge%5Fblanaru%5Ffaculty%5Fdorset%2Dcollege%5Fie%2FDocuments%2FJS%20FILES)

## Testing
Example of get:

![postmaExample](https://user-images.githubusercontent.com/65398774/143224634-8042b8f1-253f-4f2d-b000-e1903363f519.png)


## Considerations
It is a first part of the project with need to implement all the front-end later on with React App. 

## GDPR
The code was based in the coding propose explain during the clases<br>
