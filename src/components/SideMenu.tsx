type ContentArray = {
  title: string;
  text: string;
  isVerified: boolean;
};

type MenuType = {
  title: string;
  buttonText: string;
  content: Array<ContentArray>;
};
type setContType = () => {};
// type PropType = {
//   menu: MenuType;
// };

export const SideMenu = ({
  menu,
  setCont,
}: {
  menu: MenuType;
  setCont: setContType;
}) => {
  return (
    <div className="flex">
      <button
        className="w-[250px] h-10 bg-gray-100 flex justify-center border"
        onClick={setCont(1)}
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
