import { getEntries } from './JournalDataProvider.js'
import { EntryListComponent } from './JournalEntriesList.js'

getEntries()
.then(EntryListComponent)
