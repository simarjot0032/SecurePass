import { StaticImageData } from "next/image";
import Logo from "@assets/logo.png";
type Products = {
  productImage: StaticImageData;
  productName: string;
  productDescription: string;
};
export const ProductsArray: Products[] = [
  {
    productImage: Logo,
    productName: "",
    productDescription: "",
  },
  {
    productImage: Logo,
    productName: "",
    productDescription: "",
  },
  {
    productImage: Logo,
    productName: "",
    productDescription: "",
  },
];
