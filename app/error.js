"use client"

//NFD : only work for rendering error 
// do not works in root layout

function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="text-lg">{error.message}</p>
      <button className="inline-block bg-amber-500 px-6 py-3 text-lg" onClick={reset}>Try Again</button>
    </main>
  )
}

export default Error