"use client";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Under construction
      </h1>
      <p className="mt-3 max-w-md text-sm text-zinc-600">
        This area is currently under construction. Check back soon.
      </p>

      <button
        type="button"
        onClick={() => window.history.back()}
        className="mt-8 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
      >
        Return to previous page
      </button>
    </div>
  );
}
