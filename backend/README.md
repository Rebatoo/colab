# Thesis Backend API

This is a backend server for managing thesis data using Node.js, Express, and MongoDB.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will run on port 5000 by default.

## API Endpoints

### Thesis Endpoints

- `GET /api/thesis` - Get all theses
- `GET /api/thesis/:id` - Get a specific thesis by ID
- `POST /api/thesis` - Create a new thesis
- `PATCH /api/thesis/:id` - Update a thesis
- `DELETE /api/thesis/:id` - Delete a thesis

### Example Thesis Object

```json
{
  "title": "Thesis Title",
  "author": "Author Name",
  "abstract": "Thesis abstract...",
  "year": 2024,
  "department": "Department Name",
  "keywords": ["keyword1", "keyword2"]
}
```

## Environment Variables

The following environment variables are used:
- `PORT` - Server port (default: 5000)
- `DB_URL` - MongoDB connection string 