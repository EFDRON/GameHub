import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

interface Props {
  OnSearch: (searchText: string) => void;
}
const NavBar = ({ OnSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput OnSearch={OnSearch}></SearchInput>

      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
