import Center from "@/components/global/Center";
import Featured from "@/components/global/Featured";
import Navbar from "@/components/global/Navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { LampComponent } from "@/components/global/lamp";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      {/* <------------------------------ First Section: Container Scroll --------------------------------> */} 
        <section 
            className="
              !overflow-visible w-full
              relative flex flex-col antialiased 
              inset-0 h-full items-center px-5 py-0 
            "
        >
          <div
            className="
              flex flex-col mt-[-100px] md:mt-[-50px]
            "
          >
            <ContainerScroll
              titleComponent={
                <div className="flex items-center flex-col">
                  <Button
                    size={'lg'}
                    className="
                      gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500
                      bg-[#1F1F1F] hover:bg-white transition-all items-center
                      p-8 mb-8 text-2xl w-full sm:w-fit border-t-2 rounded-full 
                      border-[#4D4D4D]  justify-center flex group 
                    "
                  >
                    <span 
                      className="
                        text-transparent bg-gradient-to-r from-neutral-500 
                        to-neutral-600 font-sans group-hover:bg-gradient-to-r 
                        group-hover:from-black goup-hover:to-black bg-clip-text 
                      "
                    >
                      Petcol
                    </span>
                  </Button>
                  <h1 
                    className="
                      from-white to-neutral-600 font-sans font-bold text-6xl 
                      md:text-8xl bg-clip-text text-transparent bg-gradient-to-b 
                    "
                  >
                    Mi corazon esta lleno de huellas
                  </h1>
                </div>
              }
            />
          </div>
        </section>
      {/* <--------------------------------- Third Section: Experimental ---------------------------------> */}
        <section className="w-full mt-0 inset-0">
          <Featured />
        </section>
      {/* <------------------------------- Second Section: Lamp Component (Maybe in this home page it's better hide this ) --------------------------------> */} 
        <section className="w-full mt-0 inset-0 h-screen">
          <LampComponent/>
        </section>
      
    </main>
  );
}
