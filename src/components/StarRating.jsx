import { Rating as ReactRating } from "@smastrom/react-rating";
export function StarRating({ rating }) {
  return (
    <>
      <ReactRating style={{ maxWidth: 80 }} value={rating} readOnly />
    </>
  );
}
