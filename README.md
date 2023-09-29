# mern-goals-project

# Purpose

The purpose of this project is using resct, express, mongoDB, nodeJS to create a simple MERN project whch users can register, log in and edit thier goals. 

# Major functions

This project includes many functions.

1. **Registration**: Allow users to create an account by providing necessary details including username, email, and password. This involves handling user input, validating the data, and securely storing user credentials. 
 
2. **Login**: Provide a login functionality where users can authenticate themselves using their registered credentials. This involves verifying the provided email and password against the stored data in the database. 
 
3. **Logout**: Implement a mechanism using Redux toolkt for users to securely log out of their account, ensuring their session is terminated and they are no longer authenticated. 
 
4. **Goal Creation**: Allow logged-in users to add their goals. This involves capturing goal details, and any other relevant information. The goals should be associated with the specific user who created them. 
 
5. **Goal Listing**: Provide a way for users to view a list of their goals. This is a section under the user's goal creation section. The goals should be fetched from the database and displayed in an organized manner. 
 
6. **Goal Deletion**: Allow users to delete their goals if they no longer wish to keep them. This involves implementing a mechanism to remove the goal from the database while ensuring proper authorization to prevent unauthorized deletion. 
 

# dependencies
React, Redux toolkit and Thunk, React router, express, mongoose
