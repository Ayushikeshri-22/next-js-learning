import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Main Page</h1> <br/>
        <Link href="/meals" style={{color:'blue'}}> Meal </Link><br/>
        <Link href="/community" style={{color:'blue'}}> Community </Link>
      </main>
    </div>
  );
}
