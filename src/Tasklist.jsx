import Task from './Tasklist/Task'
import parser from './Utils/Parser'
import './Tasklist/Tasklist.css'

const datamock = [
  {id: 1, text: 'hola @pepe que tal la #tarea'},
  {id: 2, text: 'completar el test de www.laweb.io y enviarlo por elcorreo@mail.com'}
]

function Tasklist() {
  const list = datamock.map(obj => {
      const content = parser(obj.text, 'tasklist')
      return <Task content={content} keyId={obj.id}/>
    }
  )
  return (
    <section className='max-w-7xl p-2'>
      <ul>
        {list}
      </ul>
    </section>
  )
}

export default Tasklist
