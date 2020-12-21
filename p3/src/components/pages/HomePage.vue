<template>
    <div>
        <h2>Home Page</h2>
        <p>The database is prepopulated with information for content IDs 1 and 2.</p>
        <p>Verifiers annotate content with thumbs up/down and provide justifications.</p>

        <div v-if="user">
            <p>Hello, <strong>{{ user }}</strong>.</p>
            <p><a href='' @click="logout">Logout</a></p>
        </div>

        <!-- TODO - Because I have not included a "form" element, input validation is not enforced.
            This let's people register without entering any information. -->
        <!-- TODO - The logged-in state is not retained after refreshing the browser. -->
        <div v-else>
            <h3>Login or Register</h3>

            <p v-if="message" :class="message_class">{{ message }}</p>

            <label for="name">User name (3-20)</label>
            <input id="name" name="name" min="3" max="30" required>
            <br>

            <label for="password">Password (8-100)</label>
            <input type="password" id="password" name="password" min="8" max="100" required>
            <br>

            <input type="submit" value="Login" @click="login">
            <input type="submit" value="Register" @click="register">
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            message: '',
            message_class: '',
        };
    },
    methods: {
        login() {
            var post_data = {
                name: document.getElementById("name").value,
                password: document.getElementById("password").value,
            };

            console.debug(post_data);

            var url = process.env.VUE_APP_API_URL + "/login";
            console.debug("url = ", url);

            fetch(url, { method: "POST", body: JSON.stringify(post_data), credentials: "include" })
            .then(response => {
                if (response.status == 200)
                {
                    // Successful log-in
                    this.$store.commit("setUser", post_data["name"]);
                    this.message = '';
                }
                else
                {
                    console.debug(response);
                    this.message = "Login failed.";
                    this.message_class = "error";
                }
            })
            .catch(e => {
                console.error(e);
            });
        },
        logout() {
            var url = process.env.VUE_APP_API_URL + "/logout";
            console.debug("url = ", url);

            fetch(url, { method: "GET", credentials: "include" })
            .then(response => {
                if (response.status == 200)
                    // Successful log-out
                    this.$store.commit("setUser", '');
                else
                    console.debug(response);
            })
            .catch(e => {
                console.error(e);
            });
        },
        register() {
            var post_data = {
                name: document.getElementById("name").value,
                password: document.getElementById("password").value,
            };

            console.debug(post_data);
            var url = process.env.VUE_APP_API_URL + "/register";
            console.debug("url = ", url);

            fetch(url, { method: "POST", body: JSON.stringify(post_data), credentials: "include" })
            .then(response => {
                if (response.status == 201)
                {
                    this.message = "You successfully registered.";
                    this.message_class = "success";
                }
                else if (response.status == 200)
                {
                    this.message = "That name is already in use.";
                    this.message_class = "error";
                }
                else
                {
                    console.debug(response);
                    this.message = "Registration failed.  See the console.";
                    this.message_class = "error";
                }
            })
            .catch(e => {
                console.error(e);
            });
        },
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
};
</script>

<style scoped>
    .error { color: red; }

    .success { color: green; }
</style>
