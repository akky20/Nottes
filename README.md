# Nottes - React Note Taking Website

Nottes is a simple note-taking website built using React, where you can create, view, and delete notes. This readme file provides an overview of the project structure and how to get started with the Nottes application.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [How to Use](#how-to-use)
4. [Contributing](#contributing)
5. [License](#license)

## Getting Started

To use Nottes, you need to follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the Nottes app.

## Project Structure

The project is organized into several components:

- **App**: The main component that manages the application's state and renders other components.
- **Header**: The header component displaying the website title.
- **CreateArea**: The component for creating new notes.
- **Note**: The component for rendering individual notes.
- **Footer**: The footer component for copyright details.

The project structure also includes some additional files:

- **index.html**: The HTML file that sets up the application's basic structure.
- **styles.css**: The CSS file for styling the application.
- **index.js**: The entry point of your React application.

## How to Use

1. **Create a Note**: To create a new note, enter a title and a description in the "Create Note" section and click the "Add" button with a plus icon.

2. **View Notes**: All your created notes will be displayed below the "Create Note" section. Each note includes a title, description, and a delete button (trash can icon).

3. **Delete a Note**: Click the delete button on a note to remove it from your list of notes.

