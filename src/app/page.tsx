import Navbar from "@/components/global/Navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import { SparklesCore } from "@/components/global/sparkles";
import { Button } from "@/components/ui/button";
import { clients } from "@/lib/constant";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
        <div className="h-[45em] relative w-full bg-black flex flex-col items-center justify-center rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
            Build great products
          </h1>
        </div>
        <section 
            className="
              rounded-md !overflow-visible 
              relative flex flex-col antialiased 
              inset-0 h-full w-full items-center px-5 py-24 
              [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]
            "
        >
          <div
            className="
              flex flex-col mt-[-100px] md:mt-[-100px]
            "
          >
            {/* <-----------------------------------------------------------------> */}
            
            <ContainerScroll
              titleComponent={
                <div className="flex items-center flex-col">
                  <Button
                    size={'lg'}
                    className="
                      p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 
                      rounded-full border-[#4D4D4D] bg-[#1F1F1F] 
                      hover:bg-white group transition-all flex items-center justify-center
                      gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500
                    "
                  >
                    <span 
                      className="
                        bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 
                        to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r 
                        group-hover:from-black goup-hover:to-black
                      "
                    >
                      Start For Free Today
                    </span>
                  </Button>
                  <h1 
                    className="
                      text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b 
                    from-white to-neutral-600 font-sans font-bold
                    "
                  >
                    Automate Your Work With Fuzzie
                  </h1>
                </div>
              }
            />
            {/* <--------------------------------------------------------------> */}
          </div>
          
        </section>
        
    </main>
  );
}
