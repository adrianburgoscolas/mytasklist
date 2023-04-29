import { PlusSquare } from 'react-feather'

function Newtask() {
  return (
    <section className='flex gap-1'>
      <PlusSquare color='#007FFF' /> 
      <p className='text-[#8A94A6]'>Type to add new task</p>
    </section>
  )
}

export default Newtask
