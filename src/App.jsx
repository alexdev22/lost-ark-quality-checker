import { resetState, classesPoints, finalResult } from './helpers/functions'
import { useState } from 'react'
import EngravingsList from './components/EngravingsList'
import StatsList from './components/StatsList'
import ClassesResults from './components/ClassesResults'
import './App.css'

function App () {
  const [engraving, setEngraving] = useState([])
  const [statsState, setStatsState] = useState([])
  const [classesPoitns, setClassesPoints] = useState(classesPoints)

  return (
    <div className='App'>

      <EngravingsList setEngravings={setEngraving} />
      <StatsList setStatsState={setStatsState} />

      <div className='buttons-container'>
        <button onClick={() => finalResult(engraving, statsState, setClassesPoints, classesPoitns)}>Save</button>
        <button onClick={() => resetState(setEngraving, setStatsState)}>Reset</button>
      </div>

      <ClassesResults classesPoitns={classesPoitns} setClassesPoints={setClassesPoints} />

    </div>
  )
}

export default App
