import Header from "./header/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex h-screen flex-col items-center justify-center bg-green-500">
        <h1>Welcome To PokeMechs</h1>
        <h2>Your Pocket Mechanic Assistant</h2>
      </div>
    </main>
  );
}
