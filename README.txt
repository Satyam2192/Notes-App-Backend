### Deplayed At : https://note-taking-api-xo12.onrender.com/api/v1/notes  
### Postaman : https://documenter.getpostman.com/view/31555061/2s9YsFEZyR#auth-info-23072076-d16b-4618-a46f-6381ffc5ee6f
 _______________________________________________________________________________________________
| Endpoint     |    HTTP    |  Method Description                                               |
|--------------|------------|-------------------------------------------------------------------|
| /notes	  |    POST    |   Create a new note                                               |
| /notes	  |    GET	    |   Retrieve all notes (optionally filtered by query parameters)    |
| /notes/:id   |    GET	    |   Retrieve a single note by its ID                                |
| /notes/:id   |    PUT	    |   Update an existing note                                         |
| /notes/:id   |    DELETE	|   Delete a note by its ID                                       |
|______________|____________|___________________________________________________________________|



project setup:
npm i express nodemon mongoose dotenv bcrypt jsonwebtoken
