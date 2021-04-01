const container = document.querySelector(".results", ".row")

const url = "https://official-joke-api.appspot.com/random_ten";


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
        container.innerHTML = `<h1>An error occured.${(error)}</h1>` 
    })

async function fetchJoke() {
    try {
        const response = await fetch(url);
        const json = await response.json();


        container.innerHTML = ``;

        for (let i = 0; i < json.length; i++) {

            if (i === 5) {
                break;
            }

                container.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
                                            <div class="card">
                                                <div class="joke-detail">
                                                    <h4 class="type">${json[i].type}</h4>
                                                    <div class="setup">${json[i].setup}</div>
                                                    <div class="punchline">${json[i].punchline}</div>
                                                </div> 
                                            </div>
                                        </div>`
            }
        }
        catch {
            container.innerHTML = `<h1>An error occured.</h1>`
            }
        }

fetchJoke();