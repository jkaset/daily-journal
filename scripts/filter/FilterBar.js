import { getMoods } from "../MoodProvider.js"
import {MoodFilter} from "./MoodFilter.js"

const contentTarget = document.querySelector(".filters")
const eventHub = document.querySelector(".container")

export const FilterBar = () => {
  render()
}

const render = () => {
  getMoods().then(()=> {
  contentTarget.innerHTML = `
  ${MoodFilter()}`
})
}

//event for radio buttons
eventHub.addEventListener("change", e => {
  //console.log("change happend")
  if (e.target.name === "moodFilter") {
  //console.log("selected!")
    const moodButtonEvent = new CustomEvent("moodFilter", {
      detail: {
        moodName: parseInt(e.target.value)
      }
    })
    
    //console.log("Dispatch event to event hub")
    eventHub.dispatchEvent(moodButtonEvent)
  }
})