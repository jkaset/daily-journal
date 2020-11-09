import { JournalFormComponent } from './form/JournalForm.js'
import { getEntries } from './JournalDataProvider.js'
import { EntryListComponent } from './JournalEntriesList.js'
import {FilterBar} from './filter/FilterBar.js'


JournalFormComponent()
getEntries()
.then(EntryListComponent)

FilterBar()
