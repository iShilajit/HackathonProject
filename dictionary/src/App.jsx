import React, { useState } from 'react';
import './App.css';
import Searchword from './components/Serchword';
import ShowData from './components/ShowData';


function App() {
  const [search, setSerch] = useState("")
  const [dataInfo, setDataInfo] = useState([])
  const [loading, setLoding] = useState(false)
  const [back, setBack] = useState(false)

  const handleChange = (e) => {
    setSerch(e.target.value)
  }

  const handleClick = async () => {
    if (!search) {
      alert("please fill")
      return
    }
    setLoding(true)
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    let res = await fetch(url)
    let data = await res.json()
    if (data.message) {
      alert("not found")
      return
    }
    setBack(false)
    setDataInfo(data)
    setLoding(false)
  }

  return (
    <div className="App">
      {!back && dataInfo.length > 0 ? <ShowData dataInfo={dataInfo} setBack={setBack} /> : <Searchword search={search} handleChange={handleChange} handleClick={handleClick} />}
    </div>
  );
}

export default App;
