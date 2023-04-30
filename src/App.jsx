import Navbar from './Navbar'
import Newtask from './Newtask'

function App() {
  return (
    <>
	    <Navbar />
      <main className='ml-2 mr-2 xl:mx-auto xl:w-[75rem] sm:ml-14 sm:mr-14 mt-20'>
        <Newtask />
      </main>
    </>
  )
}

export default App
