import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
import { getMoods, useMoods} from "./MoodProvider.js"

const contentTarget = document.querySelector(".diary")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChanged", () => {EntryListComponent()})

export const EntryListComponent = () => {
     getEntries()
    .then(getMoods)
    .then(() => {
        const allEntries = useJournalEntries()
        const allMoods = useMoods()
        render(allEntries, allMoods)
    
    })

}

// const render = (entriesArray) => {

//     let entriesHTMLRepresentations = ""
//     for (const entry of entriesArray) {
//         entriesHTMLRepresentations += JournalEntryComponent(entry)
//     }
//     contentTarget.innerHTML = `
//         ${entriesHTMLRepresentations}
//     `
// }

const render = (entriesArray, moodsArray) => {
    contentTarget.innerHTML = entriesArray.map(entry => {
        const relatedMood = moodsArray.find(mood => mood.id === entry.moodId)
        //console.log(relatedMood)
        return `
        <section id="entry--${entry.id}" class="journalEntry">
        <div>Date: ${entry.date}</div>
        <div>Concept: ${entry.concept}</div>
        <div>Entry: ${entry.entry}</div>
        <div>Mood: ${relatedMood.label}</div>
        <button type="button">edit</button>
        <button type="button">delete</button>
      </section>
        `
    }).join("")
}


        
