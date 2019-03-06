import moment from 'moment'

export const years = startYear => {
  const currentYear = new Date().getFullYear()
  const years = []
  startYear = startYear || 1980

  while (startYear <= currentYear) {
    years.push({ value: startYear++, label: startYear++ })
  }
  return years
}

export const days = () => {
  const days = []
  for (let index = 0; index < 31; index++) {
    let i = index + 1
    if (index < 9) {
      days.push({ value: `0${i}`, label: `0${i}` })
    } else {
      days.push({ value: `${i}`, label: `${i}` })
    }
  }

  return days
}

export const months = () =>
  moment.months().map(month => ({ value: month, label: month }))
