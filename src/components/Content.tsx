type ContentType = {
  title: string;
  text: string;
  isVerified: boolean;
};
export const Content = ({ content }: { content: ContentType }) => {
  return (
    <div>
      <div> {content.title}</div>
      <div>{content.text}</div>
    </div>
  );
};
