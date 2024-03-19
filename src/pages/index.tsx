import { Content, SideMenu } from "../components";
import { useState } from "react";
export default function Home() {
  const [cont, setCont] = useState<number>(0);

  let sideMenus = [
    {
      title: "TS for the New Programmer",
      buttonText: "TS for the New Programmer",
      id: 0,
      content: [
        {
          title: "content title 1",
          text: "content text 1",
          isVerified: false,
        },
        {
          title: "content title 2",
          text: "content text 2",
          isVerified: false,
        },
        {
          title: "content title 3",
          text: "content text 3",
          isVerified: false,
        },
      ],
    },
    {
      title: "TypeScript for JavaScript Programmers",
      buttonText: "TypeScript for JS Programmers",
      id: 1,
      content: [
        {
          title: "content title 1",
          text: "content text-1",
          isVerified: true,
        },
        {
          title: "content title 2",
          text: "content text-2",
          isVerified: true,
        },
        {
          title: "content title 3",
          text: "content text-3",
          isVerified: true,
        },
      ],
    },
    {
      title: "TS for Java/C# Programmers",
      buttonText: "TS for Java/C# Programmers",
      id: 2,
      content: [
        {
          title: "content title 1",
          text: "content text-1",
          isVerified: false,
        },
        {
          title: "content title 2",
          text: "content text-2",
          isVerified: false,
        },
        {
          title: "content title 3",
          text: "content text-3ww",
          isVerified: false,
        },
      ],
    },
  ];
  return (
    <div className="flex">
      <div className="flex flex-col">
        {sideMenus.map((menu, key) => (
          <div>
            <SideMenu menu={menu} key={key} setCont={setCont} />
            {/* <div className={`w-1/2`}>
            {menu.title}
            {menu.content.map((content) => (
              <Content content={content} />
            ))}
          </div> */}
          </div>
        ))}
      </div>
      <Content content={sideMenus[cont].content} />
    </div>
  );
}
