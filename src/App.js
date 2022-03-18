import React, { useState } from 'react';
import data from './data';

const App = () => {
  const [filter, setFilter] = useState('');
  const SearchText = (e) => {
    setFilter(e.target.value)
  }

  let dataSearch = data.filter(item =>
    Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  )

  return (
    <div className='App'>
      <input type="text" value={filter} onChange={SearchText} />
      <div className="app">
        {dataSearch.slice(0, 6).map((el, id) => {
          return (
            <div key={id} className="card">
              <div className="card-img">
                <img src={el.img} alt="" />
              </div>
              <div className="card-body">
                <p className="card-title">
                  {el.package}
                </p>
                <p className="card-price">
                  {el.text2}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App