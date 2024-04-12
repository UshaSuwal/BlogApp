import { Details } from "./Details";

export function Category({ posts }) {
  // Limit the number of posts to 2
  const limitedPosts = posts.slice(0, 2);

  return (
    <>
      {limitedPosts.map((post) => (
        <Details
          key={post.date + post.description} 
          description={post.description}
          date={post.date}
          readtime={post.readtime}
        />
      ))}
    </>
  );
}
