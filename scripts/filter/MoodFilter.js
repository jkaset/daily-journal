//import {useMoods, getMoods} from './MoodProvider.js'



// export const MoodFilter = () => {
  
    // getMoods()
    //   .then(() => {
    //     const allMoods = useMoods()
    //     render(allMoods)
    //   })       
    // }

// const render = (moodsArray, entriesArray) => {
//   let moodsHTMLRepresentations = ""
//   for (const entry of entries) {
//     const relatedMood = moodsArray.find(mood => mood.id === entries.moodId)

//     moodsHTMLRepresentations += MoodButtonHTML(entry, relatedMood)
//   }

// }
let allMoods = []

// const MoodFilter = () => {
//     getMoods()
//     .then(() => {
//       const allMoods = useMoods()
//     render(allMoods)
//     })
// }
        
export const MoodFilter = () => {
   
    return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${
                allMoods.map(
                    (mood) => {
                        return `<input type="radio" name="moodFilter" value="${ mood.id }"/>
                        <label for="moodFilter--happy">${ mood.label }</label>
                        `
                    }
                ).join("")
            }
        </fieldset>
        `
    }