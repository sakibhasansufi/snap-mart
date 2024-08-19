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

                    {/* <input type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  md:w-1/2" placeholder="Search"
                        onChange={({ currentTarget: input }) => setSearch(input.value)}
                    /> */}

            </section>
        </div>
    );
};

export default Search;