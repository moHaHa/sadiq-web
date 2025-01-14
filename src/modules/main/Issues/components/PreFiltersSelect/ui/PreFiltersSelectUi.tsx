import { FC, ReactNode } from "react";

interface PreFiltersSelectUiProps {
  button?: ReactNode;
  content?: ReactNode;
  title?: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const PreFiltersSelectUi: FC<PreFiltersSelectUiProps> = ({
  button,
  title,
  content,
  open,
  setOpen,
}) => {
  return (
    <div>
      <div onClick={() => setOpen(!open)}>{button}</div>
      {open && (
        <div className="fixed h-50vh left-10px right-10px z-999 bg-white shadow-xl  rounded-lg   ">
          <div className="relative px-14px ">
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="i-solar:close-circle-outline text-20px absolute top-8px right-8px"
            ></div>
            <div>
              <div className="text-center pt-14px">{title}</div>
              {content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreFiltersSelectUi;
