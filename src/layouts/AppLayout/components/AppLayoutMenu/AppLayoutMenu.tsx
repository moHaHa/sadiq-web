import { FC } from "react";
import { Link } from "react-router-dom";
import { AppLayoutGroup } from "../../ui";

interface AppLayoutMenuProps {
  open: boolean;
  onClose: () => void;
}

const AppLayoutMenu: FC<AppLayoutMenuProps> = ({ open, onClose }) => {
  return (
    <>
      {open && (
        <AppLayoutGroup.UI.MenuPopup>
          <div className="plg ">
            <div className="text-center plg">الانتقال الى</div>
            <Link
              to={"/issues"}
              className="text-black"
              onClick={() => onClose()}
            >
              <div className="w-full p-12px bg-[#eee] rounded-md mb-4px">
                البلاغات الواردة
              </div>
            </Link>
          </div>
        </AppLayoutGroup.UI.MenuPopup>
      )}
    </>
  );
};

export default AppLayoutMenu;
