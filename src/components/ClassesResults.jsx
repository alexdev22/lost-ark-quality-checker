import { classes } from '../data/classes'

const ClassesResults = ({ classesPoitns }) => {
  return (
    <>
      <div className='classes-result-container'>
        {classes.map((clase, index) =>
          <div className='container' key={clase.character}>
            <div className='class-result'>{clase.character}</div>
            <div classNAme='class-point'>{classesPoitns[index][clase.character]}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default ClassesResults
