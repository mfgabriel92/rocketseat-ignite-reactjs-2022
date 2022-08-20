import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Input } from "@components/Input";
import { TransactionsContext } from "@contexts/TransactionsContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewTransactionInput, newTransactionSchema } from "@schemas/newTransaction";
import { ArrowCircleDown, ArrowCircleUp, CheckCircle } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";

interface NewTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function NewTransactionModal({ isOpen, onClose }: NewTransactionModalProps) {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createTransaction,
  );
  const { control, register, handleSubmit, reset } = useForm<NewTransactionInput>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      type: "income",
      description: "",
      amount: 0,
      category: "",
    },
  });

  async function handleAddTransaction(data: NewTransactionInput) {
    createTransaction(data);
    reset();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <Box as="form" onSubmit={handleSubmit(handleAddTransaction)}>
        <ModalContent backgroundColor="gray.800" borderWidth="1px" borderColor="green.500">
          <ModalHeader>New transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection="column" gap="0.5rem">
              <Controller
                control={control}
                name="type"
                render={({ field }) => (
                  <Flex width="full" flex="1" gap="1rem">
                    <Button
                      flex="1"
                      height="3rem"
                      backgroundColor={field.value === "income" ? "green.500" : "gray.700"}
                      leftIcon={<Icon as={ArrowCircleUp} fontSize="lg" />}
                      fontSize="xs"
                      onClick={() => field.onChange("income")}
                      _hover={{ backgroundColor: "green.500" }}
                    >
                      Income
                    </Button>
                    <Button
                      flex="1"
                      height="3rem"
                      backgroundColor={field.value === "outcome" ? "red.500" : "gray.700"}
                      leftIcon={<Icon as={ArrowCircleDown} fontSize="lg" />}
                      fontSize="xs"
                      onClick={() => field.onChange("outcome")}
                      _hover={{ backgroundColor: "red.500" }}
                    >
                      Outcome
                    </Button>
                  </Flex>
                )}
              />
              <Divider borderColor="gray.600" marginY="0.5rem" />
              <Input placeholder="Description" {...register("description")} />
              <Input
                type="number"
                placeholder="Price"
                {...register("amount", { valueAsNumber: true })}
                min={1}
              />
              <Input placeholder="Category" {...register("category")} />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="green" leftIcon={<Icon as={CheckCircle} />}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Box>
    </Modal>
  );
}

export { NewTransactionModal };
