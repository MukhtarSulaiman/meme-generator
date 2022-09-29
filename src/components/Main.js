/** @format */
import React from 'react'
// import memesData from '../memeData';

const Main = () => {
     
     const [meme, setMeme] = React.useState({
          topText: '',
          bottomText: '',
          url: 'https://i.imgflip.com/1ur9b0.jpg'
     });

     const [allMemes, setAllMemes] = React.useState([])
     
     function getMemeImage() {
          const randomNumber = Math.floor(Math.random() * allMemes.length);
		const imgUrl = allMemes[randomNumber].url;
		const name = allMemes[randomNumber].name;
          setMeme(prevMeme => {
               return {
				...prevMeme,
				bottomText: name,
                    url: imgUrl
               }
          })
     }

     function handleChange(e) {
		setMeme((prevFormData) => {
			const { name, value } = e.target;

			return {
				...prevFormData,
				[name] : value
			}
		});
     }
     
     React.useEffect(() => {
          fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
               .then((data) => setAllMemes(data.data.memes));
     }, [meme])

	return (
		<main>
			<form>
				<div className='form-control'>
					<input onChange={handleChange} type='text' name="topText" value={meme.topText} />
					<input onChange={handleChange} type='text' name="bottomText" value={meme.bottomText} />
				</div>
			</form>
			<button onClick={getMemeImage}>Get a new meme image 🖼</button>
			<div className='meme-wrapper'>
				<div className='top-bottom-text'>
					<h1>{meme.topText}</h1>
					<h1>{meme.bottomText}</h1>
				</div>

				<img src={`${meme.url}`} alt='meme' />
			</div>
		</main>
	);
};

export default Main;
