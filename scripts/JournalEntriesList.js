import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
//CHANGED CLASS HERE
//MY CODE TO LOOK LIKE JISIES
const buildEntryContainerHTML = (array) => {
    let entryHTML = "" 
    for const (element of array) {
        entryHTML += JournalEntryComponent(element)
    }
    return entryHTML
}


export const EntryListComponent = () => {

    //MOVED THIS CODE INTO FUNCTION
    const entryLog = document.querySelector(".diary")
    
    const entries = useJournalEntries()
    console.log(entries)

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
        EntryListComponent.innerHTML += `
        <article class="diary">
            ${journalHTMLRepresentations}
        </article>
        `
    }
