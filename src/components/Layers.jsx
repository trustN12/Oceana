import React, { useRef, useState } from "react";
import { TiAnchor, TiBeer, TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.7) * 7;
    const tiltY = (relativeX - 0.7) * -7;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20 text-blue-500" />
            <p className="relative z-20 text-blue-500">Help us</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Layers = () => {
  return (
    <section className="bg-slate-950 pb-52">
      <div id="layers" className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Dive Deeper: Uncover the Layers of Ocean Life
          </p>

          <p className="max-w font-circular-web text-lg text-blue-50 opacity-50">
            Dive deep into the heart of our oceans, where once-thriving
            ecosystems now teeter on the brink of collapse, crushed under the
            relentless weight of human greed and neglect. The magnificent
            creatures we once took for granted are vanishing at an alarming
            rate, their futures uncertain, and our actions—or inaction—will
            determine whether they survive. The ocean&#39;s delicate balance is
            unraveling, and if we don&#39;t act now, we risk losing irreplaceable
            life forever. Together, we hold the power to protect, restore, and
            preserve what little remains of this fragile, awe-inspiring world.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/hero-6.mp4"
            title={
              <>
                Be<b>am</b>
                <b>ing</b>
              </>
            }
            description="The ocean shimmered as the dolphins danced beneath the waves, their forms glowing in the sunlit water."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/hero-12.mp4"
            title={
              <>
                Vi<b>b</b>
                <b>RAN</b>T
              </>
            }
            description="Despite the cold, the penguins were vibrant, moving with an energy that brought warmth to their surroundings."
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/layer-1.mp4"
              title={
                <>
                  <b>strength</b>
                </>
              }
              description="steady, and wise."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/layer-2.mp4"
              title={
                <>
                  <b>agility</b>
                </>
              }
              description="powerful, sleek, and fearless."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/hero-9.mp4"
              title={
                <>
                  <b>resilience </b>
                </>
              }
              description="waddle with charm and grace."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className=" bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/hero-10.mp4"
              title={
                <>
                  <b>Luminous</b>
                </>
              }
              description="sparkling like jewels."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/hero-8.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/hero-7.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Layers;
