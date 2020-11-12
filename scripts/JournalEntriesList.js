import { useInstructors } from "./InstructorProvider.js"
import { getEntries, useJournalEntries, deleteEntry } from "./JournalDataProvider.js"
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
        const allInstructors = useInstructors()
        render(allEntries, allMoods, allInstructors)
    
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

const render = (entriesArray, moodsArray, instructorArray) => 
{
    contentTarget.innerHTML = entriesArray.map(entry => {
        const relatedMood = moodsArray.find(mood => mood.id === entry.moodId)
        //console.log(relatedMood)
        const relatedInstructor = instructorArray.find(instructor => instructor.id === entry.instructorId)
        return `
  

        <section id="entry--${entry.id}" class="journalEntry">
        <div>Date: ${entry.date}</div>
        <div>Concept: ${entry.concept}</div>
        <div>Instructor: ${relatedInstructor.first_name}</div>
        <div>Entry: ${entry.entry}</div>
        <div>Mood: ${relatedMood.label}</div>
        <button type="button">edit</button>
        <button id="deleteNote--${entry.id}" type="button">delete</button>
      </section>
        `
    }).join("")
}


//inside html above <div>Concept: ${related.first_name}</div>
//trying to do instructors
// {
//     let entryHTML = ""
//     for (const entry of entriesArray) {
//         const relatedInstructor = instructorsArray.find(instructor => instructor.id === entry.instructorId)
//     entryHTML += JournalEntryComponent(relatedInstructor)
//     }
//     console.log(entryHTML)
// }


//EVENTHUB FOR DELETE
eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith ("deleteNote--")){
        console.log("I'm listnin")
        const [prefix, id] = e.target.id.split("--")

        deleteEntry(id).then(
            () => {
                const updatedEntries = useJournalEntries()
                const moods = useMoods()
                const instructors = useInstructors()
                render(updatedEntries, moods, instructors)
            }
        )
     }
})

eventHub.addEventListener("moodFilter", moodFilterEventObj => {
    // const contentTarget = document.querySelector(".diary")
    const selectedMood = moodFilterEventObj.detail.moodName
    const allEntries = useJournalEntries()
    const allMoods = useMoods()
    const allInstructors = useInstructors()
    console.log("Moodfilter Event is heard!", selectedMood)
    
    
    //console.log("entries array", journalEntriesArray)

    const filteredEntriesArray = allEntries.filter(moodFilterEventObj => {
        if (moodFilterEventObj.moodId === selectedMood) {
            return true
            
        }

    })
    console.log(filteredEntriesArray)
    //contentTarget.innerHTML = `${}`
    render(filteredEntriesArray, allMoods, allInstructors)

})//end of evenHub fuct

