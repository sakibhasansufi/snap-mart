import axios from "axios";
import { useEffect, useState } from "react";
import Search from '../Search/Search';
import CardItems from './CardItems.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import Sort from '../Sort/Sort.jsx';
import Category from "../Category/Category";
import './card.css';


const base_url = 'http://localhost:5000/api/products';

const Card = () => {

    const [obj, setObj] = useState({});
    const [sort, setSort] = useState({ sort: "year", order: "desc" });
    const [filterGenre, setFilterGenre] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getAllMovies = async () => {
            try {
                const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order
                    }&genre=${filterGenre.toString()}&search=${search}`;
                const { data } = await axios.get(url);
                setObj(data);
            } catch (err) {
                console.log(err);
            }
        };


        getAllMovies();
    }, [sort, filterGenre, page, search]);


    return (
        <div className="mt-10">
            <div className="wrapper">
                <div className="container">
                    <div className="head">
                        
                        {/* <Search  /> */}
                        <Search setSearch={(search) => setSearch(search)} />
                    </div>
                    <div className="body">
                        <div className="table_container">

                            <CardItems movies={obj.movies ? obj.movies : []} />

                            <Pagination
                                page={page}
                                limit={obj.limit ? obj.limit : 0}
                                total={obj.total ? obj.total : 0}
                                setPage={(page) => setPage(page)}
                            />
                        </div>
                        <div className="filter_container">
                            {/* <Sort  /> */}
                            <Sort sort={sort} setSort={(sort) => setSort(sort)} />
                            <Category
                                filterGenre={filterGenre}
                                genres={obj.genres ? obj.genres : []}
                                setFilterGenre={(genre) => setFilterGenre(genre)}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;