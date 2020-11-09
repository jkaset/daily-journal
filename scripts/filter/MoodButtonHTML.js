export const MoodButtonHTML = (mood) => {
  return `
  <input type="radio" name="moodFilter" 
  value="${ mood.id }"/>
  <label for="moodFilter--happy">${ mood.label }</label>
  `
} 