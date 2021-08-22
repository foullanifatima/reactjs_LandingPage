import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../assets/css/style.css';

 const Picture = ({imgsrc}) => {
    return (
        <div>
            <img src={imgsrc}  className="col-section-image img-fluid" alt="Logo" />
        </div>
    )
}


export default Picture;