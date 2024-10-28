const SubscriptionDetails = ({ singleDetails }) => {
  const { id, name, price, currency, features } = singleDetails;
  console.log(singleDetails);
  return (
    <div>
      <div>
        <h3>
          <span className="text-5xl font-semibold">
            {price}
            {currency}
          </span>
          <span className="text-3xl">/mon</span>
        </h3>
        <h4 className="text-2xl">{name}</h4>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
