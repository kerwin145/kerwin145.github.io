import Carousel from 'react-bootstrap/Carousel';

import './Slider.css'
import React, {useState} from 'react'

function Slider ({slides}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        console.log('selected index: ', selectedIndex)
        setIndex(selectedIndex);
    };

    // console.log(slides)
    return (
        <Carousel activeIndex={index}
        onSelect={handleSelect}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
        >
        {slides.map((slide) => (
        <Carousel.Item key={slide.image} interval={500000}>
            <img
                src={slide.image}
            />
            <Carousel.Caption>
                <p>{slide.subTitle}</p>
            </Carousel.Caption>
        </Carousel.Item>
        ))}
        </Carousel>

)
}

export default Slider