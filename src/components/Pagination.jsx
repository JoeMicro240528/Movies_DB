
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux';
const PaginationComponent = ({ getPage ,pageCount}) => {

    const dispatch = useDispatch();
    const handlePageClick = (data) => {    
         dispatch( getPage(data.selected + 1));
    }
    return (
            <ReactPaginate
            breakLabel=". . ."
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            containerClassName={"pagination flex justify-center items-center my-10"}
            pageClassName={"text-white text-[20px] p-1 cursor-pointer"}
            pageLinkClassName={""}
            previousClassName={"bg-[#127bb0] text-white px-4 py-2 cursor-pointer rounded-lg  hover:bg-[#0f5a8c] transition-all duration-300  mx-2"}
            nextClassName={"bg-[#127bb0] text-white px-4 py-2 cursor-pointer rounded-lg  hover:bg-[#0f5a8c] transition-all duration-300  mx-2"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={" text-xl"}
            breakLinkClassName={"text-white mx-3 text-bold text-xl font-bold"}
            activeClassName={"p-1 mx-2 w-[40px] h-[40px] leading-[30px] rounded-full text-white text-center bg-[#127bb0] transition-all duration-300"}
        />
    )
}

export default PaginationComponent
