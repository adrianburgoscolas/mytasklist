import { useState, useRef, useEffect } from 'react'
import { Trash2, Calendar, Unlock, PlusSquare, Save, Maximize2, Loader, Disc, X, Plus } from 'react-feather'

import AddTask from './Queries/AddTask'
import './Newtask/Newtask.css'
import NewtaskButton from './Newtask/NewtaskButton'
import avatar from './assets/profile.png'
import DeleteTask from './Queries/DeleteTask'
import parser from './Utils/Parser'
import UpdateTask from './Queries/UpdateTask'

function Newtask(props) {

  const addTask = AddTask()
  const deleteTask = DeleteTask()
  const updateTask = UpdateTask()

  useEffect(() => {
    if(props?.extEditable){
      inputRef.current.innerHTML = parser(props.content, 'newtask')
      window.getSelection().selectAllChildren(inputRef.current)
      window.getSelection().collapseToEnd()
    }
    if(inputRef.current.textContent) {
      setEnabled(true)
    } else {
      setEnabled(false)
      inputRef.current.innerHTML = ''
    }
  },[])

  const [editable, setEditable] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const inputRef = useRef(null)


  function handleInputClick(e) {
    setEditable(true)
    inputRef.current.focus()
  }

  function handleInputChange(e) {
    const content = inputRef.current.textContent 
    inputRef.current.innerHTML = parser(inputRef.current.innerHTML, 'newtask')
    window.getSelection().selectAllChildren(inputRef.current)
    window.getSelection().collapseToEnd()
    if(content) {
      setEnabled(true)
    } else {
      setEnabled(false)
      inputRef.current.innerHTML = ''
    }
  }

  function handleDeleteButton() {
    if(enabled) {
      if(props?.taskId) {
        deleteTask.mutate(props.taskId)
        props.setEdit(false)
      } 
    }
    setEditable(false)
    setEnabled(false)
    inputRef.current.innerHTML = ''
  }

  function handleCancelButton() {
    if(props?.setEdit) {
      props?.setEdit(false)
    }
    setEditable(false)
    setEnabled(false)
    inputRef.current.innerHTML = ''
  }

  function handleAcceptButton() {
    if(enabled) {
      if(props?.extEditable) {
        updateTask.mutate({id: props.taskId, text: inputRef.current.innerText})
        props.setEdit(false)
      } else {
        addTask.mutate(inputRef.current.textContent)
        
      }
    }
    setEditable(false)
    setEnabled(false)
    inputRef.current.innerHTML = ''
  }

  return (
    <section className={`max-w-7xl bg-white rounded-lg divide-slate-100 overflow-hidden ${editable | props?.extEditable?'shadow-md divide-y':'h-8'}`}>
      <div 
        onClick={handleInputClick} 
        id='textbox' 
        name='textbox' 
        role='textbox' 
        className={`rounded-t-lg border-x border-t px-2 pt-2 flex gap-1 pb-6 ${editable | props?.extEditable?'border-slate-100':'border-white'}`}
      >
        {!props?.extEditable && <PlusSquare color='#007FFF' />} 
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
          className={`w-9 h-9 rounded-full ${enabled?'':'opacity-50'} ${editable | props?.extEditable?'':'invisible'}`} 
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
            {
              props?.extEditable && 
              <NewtaskButton clickHandler={handleDeleteButton} tit={'Delete'} Icon={Trash2} style={{col: '#8A94A6', text: 'text-directcol', backgr:'bg-directbg'}} />
            }
          </div>
        </div>
        <div className='flex gap-1' >
          <NewtaskButton clickHandler={handleCancelButton} tit={'Cancel'} Icon={enabled?Plus:X} style={{col:"#04142F", text: 'text-opencol',backgr: "bg-openbg"}} />
          <NewtaskButton clickHandler={handleAcceptButton} tit={enabled?'Add':'Ok'} Icon={enabled?props?.extEditable?Save:Plus:X} style={{col:"#FFFFFF", text: 'text-white',backgr: "bg-primary"}} />
        </div>
      </div>
    </section>
  )
}

export default Newtask
