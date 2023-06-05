// const getData = async () => {
//   const res = await fetch("https://www.reddit.com/.json");

//   return res.json();
// };
import Link from "next/link";
import styles from "../styles/home.module.css";
export default async function HomePage() {
  // wow! No hooks on server components!
  // const data = await getData();
  // const post = data.data.children[1].data.title;

  return (
    <div className={styles.home}>
      <div>
        <div>
          <h1>Hi, my name is Nikhil!</h1>
        </div>
        <div>
          <Link href="/blog">Checkout my blog</Link>
        </div>
        <div>contacting</div>
      </div>
    </div>
  );
}
