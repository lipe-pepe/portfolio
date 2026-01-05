import TechIcon from "./techIcon";
import { SiPrisma } from "react-icons/si";

const PrismaIcon = () => {
  return (
    <TechIcon
      name="Prisma"
      hoverColor="rgb(22, 163, 148)"
      icon={<SiPrisma size={"100%"} />}
    />
  );
};

export default PrismaIcon;
