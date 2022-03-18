
import './App.css'
import {classes} from './data/classes'
import {useState} from 'react'
import { engravings } from './data/engravings'
import {stats} from './data/stats'

function App() {

const [engraving, setEngraving] = useState([])
const [statsState, setStatsState] = useState([])
const[result, setResult] = useState([])


const resetState = () => {
  setEngraving([])
  setStatsState([])
  window.location.reload()
}
const chooseEngravings = (e) => {
  if (e.target.checked) {
    setEngraving(oldArray => [...oldArray, e.target.value]);
  }
  if (!e.target.checked) {
    setEngraving(prev => [prev.pop()])
  }
 
}

const chooseStats = (e) => {
  if (e.target.checked) {
    setStatsState(oldArray => [...oldArray, e.target.value]);
  }
  if (!e.target.checked) {
    setStatsState(prev => [prev.pop()])
  }
 
}


const finalResult = () => {
  classes.map(c => {
  if (c.engravingsEarly.includes(engraving[0]) && c.engravingsEarly.includes(engraving[1]) && c.stats.includes(statsState[0]) && c.stats.includes(statsState[1])) {
   return setResult(prev => [...prev, `Biss collar ${c.character} Early`])
  }

  if (c.engravingsEarly.includes(engraving[0]) && c.engravingsEarly.includes(engraving[1]) && c.stats.includes(statsState[0])) {
   return setResult(prev => [...prev, `Biss joyería ${c.character} Early`])
  }

  if (c.engravingsEarly.includes(engraving[0]) || c.engravingsEarly.includes(engraving[1])) {
   return setResult(prev => [...prev, `Un engraving bueno para ${c.character} Early`])
  }

  })
}


  return (
    <div className="App">
    
      {engravings.map(eng => (
     <div key={eng}>
  <input onClick={(e) => chooseEngravings(e)} type="checkbox" id={eng} name={eng} value={eng} />
  <label htmlFor={eng}>{eng}</label>
</div>
        )
      )}   
     {stats.map(eng => (
     <div key={eng}>
  <input onClick={(e) => chooseStats(e)} type="checkbox" id={eng} name={eng} value={eng} />
  <label htmlFor={eng}>{eng}</label>
</div>
        )
      )} 


<button onClick={finalResult}>Save</button>
<button onClick={resetState}>Reset</button>

{result.map(res => <p key={res}>{res}</p>
)}
    </div>
  )
}

export default App
