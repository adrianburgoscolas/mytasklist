import { useState, useRef } from 'react'
import { Calendar, Unlock, PlusSquare, Maximize2, Loader, Disc, X, Plus } from 'react-feather'

import './Newtask/Newtask.css'
import NewtaskButton from './Newtask/NewtaskButton'
import avatar from './assets/profile.png'

function Newtask() {

  const [editable, setEditable] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const inputRef = useRef(null)

  function handleInputClick(e) {
    setEditable(true)
    inputRef.current.focus()
  }

  function handleInputChange(e) {
    if(inputRef.current.textContent !== '') {
      setEnabled(true)
    } else {
      setEnabled(false)
      inputRef.current.innerHTML = ''
    }
  }

  function handleButton() {
    if(enabled) {
      //implement: save to db
    }
    setEditable(false)
    setEnabled(false)
    inputRef.current.innerHTML = ''
  }

  return (
    <section className={`p-0 rounded-lg divide-slate-100 overflow-hidden ${editable?'shadow-md divide-y':'h-8'}`}>
      <div 
        onClick={handleInputClick} 
        id='textbox' 
        name='textbox' 
        role='textbox' 
        className={`rounded-t-lg border-x border-t px-2 pt-2 flex gap-1 pb-6 ${editable?'border-slate-100':'border-white'}`}
      >
        <PlusSquare color='#007FFF' /> 
        <div 
          contentEditable
          className='w-full h-full outline-none'
          placeholder='Type to add new task'
          ref={inputRef}
          onInput={handleInputChange}
        ></div>
        <img 
          src={avatar} 
          alt='Adrian Avatar' 
          className={`w-6 h-6 rounded-full ${enabled?'':'opacity-40'} ${editable?'':'invisible'}`} 
        />
      </div>
      <div className='flex justify-between bg-[#FAFBFB] p-2'>
        <div className={`flex gap-2 ${enabled?'':'opacity-40'}`}>
          <NewtaskButton title={'Open'} Icon={Maximize2} color={'#04142F'} background={'#EAF0F5'} />
          <div className='flex gap-1'>
            <NewtaskButton title={'Today'} Icon={Calendar} color={'#8A94A6'} background={'#FFFFFF'} />
            <NewtaskButton title={'Public'} Icon={Unlock} color={'#8A94A6'} background={'#FFFFFF'} />
            <NewtaskButton title={'Highlight'} Icon={Loader} color={'#8A94A6'} background={'#FFFFFF'} />
            <NewtaskButton title={'Estimation'} Icon={Disc} color={'#8A94A6'} background={'#FFFFFF'} />
          </div>
        </div>
        <div onClick={handleButton}>
          <NewtaskButton title={'Add'} Icon={enabled?Plus:X} color={'#FFF'} background={'#0D55CF'} setEditable={setEditable} />
        </div>
      </div>
    </section>
  )
}

export default Newtask
