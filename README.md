# Pasta Favorites App

### To run the app

1. Load node modules: `yarn` 
2. Start the application: `yarn start`
3. Application is served from development server at `localhost:3000`


### Testing

1. To test the app: `yarn test`

### Considerations

1. Architecture: I tried to make this application as similar as possible to a React/Redux application.  The data is loaded from a static file, but I tried to emulate the architecture I would use if it were loaded from an API call.  I didn't make the data loading method `async` in this case, as the data is already loaded, but of course with a real API call it would be. 
2. State Management: I used Redux for state management as it's an elegant solution and reduces the JSX to more or less layout alone.  I used Redux-thunk to manage data loading, although generally I would use Redux-saga (Redux-thunk seemed simpler to use here).
3. Language: I wrote the application -- as much as I could -- in TypeScript, because I wanted to learn TypeScript (I come from a background in typed languages and appreciate them).  
4. Testing: I learned and used Ava for testing, since it had been recommended to me and seemed interesting.  There was some issues regarding using it with TypeScript, but StackOverflow came to the rescue!  I did a few simple tests of the logic, although Ava should be able to test Redux as well.  (I need to learn Jest still, to test the React elements themselves)
5. Styling: I used SCSS for styling and set a mobile breakpoint of 525 pixels.  The SCSS could be combined and made more efficient: certainly there is a fair amount of redundancy.  But this was meant to be a fairly quick app, and for that purpose copying values from InVision was a quick route to follow.
