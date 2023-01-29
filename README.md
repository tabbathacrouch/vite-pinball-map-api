# Pinball Locator

## Objective

"leverage the pinballmap API to find the nearest pinball locations"

## Requirements

- "Use the https://pinballmap.com/api/v1/docs API."
- "The user should be able to both enter their latitude and longitude and auto-fill their latitude and longitude fields by clicking a Near Me button."
- "When the user clicks the Search button, a list of closest pinball locations appear on the page."

### Run Locally

- git clone project
- cd into directory
- run `yarn && yarn dev`

### How did I solve this?

- used Postman to test and understand pinballmap API
- used Vite to create a react application
- created async functions with `axios` and added them to [UserService.tsx](./src/services/UserService.tsx)
- implemented "Search" button
- implemented "Near Me" button
- added a few CSS styles for readability

### Future Enhancements

- update `loading` state to use a fancy animated spinner
- use [`react-map`](https://developers.google.com/maps/documentation/javascript/react-map) to display closest pinball location on a map with markers

#### Attributions

- This application leverages the pinballmap API ([docs](https://pinballmap.com/api/v1/docs/1.0.html)) to find the nearest pinball locations given latitude and longitude.
# vite-pinball-map-api
