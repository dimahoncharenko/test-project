import { createContext, useCallback, useState } from "react";

import { useTime } from "./hooks/useTime";

export type Comment = {
  username: string;
  content: string;
  timestamp: number;
  avatar?: string;
};

const comments_seed: Comment[] = [
  {
    username: "Имя пользователя",
    timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,
    content: "Ждём начала!",
  },
  {
    username: "Светлана",
    timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,
    content: "Ждём начала!",
    avatar: "/images/svitlana.png",
  },
];

export const commentsContext = createContext<{
  comments: Comment[];
  addComment: (cmt: Comment) => void;
}>({
  addComment() {},
  comments: comments_seed,
});

type CommentsProviderProps = {
  children: React.ReactNode;
};
export const CommentsProvider = ({ children }: CommentsProviderProps) => {
  const [comments, setComments] = useState(comments_seed);

  const addComment = useCallback((cmt: Comment) => {
    setComments((prev) => [...prev, cmt]);
  }, []);

  return (
    <commentsContext.Provider value={{ comments, addComment }}>
      {children}
    </commentsContext.Provider>
  );
};

export type AvailableSections = {
  video: boolean;
  banner: boolean;
  text: boolean;
  comments: boolean;
  picture: "Traffic Increase" | "Money Flow" | false;
};

export const sections_seed: AvailableSections = {
  banner: true,
  comments: true,
  text: true,
  video: true,
  picture: "Traffic Increase",
};

export const availableSectionsContext =
  createContext<AvailableSections>(sections_seed);

type AvailableSectionsProviderProps = {
  children: React.ReactNode;
};
export const AvailableSectionsProvider = ({ children }: AvailableSectionsProviderProps) => {
  const availableSections = useTime();

  return (
    <availableSectionsContext.Provider value={availableSections}>
      {children}
    </availableSectionsContext.Provider>
  );
};