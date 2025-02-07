export function getAvg(scores){
    return getTotalScore(scores) / scores.length;
}

export function getTotalScore(scores) {
    return scores.reduce((score, count) => score + count);
}

export default { scores: [90, 75, 60, 99, 21] };