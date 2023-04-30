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
    const content = inputRef.current.textContent 
    console.log(inputRef.current.innerHTML, content)
    inputRef.current.innerHTML = inputRef.current.innerHTML.replaceAll(/(?<!\w)(<span id="at">)?(@\w*)(<\/span>)?(\w+)/ig, '<span id="at">$2$4</span>')
    inputRef.current.innerHTML = inputRef.current.innerHTML.replaceAll(/(?<!\w)(<span id="hash">)?(#\w*)(<\/span>)?(\w+)/ig, '<span id="hash">$2$4</span>')
    inputRef.current.innerHTML = inputRef.current.innerHTML.replaceAll(/(?<!\w)(<span id="mail">)?(\w+@\w+\.\w+)(<\/span>)?(\w+)/ig, '<span id="mail">$2$4</span>')
    inputRef.current.innerHTML = inputRef.current.innerHTML.replaceAll(/(?<!\w)(<span id="link">)?(\w+\.\w+\.\w+)(<\/span>)?(\w+)/ig, '<span id="link">$2$4</span>')
    window.getSelection().selectAllChildren(inputRef.current)
    window.getSelection().collapseToEnd()
    if(content) {
      setEnabled(true)
    } else {
      setEnabled(false)
      inputRef.current.innerHTML = ''
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
          className={`w-6 h-6 rounded-full ${enabled?'':'opacity-50'} ${editable?'':'invisible'}`} 
        />
      </div>
      <div className='flex justify-between bg-[#FAFBFB] p-2'>
        <div className={`flex gap-2 sm:gap-6 ${enabled?'':'opacity-40'}`}>
          <NewtaskButton title={'Open'} Icon={Maximize2} color={'#04142F'} backgr={'#EAF0F5'} />
          <div className='flex gap-1'>
            <NewtaskButton title={'Today'} Icon={Calendar} color={'#8A94A6'} backgr={'#FFFFFF'} />
            <NewtaskButton title={'Public'} Icon={Unlock} color={'#8A94A6'} backgr={'#FFFFFF'} />
            <NewtaskButton title={'Highlight'} Icon={Loader} color={'#8A94A6'} backgr={'#FFFFFF'} />
            <NewtaskButton title={'Estimation'} Icon={Disc} color={'#8A94A6'} backgr={'#FFFFFF'} />
          </div>
        </div>
        <div onClick={handleButton}>
          <NewtaskButton title={'Add'} Icon={enabled?Plus:X} color={'#0D55CF'} backgr={'#0D55CF'} />
        </div>
      </div>
    </section>
  )
}

export default Newtask
