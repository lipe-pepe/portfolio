import { RiTailwindCssFill } from "react-icons/ri";
import TechIcon from "./techIcon";

const TailwindIcon = () => {
  return (
    <TechIcon
      name="Tailwind"
      hoverColor="#00b3ff"
      icon={<RiTailwindCssFill size={"100%"} />}
    />
  );
};

export default TailwindIcon;
