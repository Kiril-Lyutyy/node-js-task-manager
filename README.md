Setup:
1. run "npm i"
2. run "npm run dev" or "npm start" to start the app

REST api endpoint description:

1. GET /tasks
Fetches all tasks.

Query Parameters:
status (optional) — Filters tasks by their status ("todo", "in-progress", "done").

Example Request:
GET http://localhost:3000/api/tasks?status=todo

Example Response:
[
  {
    "id": 1,
    "title": "Learn Express",
    "description": "Understand how routing and middleware work",
    "status": "todo",
    "createdAt": "2025-04-01T12:34:56Z",
    "updatedAt": null
  }
]


2. GET /tasks/sorted
Fetches all tasks sorted by a specified field.

Query Parameters:
by (required) — The field by which to sort the tasks. Can be one of ['createdAt', 'updatedAt', 'title', 'status'].
order (optional) — Specifies the sort order. Can be one of ['asc', 'desc']. Default is asc.

Example Request:

GET http://localhost:3000/api/tasks/sorted?by=createdAt&order=desc
Example Response:

[
  {
    "id": 1,
    "title": "Learn Express",
    "description": "Understand how routing and middleware work",
    "status": "done",
    "createdAt": "2025-04-03T14:22:30Z",
    "updatedAt": null
  }
]

3. GET /tasks/:id
Fetches a specific task by its id.

Example Request:
GET http://localhost:3000/api/tasks/1

Example Response:

{
  "id": 1,
  "title": "Learn Express",
  "description": "Understand how routing and middleware work",
  "status": "todo",
  "createdAt": "2025-04-01T12:34:56Z",
  "updatedAt": null
}

4. POST /tasks
Creates a new task.

Example Request:
POST http://localhost:3000/api/tasks

Request Body:
{
  "title": "Learn Express",
  "description": "Understand how routing and middleware work",
  "status": "todo"
}

Example Response:
{
  "id": 1,
  "title": "Learn Express",
  "description": "Understand how routing and middleware work",
  "status": "todo",
  "createdAt": "2025-04-09T08:45:22Z",
  "updatedAt": null
}

5. PUT /tasks/:id
Updates an existing task by its id.

Example Request:
PUT http://localhost:3000/api/tasks/1

Request Body:
{
  "id": 1,
  "title": "Learn Express",
  "description": "Understand how routing and middleware work",
  "status": "todo",
  "createdAt": "2025-04-09T08:45:22Z",
  "updatedAt": null,
}

Example Response:
{
  "id": 1,
  "title": "Write Unit Tests",
  "description": "Ensure all API endpoints have sufficient coverage",
  "status": "in-progress",
  "createdAt": "2025-04-01T12:34:56Z",
  "updatedAt": "2025-04-01T12:35:56Z"
}

6. PATCH /tasks/:id/status
Updates the status of a task by its id.

Example Request:
PATCH http://localhost:3000/api/tasks/1/status

Request Body:
{
  "status": "done"
}

Example Response:
{
  "id": 1,
  "title": "Learn Express",
  "description": "Understand how routing and middleware work",
  "status": "done",
  "createdAt": "2025-04-01T12:34:56Z",
  "updatedAt": "2025-04-01T12:35:56Z"
}

7. DELETE /tasks/:id
Deletes a task by its id.

Example Request:
DELETE http://localhost:3000/api/tasks/1

Example Response:
empty response (204)
