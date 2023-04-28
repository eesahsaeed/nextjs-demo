
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>Hello Home</h1>
        <Link href="/blog">blog</Link>
      </div>
    </>
  )
}
