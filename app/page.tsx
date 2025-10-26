import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="mb-2">Echoes of the Plum Grove Tracker</h1>
      <p className="mb-2">Use this to keep track of everything you find in the game! Simply click on the items in a category to mark it as found.</p>

      <Link href="/fishes" className="card">
        <img src="https://echoesoftheplumgrove.wiki.gg/images/Anglerfish.png?4db50c&20240503053834" alt="Anglerfish" />
        <div className="card-content">
          <h2 className="text-center">Fishes</h2>
        </div>
      </Link>
    </>
  );
}
