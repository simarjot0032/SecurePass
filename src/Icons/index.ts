/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IconProp {
  [key: string]: any;
  onclick?: (_?: React.MouseEvent<SVGElement>) => void;
  className?: string;
  iconStyle: React.CSSProperties;
}
