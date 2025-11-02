import { type FC } from "react";

interface Props {
  imgUrl: string;
  altText: string;
}

export const ProductImage: FC<Props> = ({ imgUrl, altText }) => {
  return (
    <div className="pdp-image-wrapper">
      <img src={imgUrl} alt={altText} className="pdp-image" />
    </div>
  );
};
