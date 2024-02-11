import { Container } from "../Container";

export const Footer = () => {
  return (
    <div className="py-6 px-4 md:px-8 bg-[#090909] border-t-[1px] border-[#454545]">
      <Container className="lg:flex lg:justify-between lg:items-end">
        <div className="flex gap-12 sm:gap-4 flex-col justify-between">
          <div className="grid grid-cols-2 grid-rows-2 lg:gap-8 max-w-4xl mx-auto gap-y-5 gap-x-5 items-end">
            <div>
              <p className="text-[10px] text-[#A3A3A3] text-opacity-50 lg:text-sm leading-4 font-medium mb-1">
                Украина
              </p>
              <p className="font-medium lg:text-xl lg:leading-6 text-sm leading-[17px]">
                +38 089 420 02 28
              </p>
            </div>
            <div>
              <p className="text-[10px] text-[#A3A3A3] text-opacity-50 lg:text-sm leading-4 font-medium mb-1">
                Европа
              </p>
              <p className="font-medium lg:text-xl lg:leading-6 text-sm leading-[17px]">
                +370 7 004 47 69
              </p>
            </div>
            <div>
              <a
                href="#"
                className="flex sm:order-1 items-center gap-2 text-white py-2"
              >
                <img src="/icons/mail.svg" alt="Telegram call" />
                <span className="text-[10px] font-normal lg:text-sm leading-[14px]">
                  info@alexyanovsky.info
                </span>
              </a>
            </div>
            <div className="justify-self-start">
              <a
                href="#"
                className="self-center justify-self-start flex items-center gap-2 text-white border-white border-[1px] rounded-[4px] py-2 px-4"
              >
                <img src="/icons/Telegram_white.svg" alt="Telegram call" />
                <span className="text-xs lg:text-sm leading-[14px]">
                  Telegram
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:gap-4 text-center lg:text-right text-[10px] leading-3 lg:text-sm lg:leading-5 xl:text-xl mt-5 lg:mt-0">
          <p>Дистанционный договор</p>
          <p>Архив дистанционных договоров до 2022 года</p>
          <p>© 2022 ALEX YANOVSKY. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
        </div>
      </Container>
    </div>
  );
};