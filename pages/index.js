import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <img src="/front.png" />
      <Link href="/inside">
        <a>See inside!</a>
      </Link>
    </div>
  );
}
