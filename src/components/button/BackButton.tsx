/**
 * When clicked, it calls the `navigate` function with the argument `-1` to go
 * back to the previous page.
 *
 * @returns {JSX.Element} The rendered button.
 */

import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="xs"
      width="75px"
      onClick={() => navigate(-1)}
      leftIcon={<ArrowBackIcon />}
      marginY={2}
      padding="5"
    >
      Back
    </Button>
  );
};

export default BackButton;
