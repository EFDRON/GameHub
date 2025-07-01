import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { type Platform } from "../hooks/usePlatform";
import platforms from "../data/platforms";
interface Props {
  selectedPlatform: number | null;
  handlePlatformSelect: (platfrom: Platform) => void;
}

const PlatformSelector = ({
  handlePlatformSelect,
  selectedPlatform,
}: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform
          ? platforms.find((item) => item.id === selectedPlatform)?.name
          : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => handlePlatformSelect(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
