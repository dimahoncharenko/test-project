import { GridList } from "./styled";

type ItemProps = {
  children: React.ReactNode;
};

const FancyParagraph = ({ children }: ItemProps) => {
  return (
    <p className="relative max-w-[95%] xl:max-w-full bg-[#272727] px-4 py-6 lg:py-8 lg:px-6 text-[12px] leading-[16px] lg:text-[14px] xl:text-[15px] font-medium">
      <span className="absolute max-w-[50px] xl:max-w-[70px] -right-6 xl:-right-9 top-1/2 -translate-y-1/2">
        <img className="w-full h-full" src="/icons/all-correct.svg" alt=""/>
      </span>
      <span>{children}</span>
    </p>
  );
};

export const AdvantagesSection = () => {
  return (
    <div className="px-5 xl:px-16 pb-20">
      <h2 className="text-xl lg:text-2xl font-semibold leading-[30px] text-center my-6 lg:my-10">Ты получишь:</h2>
      <GridList>
        <FancyParagraph>12 тематических уроков в записи</FancyParagraph>
        <FancyParagraph>
          12 online - разборов своего бизнеса лично Алексом Яновским
        </FancyParagraph>
        <FancyParagraph>
          Возможность смотреть за бизнесами других участников и перенимать
          лучшие практики
        </FancyParagraph>
        <FancyParagraph>
          Эффективные методики, основанные на опыте увеличения чистой прибыли в
          100+ компаниях
        </FancyParagraph>
      </GridList>
    </div>
  );
};
