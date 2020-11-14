<template>
    <div id="app">
        <h1>P2</h1>

        <nav>
            <ul>
                <li>
                    <router-link v-for="link in links" :key="link" :to="paths[link]" exact>{{ link }}</router-link>
                </li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {

    },
    data() {
        return {
            links: ["home", "content", "verifier"],
            paths: {
                home: '/',
                content: "/content",
                verifier: "/verifier",
            },
        };
    },
};
</script>

<style scoped>
    nav ul { list-style-type: none; }

    nav ul li { display: inline-block; }

    nav ul li a:link,
    nav ul li a:visited,
    nav ul li a:hover,
    nav ul li a:active {
        /* Ref: https://stackoverflow.com/a/49783868 for why inline-block is added */
        display: inline-block;
        text-transform: capitalize;
        padding: 5px;
        margin: 5px;
        cursor: pointer;
        color: blue;
    }

    nav ul li a:hover {
        background-color: blue;
        color: white;
        text-decoration: none;
    }

    nav ul li a.router-link-active:link,
    nav ul li a.router-link-active:visited,
    nav ul li a.router-link-active:hover,
    nav ul li a.router-link-active:active {
        text-decoration: none;
        color: black;
        background-color: white;
        cursor: inherit;
    }
</style>
