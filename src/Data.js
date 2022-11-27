import React, { useState } from 'react'
import './App.css';
import { FcExpand, FcCollapse } from "react-icons/fc";


function Data({ title, body }) {         // it could be {mytitl, body}

    const [show, setShow] = useState(false);

    // const handleClick = () => {
    //     setShow(!show);
    // }

    return (
        <div className={show ? "accordion-opened accordion-item" : 'accordion-item'} onMouseEnter={() => { setShow(true) }}
            onMouseLeave={() => { setShow(false) }}
        >
            {/* {mytitle} */}
            < div className='accordion-title' >
                <h5>{title}</h5>
                <p>{show ? <FcExpand size={20} /> : <FcCollapse size={20} />}</p>

            </div >
            {show && <p>{body}</p>}

        </div >
    )
}

export default Data