/* time periods */
const daily = document.querySelector(".daily")
const weekly = document.querySelector(".weekly")
const monthly = document.querySelector(".monthly")
/* work */
const workDailyHour = document.querySelector(".work-daily-hour")
const workweeklyHour = document.querySelector(".work-weekly-hour")
const workmonthlyHour = document.querySelector(".work-monthly-hour")
const previousWorkDailyHour = document.querySelector(".previous-work-daily-hour")
const previousWorkWeeklyHour = document.querySelector(".previous-work-weekly-hour")
const previousWorkmonthlyHour = document.querySelector(".previous-work-monthly-hour")
/* play */
const playDailyHour = document.querySelector(".play-daily-hour")
const playweeklyHour = document.querySelector(".play-weekly-hour")
const playmonthlyHour = document.querySelector(".play-monthly-hour")
const previousplayDailyHour = document.querySelector(".previous-play-daily-hour")
const previousplayWeeklyHour = document.querySelector(".previous-play-weekly-hour")
const previousplaymonthlyHour = document.querySelector(".previous-play-monthly-hour")
/* study */
const studyDailyHour = document.querySelector(".study-daily-hour")
const studyweeklyHour = document.querySelector(".study-weekly-hour")
const studymonthlyHour = document.querySelector(".study-monthly-hour")
const previousstudyDailyHour = document.querySelector(".previous-study-daily-hour")
const previousstudyWeeklyHour = document.querySelector(".previous-study-weekly-hour")
const previousstudymonthlyHour = document.querySelector(".previous-study-monthly-hour")
/* exercise */
const exerciseDailyHour = document.querySelector(".exercise-daily-hour")
const exerciseweeklyHour = document.querySelector(".exercise-weekly-hour")
const exercisemonthlyHour = document.querySelector(".exercise-monthly-hour")
const previousexerciseDailyHour = document.querySelector(".previous-exercise-daily-hour")
const previousexerciseWeeklyHour = document.querySelector(".previous-exercise-weekly-hour")
const previousexercisemonthlyHour = document.querySelector(".previous-exercise-monthly-hour")
/* social */
const socialDailyHour = document.querySelector(".social-daily-hour")
const socialweeklyHour = document.querySelector(".social-weekly-hour")
const socialmonthlyHour = document.querySelector(".social-monthly-hour")
const previoussocialDailyHour = document.querySelector(".previous-social-daily-hour")
const previoussocialWeeklyHour = document.querySelector(".previous-social-weekly-hour")
const previoussocialmonthlyHour = document.querySelector(".previous-social-monthly-hour")
/* selfcare */
const selfcareDailyHour = document.querySelector(".selfcare-daily-hour")
const selfcareweeklyHour = document.querySelector(".selfcare-weekly-hour")
const selfcaremonthlyHour = document.querySelector(".selfcare-monthly-hour")
const previousselfcareDailyHour = document.querySelector(".previous-selfcare-daily-hour")
const previousselfcareWeeklyHour = document.querySelector(".previous-selfcare-weekly-hour")
const previousselfcaremonthlyHour = document.querySelector(".previous-selfcare-monthly-hour")

weekly.addEventListener ( "click" , () => {
    workDailyHour.innerText = workweeklyHour.innerText
    previousWorkDailyHour.innerText = previousWorkWeeklyHour.innerText
    playDailyHour.innerText = playweeklyHour.innerText
    previousplayDailyHour.innerText = previousplayWeeklyHour.innerText
    studyDailyHour.innerText = studyweeklyHour.innerText
    previousstudyDailyHour.innerText = previousstudyWeeklyHour.innerText
    exerciseDailyHour.innerText = exerciseweeklyHour.innerText
    previousexerciseDailyHour.innerText = previousexerciseWeeklyHour.innerText
    socialDailyHour.innerText = socialweeklyHour.innerText
    previoussocialDailyHour.innerText = previoussocialWeeklyHour.innerText
    selfcareDailyHour.innerText = selfcareweeklyHour.innerText
    previousselfcareDailyHour.innerText = previousselfcareWeeklyHour.innerText
    weekly.style.color = 'white'
    monthly.style.color = "hsl(235, 45%, 61%)"
    daily.style.color ="hsl(235, 45%, 61%)"
})

monthly.addEventListener ( "click" , () => {
    workDailyHour.innerText = workmonthlyHour.innerText
    previousWorkDailyHour.innerText = previousWorkmonthlyHour.innerText
    playDailyHour.innerText = playmonthlyHour.innerText
    previousplayDailyHour.innerText = previousplaymonthlyHour.innerText
    studyDailyHour.innerText = studymonthlyHour.innerText
    previousstudyDailyHour.innerText = previousstudymonthlyHour.innerText
    exerciseDailyHour.innerText = exercisemonthlyHour.innerText
    previousexerciseDailyHour.innerText = previousexercisemonthlyHour.innerText
    socialDailyHour.innerText = socialmonthlyHour.innerText
    previoussocialDailyHour.innerText = previoussocialmonthlyHour.innerText
    selfcareDailyHour.innerText = selfcaremonthlyHour.innerText
    previousselfcareDailyHour.innerText = previousselfcaremonthlyHour.innerText
    weekly.style.color = "hsl(235, 45%, 61%)"
    monthly.style.color = 'white'
    daily.style.color = "hsl(235, 45%, 61%)"
})

/* initial daily values */
const workDailyHourValue = workDailyHour.innerText
const previousWorkDailyHourValue = previousWorkDailyHour.innerText
const playDailyHourValue = playDailyHour.innerText
const previousplayDailyHourValue = previousplayDailyHour.innerText
const studyDailyHourValue = studyDailyHour.innerText
const previousstudyDailyHourValue = previousstudyDailyHour.innerText
const exerciseDailyHourValue = exerciseDailyHour.innerText
const previousexerciseDailyHourValue = previousexerciseDailyHour.innerText
const socialDailyHourValue = socialDailyHour.innerText
const previoussocialDailyHourValue = previoussocialDailyHour.innerText
const selfcareDailyHourValue = selfcareDailyHour.innerText
const previousselfcareDailyHourValue = previousselfcareDailyHour.innerText

daily.addEventListener ( "click" , () => {
    workDailyHour.innerText = workDailyHourValue
    previousWorkDailyHour.innerText = previousWorkDailyHourValue
    playDailyHour.innerText = playDailyHourValue
    previousplayDailyHour.innerText =previousplayDailyHourValue
    studyDailyHour.innerText = studyDailyHourValue
    previousstudyDailyHour.innerText = previousstudyDailyHourValue
    exerciseDailyHour.innerText = exerciseDailyHourValue
    previousexerciseDailyHour.innerText =  previousexerciseDailyHourValue
    socialDailyHour.innerText = socialDailyHourValue
    previoussocialDailyHour.innerText = previoussocialDailyHourValue
    selfcareDailyHour.innerText = selfcareDailyHourValue
    previousselfcareDailyHour.innerText = previousselfcareDailyHourValue
    weekly.style.color = "hsl(235, 45%, 61%)"
    monthly.style.color = "hsl(235, 45%, 61%)"
    daily.style.color = 'white'
})

