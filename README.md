# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screenshot of completed project](./images/Screenshot%20Completed%20Frontend%20Mentor%20Interactive%20rating%20component.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/Ankia-Fuls/fem-interactive-rating-component)
- Live Site URL: [GitHub Pages](https://ankia-fuls.github.io/fem-interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to set input buttons to be accessible by setting the role and aria-pressed values. I used JS alongside that to update the aria-pressed functionality when a button is pressed as well as to toggle off all other input buttons so only one is selected.

In the code snippet below, the chosenValue was the number of the button that was pressed and the id is the id of the button that was clicked. All 5 input buttons had an onclick property which called this function to store the rating that was selected and then toggle the ariaPressed property. This property is also used in the CSS to display the white background of the selected value while focus and hover is used to display the hover color for the button.

```js
const selectButton = (id) => {
    chosenValue = id.slice(-1);

    for (let i = 1; i < 6; i++) {
        if (i != chosenValue) {
            document.getElementById(`button-${i}`).ariaPressed = "false";
        }
        else {
            document.getElementById(`${id}`).ariaPressed = "true";
        }
    }
}
```

### Continued development

I would like to continue learning how to make more accessible websites with a responsive design.

### Useful resources

- [Input type button](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/button) - This helped me understand how to use the input type button in a form for the ratings.
- [Aria pressed](https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaPressed) - This helped me understand how to utilize the ariaPressed attribute.

## Author

- Frontend Mentor - [@Ankia-Fuls](https://www.frontendmentor.io/profile/Ankia-Fuls)
- GitHub - [@Ankia-Fuls](https://github.com/Ankia-Fuls)