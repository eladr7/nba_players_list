import React from "react";

interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="text-4xl font-bold text-gray-500 underline">{text}</h1>;
};
