# Humble Superhero API & Frontend
## Overview

This project is a full-stack solution for a Humble Superhero API. It consists of:

- **Backend:**  
  A simple API built with Express that allows users to add a new superhero (with a name, superpower, and a humility score) and fetch the list of superheroes sorted by their humility score in descending order. The data is stored in an in-memory array.

- **Frontend:**  
  A React application that provides a user-friendly interface to interact with the API. Users can submit new superheroes via a form and view an updated list in real time.

---

## Backend

### Endpoints

- **POST /superheroes:**  
  Adds a new superhero.  
  **Required fields:**
    - `name` (string)
    - `superpower` (string)
    - `humility` (number between 1 and 10)

- **GET /superheroes:**  
  Retrieves the list of superheroes sorted by humility (in descending order).

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/max1k1/Humble_Superhero.git
   cd <repository-directory>

If I had more time, I would implement several enhancements:

Next.js with Server-Side Rendering (SSR):
Switch to Next.js to provide SSR so that each hero’s page can display relevant, SEO-friendly information.

State Management with Redux:
Integrate Redux for a more predictable and maintainable state flow across the frontend.

Improved Project Structure:
Refactor the project structure to be more modular and spread out, making it easier to scale and maintain as features grow.

AJAX and Enhanced Data Fetching:
Incorporate AJAX for more dynamic data retrieval and updating without full page reloads, enhancing the user experience.

Additional Enhancements:

Integrate persistent storage on the backend (e.g., using MongoDB or PostgreSQL).
Improve validation and error handling using libraries like Joi.
Expand test coverage and set up continuous integration/deployment pipelines.