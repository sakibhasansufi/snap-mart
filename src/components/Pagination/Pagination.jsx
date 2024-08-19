/* eslint-disable react/prop-types */
import './styles.module.css'

const Pagination = ({ page, total, limit, setPage }) => {
    const totalPages = Math.ceil(total / limit);

    const onClick = (newPage) => {
        setPage(newPage + 1);
    };

    const page_btn = {
        outline: 'none',
        border: "none",
        fontSize: "14px",
        fontWeight: "500",
        borderRadius: "5px",
        outLine: "none",
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 5px",
        cursor: "pointer",
        backgroundColor: "white",
        boxShadow: "var(--box-shadow)"
}

const active = {
    backgroundColor: "var(--blue)",
	color: "white"
}
return (
    <div className='container'>
        {totalPages > 0 &&
            [...Array(totalPages)].map((val, index) => (
                <button
                    onClick={() => onClick(index)}
                    className={
                        page === index + 1
                            ? `${page_btn} ${active}`
                            : page_btn
                    }
                    key={index}
                >
                    {index + 1}
                </button>
            ))}
    </div>
);
};

export default Pagination;