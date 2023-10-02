import styles from "./pagination.module.css";
import Link from "next/link";

const Pagination = ({currentPage, totalPages, next}: any) => {
  // // вариант через ссылки
  const pages = Array.from({length: totalPages}, (_, i) => i + 1);

  const pageNumbers: Array<number | string> = [];

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

  return (
    <div className={styles.container}>
      {getPageNumbers().map((page) => (
        <Link key={page} href={`/?page=${page}`}>
          {page}
        </Link>
      ))}
    </div>
  );

  // Вариант через кнопки и роут
  // const router = useRouter();
  // const isPrevDisabled = currentPage === 1
  // const isNextDisabled = next === undefined;
  // return (
  //   <div className={styles.container}>
  //     <button
  //       className={styles.button}
  //       disabled={isPrevDisabled}
  //       onClick={() => router.push(`?page=${currentPage - 1}`)}
  //     >
  //       Prev
  //     </button>
  //     {currentPage}
  //     <button
  //       className={styles.button}
  //       disabled={isNextDisabled}
  //       onClick={() => router.push(`?page=${currentPage + 1}`)}
  //     >
  //       Next
  //     </button>
  //   </div>
  // );
};

export default Pagination;