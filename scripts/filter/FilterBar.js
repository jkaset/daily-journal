import {MoodFilter} from "./MoodFilter.js"

const contentTarget = document.querySelector(".filters")
const eventHub = document.querySelector(".container")

export const FilterBar = () => {
  render()
}

const render = () => {
  contentTarget.innerHTML = `
  ${MoodFilter()}`
}

//event for radio buttons
eventHub.addEventListener("change", changeEvent => {
  //console.log("change happend")
  if (changeEvent.target.name === "moodFilter") {
  //console.log("selected!")
    
  }
})