import { Content, SideMenu } from "../components";
import { useState } from "react";
export default function Home() {
  const [cont, setCont] = useState("");
  let sideMenus = [
    {
      title: "TS for the New Programmer",
      buttonText: "TS for the New Programmer",
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
          text: "content text-3",
          isVerified: false,
        },
      ],
    },
  ];
  return (
    <main>
      {sideMenus.map((menu) => (
        <div className="flex">
          <div className="w-1/2">
            <SideMenu menu={menu} setCont={setCont} />
          </div>
          <div className={`w-1/2 ${cont == 1 ? "block" : "hidden"}`}>
            {menu.title}
            {menu.content.map((content) => (
              <Content content={content} />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
