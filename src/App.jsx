import { useState } from 'react'

function App() {
  const [imgUrl, setImgUrl] = useState("https://picsum.photos/600/400");
  const onRandomClicked = () => {
    const newImage = `https://picsum.photos/600/400?random=${Date.now()}`;
    setImgUrl(newImage);
  }

  return (
    <>
      <button onClick={onRandomClicked}>ランダム</button>
      <br></br>
      <img src={imgUrl}></img>
    </>
  )
}

export default App
