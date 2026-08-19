import { useSearchParams } from "react-router-dom";

export const usePagination = () => {
    const [urlPage, setUrlPage] = useSearchParams();
    const page = Number(urlPage.get("sida") || 1);

    const handlePageChange  = (newPage) => {
        if (newPage === 1) {
            setUrlPage({})
            return
        }

        setUrlPage({ "sida": newPage })
    }

    return { page, urlPage, handlePageChange  }
}