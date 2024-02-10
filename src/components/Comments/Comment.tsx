import { more, reply, thumb_down, thumb_up } from "./assets";

type Props = {
  username: string;
  timestamp: string;
  content: string;
  avatar?: string;
};

export const Comment = ({
  username,
  timestamp,
  content,
  avatar = "/icons/guest.svg",
}: Props) => {
  return (
    <div className="flex gap-3">
      <img
        className="w-10 h-10 xl:w-[50px] xl:h-[50px] rounded-full align-top"
        src={avatar}
        alt={username}
      />
      <div className="flex-1">
        <p className="font-medium text-[16px] xl:text-xl leading-5">{username}</p>
        <span className="text-xs leading-[14px] xs:text-sm text-white text-opacity-50">
          {timestamp}
        </span>
        <p className="text-[16px] leading-[19.5px] py-4">{content}</p>
        <div className="flex justify-between">
          <button className="flex gap-4 items-center" type="button">
            <img className="w-6 h-6" src={reply} alt="reply" />
            <span className="text-white text-opacity-50 text-sm leading-4 -tracking-[0.01em]">Ответить</span>
          </button>
          <div className="flex gap-2">
            <button type="button">
              <img className="w-4 h-4 inline-block" src={thumb_up} alt="Like" />
              <span className="ml-2 text-sm">1</span>
            </button>
            <button type="button">
              <img
                className="w-4 h-4 inline-block"
                src={thumb_down}
                alt="Dislike"
              />
              <span className="ml-2 text-sm">0</span>
            </button>
            <button type="button">
              <img className="w-4 inline-block ml-2" src={more} alt="More menu" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
