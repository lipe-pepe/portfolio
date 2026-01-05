import { BiLogoPostgresql } from "react-icons/bi";
import TechIcon from "./techIcon";

const PostgreSQLIcon = () => {
  return (
    <TechIcon
      name="PostgreSQL"
      hoverColor="rgb(105, 158, 202)"
      icon={<BiLogoPostgresql size={"100%"} />}
    />
  );
};

export default PostgreSQLIcon;
