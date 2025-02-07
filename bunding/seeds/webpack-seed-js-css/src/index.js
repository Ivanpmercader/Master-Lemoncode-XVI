import "./styles.css"; //Remember, if we are importing the CSS file here, not necesary config in webpack.config.js like entry 
import globalLogo from "./assets/global_logo.png";

import dataDefaultService, { getAvg, getTotalScore } from "./averageService.js"


console.log(`API_URL Environment variable: ${process.env.API_URL}`);

const scores = dataDefaultService.scores;

const average = 90;

const avgScore = getAvg(scores);

const avgTotalScores = getTotalScore(scores);

const messageToDisplay = `Average build in webpack: ${average}, AvgScore: ${avgScore}, Total scores: ${avgTotalScores}`;

document.write(messageToDisplay);

const img = document.createElement("img");
img.src = globalLogo;
document.getElementById('img-js-container').appendChild(img);
