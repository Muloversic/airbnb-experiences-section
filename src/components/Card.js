import star from '../img/Star.svg'
export default function Card(props){
	let badgeText;
	if(props.openSpots === 0){
		badgeText = 'sold out'
	} else if(props.location === 'Online'){
		badgeText = 'Online'
	}

	return (
		<div className="card__body">
			<div className='card__img-body'>
				{ badgeText && <span className="card__status">{badgeText}</span>}
				<img src={`../img/${props.coverImg}`} alt="img" className='card__img' />
			</div>
			<div className="card__info">
				<div className="card__info-rate">
					<img src={star} alt="star" className='card__info-stars'/>
					<span className='card__info-numrate'>{props.stats.rating}</span>
					<span className='card__info-review'>({props.stats.reviewCount})</span>
					<span className="card__info-country">{props.location}</span>
				</div>
				<h4 className="card__info-title">{props.title}</h4>
				<p className="card__info-price"><span>From ${props.price} </span>/ person</p>
			</div>
		</div>
	)
}