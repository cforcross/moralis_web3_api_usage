import { Box } from "@chakra-ui/react";

export default function CustomContainer({ children }) {
  return (
    <Box
      bg="white"
      width="full"
      px="20"
      py="10"
      height="full"
      rounded="lg"
      shadow="lg"
    >
      {children}
    </Box>
  );
}
