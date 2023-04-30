import Task from './Tasklist/Task'
const datamock = [
  {id: 1, text: 'hola @pepe que tal la #tarea'},
  {id: 2, text: 'completar el test de www.laweb.io y enviarlo por elcorreo@mail.com'}
]

function Tasklist() {
  function textParser(text) {
    return text
  }
  const list = datamock.map(obj => {
      const content = textParser(obj.text)
      return <Task content={content}/>
    }
  )
  return (
    <section className='p-2'>
      <ul>
        {list}
      </ul>
    </section>
  )
}

export default Tasklist
