import Header, { Tab } from "@/components/Header";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-xl mx-auto w-full p-3 md:mt-5">
        <Header active={Tab.DaisyUI} />
        <header className="mb-5">
          <h1 className="text-3xl md:text-5xl font-black">Carousel</h1>
          <p className="text-lg text-stone-700 mt-3 md:mt-5">
            This is a simple app that features a slides carousel.
          </p>
        </header>
      </div>
    </div>
  );
};

export default Page;
