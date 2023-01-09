import { useState } from 'react'
import { Carousel } from '/components/utils/hero-bg'

export default function HeroBg(){
    const [counter, setCounter] = useState(0)
    const { component, image } = Carousel[counter]

    function moveForward(){
        if(counter < Carousel.length - 1)
            setCounter(e => e + 1)
        else
            setCounter(0)
    }

    function moveBackward(){
        if(counter > 0)
            setCounter(e => e - 1)
        else
            setCounter(Carousel.length - 1)
    }

    return (
        <section className = 'position-relative'>
            <div className = 'py-20'>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-lg-6 col-md-8 col-12'>
                            {component}
                        </div>
                    </div>
                </div>
            </div>
            <div className = 'z-index--10 position-absolute top-0 left-0 w-100 h-100'>
                <img src = {image} className = 'w-100 h-100 d-block image-manip' />
            </div>
            <button onClick = {moveBackward} style = {{
                transform: 'translate(0, -50%)',
                top: '50%',
                left: '0%'
            }} className = 'mx-3 btn position-absolute py-4 btn-dark border-0 rounded-lg px-1'>
                <span className = 'fo-s-20 bi-caret-left-fill'></span>
            </button>
            <button onClick = {moveForward} style = {{
                transform: 'translate(0, -50%)',
                top: '50%',
                right: '0%'
            }} className = 'mx-3 btn position-absolute py-4 btn-dark border-0 rounded-lg px-1'>
                <span className = 'fo-s-20 bi-caret-right-fill'></span>
            </button>
            <style jsx>{`
                .image-manip{
                    aspect-ratio: 2/1;
                    filter: brightness(.5);
                    object-fit: cover;
                }
                .z-index--10{
                    z-index: -10;
                }
                .py-20{
                    padding: 10rem 0;
                }
            `}</style>
        </section>
    )
}