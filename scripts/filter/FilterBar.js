import {MoodFilter} from "./MoodFilter.js"

const contentTarget = document.querySelector(".filters")

export const FilterBar = () => {
  render()
}

const render = () => {
  contentTarget.innerHTML = `
  ${MoodFilter()}`
}