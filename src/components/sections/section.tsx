import { Text, VStack } from "@chakra-ui/react";

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <VStack alignItems={"start"}>
      <Text>{title}</Text>
      {children}
    </VStack>
  );
};

export default Section;
