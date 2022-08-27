import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Container, IconButton } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = ({ page, setPage, disableNext }) => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <Container maxW={"container.lg"} my="5">
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          isLoading={state.isLoading ? "YES" : ""}
        />
        <Button colorScheme="blue" size="md" mx={2}>
          {page}
        </Button>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={() => setPage(page + 1)}
          disabled={disableNext}
          isLoading={state.isLoading ? "YES" : ""}
        />
      </Container>
    </div>
  );
};

export default Pagination;
