import React from 'react'

function ShowData({ dataInfo, setBack }) {
  return (
    <div>
      <div><span>WORD : </span>{dataInfo[0].word}</div>
      {dataInfo && dataInfo.map((item, i) => {
        return <div className="info" key={i}>
          <div><span>Parts of speech: </span>{item.meanings[0].partOfSpeech}</div>
          <div><span>Defination : </span>"{item.meanings[0].definitions[0].definition ? item.meanings[0].definitions[0].definition : "not"}"</div>
        </div>
      })}
      <button onClick={() => setBack(true)}>Prev</button>
    </div>
  )
}

export default ShowData