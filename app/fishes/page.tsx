import FishCards from "../components/FishCards";

export default function Page() {
  return (
    <>
      <h1>Fishes</h1>
      <p className="mb-2">Click to add or remove a fish</p>

      <div className="grid grid-cols-5 gap-2">
        <FishCards />
      </div>
    </>
  );
}
