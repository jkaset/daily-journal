
// const eventHub = document.querySelector(".diary")
// This is the original data.
const eventHub = document.querySelector(".container")


const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}
  // const diaryStateChangedEvent = new CustomEvent("diaryStateChanged")

//   eventHub.dispatchEvent(diaryStateChangedEvent)
// }

let entries = []

export const getEntries = () => {
  return fetch("http://localhost:8088/entries") // Fetch from the API
      .then(response => response.json())  // Parse as JSON
      .then(
        parsedEntries => {
          entries = parsedEntries
          // What should happen when we finally have the array?
      })
}

export const useJournalEntries = () => {
  const sortedByDate = entries.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}



// const dispatchStateChangeEvent = () => {
//   eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))

//   eventHub.dispatchEvent(journalStateChangedEvent)
// }

export const saveJournalEntry = (newJournalEntry) => {
  // Use `fetch` with the POST method to add your entry to your API
  fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
  })
    .then(getEntries)  // <-- Get all journal entries
    .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}

