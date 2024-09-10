const projects = [
	{
		title: "Tenzies",
		description: `Tenzies is a dice game which is a combination of dice rolling and dice matching. The game is played with a single player, and the goal is to roll the ten dice repeatedly, attempting to get all the same number.  You can 'hold' as many dice each turn as you want and only roll the free dice.  The game is won when all dice match. 
			This was a 'solo project' from Scrimba's Frontend Developer career path.  I expanded my project to use the 'react-roll-dice' package, which allowed me to add a dice rolling animation and gave me a chance to practice using 3rd part React packages.  Give the game a try at the live link below!`,
		image: "",
		clip: "/clips/tenzies-clip.mov",
		gitHub: "https://github.com/cwatersaudio/animated-tenzies",
		liveSite: "https://animatedtenzies.netlify.app/",
	},
	{
		title: "Movie Watchlist",
		description: `This was another project from the Scrimba Frontend Developer career path.  This app allows the user to search for movies on The Open Movie Database and to save movies in the results in a "watchlist."  The original project on Scriumba was made using vanilla javascript but I adapted it into a React project.  In this project, I practiced making API calls in React, utilizing LocalStorage and the useEffect hook, and creating mutli-page web layouts.`, //could these be linked to git readme?
		image: "",
		clip: "",
		gitHub: "",
		liveSite: "",
	},
	{
		title: "Color Picker",
		description:
			"This is an app that allows the user to select a seed color and get a swatch of complementary colors using The Color API.  I adapted this project from a tutorial on Scrimba that was done in javascript, bringing the project into React.  I added a few features to the original project, including the ability to save the color swatch to the browser's local storage, to copy the hex code to the user's clipboard, and to update the gradient in the background based on the current color scheme.",
		image: "/img/color-picker-img.png",
		clip: "",
		gitHub: "https://github.com/cwatersaudio/color-picker-standalone.git",
		liveSite: "https://cwcolorpicker.netlify.app",
	},
	{
		title: "Endorsements",
		description:
			"This is an app that allows the user to add endorsements to a list.",
		image: "/img/endoresements-img.png",
		clip: "",
		gitHub: "https://github.com/cwatersaudio/endorsements-standalone.git",
		liveSite: "https://cwendorsements.netlify.app/",
	},
	{
		title: "Trivia App",
		description:
			"This was a solo project from Scrimba's Frontend Developer career path.  The goal of this project was to practice using the useEffect hook, using the useState hook, and using the useRef hook.  The app pulls trivia questions from the Open Trivia Database API based on parameters specified by the user (the difficulty of the questions, number of questions, and topic of the questions). After the user selects the type/number of questions, they can play a multiple-choice trivia game.  When they are ready, the app will show them how many correct answers they got and which answer to each question was correct.",
		image: "/img/quizzical2.png",
		clip: "",
		gitHub: "https://github.com/cwatersaudio/quizzical-standalone",
		liveSite: "https://cwquizapp.netlify.app/",
	},
];

export default projects;
