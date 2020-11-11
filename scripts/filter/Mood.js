export const MoodButton = (mood) => {
  return `<li><input type="radio" name="moodFilter" value="${mood.id}" />
  <label for="moodFilter--${mood.label}">${mood.label}</label></li>`
}