import { ChangeEvent, FormEvent, useState, useContext } from "react";

import { socials } from "./assets";
import { Comments } from "../Comments";
import { commentsContext, Comment } from "../../utils";

export const Sidebar = () => {
  const { addComment } = useContext(commentsContext);

  const [formState, setFormState] = useState<{
    comment: string;
    guestName?: string;
    name: string;
  }>({
    comment: "",
    guestName: "",
    name: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formState.comment.trim() || !formState.guestName?.trim()) return;

    const newComment: Comment = {
      content: formState.comment,
      username: formState.name || formState.guestName,
      timestamp: Date.now(),
      avatar: "/icons/guest.svg",
      likes: 0,
      dislikes: 0,
    };

    addComment(newComment);
    setFormState({ comment: "", name: "", guestName: "" });
  };

  return (
    <div
      style={{ gridArea: "sidebar" }}
      className="px-3 py-12 lg:py-5 lg:px-4 w-full bg-[#272727]"
    >
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Добавить коментарий..."
          rows={5}
          className="p-4 w-full resize-none text-sm leading-4 -tracking-[0.015em]"
          name="comment"
          onChange={handleChange}
          value={formState.comment}
        />
        <div className="py-4">
          <label
            htmlFor="socials"
            className="text-sm lg:text-sm leading-4 -tracking-[0.015em]"
          >
            Войти через:
          </label>
          <div id="socials" className="flex gap-4 justify-center py-3">
            {socials.map(({ image, name }, key) => (
              <img
                key={key}
                className="w-[30px] xl:w-[36px] cursor-pointer"
                src={image}
                alt={name}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="guest-field"
            className="text-sm lg:text-sm leading-4 -tracking-[0.015em]"
          >
            Или как гость
          </label>
          <div className="flex items-center gap-5">
            <input
              className="p-4 w-full resize-none text-sm leading-4 -tracking-[0.015em]"
              type="text"
              placeholder="Имя *"
              name="guestName"
              onChange={handleChange}
              value={formState.guestName}
            />
            <button type="button" className="w-8 xl:w-10 hidden lg:block">
              <img
                className="w-full h-full object-contain"
                src="/icons/share.svg"
                alt="share"
              />
            </button>
          </div>
          <button
            className="py-4 px-8 bg-[#5600E1] text-lg -tracking-[0.015em] leading-[22px]"
            type="submit"
          >
            Отправить
          </button>
        </div>
        <Comments />
      </form>
    </div>
  );
};
