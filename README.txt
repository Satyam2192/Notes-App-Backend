### Deplayed At : https://note-taking-api-xo12.onrender.com/api/v1/notes  
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
