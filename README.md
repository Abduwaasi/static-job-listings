# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://react-static-job-listings.netlify.app/

### Built with

- Flexbox
- Responsive-Web-design
- [React](https://reactjs.org/) - JS library

### What I learned

I learned more about the filter method of arrays in Javascript, and conditional rendering in React.

```Js
    const newCategory = data.filter(
      (item) =>
        item.role === category ||
        item.level === category ||
        item.languages.includes(category) ||
        item.tools.includes(category)
    );
}
```

### Continued development

I want to continue perfecting my knowledge on getting info from an external API.

### Useful resources

- (https://www.YouTube.com/CodingAddict) - This channel, run by John Smilga, taught me everything I know in React.

## Author

- Frontend Mentor - [@iykekelvins](https://www.frontendmentor.io/profile/iykekelvins)
- Twitter - [@iykekelvins](https://www.twitter.com/iykekelvins)

## Acknowledgments

I'd like to thank Frontend Mentor first for the opportunity to show forth our skills, to John Smilga, owner of Coding Addict YouTube channel, for his excellent React tutorials, and to my friend Udochukwu for his assistance.
