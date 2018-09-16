function alcohol(SD, BW, Wt, MR, DP) {
    var result;
    result = ((((0.806 * parseFloat(SD) * 1.2) / (parseFloat(BW) * parseFloat(Wt)) - parseFloat(MR) * parseFloat(DP))) * 10);
    alcoholResult.value = result;
    if (result >= 0.001 && result <= 0.029) {
        $("#behavior").get(0).innerHTML = "Behavior: Average individual appears normal;";
        $("#impairment").get(0).innerHTML = "Impairment: Subtle effects that can be detected with special tests;";
    } else if (result >= 0.060 && result <= 0.099) {
        $("#behavior").get(0).innerHTML = "Behavior: Blunted feelings, reduced sensitivity to pain, euphoria, disinhibition, extraversion;";
        $("#impairment").get(0).innerHTML = "Impairment: Reasoning, depth perception, depth perception, peripheral vision, glare recovery;";
    } else if (result >= 0.100 && result <= 0.199) {
        $("#behavior").get(0).innerHTML = "Behavior: Over-expression, boisterousness, possibility of nausea and vomiting;";
        $("#impairment").get(0).innerHTML = "Impairment: Reflexes, reaction time, gross motor control, staggering, slurred speech, temporary erectile dysfunction;";
    } else if (result >= 0.200 && result <= 0.299) {
        $("#behavior").get(0).innerHTML = "Behavior: Nausea, vomiting, emotional swings, anger or sadness, partial loss of understanding, impaired sensations, decreased libido, possibility of stupor;";
        $("#impairment").get(0).innerHTML = "Impairment: Severe motor impairment, loss of consciousness, memory blackout;";
    } else if (result >= 0.300 && result <= 0.399) {
        $("#behavior").get(0).innerHTML = "Behavior: Stupor, central nervous system depression, loss of understanding, lapses in and out of consciousness, low possibility of death;";
        $("#impairment").get(0).innerHTML = "Impairment: Bladder function, breathing, dysequilibrium, heart rate;";
    } else if (result >= 0.400 && result <= 0.500) {
        $("#behavior").get(0).innerHTML = "Behavior: Severe central nervous system depression, coma, possibility of death";
        $("#impairment").get(0).innerHTML = "Impairment: Breathing, heart rate, positional alcohol nystagmus;";
    } else if (result > 0.50) {
        $("#behavior").get(0).innerHTML = "Behavior: High possibility of death;";
    } else {
        $("#behavior").get(0).innerHTML = "smth go wrong!!!";
    }
}
