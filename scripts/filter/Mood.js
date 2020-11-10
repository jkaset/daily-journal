export const MoodButton = (mood) => {
  return `<input type="radio" name="moodFilter" value="${mood.id}"/>
  <label for="moodFilter--${mood.label}">${mood.label}</label>`
}