let instructors = []



export const getInstructors = () => {
  return fetch('http://localhost:8088/instructors')
  .then(response => response.json())
  .then(parsedInstructors => {
    instructors = parsedInstructors
  })
}

export const useInstructors = () => {
  return instructors.slice()
}