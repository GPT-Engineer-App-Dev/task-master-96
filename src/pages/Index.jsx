import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Heading, List, ListItem, IconButton, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl">Todo App</Heading>
        <HStack w="100%">
          <Input
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={addTodo} colorScheme="teal">Add</Button>
        </HStack>
        <List spacing={3} w="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center" p={2} borderWidth={1} borderRadius="md">
              <Text>{todo}</Text>
              <IconButton
                aria-label="Delete todo"
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => deleteTodo(index)}
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;