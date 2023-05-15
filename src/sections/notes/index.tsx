export default function Notes() {
  return (
    <div className="min-h-screen container mx-auto px-6 text-white">
      <h2 className="pt-5 scroll-m-20 border-b border-b-stone-200 pb-2 text-2xl md:text-3xl font-bold tracking-tight transition-colors first:mt-0 dark:border-b-stone-700 mb-5 flex items-center justify-between">
        My notes
        <button className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 dark:hover:text-stone-100 disabled:opacity-50 dark:focus:ring-stone-400 disabled:pointer-events-none dark:focus:ring-offset-stone-900 data-[state=open]:bg-stone-100 dark:data-[state=open]:bg-stone-800 bg-rose-500 text-white hover:bg-rose-600 dark:hover:bg-rose-600 h-10 py-2 px-4">
          Create Note
        </button>
      </h2>
      <div className="grid gap-3 items-center justify-items-center px-6 py-16 border rounded">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Create my first note
        </h3>
        <button className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 dark:hover:text-stone-100 disabled:opacity-50 dark:focus:ring-stone-400 disabled:pointer-events-none dark:focus:ring-offset-stone-900 data-[state=open]:bg-stone-100 dark:data-[state=open]:bg-stone-800 bg-rose-500 text-white hover:bg-rose-600 dark:hover:bg-rose-600 h-10 py-2 px-4">
          Create Note
        </button>
      </div>
    </div>
  );
}
