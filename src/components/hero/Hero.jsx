import "./style.scss";
import Header from "../header/Header";

function Hero() {
	return (
		<div className="hero">
			<Header home />
			<img
				className="banner"
				src="https://image.tmdb.org/t/p/w500/6oH378KUfCEitzJkm07r97L0RsZ.jpg"
				alt="banner"
			/>
			<div className="hero__details">
				<h1>ELEMENTAL</h1>
				<div>
					<img
						className="imob"
						src="/icons/imob.svg"
						alt="imob"
					/>
					<span className="imob__rate">78.0/100</span>
					<img
						className="tomatoes"
						src="/icons/tomatoes.svg"
						alt="tomatoes"
					/>
					<span className="tomato__rate">97%</span>
				</div>
				<p>
				In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.
				</p>
				<button>
					<img
						src="/icons/play.svg"
						alt="play"
					/>
					<span>Watch trailer</span>
				</button>
			</div>
		</div>
	);
}

export default Hero;
