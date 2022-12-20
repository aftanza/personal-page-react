import WindowTitle from "./WindowTitle";
const Education = () => {
    return(
        <div>
            <div className="window-content-container">

                <div className="school-container">
                    <div className="image-container">
                        <img src={require("./img/NTU_Logo.png")} alt=""/>
                    </div>

                    <div className="details-container">
                        <h1>Nanyang Technological University, Singapore</h1>
                        <h2>Bachelor of Information Engineering and Media (2021-2025)</h2>
                        <br/>
                        <h3>Expected Honours: ([placeholder])</h3>
                        <br/>
                        <h3>Relevant Courses:</h3>
                        <h3>Object-Oriented Programming, Data Structures and Algorithm, Intro to Data Science & Artificial
                            Intelligence, Software Engineering, Computer Communication, Operating Systems, Intro to Design &
                            Project, Design & Innovation Project</h3>
                    </div>
                </div>

                <div className="school-container">
                    <div className="image-container">
                        <img src={require('./img/smanu-mht.jpg')} alt=""/>
                    </div>

                    <div className="details-container">
                        <h1>SMANU M.H. Thamrin</h1>
                        <h2>Natural Science Stream (2019-2021)</h2>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Education