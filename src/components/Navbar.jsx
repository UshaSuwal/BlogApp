export default function Navbar(){
    return(
        <div id="main">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-6 lg:py-10">
            <a href="/" className="flex items-center">
              <span href="/" className="mr-2">
                <img src="./assets/img/logo.svg" alt="logo" />
              </span>
              <p className="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
                John Doe
              </p>
            </a>
            
            <div className="hidden lg:block">
              <ul className="flex items-center">
                <li className="group relative mr-6 mb-1">
                  <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <a href="/" className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                    Intro
                  </a>
                </li>
                <li className="group relative mr-6 mb-1">
                  <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <a href="/blog" className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                    Blog
                  </a>
                </li>
                <li className="group relative mr-6 mb-1">
                  <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <a href="/uses" className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                    Uses
                  </a>
                </li>
                <li className="group relative mr-6 mb-1">
                  <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <a href="/contact" className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                    Contact
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    
    );
}