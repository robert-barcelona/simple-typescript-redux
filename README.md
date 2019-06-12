# Pasta Favorites App

### To run the app

1. Load node modules: `yarn` 
2. Start the application: `yarn start`
3. Application is served from development server at `localhost:3000`

### Considerations

1. Architecture: I tried to make this application as similar as possible to a React/Redux application.  The data is loaded from a static file, but I tried to emulate the architecture I would use if it were loaded from an API call.  I didn't make the data loading method `async` in this case, as the data is already loaded, but of course with a real API call it would be. 
2. State Management: I used Redux for state management as it's an elegant solution and reduces the JSX to more or less layout alone.  I used Redux-thunk to manage data loading, although generally I would use Redux-saga (Redux-thunk seemed simpler to use here).
3. Language: I wrote the application -- as much as I could -- in TypeScript, because I wanted to learn TypeScript (I come from a background in typed languages and appreciate them).   I went well beyond the 3-4 hours slated for this app because of the fact that I've never used TypeScript before (this is my first application written in TypeScript), nor have I integrated it with React, and so some areas took extra time and research.  The app is still partly JavaScript, and there is some over-use of `any`, but I've used TypeScript as much as I could..
4. Testing: I had problems with testing the app, particularly because I couldn't figure out how to make the testing platform I'm familiar with -- Jasmine -- nor one I tried to learn -- Ava -- work with TypeScript.  Specifically, I ran into issues with `ts-node`, which seems to be required for converting `.ts` files into `.js` files 'on the fly', had problems with the ES-6 'import' statements I used.  My intention was to restrict testing to the `logic` and perhaps `redux` elements of the application, but I couldn't get past the issues I encountered with TypeScript and testing, so I have put that on hold for the moment. If I can resolve it, I will add testing to the app.

