import React, { useState } from 'react'

export default function LiveBg() {
    const [elemCount] = useState(6);

    function createBgElems(count) {
        let elements = [];
        for (let i = 0; i < count; i++) {
            elements.push(<div key={i} style={{
                "--duration": (3.6 + Math.random() * 7) + "s",
                "--width": (10 + (Math.random() * 450)) + "px",
                "--rotate": (Math.random() * 360) + "deg",
                "--left": (Math.random() * window.innerWidth) + "px",

            }
            }></div >);
        }

        return elements;
    }

    return (
        <div onAnimationEnd={() => {
            // console.log("end");
        }} className='[&>div]:bg-elem fixed bottom-0 left-0 w-full h-full z-[-999]'>
            {
                createBgElems(elemCount)
            }
        </div>
    )
}