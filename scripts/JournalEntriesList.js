import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const contentTarget = document.querySelector(".form__main")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChanged", () => {EntryListComponent()})

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entryLog = document.querySelector(".diary")
    const entries = useJournalEntries()
    // let entryHTMLRepresentations = ""
    // //let journalHTMLRepresentations = ""
    // for (const entry of entries) {
    //     entryHTMLRepresentations += JournalEntryComponent(entry)
    // }
    //render(entries)

    //THIS WORKED BUT DIDN'T REFRESH
    entryLog.innerHTML += `
    <div class="oneEntry">
            
            <div class="entryEach">${entries.map(entry => JournalEntryComponent(entry)).join("")}</div>
            
        </div>
    `   
}

const render = (entriesArray) => {
    let entriesHTMLRepresentations = ""
    for (const entry of entriesArray) {
        entriesHTMLRepresentations += JournalEntryComponent(entry)
    }
    contentTarget.innerHTML = `
        ${entriesHTMLRepresentations}
    `
}
        
//     entryLog.innerHTML += `
//         <div class="oneEntry">
            
//             <div class="entryEach">${entryHTMLRepresentations}</div>
            
//         </div>
//     `   
// }

// DOM reference to where all entries will be rendered
// CHANGED CLASS HERE
// MY CODE TO LOOK LIKE JISIES
// const buildEntryContainerHTML = (array) => {
//     let entryHTML = "" 
//     for const (element of array) {
//         entryHTML += JournalEntryComponent(element)
//     }
//     return entryHTML
// }


// export const EntryListComponent = () => {

//     //MOVED THIS CODE INTO FUNCTION
//     const entryLog = document.querySelector(".diary")
    
//     const entries = useJournalEntries()
//     console.log(entries)

    // for (const entry of entries) {

      //CODE I ADDED and COMMENTED OUT:
    // journalHTMLRepresentations += JournalEntryComponent(entry)
    //     return journalHTMLRepresentations
    // }

    
    
     //END OF CODE I ADDED

        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        // EntryListComponent.innerHTML += `
        // <article class="diary">
        //     ${journalHTMLRepresentations}
        // </article>
        // `
    // }
