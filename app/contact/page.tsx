import Link from "next/link";
export default function Contact() {
  const [state, setState] = useState();
  return (
    <div>
      <h1>Contact</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
