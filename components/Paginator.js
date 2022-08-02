import Link from 'next/link'

export default function Paginator({ currentPage, numPages, parentPage}) {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = `/${parentPage}/page/${currentPage - 1}`
  const nextPage = `/${parentPage}/page/${currentPage + 1}`

  if (numPages === 1) return <></>

  return (
    <div className='mt-6'>
      <ul className="flex pl-0 list-none my-2">
        {!isFirst && (
          <Link href={prevPage}>
            <li className='relative block py-2 px-3 leading-tight border hover:bg-gray-200 cursor-pointer'>Previous</li>
          </Link>
        )}
        {/* TODO: make this have only 3 numbers and not entire array.*/}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/${parentPage}/page/${i + 1}`} key={i}>
            <li className='relative block py-2 px-3 leading-tight border hover:bg-gray-200 cursor-pointer'>{i + 1}</li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li className='relative block py-2 px-3 leading-tight border hover:bg-gray-200 cursor-pointer'>Next</li>
          </Link>
        )}
      </ul>
    </div>
  )
}
