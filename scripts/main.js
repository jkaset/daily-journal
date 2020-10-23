import { JournalFormComponent } from './form/JournalForm.js'
import { getEntries } from './JournalDataProvider.js'
import { EntryListComponent } from './JournalEntriesList.js'

JournalFormComponent()
getEntries()
.then(EntryListComponent)

