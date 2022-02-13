import pictures from '../img/group.png'
export default function Hero () {
	return (
		<div className='hero'>
			<img className='hero-img' src={pictures} />
			<h1 className='hero__header'>Online Experiences</h1>
			<p className='hero__text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
		</div>
	)
}