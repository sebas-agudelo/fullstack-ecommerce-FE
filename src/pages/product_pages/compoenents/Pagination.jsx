import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export const Pagination = ({ page, handlePageChange, pages }) => {
    return (
        <> {pages.length > 1 && (
            <div className="flex justify-center items-center mt-10 px-4">
                {page > 1 ?
                    <button disabled={page === 1} onClick={() => {
                        if (page > 1) {
                            handlePageChange(page - 1)
                        }
                    }
                    } className="bg-purple-950 px-4 py-3 text-white flex items-center mr-4 rounded-lg"><MdOutlineArrowBackIos />
                    </button>
                    : null}
                <div>
                    <ul className="flex">
                        {
                            pages.map((p) => (
                                <li
                                    onClick={() => {
                                        handlePageChange(p)
                                    }}
                                    className={`md:cursor-pointer font-semibold px-4 mx-2 pb-1 text-center text-purple-950 ${p === page ? "border-b border-purple-900 text-purple-900" : ""}`}>
                                    {p}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {page < pages.length ?
                    <button disabled={page === pages.length} onClick={() => {
                        if (page < pages.length) {
                            handlePageChange(page + 1)
                        }
                    }
                    } className="bg-purple-950 px-4 py-3 text-white flex items-center ml-4 rounded-lg"><MdOutlineArrowForwardIos />
                    </button>
                    :
                    null
                }
            </div>
        )}
        </>
    )
}