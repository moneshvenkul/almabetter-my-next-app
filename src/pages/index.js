// pages/index.js
import clientPromise from '../../lib/mongodb.js';

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("mydatabase");

  const posts = await db
    .collection("posts")
    .find({})
    .toArray();

  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
