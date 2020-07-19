import Link from "next/link";

export default function Back() {
  return (
    <div className="container">
      <img src="/back.png" />
      <Link href="/index">
        <a>See front!</a>
      </Link>
    </div>
  );
}
