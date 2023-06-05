export default function BlogPost({ params }) {
  // console.log(params);
  const { slug } = params;
  console.log({ slug });
  return <h1> Post-- {slug}</h1>;
}
