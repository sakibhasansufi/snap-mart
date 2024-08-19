/* eslint-disable react/prop-types */
import './search.css';

const Search = ({ setSearch }) => {
    return (
        <div>
            <section className="mt-20">
                {/* <p className="gradient mt-5 text-center text-2xl md:text-5xl lg:text-7xl font-semibold">Search your desired products</p> */}
                <input
                    type="text"
                    className='search'
                    placeholder="Search"
                    onChange={({ currentTarget: input }) => setSearch(input.value)} />


            </section>
        </div>
    );
};

export default Search;