import Link from "next/link";

export default function CategoryList({ categories }) {
  return (
    <div className="w-full p-5 rounded-lg shadow-md mt-6">
      <h3 className="text-xl p-3 rounded">Blog categories</h3>
      <ul className="divide-y divide-gray-300">
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.toLowerCase()}`}>
            <li className="p-4 cursor-pointer hover:bg-gray-50">{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
