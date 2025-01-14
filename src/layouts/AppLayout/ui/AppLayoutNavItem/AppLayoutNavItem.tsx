import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

// Define props extending HTML attributes and adding a reset prop
interface AppLayoutNavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string;
  link?: string;
  text?: string;
  children?: ReactNode;
}

const AppLayoutNavItem: FC<AppLayoutNavItemProps> = ({
  className,
  icon,
  link,
  text,
  children,
  ...rest
}) => {
  return (
    <>
      <div className="w-40px">
        <div>
          <div className="h-2px"></div>
        </div>

        {link ? (
          <Link className="decoration-none text-black" to={link}>
            <div
              className={` flex flex-col ic   text-[#333]  ${className}`}
              {...rest}
            >
              <div>{icon ? <div className={icon}></div> : children}</div>
              <div className="text-12px">{text}</div>
            </div>
          </Link>
        ) : (
          <div
            className={` flex flex-col ic   text-[#333]  ${className}`}
            {...rest}
          >
            <div>{icon ? <div className={icon}></div> : children}</div>
            <div className="text-12px">{text}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default AppLayoutNavItem;
