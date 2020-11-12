import {getEntries, saveJournalEntry} from "../JournalDataProvider.js"
import {getMoods, useMoods} from "../MoodProvider.js"
import {getInstructors, useInstructors} from "../InstructorProvider.js"

const contentTarget = document.querySelector(".form__main")
const eventHub = document.querySelector(".container")

const render = () => {
getMoods().then(() => {
  const allMoods = useMoods()
getInstructors().then(() => {
  const allInstructors= useInstructors()

contentTarget.innerHTML = `
<div class="formBox">
<form action="" method="" class="form">
    
    <label class="form__element" for="today"></label>
      <input type="date" id="form__date" placeholder="Select today's date" name="today">

      <label class="form__element" for="concept"></label>
      <textarea class="form__element" for="concept" placeholder="Concepts covered" id="form__concepts"></textarea>

    <label class="form__element" for="instructor"></label>
    <select name="instructor" id="form__instructor">
    <option value = "0">Choose today's instructor</option>
    ${allInstructors.map((instructor) => {
      return `<option value="${instructor.id}">${instructor.first_name} ${instructor.last_name}</option>`
    }).join("")
  }
    </select>
    
    <label class="form__element" for="entry"></label>
    <textarea class="form__element--entry" for="entry" id="form__entry" placeholder="Dear diary,"></textarea>
      

    <label class="form__element" for="mood"></label>
    <select name="mood" id="form__mood">
    <option value = "0">How's your mood?</option>
    ${allMoods.map((mood) => {
      return `<option value="${ mood.id }">${ mood.label}</option>`
      }).join("")
  } 
    </select>
    </div>

    <button id="saveEntry" type="button">Record entry</button>
    </form>
    
  `
    })//ends getMoods then
  })
  }//ends render function

  

  eventHub.addEventListener("click", clickEvent =>{
    //console.log(clickEvent)
    if (clickEvent.target.id === "saveEntry") {
      const date = document.querySelector("#form__date").value
      const concept = document.querySelector("#form__concepts").value
      const instructorId = parseInt(document.querySelector("#form__instructor").value)
      const entry = document.querySelector("#form__entry").value
      const moodId = parseInt(document.querySelector("#form__mood").value)

      const newEntry = {
        date: date,
        concept: concept,
        entry: entry,
        moodId: parseInt(moodId),
        instructorId: parseInt(instructorId)
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