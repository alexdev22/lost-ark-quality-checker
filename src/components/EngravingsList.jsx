
import { engravings } from '../data/engravings'
import { chooseEngravings } from '../helpers/functions'

const EngravingsList = ({ setEngravings }) => {
  engravings.sort()
  return (
    <>
      <h2>Engravings</h2>
      <div className='engravings-container'>
        {engravings.map(eng => (
          <div key={eng} className='engravings' onClick={(e) => chooseEngravings(setEngravings, e)}>{eng}</div>
        )
        )}

      </div>
    </>
  )
}

export default EngravingsList
