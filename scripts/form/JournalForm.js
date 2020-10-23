import {saveJournalEntry} from "../JournalDataProvider.js"

const contentTarget = document.querySelector(".form__main")
const eventHub = document.querySelector(".container")

const render = () => {
contentTarget.innerHTML = `
<form action="" method="" class="form">
    
    <label class="form__element" for="today">Date:</label>
      <input type="date" id="form__date" name="today">

    <label class="form__element" for="concepts">Concepts covered:</label>
      <input type="text" id="form__concepts" name="concepts">
    
    <label class="form__element" for="entry">Entry:</label>
    <textarea class="form__element" for="entry" id="form__entry" placeholder="Dear diary,"></textarea>
      

    <label class="form__element" for="mood">Vibe:</label>
    <select name="mood" id="form__mood" >
      <option value="Mood: I got this">I got this</option>
      <option value="Mood: Chippin away">Chippin away</option>
      <option value="Mood: I am genius!">I am genius!</option>
      <option value="Schmood: Fallin behind">Fallin behind</option>
      <option value="Mood: Banging head on keys">Banging head on keys</option>
      <option value="Mood: Head might explode">Head might explode</option>
      <option value="Mood: I'm cryin">I'm cryin</option>
    </select>

    <button id="saveEntry" type="button">Record entry</button>
  </form>
  `
  }

  export const JournalFormComponent = () => {
    render()
  }

  eventHub.addEventListener("click", clickEvent =>{
    //console.log(clickEvent)
    if (clickEvent.target.id === "saveEntry") {
      const date = document.querySelector("#form__date").value
      const concept = document.querySelector("#form__concepts").value
      const entry = document.querySelector("#form__entry").value
      const mood = document.querySelector("#form__mood").value

      const newEntry = {
        date: date,
        concept: concept,
        entry: entry,
        mood: mood
      }
      saveJournalEntry(newEntry)
      
    }
    
  })