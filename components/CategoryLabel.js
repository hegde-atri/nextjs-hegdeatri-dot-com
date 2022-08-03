import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
  };

  return (
    <div className={`px-2 py-1 bg-slate-400 text-gray-100 font-bold rounded`}>
      <Link href={`/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
