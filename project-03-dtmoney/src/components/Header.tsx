import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { PlusCircle } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
  onOpen: () => void;
}

function Header({ onOpen }: HeaderProps) {
  return (
    <Box as="header" backgroundColor="gray.900" paddingTop="2.5rem" paddingBottom="7.5rem">
      <Flex
        width="full"
        maxWidth="1180px"
        margin="auto"
        paddingY="1.5rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        <Button
          colorScheme="green"
          leftIcon={<Icon as={PlusCircle} fontSize="1.125rem" />}
          onClick={onOpen}
        >
          New transaction
        </Button>
      </Flex>
    </Box>
  );
}

export { Header };
