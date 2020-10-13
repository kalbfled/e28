// Copyright 2020 David J. Kalbfleisch

// This is the number of times the player gets to guess.
const ATTEMPTS = 3;

// The number to guess is an integer in [0, HIGH].
const HIGH = 10;


Vue.component("highlow-score", {
    props: ["victories", "defeats"],
    template: `
        <div class="score">
            <h2>Score</h2>
            <p>Player: {{ victories }}</p>
            <p>Computer: {{ defeats }}</p>
        </div>`
});


let app = new Vue({
    el: "#app",
    data: {
        supersecret_number: Math.round(Math.random(5) * HIGH),
        attempts: ATTEMPTS,
        guesses: [],
        current_guess: undefined,
        gameover: false,
        victories: 0,
        defeats: 0,
        history: {},
    },
    methods: {
        make_guess: function()
        {
            // Per the specification, assume valid user input.
            console.assert(typeof(this.current_guess) == "number", "Vue should convert the string input to a number.");
            this.guesses.push(this.current_guess);

            if (this.current_guess === this.supersecret_number)
            {
                this.gameover = true;
                this.victories += 1;
                this.history[this.victories + this.defeats] = "player";
            }
            else
            {
                this.attempts -= 1;

                if (this.attempts < 1)
                {
                    this.gameover = true;
                    this.defeats += 1;
                    this.history[this.victories + this.defeats] = "computer";
                }
            }

            // Clear the input element.
            this.current_guess = undefined;
        },
        guess_class: function(guess)
        {
            return (guess === this.supersecret_number) ? "correct" : "incorrect";
        },
        guess_feedback: function(guess)
        {
            if (guess === this.supersecret_number)
                return guess + " is correct!";
            else if (guess > this.supersecret_number)
                return "Lower than " + guess;
            else if (guess < this.supersecret_number)
                return "Higher than " + guess;
            else
                return "programming error";
        },
        restart_game: function()
        {
            this.supersecret_number = Math.round(Math.random(5) * HIGH);
            this.attempts = ATTEMPTS;
            this.guesses = [];
            this.gameover = false;
        },
        reset_game: function()
        {
            this.restart_game();

            this.victories = 0;
            this.defeats = 0;
            this.history = {};
        },
    },
    computed: {
        guess_plural: function()
        {
            return this.attempts == 1 ? '' : "es";
        },
        high: function()
        {
            return HIGH;
        },
    }
});

