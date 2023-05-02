import CircularProgress from '@mui/joy/CircularProgress';

import Task from './Tasklist/Task'
import GetAllTasks from './CustomHooks/GetAllTasks'

//todo: Suspence list component
function Tasklist() {
  
  const { data, error, isLoading, isError } = GetAllTasks()

  if (isLoading) {
    return (
      <div className='w-full mt-6 mx-auto text-center'>
        <CircularProgress color='neutral' size='sm' className='m-auto' />
      </div>
    )
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
    <section className='max-w-7xl p-2'>
      <ul>
        {data.payload.map(obj => <Task content={obj.text} key={obj._id} taskId={obj._id}/>)}
      </ul>
    </section>
  )
}

export default Tasklist
