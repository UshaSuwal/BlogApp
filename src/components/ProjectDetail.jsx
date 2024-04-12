export function ProjectDetail({ title, description }) {
  return (
    <div className="container mx-auto"> 
        <div>
          <a
            href=" / "
            className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
          >
            <span className="w-9/10 pr-8">
              <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                {title}
              </h4>
              <p className="font-body font-light text-primary dark:text-white">
                {description}
              </p>
            </span>
            <span className="w-1/10">
              <img
                src="/assets/img/chevron-right.png"
                className="mx-auto"
                alt="chevron right"
              />
            </span>
          </a>
        </div>
      
    </div>
  );
}
