# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

From Frontendmentor.io, users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

Personally, i have encountered these problems:

- These number flippers have many layer that need to have it's size specified relatively to parent element or it's sibling elements which make responsiveness (media queries) difficult to be smooth (require many breakpoints)

## Solution

- Using: **SolidJS - Tailwind - Typescript**.
- Utilized `clamp()` for root `font-size` of flippers container and `calc()` for each property where sizes require changes on diffrent screen size.
- Built from mobile screen size to desktop (mobile-first).

### Preview

![](./.docs/design/desktop-design.jpg)

# Working in `fm-launch-countdown-timer` repository

## Clone this project to your machine

Make sure you have Git + NodeJS installed in your system, open new terminal, run the following command:

```
git clone https://github.com/haquanq/fm-launch-countdown-timer.git
```

Then, run `npm install` to install all dependencies.

```
npm install
```

## Development workflow

In terminal, run `npm run dev` to start development server:

```
npm run dev
```
