import { AllPost } from "./AllPost";
import { Category } from "./Category";
import { MyTitle } from "./MyTitle";

export function Post() {
  const posts = [
    {
      description: "Quis hendrerit dolor magna eget est lorem ipsum dolor sit",
      date: "July 19, 2020",
      readtime: "4 min read",
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      date: "July 19, 2020",
      readtime: "4 min read",
    },
    {
      description:
        "Dolorem molestiae cum nihil totam! Quas, repudiandae. Facere suscipit possimus placeat rerum deleniti tenetur",
      date: "July 19, 2020",
      readtime: "4 min read",
    },
  ];

  const count = posts.length;

  return (
    <div className="container mx-auto">
      <div className="py-16 lg:py-20">
        <div className="flex items-center pb-6">
          <MyTitle imagepath='/assets/img/icon-story.png' title='My Story' />
          {count > 2 && (<AllPost />)}
        </div>
        <Category posts={posts} />
      </div>
    </div>
  );
}
