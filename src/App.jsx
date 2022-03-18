
import './App.css'
import { classes } from './data/classes'
import { useState } from 'react'
import { engravings } from './data/engravings'
import { stats } from './data/stats'

function App () {
  const [engraving, setEngraving] = useState([])
  const [statsState, setStatsState] = useState([])
  const [result, setResult] = useState([])

  engravings.sort()

  const resetState = () => {
    setEngraving([])
    setStatsState([])
    window.location.reload()
  }
  const chooseEngravings = (e) => {
    if (e.target.checked) {
      setEngraving(oldArray => [...oldArray, e.target.value])
    }
    if (!e.target.checked) {
      setEngraving(prev => [prev.pop()])
    }
  }

  const chooseStats = (e) => {
    if (e.target.checked) {
      setStatsState(oldArray => [...oldArray, e.target.value])
    }
    if (!e.target.checked) {
      setStatsState(prev => [prev.pop()])
    }
  }

  const finalResult = () => {
    setResult([])
    classes.map(c => {
      if (c.engravingsEarly.includes(engraving[0]) && c.engravingsEarly.includes(engraving[1])) {
        setResult(prev => [...prev, `${c.engravingsEarly[0]} y ${c.engravingsEarly[1]} Son Bisses para ${c.character} en Early`])
      }
      if (c.engravingsLate.includes(engraving[0]) && c.engravingsLate.includes(engraving[1])) {
        setResult(prev => [...prev, `${c.engravingsEarly[0]} y ${c.engravingsEarly[1]} son bisses para ${c.character} en Endgame`])
      }

      if (c.engravingsLate.includes(engraving[0]) && c.engravingsLate.includes(engraving[1]) && c.stats.includes(statsState[0]) && c.stats.includes(statsState[1])) {
        return setResult(prev => [...prev, `Biss collar ${c.character} endgame`])
      }
      if (c.engravingsLate.includes(engraving[0]) && c.engravingsLate.includes(engraving[1]) && c.stats.includes(statsState[0])) {
        setResult(prev => [...prev, `Biss joyería  ${c.character} endgame`])
      }

      if (c.engravingsEarly.includes(engraving[0]) && c.engravingsEarly.includes(engraving[1]) && c.stats.includes(statsState[0]) && c.stats.includes(statsState[1])) {
        return setResult(prev => [...prev, `Biss collar  ${c.character} Early`])
      }

      if (c.engravingsEarly.includes(engraving[0]) && c.engravingsEarly.includes(engraving[1]) && c.stats.includes(statsState[0])) {
        return setResult(prev => [...prev, `Biss joyería  ${c.character} Early`])
      }

      if (c.engravingsEarly.includes(engraving[0]) || c.engravingsEarly.includes(engraving[1])) {
        return setResult(prev => [...prev, `Un engraving bueno para  ${c.character} en Early`])
      }
      if (c.engravingsLate.includes(engraving[0]) || c.engravingsLate.includes(engraving[1])) {
        return setResult(prev => [...prev, `Un engraving bueno para  ${c.character} en Late`])
      }
    })
  }

  return (
    <div className='App'>
      <div className='engravings-container'>
        {engravings.map(eng => (
          <div key={eng}>
            <input onClick={(e) => chooseEngravings(e)} type='checkbox' id={eng} name={eng} value={eng} />
            <label className='engraving' htmlFor={eng}>{eng}</label>
          </div>
        )
        )}
        <div className='buttons-container'>
          <button onClick={finalResult}>Save</button>
          <button onClick={resetState}>Reset</button>
        </div>

      </div>
      <div className='stats-container'>
        {stats.map(eng => (
          <div key={eng}>
            <input onClick={(e) => chooseStats(e)} type='checkbox' id={eng} name={eng} value={eng} />
            <label htmlFor={eng}>{eng}</label>
          </div>
        )
        )}
      </div>

      <div className='result-container'>
        {result.map(res => <p key={res}>{res}</p>

        )}
      </div>
    </div>
  )
}

export default App
