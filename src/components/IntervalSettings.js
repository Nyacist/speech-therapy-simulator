import React from 'react';

const IntervalSettings = ({min, max, step,
                            intervalValue, setIntervalValue,
                            buttonSettings, onClickButton}) => {
  return (
    <div className="interval">
      <input className="interval__input_range" type="range"
             min={min} max={max} step={step}
             value={intervalValue}
             onChange={(e) => {setIntervalValue(e.target.value)}}
      />
      <input className="interval__input_number" type="number"
             min={min} max={max} step={step}
             value={intervalValue}
             onChange={(e) => {setIntervalValue(e.target.value)}}
      />
      <span>секунд</span>
      <button className={"button " + buttonSettings.style}
              onClick={() => onClickButton()}
      >
        {buttonSettings.text}
      </button>
    </div>
  );
};

export default IntervalSettings;
