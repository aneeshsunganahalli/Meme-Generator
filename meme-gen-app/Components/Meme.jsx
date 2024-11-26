export default function Meme(){
  return(
    <div className="mid-section">
      <div className="form-div">
          <input className="text-box" placeholder="Top text" type="form"/>  
          <input className="text-box" placeholder="Bottom text" type="form"/>
      </div>
          <button className="form-button">
            Get a new meme image
          </button>
    </div>
  )
}

