import { forwardRef, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ ...rest }, ref) => {
  return (
    <ChakraInput
      backgroundColor="gray.900"
      borderColor="gray.900"
      borderRadius="6px"
      _hover={{
        borderColor: "green.500",
      }}
      _focus={{
        borderColor: "green.500",
      }}
      ref={ref}
      {...rest}
    />
  );
};

export const Input = forwardRef(InputBase);
