import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  OnSearch: (searchText: string) => void;
}
const SearchInput = ({ OnSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) OnSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>

        <Input
          placeholder="Search games"
          borderRadius={20}
          variant="filled"
          ref={ref}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
