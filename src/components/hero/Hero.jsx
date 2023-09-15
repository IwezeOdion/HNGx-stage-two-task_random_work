import "./style.scss";
import Header from "../header/Header";

function Hero() {
	return (
		<div className="hero">
			<Header home />
			<img
				className="banner"
				src="https://image.tmdb.org/t/p/original/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg"
				alt="banner"
			/>
			<div className="hero__details">
				<h1>The Nun II (2023))</h1>
				<div>
					<img
						className="imob"
						src="/icons/imob.svg"
						alt="imob"
					/>
					<span className="imob__rate">69%</span>
					<br />
					<br />
					<img
						className="tomatoes"
						src="/icons/tomatoes.svg"
						alt="tomatoes"
					/>
					<span className="tomato__rate">97%</span>
				</div>
				<p>
				In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.
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
