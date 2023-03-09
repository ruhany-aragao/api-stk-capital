import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home 2</h1>
      <Link href="/sobre">
        <a>Acessar Páigina Sobre</a>
      </Link>
    </div>
  );
}

export default Home;
