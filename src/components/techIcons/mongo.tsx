import { BiLogoMongodb } from "react-icons/bi";
import TechIcon from "./techIcon";

const MongoIcon = () => {
  return (
    <TechIcon
      name="MongoDB"
      hoverColor="#589636"
      icon={<BiLogoMongodb size={"100%"} />}
    />
  );
};

export default MongoIcon;
