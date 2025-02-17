import { Text, VStack } from "@chakra-ui/react";

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <VStack alignItems={"start"} gap={12}>
      <Text
        textTransform={"uppercase"}
        letterSpacing={"widest"}
        fontSize={"xs"}
        textColor={"white.darkest"}
      >
        {title}
      </Text>
      {children}
    </VStack>
  );
};

export default Section;
