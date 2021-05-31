import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Options from './components/Options'

const App = () => {
  const [data, setData] = useState(
    [
      {
        id: 1,
        text: '到醫院看牙醫',
        date: '2021/06/05',
        time: '14:00 Pm',
        reminder: true
      },
      {
        id: 2,
        text: '玩遊戲',
        date: '2021/06/18',
        time: '5:00 Am',
        reminder: false
      },
      {
        id: 3,
        text: '畢業',
        date: '2021/06/30',
        time: '16:00 Pm',
        reminder: true
      }
    ]
  )
  //add task
  const addTask = (task) => {
    // setData(...data,task)
    task.id = new Date().getTime() + data.length
    task.time = task.time.slice(0,2) >= 12 ? task.time + ' Pm' : task.time.slice(1) + ' Am'
    task.date = task.date.replace(/-/g,'/')
    setData([...data,task])
  }
  // add reminder 
  const toggleReminder = (e) => {
    e.reminder = !e.reminder
    setData([...data])
  }
  //reminder sort
  const reminderSort = () => {
    let reminder = data.sort((a,b) =>
      b.reminder - a.reminder
    )
    setData([...data],reminder)
  }
  //Date sort
  const dateSort = () => {
    let date = data.sort((a,b) => {

      let aDate = a.date.replace(/\//g,'')
      let bDate = b.date.replace(/\//g,'')

      let aTime = a.time.replace(/[^0-9]/ig,'') < 1000 ? '0'+a.time.replace(/[^0-9]/ig,'') : a.time.replace(/[^0-9]/ig,'')
      let bTime = b.time.replace(/[^0-9]/ig,'') < 1000 ? '0'+b.time.replace(/[^0-9]/ig,'') : b.time.replace(/[^0-9]/ig,'')

      let aNum = `${aDate}${aTime}`
      let bNum = `${bDate}${bTime}`

      return bNum < aNum ? 1 : bNum > aNum ? -1 : 0
    })
    setData([...data],date)
  }
  //clear all
  const clearData = () => {
    if(window.confirm('確定要清除嗎')){
      setData([])
    }
  }
  //show delete btn
  const [delBtn,setDelBtn] = useState(false)
  const showDelete = () => {
    setDelBtn(!delBtn)
  }
  //delete task
  const deleteHandle = (id) => {
    let dataFilter = data.filter(task => task.id !== id)
    setData(dataFilter)
  }
  //toggle form
  const [formBoolean,setFormBoolean] = useState(false)
  const toggleForm = () => {
    setFormBoolean(!formBoolean)
    setSearchBoolean(false)
    setKeywordBoolean(true)
  }
  //toggle search 
  const [searchBoolean,setSearchBoolean] = useState(false)
  const searchForm = () =>{
    setSearchBoolean(!searchBoolean)
    setFormBoolean(false)
    setKeywordBoolean(!keywordBoolean)
    setSearchDate([])
  }
  //search keyword
  const [keywordBoolean,setKeywordBoolean] = useState(true)
  const [searchDate,setSearchDate] = useState([])

  const keywordHandle = (e) =>{
    let searchText = e
    if(e !== ''){
      let dateFilter = data.filter((task =>
        task.text.match(searchText)   
      ))
      setKeywordBoolean(false)
      setSearchDate(dateFilter)
    }else{
      alert('搜尋資料不可空白')
    }
  }
  
  return (
    <div className="app container">

      <Header 
        onAddTask={addTask} 
        onToggleFrom={toggleForm} formBoolean={formBoolean} 
        onSearchForm={searchForm} searchBoolean={searchBoolean}
        keywordHandle={keywordHandle}
      />

      <Options 
        onReminderSort={reminderSort} 
        onDateSort={dateSort} 
        onClearData={clearData} 
        onShowDelete={showDelete}
      />
      {data.length === 0 ? <div className="noting-tasks"><h3>* 無項目資料 *</h3></div> :
        <Tasks 
        onLoadedData={keywordBoolean ? data : searchDate} 
        ontoggleReminder={toggleReminder} 
        onDelBtn={delBtn} 
        onDeleteHandle={deleteHandle}/>
      }

    </div>
  )
}

export default App
