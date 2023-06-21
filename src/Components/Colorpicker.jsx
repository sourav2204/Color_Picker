import React, { useState } from 'react';

function Colorpicker({ colors }) {

    const [showColors, setShowColors] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');

    const handleButtonClick = () => {
        setShowColors(!showColors);
    };
    const handleColorClick = (color) => {
        setSelectedColor(color);
        setShowColors(false);
    };

    return (
        <div className='container d-flex justify-content-center mt-5'>
            <div >
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-outline-primary' onClick={handleButtonClick} style={{ backgroundColor: selectedColor, color: 'black' }}>Color Picker</button>
                </div>
                <div>
                    {
                        showColors &&
                        (
                            <div className='mt-3'>
                                {
                                    colors.map((color, index) => (
                                        <div className=''
                                            key={index}
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                                backgroundColor: color,
                                                display: 'inline-block',
                                                cursor: 'pointer',
                                                margin: '2px'
                                            }}
                                            onClick={() => handleColorClick(color)}
                                        ></div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Colorpicker;