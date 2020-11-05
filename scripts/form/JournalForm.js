import {getEntries, saveJournalEntry} from "../JournalDataProvider.js"
import {getMoods, useMoods} from "../MoodProvider.js"

const contentTarget = document.querySelector(".form__main")
const eventHub = document.querySelector(".container")

const render = () => {
getMoods().then(() => {
  const allMoods = useMoods()

contentTarget.innerHTML = `
<form action="" method="" class="form" >
    
    <label class="form__element" for="today">Date:</label>
      <input type="date" id="form__date" name="today">

    <label class="form__element" for="concepts">Concepts covered:</label>
      <input type="text" id="form__concepts" name="concepts">
    
    <label class="form__element" for="entry">Entry:</label>
    <textarea class="form__element" for="entry" id="form__entry" placeholder="Dear diary,"></textarea>
      

    <label class="form__element" for="mood">Vibe:</label>
    <select name="mood" id="form__mood">
    <option value = "0">How's your mood?<option>
    ${allMoods.map((mood) => {
      return `<option value="${ mood.id }">${ mood.label}</option>`
      }).join("")
  } 
    </select>
    

    <button id="saveEntry" type="button">Record entry</button>
  </form>
  `
    })//ends getMoods then
  }//ends render function

  

  eventHub.addEventListener("click", clickEvent =>{
    //console.log(clickEvent)
    if (clickEvent.target.id === "saveEntry") {
      const date = document.querySelector("#form__date").value
      const concept = document.querySelector("#form__concepts").value
      const entry = document.querySelector("#form__entry").value
      const moodId = parseInt(document.querySelector("#form__mood").value)

      const newEntry = {
        date: date,
        concept: concept,
        entry: entry,
        moodId: parseInt(moodId)
      }
      saveJournalEntry(newEntry)
      getEntries()
      render()
      location.reload()
    }
    
  })

  export const JournalFormComponent = () => {
    render()
  }