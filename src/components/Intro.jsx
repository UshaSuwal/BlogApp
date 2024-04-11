import { Button } from "./Button";

export function Intro(){
    return(

        <div class="container mx-auto">
            <div class="border-b border-grey-lighter py-16 lg:py-20">
                <div>
                    <img src="/assets/img/author.png" class="h-16 w-16" alt="author" />
                </div>
                <h1 class="pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
                    Hi, I’m John Doe.
                </h1>
                <p class="pt-3 font-body text-xl font-light text-primary dark:text-white">
                    A software engineer and open-source advocate enjoying the sunny life in Barcelona, Spain.
                </p>
                <Button />
            
            </div>
      </div>
    )
}