# Project 2
- By: David Kalbfleisch
- Production URL: https://e28p2.davejk.me

## Pages summary
- HomePage.vue - Explains the purpose of the app
- ContentPage.vue - View annotations for content with the given ID; makes GET requests
- VerifierPage.vue - Submit annotations to content; makes POST requests

## SFC summary
- ContentFieldset.vue - Used with the form on VerifyPage.vue
- ContentReport.vue - Used to display annotations on ContentPage.vue
  
## Server interaction
- GET content reports/annotations on ContentPage.vue
- POST content reports/annotations on VerifierPage.vue

## Outside resources
- I copied the *nav* element styling and logic from the ZipFoods example.
- [intercept a form submit in JavaScript and prevent normal submission](https://stackoverflow.com/questions/5384712/intercept-a-form-submit-in-javascript-and-prevent-normal-submission#5384732)

## Notes for instructor
This project is a subset of a larger idea involving a browser add-on that sends unique IDs to a server, which responds with data pertinent to the IDs.  The people who supply the pertinent data need to be able to input and edit it, among other tasks.

"content" is intentionally vague to avoid exposing details of an idea I might attempt to commercialize.

I used the *Fetch* API rather than Axios.  *Fetch* is sufficient for my needs, and all recent browsers support most or all of the specification.

