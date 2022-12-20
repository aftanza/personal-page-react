import WindowTitle from "./WindowTitle";

const Work = () => {
    return(
        <div>
            <div className="window-content-container">
                <div className="work-container">
                    <div className="image-container">
                        <img src={require('./img/EEEclub nobg.png')} alt=""/>
                    </div>

                    <div className="details-container">
                        <h1>EEE Club</h1>
                        <h2>Student Development Subcommitee</h2>
                        <br/>
                        <h3>asddfgfdfhjghjdfbgjkdfgjk dbnfjkg dfjkgdfjkh gkdjfbg jk</h3>
                    </div>
                </div>

                <div className="work-container">
                    <div className="image-container">
                        <img src={require('./img/PINTU.png')} alt=""/>
                    </div>

                    <div className="details-container">
                        <h1>PINTU</h1>
                        <h2>Tech</h2>
                        <br/>
                        <h3>asddfgfdfhjghjdfbgjkdfgjk dbnfjkg dfjkgdfjkh gkdjfbg jk</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Work