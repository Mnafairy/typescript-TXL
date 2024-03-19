type ContentType = {
  title: string;
  text: string;
  isVerified: boolean;
};
export const Content = ({ content }: { content: ContentType[] }) => {
  // console.log("content:", content);
  return (
    <div>
      {content.map((e) => (
        <div>
          <div> {e.title}</div>
          <div>{e.text}</div>
        </div>
      ))}
    </div>
  );
};
