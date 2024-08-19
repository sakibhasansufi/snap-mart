/* eslint-disable react/prop-types */
import './carditems.css';

const CardItems = ({ movies }) => {
    return (
        <div className='container'>
			<div className='heading'>
				<p className='title_tab'>Title</p>
				<p className='genre_tab'>Genre</p>
				<p className='rating_tab'>Rating</p>
			</div>
			{movies.map((movie) => (
				<div className='movie' key={movie._id}>
					<div className='title_container'>
						<img src={movie.image} alt="movie" className='movie_img' />
						<p className='movie_title'>
							{movie.name} ({movie.year})
						</p>
					</div>
					<div className='genre_container'>
						{movie.genre.map((genre, index) => (
							<p key={genre} className='movie_genre'>
								{genre}
								{index !== movie.genre.length - 1 && "/"}
							</p>
						))}
					</div>
					<div className='rating_container'>
						
						<p className='movie_rating'>{movie.ratings}</p>
					</div>
				</div>
			))}
		</div>
    );
};

export default CardItems;