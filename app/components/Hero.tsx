import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full bg-fixed bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        ></div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold md:text-6xl">
            FRIENDS<span className="text-blue-500">DEV</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            Find your developer for any projects
          </p>
          <Link href="/sign-in">
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md">
              Start experience
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
