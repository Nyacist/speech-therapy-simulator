import React, {useState} from 'react';

const IntervalSettings = ({min, max, step,
                            intervalValue, setIntervalValue,
                            buttonSettings, onClickButton}) => {
  const [disableRange, setDisableRange] = useState(false)
  return (
    <div className="interval">
      <input className="interval__input_range" type="range" disabled={disableRange}
             min={min} max={max} step={step}
             value={intervalValue}
             onChange={(e) => {setIntervalValue(e.target.value)}}
      />
      <input className="interval__input_number" type="number" disabled={disableRange}
             min={min} max={max} step={step}
             value={intervalValue}
             onChange={(e) => {setIntervalValue(e.target.value)}}
      />
      <span>секунд</span>
      <button className={"button " + buttonSettings.style}
              onClick={() => {
                setDisableRange(!disableRange)
                onClickButton()
              }}
      >
        {buttonSettings.text}
      </button>
    </div>
  );
};

export default IntervalSettings;
