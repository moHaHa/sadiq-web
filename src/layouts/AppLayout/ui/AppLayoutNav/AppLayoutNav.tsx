import { FC, ReactNode } from "react";

interface AppLayoutNavProps {
  children?: ReactNode;
}

const AppLayoutNav: FC<AppLayoutNavProps> = ({ children }) => {
  return (
    <div
      className={`position-fixed  rounded-lg bg-[#FBFBFB] bottom-0px left-0 right-0 pb-12px shadow flex justify-between z-999 `}
    >
      {children}
    </div>
  );
};

export default AppLayoutNav;
