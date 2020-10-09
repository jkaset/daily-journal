export const JournalEntryComponent = (entry) => {
  return `
  <section id="entry--${entry.id}" class="journalEntry">
    <div>${entry.date}</div>
    <div>${entry.concept}</div>
    <div>${entry.entry}</div>
    <div>${entry.mood}</div>
  </section>
  `
}