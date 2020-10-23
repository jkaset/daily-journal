const contentTarget = document.querySelector(".form__main")

const render = () => {
contentTarget.innerHTML = `
<form action="" method="" class="form">
    
    <label class="form__element" for="today">Date:</label>
      <input type="date" id="today" name="today">

    <label class="form__element" for="concepts">Concepts covered:</label>
      <input type="text" id="concepts" name="concepts">
    
    <label class="form__element" for="entry">Entry:</label>
    <textarea class="form__element" for="entry" id="entryID" placeholder="Dear diary,"></textarea>
      

    <label class="form__element" for="mood">Vibe:</label>
    <select name="mood" id="mood" >
      <option value="confident">I got this</option>
      <option value="determined">Chippin away</option>
      <option value="excited">I am genius!</option>
      <option value="lost">Fallin behind</option>
      <option value="frustrated">Banging head on keys</option>
      <option value="overwhelmed">Head might explode</option>
      <option value="sad">Cryin</option>
    </select>

    <button class="submit" type="button">Record entry</button>
  </form>
  `
  }

  export const JournalFormComponent = () => {
    render()
  }