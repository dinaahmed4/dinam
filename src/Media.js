import React from "react";
function Media() {
    return (
        <div>
            {/* start media section  */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="head">Showcase your app <br /> beautifully.</h3>
                        <h6>Lanch your mobile app landing page faster with this free,<br /> open source theme from start
                            Bootstrap!</h6>

                        <img src="img/appstore.PNG" alt="pic1" />
                        <img src="img/googleplay.PNG" alt="pic2" />
                    </div>
                    <div className="col-md-6">
                        <img src="img/project.PNG" alt="pic3" />
                    </div>
                </div>
            </div>
            {/* end media section  */}

        </div>
    )
}
export default Media;