# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### What I learned

I learned how to change image content via CSS and how to fetch API with JavaScript. 

```css
#divider-pattern {
  content: url("images/pattern-divider-mobile.svg");
}
```

```js
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceObj = adviceData.slip;
      adviceIdElement.textContent = "ADVICE #" + adviceObj.id;
      adviceTextElement.textContent = '"' + adviceObj.advice + '"';
    })
    .catch((error) => {
      console.log(error);
    });
}
```
### Live Website

Check out the live website [here](https://urkenzy.github.io/advice-generator-app/).
