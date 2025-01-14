import { FC, ReactNode, useState } from "react";
import { AppLayoutGroup } from "./ui";

interface AppLayoutProps {
  title?: string;
  children?: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="d-flex  flex-column h-100vh font-sans ">
      <AppLayoutGroup.UI.Header>
        <AppLayoutGroup.UI.HeaderTitle
          text={title}
        ></AppLayoutGroup.UI.HeaderTitle>
        <div className="flex-1 flex justify-end">
          <div className="text-12px px-8px">كيف يعمل التطبيق ؟</div>
        </div>
      </AppLayoutGroup.UI.Header>
      <div className="bg-[#F4F6F3] flex-1 h-full pt-48px">{children}</div>
      <AppLayoutGroup.UI.Nav>
        <AppLayoutGroup.UI.NavItem
          link="/browse"
          className=" py-1px"
          //   icon="i-solar:minimalistic-magnifer-line-duotone"
        >
          <div className="text-14px">البريد الوارد</div>
        </AppLayoutGroup.UI.NavItem>
        <AppLayoutGroup.UI.NavItem
          link="/map"
          text="الخريطة"
          icon="i-solar:map-line-duotone"
        ></AppLayoutGroup.UI.NavItem>

        <AppLayoutGroup.UI.NavItem
          link="/add-issue"
          icon="i-solar:add-circle-broken"
        ></AppLayoutGroup.UI.NavItem>
        <AppLayoutGroup.UI.NavItem
          onClick={() => {
            setOpen(!open);
          }}
          icon={
            open
              ? "i-solar:close-circle-line-duotone"
              : "i-solar:hamburger-menu-line-duotone"
          }
        ></AppLayoutGroup.UI.NavItem>
        <AppLayoutGroup.Menu
          onClose={() => setOpen(false)}
          open={open}
        ></AppLayoutGroup.Menu>
      </AppLayoutGroup.UI.Nav>
    </div>
  );
};

export default AppLayout;
