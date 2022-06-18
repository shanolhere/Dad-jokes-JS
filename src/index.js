/* <div class="joke"></div>
<button class="btn">Click here</button> */

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

const generateJoke = () => {
  const setHeader = {
    headers: {
      Accept: "application/JSON"
    }
  };

  fetch("https://icanhazdadjoke.com/", setHeader)
    .then((res) => res.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    })
    .catch((err) => {
      console.log(err);
    });
};

btn.addEventListener("click", generateJoke);
