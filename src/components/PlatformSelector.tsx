import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import useLookUP from "../hooks/useLookUp";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platform);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const { data, error } = usePlatform();
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform
          ? useLookUP(selectedPlatform, "platform")
          : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => setPlatformId(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
