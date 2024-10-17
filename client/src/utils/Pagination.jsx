import ReactPaginate from 'react-paginate';


const Pagination = ({pageNumber, pageCount, handlePageClick}) => {

  return (
    <>
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      forcePage={pageNumber !== 0 ? pageNumber -1: 0}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="Previous"
      breakClassName="text-white"
      renderOnZeroPageCount={null}
      className="flex justify-center xl:gap-4 gap-2 mt-10"
      pageLinkClassName="text-white min-w-8 h-8 px-1 flex items-center justify-center rounded-sm bg-mainColor"
      activeLinkClassName="dark:bg-slate-900"
      previousLinkClassName="text-white w-fit h-8 px-2 flex items-center justify-center rounded-sm bg-mainColor"
      nextLinkClassName="text-white w-fit h-8 px-2 flex items-center justify-center rounded-sm bg-mainColor"
      disabledLinkClassName="bg-slate-500 cursor-not-allowed"
    />
    </>
  )
}

export default Pagination