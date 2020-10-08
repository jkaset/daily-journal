/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered


export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    
    //MOVED THIS INTO THE FUNCTION
    const entryLog = document.querySelector(".diary")
    //
    const entries = useJournalEntries()

     //CODE I ADDED:
    //  let journalHTMLRepresentations = ""
     //END OF CODE I ADDED

    for (const entry of entries) {

      //CODE I ADDED:
    //  journalHTMLRepresentations += JournalEntryComponent(entry)
    
     //END OF CODE I ADDED

        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML += `
        <article class="diary">
            ${journalHTMLRepresentations}
        </article>
        `
    }
}