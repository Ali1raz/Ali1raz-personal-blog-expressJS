
 # A simple RESTful API 
 It is a simple RESTful API with basic CRUD operations for a personal blogging platform using `Express JS`. CRUD stands for Create, Read, Update, and Delete.
 ---
 
 ## Personal Blogging Platform
 I have created a RESTful API for a personal blogging platform. This API allows users to perform the following operations:

- Create a new blog post
- Update an existing blog post
- Delete an existing blog post
- Get a single blog post
- Get all blog posts
- Filter blog posts by a search term

# POST method:
`
POST /posts
`
```javascript
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```

This endpoint validates the request body and returns a `201 Created` status code with the newly created blog post i.e.

```javascript
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```
or a `400 Bad Request` status code with error messages in case of validation errors.

# Update Blog Post
Update an existing blog post using the PUT method
`
PUT /posts/1
`
```javasript
{
  "title": "My Updated Blog Post",
  "content": "This is the updated content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```
The endpoint should validates the request body and return a `200 OK` status code with the updated blog post i.e.

```javascript
{
  "id": 1,
  "title": "My Updated Blog Post",
  "content": "This is the updated content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:30:00Z"
}
```
or a `400 Bad Request` status code with error messages in case of validation errors. It returns a `404 Not Found` status code if the blog post was not found.

# Delete Blog Post
Delete an existing blog post using the DELETE method
`
DELETE /posts/1
`
The endpoint returns a `404 Not Found` status code if the blog post was not found.

# Get Blog Post
Get a single blog post using the GET method
`
GET /posts/1
`
The endpoint returns a `200 OK` status code with the blog post i.e.
```javascript
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```
or a `404 Not Found` status code if the blog post was not found.

# Get All Blog Posts
Get all blog posts using the GET method
`
GET /posts
`
The endpoint returns a `200 OK` status code with an array of blog posts i.e.

```javasript
[
  {
    "id": 1,
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"],
    "createdAt": "2021-09-01T12:00:00Z",
    "updatedAt": "2021-09-01T12:00:00Z"
  },
  {
    "id": 2,
    "title": "My Second Blog Post",
    "content": "This is the content of my second blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"],
    "createdAt": "2021-09-01T12:30:00Z",
    "updatedAt": "2021-09-01T12:30:00Z"
  }
]
```
https://roadmap.sh/projects/blogging-platform-api
