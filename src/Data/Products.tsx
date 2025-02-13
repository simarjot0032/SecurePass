import { BsDatabaseLock } from "react-icons/bs";

import { TbLockPassword } from "react-icons/tb";
import { CgPassword } from "react-icons/cg";
type Products = {
  productIcon: React.ElementType;
  productName: string;
  productDescription: string;
  productLink: string;
};

export const ProductsArray: Products[] = [
  {
    productIcon: BsDatabaseLock,
    productName: "Password Manager",
    productDescription:
      "Secure Vault is a powerful and easy-to-use password manager designed to keep your credentials, card details and other senstive details encrypted, safe and organized.  ",
    productLink: "/Vault",
  },
  {
    productIcon: TbLockPassword,
    productName: "Password Generator",
    productDescription:
      "It is a fast and reliable password generator that helps you create strong, unique passwords using numbers, alphanumeric characters to protect your accounts. ",
    productLink: "/Generator",
  },
  {
    productIcon: CgPassword,
    productName: "Password Strength Checker",
    productDescription:
      "It analyzes the strength of your passwords in real time, ensuring they meet the highest security standards. ",
    productLink: "/Checker",
  },
];
