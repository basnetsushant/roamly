import { FaStar } from "react-icons/fa";

function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) {
  const rating = (Math.random() * 1.1 + 4).toFixed(1);

  // const rating = 4.7;
  const count = Math.floor(Math.random() * 61) + 60;

  const className = `flex gap-1 items-center ${inPage ? "text-md" : "text-sm"}`;
  const countText = count > 1 ? "reviews" : "review";
  const countValue = `(${count}) ${inPage ? countText : ""}`;
  return (
    <span className={className}>
      <FaStar className="h-3 w-3" />
      {rating} {countValue}
    </span>
  );
}

export default PropertyRating;
