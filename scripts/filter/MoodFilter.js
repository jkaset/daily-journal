import {useMoods, getMoods} from '../MoodProvider.js'
import {MoodButton} from './Mood.js'



export const MoodFilter = () => {
   getMoods().then(() => {
      const moodContainer = document.querySelector(".filters")
      const moodArray = useMoods()
      let buildMoodList = ""
      for (const mood of moodArray) {
        buildMoodList += MoodButton(mood)
      }
       moodContainer.innerHTML = `<div class="filterBox">
       <ul class="moodF">${buildMoodList}<ul></div>`
    })
  }