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

// here I have used promises and fetch..
// we can use async await too. Using async and await makes life easy.

// const generateJoke = async () => {
// try{
//   const setHeader = {
//   headers: {
//     Accept: "application/JSON"
//   }
// };

// const res = await fetch("https://icanhazdadjoke.com/", setHeader);
// const data = await res.json();
// joke.innerHTML = data.joke;
// }catch(err){
//   console.log(`The error is: $(err)`);
// }

// }
