import PropTypes from "prop-types";

const SubscriptionDetails = ({ singleDetails }) => {
  const { name, price, features } = singleDetails;

  console.log(features);
  return (
    <div>
      <div className="bg-blue-400 p-4 rounded-lg text-white flex flex-col items-stretch">
        <h3>
          <span className="text-7xl font-semibold">{price}</span>
          <span className="text-3xl">/mon</span>
        </h3>
        <h4 className="text-4xl font-semibold text-gray-600">{name}</h4>
        <ol className="mt-2">
          <p>{features}</p>
        </ol>
        <div className="flex-grow ">
          <button className="btn bg-green-500 rounded-lg hover:bg-green-900 w-full my-2">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};
SubscriptionDetails.propTypes = {
  singleDetails: PropTypes.object,
};

export default SubscriptionDetails;
