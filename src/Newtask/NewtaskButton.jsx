function NewtaskButton({Icon, tit, style}) {

  return (
    <button className={`${style.backgr}  ${tit === 'Cancel'?'hidden xl:block':''} px-2 xl:px-4 ${tit !== 'Open'?'xl:border':''} py-2 rounded flex items-center`}>
      <span className={`xl:mr-2 ${tit === 'Ok' || tit === 'Cancel' || tit === 'Add' ?'xl:hidden':''}`}>
        <Icon color={style.col}/>
      </span>
      <span className={`hidden xl:block ${style.text}`}>{tit}</span>
    </button>
  )
}

export default NewtaskButton
