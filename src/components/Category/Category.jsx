/* eslint-disable react/prop-types */
import './category.css';
const Category = ({ genres, filterGenre, setFilterGenre }) => {
    const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterGenre, input.value];
			setFilterGenre(state);
		} else {
			const state = filterGenre.filter((val) => val !== input.value);
			setFilterGenre(state);
		}
	};
    return (
        <div className='container'>
			<h1 className='heading'>Filter By Genre</h1>
			<div className='genre_container'>
				{genres.map((genre) => (
					<div className='genre' key={genre}>
						<input
							className='genre_input'
							type="checkbox"
							value={genre}
							onChange={onChange}
						/>
						<p className='genre_label'>{genre}</p>
					</div>
				))}
			</div>
		</div>
    );
};

export default Category;