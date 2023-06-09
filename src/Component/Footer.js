import React from "react";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="container-fluid foot">
            <div className="container links">
                <ul>
                    <div className="row row-cols-1 row-cols-md-3 g-5">
                        <div className="col">
                        <li className="my-2">
                            <Link className="footer-link" to="#"><i className="bi bi-github"></i> Github</Link>
                        </li>
                        </div>
                        <div className="col">
                        <li className="my-2">
                            <Link className="footer-link" to="#"><i className="bi bi-linkedin"></i> LinkedIn</Link>
                        </li>
                        </div>
                        <div className="col">
                        <li className="my-2">
                            <Link className="footer-link" to="#"><i className="bi bi-instagram"></i> Instagram</Link>
                        </li>
                        </div>
                    </div>
                </ul>
            </div>

            <div className="Footer">
                © 2020 Copyright:
                <Link className="footer-link" to="#">MyBlog.com</Link>
            </div>
        </div>

    );
}
export default Footer;