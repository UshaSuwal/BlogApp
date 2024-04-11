import { Category } from "./Category";
import { MyStoryTitle } from "./MyStoryTitle";

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
  return (
    <div class="container mx-auto">
      <div class="py-16 lg:py-20">
        <div class="flex items-center pb-6">
          <MyStoryTitle />
          <a
            href="/blog"
            class="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
          >
            All posts
            <img
              src="./assets/img/long-arrow-right.png"
              class="ml-3"
              alt="arrow right"
            />
          </a>
        </div>
        <Category posts={posts} />
      </div>
    </div>
  );
}