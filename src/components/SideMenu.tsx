import { Dispatch } from "react";

type ContentArray = {
  title: string;
  text: string;
  isVerified: boolean;
};

type MenuType = {
  title: string;
  buttonText: string;
  id: number;
  content: Array<ContentArray>;
};
type setContType = Dispatch<React.SetStateAction<number>>;
// type PropType = {
//   menu: MenuType;
// };

export const SideMenu = ({
  menu,
  setCont,
}: {
  menu: MenuType;
  setCont: Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="">
      <button
        onClick={() => setCont(menu.id)}
        className="w-[250px] h-10 bg-gray-100 flex justify-center border"
      >
        {menu.buttonText}
      </button>
      {/* <div>
        {menu.content.map((content) => (
          <div className="flex flex-col ">
            <div> {content.title}</div>
            <div> {content.text}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
