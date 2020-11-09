export const JournalEntryComponent = (entry) => {
  return `
  <section id="entry--${entry.id}" class="journalEntry">
    <div>${entry.date}</div>
    <div>${entry.concept}</div>
    <div>${entry.entry}</div>
    <div>${entry.moodId}</div>
    <div>${entry.instructorId}</div>
    <button type="button">edit</button>
      <button id="deleteNote--${entry.id}" type="button">delete</button>
  </section>
  `
}