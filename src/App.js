import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import data from './data';
function App() {
	const cards = data.map(cardData =>{
		return <Card
			key = {cardData.id}
			{...cardData}
			/>
	})
	return (
		<div className='container'>
			<header className='header'>
				<Navbar />
			</header>
			<Hero />
			<div className='card'>
				{cards}
			</div>
		</div>
	)
}

export default App;
