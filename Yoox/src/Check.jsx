import { Button, useColorMode } from "@chakra-ui/react";
import {MoonIcon, Icon, SunIcon} from "@chakra-ui/icons";
function Examplerh() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <header>
      <Button mr={3} bg={"transparent"} onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <Icon as={MoonIcon} />
        ) : (
          <Icon as={SunIcon}  />
        )}
      </Button>
    </header>
  );
}
export default Examplerh;
