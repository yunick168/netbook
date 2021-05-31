import {useState} from 'react'
import '../scss/Form.scss'

const Form = ({onAddTask}) => {
  const [text,setText] = useState('')
  const [date,setDate] = useState('')
  const [time,setTime] = useState('')
  const [reminder,setReminder] = useState(false)

  const onSubmit = (e)=> {
    e.preventDefault()
    if(!text){
      alert('請輸入記事內容')
      return
    }
    if(!date || !time){
      if(!date && !time){
        alert('請輸入日期 & 時間')
        return
      }
      !date ? alert('請輸入日期') : alert('請輸入時間')
      return
    }
    onAddTask({text,date,time,reminder})
    setText('');setDate('');setTime('');setReminder(false)
  }

  const newDate = new Date()
  const getMonth = newDate.getMonth() + 1
  const today = `${newDate.getFullYear()}-${ getMonth <= 9 ? '0'+getMonth : getMonth}-${newDate.getDate()}`

  return (
    <form className="add-tack-from" onSubmit={onSubmit}>
      <div>
        <label>記事內容</label>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
      </div>
      <div className="add-time-wrap">
        <label>日期 & 時間</label>
        <div>
          <input type="date" onChange={(e) => setDate(e.target.value)} value={date} min={today}/>
          <input type="time" onChange={(e) => setTime(e.target.value)} value={time}/>
        </div>
      </div>
      <div className="add-reminder-wrap">
        <label>設定提醒</label>
        <input type="checkbox" onChange={(e) => setReminder(e.target.checked)} value={reminder} checked={reminder}/>
      </div>
      <button type="submit" className="add-task-btn">上傳檔案</button>
    </form>
  )
}

export default Form
