import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../assets/css/style.css';
import {Button} from 'react-bootstrap';

export const Description = (
    {
        title,   
        description,
        textbutton,
        color
    }
) => {
    color+=" py-2"; {/* to have different blocks with different colors */}
    return (
        <>
            <h1 className="py-2">{title}</h1>
            <hr class="solid col-3 "></hr>
             <p className="py-2">{description}</p>
            <Button className={color}> {textbutton}</Button>
        </>
    )
}
