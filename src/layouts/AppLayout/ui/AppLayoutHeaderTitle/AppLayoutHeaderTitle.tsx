import { FC } from "react";

interface AppLayoutHeaderTitleProps {
  text?: string;
}

const AppLayoutHeaderTitle: FC<AppLayoutHeaderTitleProps> = ({ text }) => {
  return (
    <>
      <div className="text-18px ps-15px">{text}</div>
    </>
  );
};

export default AppLayoutHeaderTitle;
