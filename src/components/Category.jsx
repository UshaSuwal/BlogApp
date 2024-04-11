import { Details } from "./Details";

export function Category({posts}) {
  
  return (
    <>
      {posts.map((post) => (
        <Details
          description={post.description}
          date={post.date}
          readtime={post.readtime}
        />
      ))}
    </>
  );
}
