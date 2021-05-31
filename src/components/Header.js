import Form from './Form'
import Search from './Search'
import '../scss/Header.scss'


const Header = ({ onAddTask, onToggleFrom, formBoolean,onSearchForm,searchBoolean,keywordHandle}) => {
  return (
    <header>
      <div className="title-wrap">
        <h1>React Netbook</h1>
        <div>
          <button className="search-btn" onClick={onSearchForm} > {searchBoolean ? <i className="fas fa-times"></i> : <i className="fas fa-search"></i>}</button>
          <button className="add-btn" onClick={onToggleFrom}> {formBoolean ? '關閉' : '新增'}</button>
        </div>
      </div>
      
      {formBoolean ? <Form onAddTask={onAddTask} /> : ''}
      {searchBoolean ? <Search keywordHandle={keywordHandle}/> : ''}
    </header>
  )
}

export default Header
