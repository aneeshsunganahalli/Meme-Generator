import React from "react"

export default function Meme(){

  const [meme,setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imageUrl: ""
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(response => response.json()).then(data => setAllMemes(data.data.memes))
  }, [])

    function handleChange(event){
      const {value, name} = event.currentTarget;
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
      }))
      console.log(meme)
    }

    function getMemeImage(){
        const randomValue = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomValue].url
        setMeme(prevMeme => ({
          ...prevMeme,
          imageUrl: newMemeUrl
        }))
    }

  return(
    <div className="mid-section">
      <div className="form-div">
          <label>Top text
            <input 
            className="text-box" 
            placeholder="Top text" 
            name="topText" type="form" 
            onChange={handleChange} 
            value={meme.topText}/> 
          </label>
           
          <label>Bottom text
            <input 
            className="text-box" 
            placeholder="Bottom text" 
            name="bottomText" type="form" 
            onChange={handleChange} 
            value={meme.bottomText}/>
          </label>
         

      </div>
          <button className="form-button" onClick={getMemeImage}>
            Get a new meme image
          </button>
          <div className="meme">
            <img className="meme-image" src={meme.imageUrl}/>
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
          </div>
    </div>
  )
}


