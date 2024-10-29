import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";
const SubscriptionDetails = ({ singleDetails }) => {
  const { name, price, features } = singleDetails;

  console.log(features);
  return (
    <div>
      <div className="bg-blue-400 p-4 h-full rounded-lg text-white flex flex-col items-stretch">
        <div className="flex-grow">
          <h3>
            <span className="text-7xl font-semibold">{price}</span>
            <span className="text-3xl">/mon</span>
          </h3>
          <h4 className="text-4xl font-semibold text-gray-600">{name}</h4>
          <ol className="mt-2">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-center gap-1">
                {" "}
                <FaCircleCheck className="text-green-600" /> {f}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <button className="btn bg-green-500 rounded-lg hover:bg-green-900 w-full my-2 p-3">
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
