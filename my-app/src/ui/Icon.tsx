import { FC, ReactElement, ComponentType } from "react";
import { IconType } from "react-icons";

interface IProps extends IconType {
  Icon: IconType;
}

const IconComponent: FC<IProps> = ({ Icon, ...props }): ReactElement => {
  return (
    <span className="h-[30px] flex items-center justify-center w-[30px] rounded-full bg-gray-500">
      <Icon {...props} />
    </span>
  );
};

export default IconComponent;
