import { useRef, useEffect } from 'react'

function Task({content, keyId}) {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.innerHTML = content
  })

  return (
   <li key={keyId} className=''>
        <input className='h-5 w-5' type='checkbox' /><p ref={ref} className="ml-2 inline"></p>
    </li> 
  )
}

export default Task
