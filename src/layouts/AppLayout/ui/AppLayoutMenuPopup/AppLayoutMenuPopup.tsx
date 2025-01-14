import { FC, ReactNode } from "react";

interface AppLayoutMenuPopupProps {
  children?: ReactNode;
}

const AppLayoutMenuPopup: FC<AppLayoutMenuPopupProps> = ({ children }) => {
  return (
    <div className=" fixed bottom-60px left-0px right-0px top-0px bg-[white] rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default AppLayoutMenuPopup;
