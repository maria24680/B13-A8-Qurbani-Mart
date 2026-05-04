'use client'
import Lottie from "lottie-react";
import Verified from "../../../public/animation/verified.json"
import Transport from "../../../public/animation/transport.json"
import Price from "../../../public/animation/price.json"
import Support from "../../../public/animation/support.json"

export default function FeaturesBar() {

  const getAnimation = (title) => {
    switch (title) {
      case "Healthy & Verified":
        return Verified;
      case "Safe Transport":
        return Transport;
      case "Fair Price":
        return Price;
      case "24/7 Support":
        return Support;
      default:
        return null;
    }
  };
  const items = [
    { title: "Healthy & Verified" },
    { title: "Safe Transport" },
    { title: "Fair Price" },
    { title: "24/7 Support" },
  ];

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 py-10 px-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white shadow rounded-lg p-5 flex items-center gap-3"
        >
          <figure className="flex justify-center items-center pt-6">
              <Lottie  animationData={getAnimation(item.title)} loop={true} className="w-40" />
            </figure>
          <div className="font-medium">{item.title}</div>
        </div>
      ))}
    </div>
  );
}





