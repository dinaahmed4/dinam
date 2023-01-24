import React from 'react';
function Device() {
    return (
        <div>
            {/* start Device section  */}

            <div className="row">
                <div className="col-md-6">
                    <img src="img/project.PNG" alt="pic5" />
                </div>
                <div className="col-md-6 mt-5 ">
                    <div className="row">
                        <div className="col-md-6 fon">
                            <i className="fa-solid fa-phone icon"></i>
                            <h2>Device Mockups</h2>
                            <p id="dndn">Ready to use Html/css device<br />mockups, no Photoshop required!</p>
                        </div>
                        <div className="col-md-6 fon">

                            <i className="fa-solid fa-heart icon"></i>
                            <h2>Flexible Use</h2>
                            <p id="dndn">Put an imge,vidio,animation,or<br />anything else in the screen!</p>
                        </div>
                        <div className="col-md-6">
                            <i className="fa-solid fa-user icon"></i>
                            <h2>Free to Use</h2>
                            <p id="dndn">As always, this theme is free to <br />download and use for any puprpose!</p>
                        </div>
                        <div className="col-md-6 ">
                            <i className="fa-brands fa-github icon"></i>
                            <h2>Open Source</h2>
                            <p id="dndn">Since this theme is MIT Licensed, you can use it commercially!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end device section  */}
        </div>



    )
}
export default Device;