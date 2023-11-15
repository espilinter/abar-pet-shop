import React, { useState } from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = () => {

    const [value, setValue] = useState(0);

    const sliderProps = {
        min: 0,
        max: 500,
        step: 50,
        marks: { 0: 0, 50: 50, 100: 100, 150: 150, 200: 200, 250: 250, 300: 300, 350: 350, 400: 400, 450: 450, 500: 500 }
    }

    return (

        <div className="App">
            <Slider
                value={value}
                onChange={val => setValue(val)}
                {...sliderProps}
            />
        </div>

    );
}

export default RangeSlider;
