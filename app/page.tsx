export default function Home() {
  return (
    <div className="flex min-h-screen items-cemter justify-center bg-zinc-50 font-sans dark:bg-gray-800">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-gray-800 sm:items-start">
        <h1 className="mb-2">Echoes of the Plum Grove Tracker</h1>
        <p className="mb-2">Use this to keep track of everything you find in the game! Simply click on the items in a category to mark it as found.</p>

        <div className="card">
          <img src="https://echoesoftheplumgrove.wiki.gg/images/Anglerfish.png?4db50c&20240503053834" alt="Anglerfish" />
          <div className="card-content">
            <h2 className="text-center">Fishes</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
