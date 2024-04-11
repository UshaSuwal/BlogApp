export function Details({ description, date, readtime }) {
  return (
    <div class="pt-8">
      <div class="border-b border-grey-lighter pb-8">
        <span class="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green">
          category
        </span>
        <a
          href="/post"
          class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
        >
          {description}
          
        </a>
        <div class="flex items-center pt-4">
          <p class="pr-2 font-body font-light text-primary dark:text-white">
            {date}
           
          </p>
          <span class="font-body text-grey dark:text-white"></span>
          <p class="pl-2 font-body font-light text-primary dark:text-white">
            {readtime}
          </p>
        </div>
      </div>

     
    </div>
  );
}
