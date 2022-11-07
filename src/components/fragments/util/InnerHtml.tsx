export interface InnerHtmlParams {
  content: string,
  containerClass: string
}

const InnerHtml = (props: Readonly<InnerHtmlParams>) => {
  return <span className={props.containerClass} dangerouslySetInnerHTML={{
    __html: props.content
  }} />;
};

export default InnerHtml;
