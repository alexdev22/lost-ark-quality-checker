import { stats } from '../data/stats'
import { chooseStats } from '../helpers/functions'
const StatsList = ({ setStatsState }) => {
  return (
    <>
      <h2>Stats</h2>
      <div className='stats-container'>
        {stats.map(eng => (
          <div key={eng}>
            <div key={eng} className='engravings' onClick={(e) => chooseStats(setStatsState, e)}>{eng}</div>
          </div>
        )
        )}
      </div>
    </>
  )
}

export default StatsList
