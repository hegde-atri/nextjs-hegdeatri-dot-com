import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    Blog: "yellow",
    Bash: "blue",
    Guide: "green",
  };

  return (
    <div className={`px-2 py-1 bg-${colorKey[children]} text-gray-100 font-bold rounded dark:text-mantle`}>
      <Link href={`/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
