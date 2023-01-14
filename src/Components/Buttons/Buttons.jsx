import { Icon } from "@iconify/react";
import { Button } from "@material-tailwind/react";

const PrimaryButton = (props) => {
  return <Button>{props.children}</Button>;
};

const BuyButton = (props) => {
  return (
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <Icon icon="el:shopping-cart" color="white" width="40" className="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
      {props.title}
    </button>
  );
};

export default PrimaryButton;
export { BuyButton };
