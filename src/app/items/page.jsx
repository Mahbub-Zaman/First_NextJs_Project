import Link from "next/link";
import items from "../data/items.json";

export default function Items() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="bg-gray-200 p-4 shadow rounded">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded"/>
          <h3 className="font-bold text-black mt-2">{item.name}</h3>
          <p className="text-gray-600">{item.brand} - {item.switchType}</p>
          <p className="mt-2 text-red-400 font-semibold">₹{item.price}</p>
          <Link href={`/items/${item.id}`} className="text-blue-500 mt-2 block">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
