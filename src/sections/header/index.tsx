import Link from "next/link";

export default function Header() {
  return (
    <header className="container max-w-full dark:text-white">
      <div className="mb-5 flex items-center justify-between px-10 py-4 border-b-stone-700">
        <span className="font-bold text-2xl">Dashboard</span>
        <div className="flex items-center gap-6">
          <Link
            className="hover:text-rose-400 underline font-semibold"
            href={"/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}