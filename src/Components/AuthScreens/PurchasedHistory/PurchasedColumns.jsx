import { Images } from "@/assets/Images/Images";

export const purchaedColumns = [
    {
      accessorKey: "subscription",
      header: "Ssubscription",
      cell: ({row})=>{
        const subscriptionName = row.getValue('subscription');
        return(
            <div className="flex items-center justify-center space-x-2">
                <img className="h-4 w-4" src={Images.subscription}/>
                <div>{subscriptionName}</div>
            </div>
        )
      }
    },
    {
      accessorKey: "date",
      header: "Date Created",
      cell: ({row})=> {
        const date = row.getValue("date");
        return (
          <div className="md:w-auto w-40">{date}</div>
        )
      }
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({row})=> {
        const action = row.getValue("actions");
        return(
          <div className="md:w-auto w-40">
            {action}
          </div>
        )
      }
    },
  ]