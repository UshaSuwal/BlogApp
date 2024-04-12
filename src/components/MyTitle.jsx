export function MyTitle({imagepath,title}) {
  return (
    <>
      <img src={imagepath} alt="icon" />
      <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
        {title}
      </h3>
    </>
  );
}
