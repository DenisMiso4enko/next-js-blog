import "./pagination.css";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  query: string;
}

const Pagination = ({ currentPage, totalPages, query }: PaginationProps) => {
  const getPageNumbers = (): Array<number | string> => {
    const pageNumbers: Array<number | string> = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const setActiveClass = (page: string | number) => {
    return page === currentPage ? "active" : "link";
  };

  return (
    <div className="pagination__container">
      {getPageNumbers().map((page) => (
        <Link
          key={page}
          href={{
            pathname: "/",
            query: {
              page: page,
              search: query,
            },
          }}
          className={`link ${setActiveClass(page)}`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
