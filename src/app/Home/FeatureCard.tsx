"use client";
import "../../Styles/FeatureCard.scss";
interface Props {
  cardHeading: string;
  cardContent: string;
}
export default function FeatureCard({ cardHeading, cardContent }: Props) {
  return (
    <>
      <div className="card-container">
        <div className="card-container-heading">{cardHeading}</div>
        <div className="card-container-content">{cardContent}</div>
      </div>
    </>
  );
}
