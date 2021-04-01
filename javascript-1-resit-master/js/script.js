const container = document.querySelector(".container")

const url = "https://official-joke-api.appspot.com/random_joke";

async function fetchJoke() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        // console.log(json);

        container.innerHTML = `<h1>JavaScript 1 CA Resit</h1>
                                <h2>${json.type} Joke</h2>
                                
                                <div class="joke setup">${json.setup}</div>
                                <div class="joke punchline">${json.punchline}</div>`
        }
    catch {
        container.innerHTML = `<h2>An error occured.</h2>`
    }
}

fetchJoke();