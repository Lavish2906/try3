import { PurchasedDataTable } from "./PurchasedDataTable";
import { purchaedColumns } from "./PurchasedColumns";

// async function getData() {
//     // Fetch data from your API here.
//     return [
//       {
//         id: "728ed52f",
//         amount: 100,
//         status: "pending",
//         email: "m@example.com",
//       },
//       // ...
//     ]
//   }
const PurchasedDummyData = [
    {
        id: 1,
        subscription: "Gold",
        date: "22nd Aug 2024",
        amount: 500,
        status: "Active",
        actions: "View invoice"
    },
    {
        id: 2,
        subscription: "Silver",
        date: "22nd Aug 2024",
        amount: 500,
        status: "Active",
        actions: "View invoice"
    },
    {
        id: 3,
        subscription: "Gold",
        date: "22nd Aug 2024",
        amount: 500,
        status: "Active",
        actions: "View invoice"
    },
    {
        id: 4,
        subscription: "Platinium",
        date: "22nd Aug 2024",
        amount: 500,
        status: "Active",
        actions: "View invoice"
    },
    {
        id: 5,
        subscription: "Silver",
        date: "22nd Aug 2024",
        amount: 500,
        status: "Active",
        actions: "View invoice"
    },
]

export default function PurchasedPage() {
    // const data = await getData()
    return (
      <div className="container w-[80%] mx-auto py-10">
        <h1 className="lg:text-3xl md:text-xl text-lg font-semibold mb-1 text-white">Purchased History</h1>
        <PurchasedDataTable columns={purchaedColumns} data={PurchasedDummyData} />
      </div>
    )
  }