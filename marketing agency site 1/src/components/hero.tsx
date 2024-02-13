import heroImg from "../assets/hero.svg";

export const Hero = () => {
  return (
    <div className="h-full pt-[84px] pb-[122px] pl-[121px] pr-[120.89px]">
      <div className="grid md:grid-cols-2">
        <div className="md:order-first md:mt-8 flex items-center justify-start bg-blue-600">
          <div className="h-[464px] w-[518.11px] bg-white flex flex-col justify-between">
            <div>
              <p className="font-bold text-[96px] leading-[98.5px]">
                We Take Care Of Your Brand
              </p>
            </div>
            <div>
              <p>We care about our work and we care about our clients.</p>
            </div>
            <div className="w-[497px] h-[64px]">input</div>
          </div>
        </div>

        <div className="order-first bg-white">
          <img src={heroImg} alt="heroImg" />
        </div>
      </div>
    </div>
  );
};
