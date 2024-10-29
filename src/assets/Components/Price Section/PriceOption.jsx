import SubscriptionDetails from "../Subscription/SubscriptionDetails";

const PriceOption = () => {
  const subscriptionDetails = [
    {
      id: 1,
      name: "Basic",
      price: 20,
      currency: "USD",
      features: ["Access to gym equipment", "Locker facility", "Free parking"],
    },
    {
      id: 2,
      name: "Standard",
      price: 40,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Free parking",
        "Access to group classes",
        "Personalized workout plan",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 60,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Free parking",
        "Access to group classes",
        "Personalized workout plan",
        "One personal training session per month",
        "Nutrition consultation",
      ],
    },
    {
      id: 4,
      name: "Elite",
      price: 80,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Free parking",
        "Access to group classes",
        "Unlimited personal training sessions",
        "Customized workout and nutrition plan",
        "Access to sauna and steam room",
        "Free protein shake each visit",
      ],
    },
    {
      id: 5,
      name: "VIP",
      price: 100,
      currency: "USD",
      features: [
        "All-access to gym and equipment",
        "Private locker room",
        "Reserved parking",
        "All group classes included",
        "Daily personal training sessions",
        "Customized workout and nutrition plan",
        "Access to VIP lounge, sauna, and steam room",
        "Complimentary protein shakes and snacks",
        "Priority support and booking for classes",
      ],
    },
  ];

  return (
    <div className="bg-blue-100">
      <h2 className="text-3xl text-center font-bold ">Subscription Plans:</h2>
      <div className="grid md:grid-cols-3 gap-6 rounded-lg ">
        {subscriptionDetails.map((singleDetails) => (
          <SubscriptionDetails
            key={singleDetails.id}
            singleDetails={singleDetails}
          ></SubscriptionDetails>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
