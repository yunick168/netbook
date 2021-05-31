import '../scss/Tasks.scss'

const Tasks = ({onLoadedData,ontoggleReminder,onDelBtn,onDeleteHandle}) => {
  return (
    <ul className="tasks">
      {onLoadedData.map(data =>
        <li key={data.id} onDoubleClick={() => ontoggleReminder(data)}>
          <p>{data.reminder ? <span>*</span> : ''} {data.text}</p>
          <div>
            <p>{data.date}</p>
            <p>{data.time} {onDelBtn ? <button onClick={() => onDeleteHandle(data.id)}><i className="fas fa-trash"></i></button> : ''}</p>
          </div>
        </li>
      )}
    </ul>
  )
}

export default Tasks
