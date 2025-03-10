import OfferCard from "../Cards/Offercards"

const offerData = [ 
    {
        id: 1,
        name: "2024 Mercedes-Benz",
        offerActive : "Active",
        dealer: "Santosh mishra",
        location : "Bangalore",
        offerDate: "15 Jan 2024",
        boffer : 2400000,
        doffer: 2400000

    },
    {
        id: 2,
        name: "2024 Mercedes-Benz",
        offerActive : "Inactive",
        dealer: "Santosh mishra",
        location : "Bangalore",
        offerDate: "15 Jan 2024",
        boffer : 2400000,
        doffer: 2400000

    },
    {
        id: 3,
        name: "2024 Mercedes-Benz",
        offerActive : "Inactive",
        dealer: "Santosh mishra",
        location : "Bangalore",
        offerDate: "15 Jan 2024",
        boffer : 2400000,
        doffer: 2400000

    },
]

function OffersList() {
    return (
        <div>
            {offerData.map((itm)=> <OfferCard key={itm.id} name={itm.name} offerDate={itm.offerDate} dealer={itm.dealer} doffer={itm.doffer} boffer={itm.boffer} location={itm.location} offerActive={itm.offerActive} />)}
        </div>
    )
}
export default OffersList