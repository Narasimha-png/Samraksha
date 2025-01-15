import "../Styles/Welcome.css" ;
const Welcome= () =>{
    return (
        <div className="welcome-div">
            <div className="welcome-txt">
                <span className="styled-text"> Detect Disease </span> of Any Plant With <span className="styled-text" >Single Click</span>
            </div>
            <div className="upload-btns">
                 <label className="upload-label btn-style" for="upload-img">Upload <span className="styled-text">Image</span> </label>
                <input id="upload-img"  style={{display:"none"}} type="file"></input>
                 <button className="btn-style">Open <span className="styled-text">Camera</span></button>
            </div>
        </div>
    )
}

export default Welcome ; 