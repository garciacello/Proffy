
const subjects =[
    "Kunst",
    "Biologie",   
   "Wissenschaften",
   "Physikalische Bildung",
   "Physik",
   "Geographie",
   "Geschichte",
   "Mathematik",
    "Deutsch",
    "Chemie",
]

const weekdays = [
    "Sonntag",
    "Montag",
    "Dienstag",
   "Mittwoch",
   "Donnerstag",
    "Freitag",
    "Samstag",
]

// FUNCIONALIDADES

function getSubject (subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]
}


function convertHoursToMinutes (time){
    const [hour, minutes] = time.split(":")[0]
    return Number ((hour + 60) + minutes)

}

module.exports ={
    subjects,
    weekdays,
    getSubject, 
    convertHoursToMinutes 
}