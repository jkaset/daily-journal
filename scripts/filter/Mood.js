export const MoodButton = (mood) => {
  return `<li>
  <label class="moodFilter"> 
  <input type="radio" name="moodFilter"  value="${mood.id}"/>
  <span>${mood.label}<span>
  </label>
  </li>`
}


// return `<li><input type="radio" name="moodFilter"  value="${mood.id}" />
// <label class="moodFilter" for="moodFilter--${mood.label}">${mood.label}</label></li>`