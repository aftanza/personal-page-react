import WindowTitle from "./WindowTitle";

const Projects = () => {
    return(
        <div>
            <div className="window-content-container">
                <div className="project-container">

                    <div className="project">
                        <a href="https://google.com" target="_blank" rel="noreferrer">

                            <div className="image-container">
                                <img src={require("./img/PintuGTD FAQ.png")} alt=""/>
                            </div>

                            <div className="text-container">
                                <h3>GTD Website (FAQ)</h3>
                            </div>

                        </a>
                    </div>

                    <div className="project">
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                            <div className="image-container">
                                <img src={require('./img/checkered.png')} alt=""/>
                            </div>

                            <div className="text-container">
                                <h3>Placeholder</h3>
                            </div>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects