export function All({title}) {
  return (
    <a
      href="/blog"
      className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
    >
      {title}
      <img
        src="./assets/img/long-arrow-right.png"
        className="ml-3"
        alt="arrow right"
      />
    </a>
  );
}
