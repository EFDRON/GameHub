import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
const SortSelector = () => (
  <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      Order By : Platform
    </MenuButton>
    <MenuList>
      <MenuItem>Option 1</MenuItem>
      <MenuItem>Option 2</MenuItem>
      <MenuItem>Option 3</MenuItem>
      <MenuItem>Option 4</MenuItem>
      <MenuItem>Option 5</MenuItem>
    </MenuList>
  </Menu>
);

export default SortSelector;
