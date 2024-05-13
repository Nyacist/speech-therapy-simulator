import './App.css';
import {useState} from "react";
import IntervalSettings from "./components/IntervalSettings";
import CanvasItem from "./components/CanvasItem";

function App() {
  const min = 1
  const max = 5
  const step = 0.1
  const [intervalValue, setIntervalValue] = useState(3)
  const [intervalID, setIntervalID] = useState(null)
  const [currentElem, setCurrentElem] = useState(0)

  const buttonVar = {
    start: {text: 'Начать', style: 'button_blue'},
    stop: {text: 'Стоп', style: 'button_red'}
  }
  const [buttonSettings, setButtonSettings] = useState(buttonVar.start)

  const initialMatrix = createInitialMatrix(24)
  const [matrix, setMatrix] = useState(initialMatrix)

  const hands = ['Л', 'П', 'О']

  function createInitialMatrix(count) {
    const matrix = []
    for (let i=1; i<=count; i++) {
      matrix.push({id: i, letter: '', hand: ''})
    }
    return matrix
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function createInterval() {
    return setInterval(() => {
      //убрать повторки
      let newElementNumber = random(min + 1, matrix.length)
      //console.log(newElementNumber)
      setMatrix(
        matrix.map((item) => {
          if (item.id === newElementNumber) {
            return {...item, letter: randomLetter(), hand: randomHand()}
          }
          if (item.id === currentElem) {
            return {...item, letter: '', hand: ''}
          }
          return item
        })
      )
      setCurrentElem(newElementNumber)
    }, (intervalValue * 1000))
  }

  function onClickButton() {
    if (buttonSettings.style === buttonVar.start.style) {
      setButtonSettings(buttonVar.stop)
      setIntervalID(createInterval())
    } else {
      setButtonSettings(buttonVar.start)
      clearInterval(intervalID)
      setIntervalID(null)
    }
  }

  function randomLetter() {
    const letterNumber = random(1040, 1071) //русские заглавные буквы
    return String.fromCharCode(letterNumber)
  }

  function randomHand() {
    const handNumber = random(0, 2)
    return hands[handNumber]
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <IntervalSettings
            min={min} max={max} step={step}
            intervalValue={intervalValue}
            setIntervalValue={setIntervalValue}
            buttonSettings={buttonSettings}
            onClickButton={onClickButton}
          />
          <div className="canvas">
            {matrix.map((item) => {
              let styleClass = "canvas_item"
              if (item.letter !== '') styleClass += " canvas_item_show"
              return <CanvasItem
                key={item.id}
                letter={item.letter}
                hand={item.hand}
                className={styleClass}
              />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
