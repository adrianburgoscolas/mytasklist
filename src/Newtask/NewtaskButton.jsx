function NewtaskButton({Icon, title, color, background, setEditable}) {
  return (
    <button className={`px-2 xl:px-4 ${title !== 'Open'?'xl:border':''} py-2 rounded flex items-center bg-[${background}]`}>
      <span className={`xl:mr-2 ${title === 'Add'?'xl:hidden':''}`}>
        <Icon color={color}/>
      </span>
      <span className={`hidden xl:block ${title === 'Add'?'text-white':`text-[${color}]`}`}>{title}</span>
    </button>
  )
}

export default NewtaskButton
