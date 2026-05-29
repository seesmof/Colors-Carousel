import Header, { Tab } from "@/components/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-xl mx-auto w-full p-3 md:mt-5">
        <Header active={Tab.ShadCN} />
        <header className="mb-5">
          <h1 className="text-3xl md:text-5xl font-black">Carousel</h1>
          <p className="text-lg text-stone-700 mt-3 md:mt-5">
            This is a simple app that features a slides carousel.
          </p>
        </header>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="h-80 bg-red-500"></CarouselItem>
            <CarouselItem className="h-80 bg-green-500"></CarouselItem>
            <CarouselItem className="h-80 bg-blue-500"></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Page;
