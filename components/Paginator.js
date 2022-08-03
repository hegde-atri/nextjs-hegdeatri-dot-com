import Link from "next/link";

export default function Paginator({ currentPage, numPages, parentPage }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/${parentPage}/page/${currentPage - 1}`;
  const nextPage = `/${parentPage}/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;

  return (
    <div className="mt-6">
      <ul className="flex pl-0 list-none my-2">
        {!isFirst && (
          <Link href={prevPage}>
            <li className="relative block py-2 px-3 leading-tight border-2 dark:border-transparent hover:bg-red-400 dark:bg-slate-700 dark:hover:bg-red-500 cursor-pointer rounded-lg mx-2 shadow">
              Previous
            </li>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/${parentPage}/page/${i + 1}`} key={i}>
            <li className="relative block py-2 px-3 leading-tight border-2 dark:border-transparent hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-500  cursor-pointer rounded-full mx-1 shadow">
              {i + 1}
            </li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li className="relative block py-2 px-3 leading-tight border-2 dark:border-transparent hover:bg-emerald-400 dark:bg-slate-700 dark:hover:bg-emerald-700 cursor-pointer rounded-lg mx-2 shadow">
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
