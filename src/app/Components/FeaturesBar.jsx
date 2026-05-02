import { FaCheckCircle, FaTruck, FaTag, FaHeadset } from "react-icons/fa";

export default function FeaturesBar() {
  const items = [
    { icon: <FaCheckCircle />, title: "Healthy & Verified" },
    { icon: <FaTruck />, title: "Safe Transport" },
    { icon: <FaTag />, title: "Fair Price" },
    { icon: <FaHeadset />, title: "24/7 Support" },
  ];

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 py-10 px-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white shadow rounded-lg p-5 flex items-center gap-3"
        >
          <div className="text-green-900 text-2xl">{item.icon}</div>
          <div className="font-medium">{item.title}</div>
        </div>
      ))}
    </div>
  );
}