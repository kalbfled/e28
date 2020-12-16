# Project 3
- By: David Kalbfleisch
- Production URL: https://e28p3.davejk.me

## Outside resources

- https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
- https://stackoverflow.com/questions/5384712/intercept-a-form-submit-in-javascript-and-prevent-normal-submission#5384732
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Sending_a_request_with_credentials_included


## Notes for instructor

My Project 2 includes basic client-side validation.  For Project 3, I added additional HTML validation for a textarea element in ContentFieldset.vue.

I modified my e28p2-api server in-place to required authentication for POST requests, so my Project 2 POST functionality will no longer work.

Logging in and out only occurs from the "Home" page.  I realize that this is bad design, but I'm pressed for time.  As the home page is the only place in the application where the user can login, I did not bother to make this a Vuex action.

I considered getting rid of the "Verifier" field on the "Verifier" page and just using the logged-in user's name.  However, in the final product I imagine, multiple users can work for the same verifier (an entity), and individual users should have their own credentials.
