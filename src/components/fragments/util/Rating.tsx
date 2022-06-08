import Inner from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export interface RatingParams {
  initialValue?: number,
  disabled?: boolean,
  onChange?: (x: number) => void
}

const Rating = (props: Readonly<RatingParams>) => {
  const calcRating = (x: number) => {
    const normalized = x * 5;
    const floored = Math.floor(normalized);
    return normalized % floored >= 0.5 ? floored + 0.5 : floored;
  };

  return <Inner emptySymbol={<AiOutlineStar size={35} />} fullSymbol={<AiFillStar size={35} />} onChange={props.onChange} initialRating={props.initialValue && props.initialValue > 0 ? calcRating(props.initialValue) : 0} readonly={props.disabled} />;
};

export default Rating;
