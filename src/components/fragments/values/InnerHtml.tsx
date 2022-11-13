import { ValueViewParams } from "../sharedParams";

export interface InnerHtmlParams extends ValueViewParams {
  containerClass: string
}

const InnerHtml = (props: Readonly<InnerHtmlParams>) => {
  return <span className={props.containerClass} dangerouslySetInnerHTML={{
    __html: props.value
  }} />;
};

export default InnerHtml;
