import { useState } from 'react'
import '../scss/Search.scss'

const Search = ({keywordHandle}) => {
  let [text,setText] = useState('')

  const keyword = (e) =>{
    e.preventDefault()
    keywordHandle(text)
  }
  
  return (
    <form onSubmit={keyword} className="search">
      <label>搜尋關鍵字 </label>
      <div>
        <input onChange={(e) => setText(e.target.value)} type="text" value={text} />
        <button type="submit">搜尋</button>
      </div>
    </form>
  )
}

export default Search
