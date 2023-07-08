# TWEETS

## Description 📑

Tweets is a web application that renders user cards with interactive tweet cards. Each tweet card
has a Follow button, which, when clicked, changes the text to Following and updates the button
color. The total number of followers displayed on the card also increases, including your follow
count. When the page is refreshed, the final state of the Follow button and follower count is
preserved. This means that if you click the button and refresh the page, the button remains in the
Following state with the corresponding color, and the follower count does not decrease to its
initial value. Clicking the button again changes the text and color back to the initial state, and
the follower count updates accordingly. During the initial render, 8 cards are displayed and a Load
more button appears to render the next 8. Also, for a better user experience, skeleton cards were
used while waiting for a response from the backend.

The application includes two routes:

- `/` - Home component
- `/tweets` - Tweets component, a page for displaying tweets. The Tweets page includes a Back button
  that leads back to the main page.

## Demo 🖥

![Demo](https://raw.githubusercontent.com/vadymfrlv/storage/main/demos/tweets/tweets-demo.gif)

## Installation ⚡️

To launch a project on GitHub, you first need to clone the project to your local machine. For
instance, if you're working with a React project created using Vite, you can clone the project by
running the command git clone https://github.com/username/project.git in your terminal.

After the project has been cloned, you need to navigate to the project directory and install any
dependencies that the project requires. You can do this by running the command `npm install` in your
terminal.

Once all dependencies have been installed, you can start the development server by running the
command <br> `npm run dev`. This will launch the project in your default browser and any changes you
make to the code will automatically update in the browser.

## Addition ⚙️

For this application, a personal backend was created for development using the UI service
https://mockapi.io, specifically the users resource. The user object is described as follows:

```json
"users": [ {
      "id": 1,
      "user": "Dan Humphrey",
      "tweets": 777,
      "followers": 100500,
      "avatar": "url.jpg"
} ]
```

## Tech Stack 🛠

- React
- Type Script
- React Router DOM
- Axios
- Styled Components
- Styled System
- React Loading Skeleton

## Author 👨🏻‍💻

This app was developed by frlv.
