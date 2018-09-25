# Flickr Api App Setup

```bash
git clone git@github.com:WhatifNick/flickr-app.git
cd flickr-app
npm install
npm start
```
Visit at [localhost:3000](http://localhost:3000)

### Note

Created a rather hasty web app that accesses Flickr Api and renders "interesting photos." The web app uses the following:

- Material UI
- Redux
- Styled Components
- React Routing
- React Modal

There are a few things that I was not able to get to:

- The modal images are not mobile responsive
- The public Api key is not in a .env file
- I wanted to add a bit more fuctionality to the modals
- Thumbnail images should be set to a backrgound image to a div instead so that they are not stretched
- Rating or favourites to images
