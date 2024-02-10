import { CSSProperties } from "react";

export const Banner = () => {
  return (
    <div className="mx-5 lg:mx-0">
      <h2 className="text-white font-semibold text-sm md:text-xl lg:text-2xl leading-5 py-4 tracking-wider">
        Как создать прирост трафика и продаж в 2023 году?
      </h2>
      <div className="flex justify-between flex-col lg:flex-row lg:gap-5 xl:gap-0 bg-[#272727] p-3 lg:p-6 relative overflow-hidden">
        <div className="relative z-10">
          <span className="flex gap-3 items-center text-[12px] lg:font-semibold lg:before:w-[10px] lg:before:h-[10px] lg:before:bg-[#5600E1] lg:before:block lg:before:rounded-full">
            Тренинг
          </span>
          <h3
            style={{
              fontStretch: "ultra-condensed",
            }}
            className="text-[#5600E1] bebas-neue text-[30px] lg:text-[40px] font-bold leading-[30px] lg:leading-10 py-1 lg:py-4 tracking-tight inline-block"
          >
            УДВОЕНИЕ ПРИБЫЛИ
          </h3>
          <p
            className="text-[12px] sm:text-[15px] font-bold leading-[21px] max-w-[75%]"
            style={{ textShadow: "0 0 .2em black" }}
          >
            Ты увеличишь прибыль в своем бизнесе от 2 до 6 раз за 3 месяца!
          </p>
        </div>
        <div className="relative z-10 lg:flex lg:flex-col">
          <p
            className="font-medium text-[12px] hidden lg:block xl:text-[15px] leading-[21px]"
            style={{ textShadow: "0 0 .2em black" }}
          >
            Только до конца месяца действует{" "}
            <span className="text-[#5600E1]">специальное предложение</span>!
            <br />
            <b style={{ textShadow: "0 0 .2em black" }}>
              Подробности у куратора после регистрации
            </b>
          </p>
          <p className="text-[10px] bg-black bg-opacity-10 my-3 leading-3 tracking-wider font-semibold  border-[1px] lg:hidden border-[#5600E1] py-3 px-6 max-w-56">
            Получи <span className="text-[#5600E1]">спецпредложение</span> у
            куратора после регистрации
          </p>
          <a
            href="https://alexyanovsky.com/udvoenie_pribyli?utm_source=trafik_web"
            target="_blank"
            className="relative z-10 inline-block mt-auto self-start visited:text-white font-semibold text-center leading-[17px] p-3 sm:p-6 lg:py-4 lg:px-2 uppercase text-[13px] xl:text-[15px] bg-[#5600E1] text-nowrap"
          >
            Получить спецпредложение
          </a>
        </div>
        <div className="absolute right-16 translate-x-1/2 translate-y-1/2 h-[150%] sm:h-[200%] bottom-10">
          <img
            style={
              {
                "--tw-drop-shadow": "drop-shadow(0 0 12em #5600E1)",
              } as CSSProperties
            }
            className="w-full h-full object-cover filter"
            src="/images/author2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
