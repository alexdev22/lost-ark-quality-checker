import { classes } from '../data/classes'

export const chooseStats = (setStatsState, e) => {
  e.target.classList.toggle('crossed')
  setStatsState(oldArray => [...oldArray, e.target.textContent])
}

export const chooseEngravings = (setEngravings, e) => {
  e.target.classList.toggle('crossed')
  setEngravings(oldArray => [...oldArray, e.target.textContent])
}

export const classesPoints = [
  { berseker: 0 },
  { paladin: 0 },
  { gunlancer: 0 },
  { striker: 0 },
  { wardancer: 0 },
  { scrapper: 0 },
  { soulfist: 0 },
  { peacemaker: 0 },
  { artillerist: 0 },
  { deadeye: 0 },
  { sharpshooter: 0 },
  { bard: 0 },
  { sorceress: 0 },
  { shadowhunter: 0 },
  { deathblade: 0 }
]

export const finalResult = (engraving, statsState, setClassesPoints, classesPoitns) => {
  classes.map((c, index) => {
    if (c.engravingsEarly.includes(engraving[0]) && c.engravingsEarly.includes(engraving[1])) {
      const arrayCopy = [...classesPoints]
      setClassesPoints(arrayCopy, index[c.character] + 1 || 1)
    }
    if (c.engravingsLate.includes(engraving[0]) && c.engravingsLate.includes(engraving[1])) {
      const arrayCopy = [...classesPoints]
      setClassesPoints(arrayCopy, index[c.character] + 1 || 1)
    }

    if (c.engravingsLate.includes(engraving[0]) && c.engravingsLate.includes(engraving[1]) && c.stats.includes(statsState[0]) && c.stats.includes(statsState[1])) {
      const arrayCopy = [...classesPoints]
      setClassesPoints(arrayCopy, index[c.character] + 1 || 1)
    }
    if (c.engravingsLate.includes(engraving[0]) && c.engravingsLate.includes(engraving[1]) && c.stats.includes(statsState[0])) {
      const arrayCopy = [...classesPoints]
      setClassesPoints(arrayCopy, index[c.character] + 1 || 1)
    }

    if (c.engravingsEarly.includes(engraving[0]) && c.engravingsEarly.includes(engraving[1]) && c.stats.includes(statsState[0]) && c.stats.includes(statsState[1])) {
      const arrayCopy = [...classesPoints]
      setClassesPoints(arrayCopy, index[c.character] + 1 || 1)
    }

    if (c.engravingsEarly.includes(engraving[0]) && c.engravingsEarly.includes(engraving[1]) && c.stats.includes(statsState[0])) {
      const arrayCopy = [...classesPoints]
      setClassesPoints(arrayCopy, index[c.character] + 1 || 1)
    }

    if (c.engravingsEarly.includes(engraving[0]) || c.engravingsEarly.includes(engraving[1])) {
      const arrayCopy = [...classesPoints]
      setClassesPoints(arrayCopy, index[c.character] + 1 || 1)
    }
    if (c.engravingsLate.includes(engraving[0]) || c.engravingsLate.includes(engraving[1])) {
      classesPoitns[index][c.character] = classesPoitns[index][c.character] + 1 || 1
    }
  })
}

export const resetState = (setEngraving, setStatsState) => {
  setEngraving([])
  setStatsState([])
  window.location.reload()
}
