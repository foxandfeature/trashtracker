//@input SceneObject streakCounter
//@input Component.Text streakCounterText
//@input SceneObject increaseButton
//@input SceneObject startButton

if (global.getStreak() > 0){
    script.streakCounter.enabled = true
    script.streakCounterText.text = global.getStreak().toString()
}

if (global.isStreakIncreaseAviable()){
    if (global.getStreak() > 0){
        script.increaseButton.enabled = true
    }
    else {
        script.startButton.enabled = true
    }
}