# Be-My-Friend-Finder
`Be My Friend Finder` is a Full-Stack Application that Matches People who have the Closest Compatibility, together. This Application consists of Code that has been written for both the Front and Backend. Heroku has been used for the deployment of this App. Please Click on this [link](https://infinite-forest-13734.herokuapp.com) to Check the App out.

## Technologies

| Frontend  | Backend |
| ------------- | ------------- |
| HTML | Nodejs |
| CSS (SASS) | Express |
| Javascript (jQuery) | Body-parser (Middleware)|

Deployed on: `Heroku`

## Usage

### Home
Upon Landing on the Home Page, Users are Greeted with Randomized News Headlines, shown on the Header of the Website. Click the menu Icon on the Upper-right Hand Corner to Navigate to other Parts of the Site.

- Click on the Menu Icon and Choose `API Friend List` to See a JSON List of Stored Friends.

- Click on the Image to Navigate to the Survey Page.

### Survey
Click the Left and Right Arrows to Move Between Questions. Once Completed, Click on the `Submit Button` to Submit your Response.

Basic Error Handling Has Been Added to Prevent Name and Photo URL from being Empty.

## Requirements
- Browser
- Nodejs

## Installation

`Be My Friend Finder` can be downloaded by cloning this repository [`https://github.com/roverkim/Be-My-Friend-Finder.git`](https://github.com/roverkim/Be-My-Friend-Finder.git)
A Live Example can be Found Here
[`https://infinite-forest-13734.herokuapp.com`](https://infinite-forest-13734.herokuapp.com)

After installation, open node, navigate to the file and run `npm install`.

To run `Be My Friend Finder`, type `node server.js`


## Files

Instead of grouping all the code in one file, `Be My Friend Finder` has been split into Front and Backend Components

1. `server.js` Starting Script that Establishes a Connection and Launches the Application on Port 8080.
2. `data/friends.js` Stores a JSON List of Friends that Is Used in-Place of a Database.
3. `routes/apiRoutes.js` Contains Routes for API Get and Post Request.
4. `routes/htmlRoutes.js` Contains HTML Get Routes that Serves the Client.
5. `/public` Contains all the Frontend Files.
6. `public/.html` Contains all the various Static Html Files.
7. `public/assets/images` Contains all the Images Used by the Application.
8. `public/assets/scripts` Contains all the Scripts Used by the Frontend.
9. `/public/assets/stylesheets` Contains all the Styles for the Frontend.
