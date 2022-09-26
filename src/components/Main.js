/** @format */
import React from 'react'
import memesData from '../memeData';

const Main = () => {
     
     const [meme, setMeme] = React.useState()
     
     function getMemeImage() {
          const memesArray = memesData.data.memes
          const randomNumber = Math.floor(Math.random() * memesArray.length);
          setMeme(memesArray[randomNumber].url)
     }

	return (
		<main>
			<form>
				<div className='form-control'>
					<input type='text' placeholder='Top text' />
					<input type='text' placeholder='Bottom text' />
				</div>
			</form>
			<button onClick={getMemeImage}>Get a new meme image 🖼</button>
               <div className='meme-wrapper'>
				<img src={`${meme}`} alt="meme" />
			</div>
		</main>
     );
};

export default Main;
