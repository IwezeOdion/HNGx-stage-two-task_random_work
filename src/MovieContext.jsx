// import { useState, createContext, useEffect } from "react";


// const MovieContext = createContext();

// function MovieProvider({ children }) {
// 	const [movies, setMovies] = useState([]);

// 	useEffect(() => {
//         const options = {
//             method: 'GET',
//             headers: {
//               accept: 'application/json',
//               Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGE0YjBkYWM2NDk5YTIxNWJjOGYxZjg1NDEzMTcyOCIsInN1YiI6IjY0ZmZkOGMwMGJiMDc2MDBjNGEwZjRjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sq27Ut2tg23Vw-mt4XgIhxQAS3K2Ok8mglG2wrZqo90'
//             }
//           };
          
//           fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=5', options)
//             .then(response => response.json())
//             .then(response => setMovies(response.results))
//             .catch(err => console.error(err));
// 	}, []);

// 	return (
// 		<MovieContext.Provider value={{ movies }}>
// 			{children}
// 		</MovieContext.Provider>
// 	);
// }

// export { MovieProvider, MovieContext };





//2nd choosen one

import { useState, createContext, useEffect } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = '78841e0733ee8692f9f20044d4f7362a'; // Replace with your TMDb API key

    // Define the query parameters to fetch the currently top-rated movies
    const queryParams = {
      api_key: apiKey,
      language: 'en-US',
      sort_by: 'popularity.desc', // Sort by popularity to get the top-rated movies
      page: 3,                    // You can adjust the page number if needed
    };

    // Construct the full API URL with query parameters
    const apiUrl = new URL('https://api.themoviedb.org/3/discover/movie');
    apiUrl.search = new URLSearchParams(queryParams).toString();

    // Fetch the currently top 10 movies
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extract the top 10 movies from the API response
        const top10Movies = data.results.slice(0, 10);
        setMovies(top10Movies);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <MovieContext.Provider value={{ movies }}>
      {children}
    </MovieContext.Provider>
  );
}

export { MovieProvider, MovieContext };




// 3rd color background change

// import { useState, createContext, useEffect } from "react";

// const MovieContext = createContext();

// function MovieProvider({ children }) {
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null); // Track the selected movie

//   useEffect(() => {
//     const apiKey = '78841e0733ee8692f9f20044d4f7362a'; // Replace with your TMDb API key

//     // Define the query parameters to fetch the currently top-rated movies
//     const queryParams = {
//       api_key: apiKey,
//       language: 'en-US',
//       sort_by: 'popularity.desc', // Sort by popularity to get the top-rated movies
//       page: 1,                    // You can adjust the page number if needed
//     };

//     // Construct the full API URL with query parameters
//     const apiUrl = new URL('https://api.themoviedb.org/3/discover/movie');
//     apiUrl.search = new URLSearchParams(queryParams).toString();

//     // Fetch the currently top 10 movies
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         // Extract the top 10 movies from the API response
//         const top10Movies = data.results.slice(0, 10);
//         setMovies(top10Movies);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   // Event handler for when a movie is clicked
//   const handleMovieClick = (movie) => {
//     setSelectedMovie(movie);
//   };

//   // Dynamic background color based on the selected movie
//   const backgroundColor = selectedMovie ? "#FFD700" : "#FFFFFF";

//   return (
//     <div style={{ backgroundColor }}> {/* Change the background color */}
//       <MovieContext.Provider value={{ movies, handleMovieClick }}>
//         {children}
//       </MovieContext.Provider>
//     </div>
//   );
// }

// export { MovieProvider, MovieContext };
