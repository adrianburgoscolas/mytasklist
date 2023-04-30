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
      <div className='flex justify-between bg-directbg p-2'>
        <div className={`flex gap-2 sm:gap-6 ${enabled?'':'opacity-40'}`}>
          <NewtaskButton tit={'Open'} Icon={Maximize2} style={{col: '#04142F', text: 'text-opencol', backgr:'bg-openbg'}} />
          <div className='flex gap-1'>
            <NewtaskButton tit={'Today'} Icon={Calendar} style={{col: '#8A94A6', text: 'text-directcol', backgr:'bg-directbg'}} />
            <NewtaskButton tit={'Public'} Icon={Unlock} style={{col: '#8A94A6', text: 'text-directcol',backgr:'bg-directbg'}} />
            <NewtaskButton tit={'Highlight'} Icon={Loader} style={{col: '#8A94A6', text: 'text-directcol', backgr:'bg-directbg'}} />
            <NewtaskButton tit={'Estimation'} Icon={Disc} style={{col: '#8A94A6', text: 'text-directcol', backgr:'bg-directbg'}} />
          </div>
        </div>
        <div className='flex gap-1' onClick={handleButton}>
          <NewtaskButton tit={'Cancel'} Icon={enabled?Plus:X} style={{col:"#04142F", text: 'text-opencol',backgr: "bg-openbg"}} />
          <NewtaskButton tit={enabled?'Add':'Ok'} Icon={enabled?Plus:X} style={{col:"#FFFFFF", text: 'text-white',backgr: "bg-primary"}} />
        </div>
      </div>
    </section>
  )
}

export default Newtask
