import items from "../../data/items.json";

export default async function ItemDetails({ params }) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  const item = items.find((i) => i.id === numericId);

  if (!item) return <p>Item not found</p>;

  return (
    <div className="max-w-2xl mx-auto bg-gray-200 text-gray-600 p-6 shadow rounded">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-2xl text-black font-bold mt-4">{item.name}</h2>
      <p><strong>Brand:</strong> {item.brand}</p>
      <p><strong>Switch:</strong> {item.switchType}</p>
      <p><strong>Layout:</strong> {item.layout}</p>
      <p className="mt-2">{item.description}</p>
      <p className="mt-2 font-semibold">Price: ₹{item.price}</p>
    </div>
  );
}
