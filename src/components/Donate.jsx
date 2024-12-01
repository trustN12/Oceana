import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Donate = () => {
  return (
    <div id="donate" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
        
          <ImageClipBox
            src="/img/donate_1.jpg"
            clipClass="donate1-clip-path md:scale-120"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          
          <AnimatedTitle
            title="Let&#39;s shape the future of our oceans together."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="Donate" containerClass="mt-10 cursor-pointer bg-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Donate;