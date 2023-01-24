import React from 'react';
function Web() {
    return (
        <div>
            {/* start web section  */}
            <div className="container">
                <div class="row">
                    <div className="col-md-7 mt-5">
                        <h3 className="enter">Enter a new age
                            <br />
                            of web design
                        </h3>
                        <h6 className='solve'>This section is perfect for featuring some information about<br />your
                            application, why it was boilt, the
                            problem it solves, or<br /> anything else! There's plenty of space for text here, so don't<br />worry about
                            writing too much.
                        </h6>
                    </div>
                    <div className="col-md-5">
                        <img src="img/photo_2023-01-23_17-02-47.jpg" className='img' alt="pic6" />
                    </div>
                </div>
            </div>
            {/* end web section  */}
        </div>
    )
}
export default Web;