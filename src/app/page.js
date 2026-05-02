import Link from "next/link"

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-green-700">
        QurbaniMart
      </h1>

      <p className="mt-4">Find best animals for Qurbani</p>

      <Link href="/animals" className="mt-6 inline-block bg-green-700 text-white px-6 py-2 rounded">
        Browse Animals
      </Link>
    </div>
  )
}