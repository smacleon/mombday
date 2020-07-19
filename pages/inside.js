import Link from "next/link";

export default function Inside() {
  return (
    <div className="container">
      <img src="/inside.png" />
      <Link href="/back">
        <a>See back!</a>
      </Link>
    </div>
  );
}
