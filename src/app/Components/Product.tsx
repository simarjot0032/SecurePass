"use client";
import "@Styles/Products.scss";
import Link from "next/link";

interface Props {
  ProductImage: React.ElementType;
  productHeading: string;
  productDescription: string;
  productLink: string;
}
export const Product = ({
  productDescription,
  productHeading,
  ProductImage,
  productLink,
}: Props) => {
  return (
    <>
      <div className="product-container">
        <div className="product-container-icon-container">
          {<ProductImage className="product-container-icon" />}
        </div>
        <div className="product-container-heading">{productHeading}</div>
        <div className="product-container-description">
          {productDescription}
        </div>
        <div className="product-container-use-now">
          <Link href={productLink} className="product-container-product-link">
            Use Now
          </Link>
        </div>
      </div>
    </>
  );
};
