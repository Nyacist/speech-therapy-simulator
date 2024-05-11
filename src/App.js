import './App.css';
import {useEffect, useState} from "react";
import IntervalSettings from "./components/IntervalSettings";

function App() {
  const min = 0
  const max = 5
  const step = 0.1
  const [intervalValue, setIntervalValue] = useState(1)

  const initialMatrix = [
    {id: 1, val: '0'},
    {id: 2, val: '0'},
    {id: 3, val: '0'},
    {id: 4, val: '0'},
    {id: 5, val: '0'},
    {id: 6, val: '0'},
  ]
  const [matrix, setMatrix] = useState(initialMatrix)

  useEffect(() => {
    let currentElem = 0
    setInterval(() => {
      //убрать повторки
      const num = Math.floor(Math.random() * (matrix.length - 1 + 1) + 1)
      console.log(num)
      setMatrix(
        matrix.map((item) => {
          if (item.id === num) {
            return {...item, val: '1'}
          }
          if (item.id === currentElem) {
            return {...item, val: '0'}
          }
          return item
        })
      )
      currentElem = num
    }, (intervalValue * 1000))
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <IntervalSettings
            min={min} max={max} step={step}
            intervalValue={intervalValue} setIntervalValue={setIntervalValue}
          />
          <div className="canvas">
            {matrix.map((item) => {
              if (item.val !== '0') {
                return <div key={item.id} className="canvas_item">{item.val}</div>
              }
              return <div key={item.id} className="canvas_item canvas_item_hidden">{item.val}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
