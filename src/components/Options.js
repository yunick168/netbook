import '../scss/Options.scss'

const Options = ({onReminderSort,onDateSort,onClearData,onShowDelete}) => {
  return (
    <div className="options">
      <button onClick={onReminderSort}><i className="fas fa-bell"></i>提醒向上</button>
      <button onClick={onDateSort}><i className="far fa-calendar-alt"></i>時間(小~大)</button>
      <button onClick={onClearData}><i className="fas fa-broom"></i>清除</button>
      <button onClick={onShowDelete}><i className="far fa-trash-alt"></i>垃圾桶</button>
    </div>
  )
}
export default Options
