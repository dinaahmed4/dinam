import React from "react";
function Navbar() {
    return (
        <div>
            {/* start Navbar section  */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand ml-5" href="#">StartBootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Features <span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link mr-4" href="#">Download</a>
                            </li>
                        </ul>

                        <button className=" btn btn-secondary my-2 my-sm-0 mr-5" type="submit">Send Feedback</button>
                    </form>
                </div>
            </nav>
            {/* end Navbar section  */}
        </div>
    )
}
export default Navbar;