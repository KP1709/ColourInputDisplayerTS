# Colour Input Displayer (Typescript Version)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8d06b61f-0f7c-4f63-ace4-8e4f65aedf3d/deploy-status)](https://app.netlify.com/sites/kareenapatel-colourinputdisplayerts/deploys)

## ⌨️ Tech stack 
HTML / CSS / React / Typescript / npm / Node.js / Cypress (testing)

## 🍼 Introduction
Updating arrays in state is a concept I had little practice in in React. Therefore I created a colour input displayer as a mini project to recap the concept. This application enables the user to enter a hex code which will be displayed in a list. However each code entered will have the background colour of that hex code. The user can delete any items and any time and the order of items will be retained. The original project was written in Javascript (and in another repository no longer on Github)

Later on, after *currently* finishing Bob Ziroll's Typescript course on Scrimba, I wanted to look into using Typescript and React together. I chose to convert the project into Typescript because it was small, enabling me to focus on the fundamentals of the language. 

## 🛠️ Features 
- Regex used to validate input against rules
  - Is a length of 3 or 6
  - Contains the accepted characters (0-9, a-f, A-F)
- Able to add a colour to the list
- Able to delete any colour in any place in the list
- Colour entered becomes the background colour of the listed item with - the hex value displayed.
- Allows duplicate colours to be displayed and deleted independently (through an id prop)
- Implemented accessibility throughout application
- End-to-end testing setup in Cypress
- useMemo and React.memo used to prevent child components from rerendering unnecessarily (Done for practice only)
- Gets and displays the colour name from an API based on the hexadecimal value entered
  - Used debouncing to reduce the number of unnecessary API calls made
- Retains user input if colour code is invalid + shows visual error message and highlights input box

## 📚 Resources 
- Updating arrays in state (React Docs) - https://react.dev/learn/updating-arrays-in-state
- Deleting an item from an array in react - https://dev.to/collegewap/how-to-delete-an-item-from-the-state-array-in-react-kl
- Validating a hex value using Regex - https://gist.github.com/daxburatto/307e8365c41fd5401f9ac315676490bf
- TypeScript in React - Complete Tutorial (Crash Course) - https://www.youtube.com/watch?v=TPACABQTHvM
- Scrimba's Learn Typescript Course - https://v2.scrimba.com/learn-typescript-c03c
- Learn E2E testing with Cypress for Javascript Applications  (FreeCodeCamp) - https://www.freecodecamp.org/news/mastering-end-to-end-testing-with-cypress-for-javascript-applications/
- Cypress, React and Vite collaboration (Rodion Kazennov - Medium) - https://medium.com/@nelfayran/cypress-react-and-vite-collaboration-bed6761808fc
- Typescript ReferenceError: exports is not defined - https://stackoverflow.com/questions/43042889/typescript-referenceerror-exports-is-not-defined
- Adding Custom Commands to Cypress Typescript (Gagah Ghalistan - Medium) - https://medium.com/@gghalistan/adding-custom-commands-to-cypress-typescript-28d23f90c2fd
- Problem with Re-rendering when passing a React function with React Context API - https://stackoverflow.com/questions/63200464/problem-with-re-rendering-when-passing-a-react-function-with-react-context-api 
- How to use React Context in Typescript - https://blog.logrocket.com/how-to-use-react-context-typescript/

## ➕ Potential features to add
- Updating the hex value of an item
- Having the user move or order the items themselves
- Ability to delete all items or delete items which aren't locked
- Sorting / Filtering mechanism