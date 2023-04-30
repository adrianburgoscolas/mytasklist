import Navbar from './Navbar'
import Newtask from './Newtask'
import Tasklist from './Tasklist'

function App() {
  return (
    <>
	    <Navbar />
      <main className='container mx-auto mt-20'>
        <Newtask />
        <Tasklist />
      </main>
    </>
  )
}

export default App
