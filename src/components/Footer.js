import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/style.css';

export const Footer = () => {
    return (
            <footer class="page-footer">
                        <div class="container">
                            <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                            <h6 class="text-uppercase font-weight-bold">Additional Information</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis.</p>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                            <h6 class="text-uppercase font-weight-bold">Contact</h6>
                            <p>1640 Riverside Drive, Hill Valley, California
                            <br/>info@mywebsite.com
                            <br/>+ 01 234 567 88
                            <br/>+ 01 234 567 89</p>
                            </div>
                        </div>
                        <div class="footer-copyright text-center">© 2021 Copyright: MyWebsite.com</div>
                    </div>
            </footer>
       
    )
}
