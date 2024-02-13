import heroImg from "../assets/hero.svg";

export const Hero = () => {
  return (
    <div className="h-full pt-[84px] pb-[122px] pl-[121px] pr-[120.89px]">
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-0 ">
        <div className="lg:order-first flex items-center justify-start ">
          <div className="h-[464px] w-[518.11px] bg-white flex flex-col justify-between">
            <div className="h-[356px] flex flex-col justify-between">
              <p className="font-bold text-[96px] leading-[98.5px]">
                We Take Care Of Your Brand
              </p>
              <p className="text-[20px]">
                We care about our work and we care about our clients.
              </p>
            </div>
            <div className="w-[497px] h-[64px] flex gap-2">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-slate-50 border border-slate-200 rounded-full py-4 pl-[18px] w-[339px] h-[64px]"
              />
              <button className="flex justify-center items-center bg-blue-700 py-[22px] px-[36px] rounded-full text-[18px] text-center text-slate-100 w-[146px] h-[64px]">
                Lets Talk
              </button>
            </div>
          </div>
        </div>

        <div className="order-first bg-white">
          <img src={heroImg} alt="heroImg" />
        </div>
      </div>
    </div>
  );
};
