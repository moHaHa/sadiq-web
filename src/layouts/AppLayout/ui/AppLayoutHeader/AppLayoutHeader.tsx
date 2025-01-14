import { FC, ReactNode } from "react";

interface AppLayoutHeaderProps {
  children?: ReactNode;
}

const AppLayoutHeader: FC<AppLayoutHeaderProps> = ({ children }) => {
  return (
    <>
      <div
        className={`position-fixed bg-[#FBFBFB] top-0px left-0px right-0px border-b-solid border-b-[#ddd] border-b-solid z-999`}
      >
        <div className="h-48px flex ic">{children}</div>
      </div>
    </>
  );
};

export default AppLayoutHeader;
