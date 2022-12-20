import github_img from "./img/Github.png";
import linkedIn_img from "./img/LinkedIn.png";
import WindowTitle from "./WindowTitle";

const About = () => {
    return(
        <div>
            <div className="window-content-container">
                <div className="image-container">
                    <img src={require("./img/lizardpngpng.png")} alt=""/>
                </div>

                <div className="details-container">
                    <h1>Aftanza Nadhie Prabowo</h1>
                    <h2>Singapore, singapore</h2>
                    <br/>
                    <h3>Resourceful and dedicated university student with excellent problem solving skills and a
                        demonstrated commitment to delivering great products. Able to effectively self-manage during
                        independent projects, as well as collaborate in a team setting.</h3>

                    <div className="socials-container">
                        <a href="https://github.com/aftanza" target="_blank" rel="noreferrer">
                            <img src={github_img} alt=""/>
                        </a>

                        <a href="https://google.com" target="_blank" rel="noreferrer">
                            <img src={linkedIn_img} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About