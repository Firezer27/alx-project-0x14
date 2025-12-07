# CineSeek – MoviesDatabase API Documentation Review

This project is part of the ALX Frontend Specialization and focuses on understanding how to integrate external APIs—specifically the **MoviesDatabase API**.
The goal of this task is to read the API documentation, summarize the key details, and demonstrate understanding of the available endpoints, request/response structure, authentication, and best practices.

---

## API Overview

The **MoviesDatabase API** provides access to a large collection of movie and TV metadata.
It allows developers to:

- Fetch movies, series, and episodic information
- Search for titles by name, genre, or release year
- Retrieve detailed information such as cast, crew, ratings, and images
- Implement pagination for browsing through large datasets
- Apply filters (genre, year, type, popularity, etc.)
- Use server-side or client-side requests with API key authentication

The API is designed to be fast, reliable, and suitable for real-world movie discovery apps like CineSeek.

---

## Version

**API Version:** v1
(as stated in the MoviesDatabase API documentation)

---

## Available Endpoints

### **1. `/titles`**
Main endpoint for retrieving movie and TV title data.
Supports filtering, sorting, and pagination.

### **2. `/titles/search/title`**
Search for movies by title keyword.

### **3. `/titles/{id}`**
Fetch detailed information about a specific movie/series using its unique ID.

### **4. `/titles/x/upcoming`**
Return upcoming movie releases.

### **5. `/titles/x/top-rated`**
Get a list of top-rated titles.

### **6. `/titles/x/popular`**
Fetch trending or currently popular titles.

Each endpoint returns structured metadata, including title name, image URLs, release year, genres, cast, and more depending on the request.

---

## Request and Response Format

### **Request Format**
Most API requests follow this structure:

