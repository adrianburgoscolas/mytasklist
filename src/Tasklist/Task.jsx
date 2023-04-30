import { useRef, useState, useEffect } from 'react'
import Newtask from '../Newtask'

function Task({content, keyId}) {
  const ref = useRef(null)
  const [edit, setEdit] = useState(false)
  const [editContent, setEditContent] = useState(null)

  function handleEdit() {
    setEditContent(ref.current.textContent)
    setEdit(true)
  }

  useEffect(() => {
    ref.current.innerHTML = content
  })

  return (
    <li key={keyId} className='mt-2 relative'>
      <input className='h-5 w-5' type='checkbox' />
      <p onClick={handleEdit} ref={ref} className="ml-2 inline"></p>
      <div className={`z-20 -left-2 top-0 m-auto w-[calc(100%+1rem)] ${edit?'absolute':'hidden'}`}>
        {edit && <Newtask extEditable={edit} setEdit={setEdit} content={editContent}/>}
      </div>
    </li> 
  )
}

export default Task
