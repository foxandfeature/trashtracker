var store = global.persistentStorageSystem.store;
const lastDateKey = 'lastDate'
const streakKey = 'streak'

var today = new Date()
today.setHours(0)
today.setMinutes(0)
today.setSeconds(0)
today.setMilliseconds(0)

var streak = 0
var streakIncreaseAviable = true

function loadStreak(){
    lastDateTime = Number(store.getString(lastDateKey))
    if (lastDateTime != 0){
        lastDate = new Date()
        lastDate.setTime(lastDateTime)
        difference = today.getTime()-lastDate.getTime()
        if (difference <= 86400000){
            streak = store.getInt(streakKey)
        }
        if (difference == 0){
            streakIncreaseAviable = false
        }
    }
}
loadStreak()

function getStreak(){
    return streak
}
global.getStreak = getStreak

function isStreakIncreaseAviable() {
    return streakIncreaseAviable
}
global.isStreakIncreaseAviable = isStreakIncreaseAviable

function increaseStreak(){
    streak += 1
    streakIncreaseAviable = false
    store.putString(lastDateKey,today.getTime().toString());
    store.putInt(streakKey,streak);
}
global.increaseStreak = increaseStreak