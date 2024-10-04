/**
 * A ghost button with an ArrowBackIcon that, when clicked, navigates one step
 * backwards in the browser history.
 *
 * @returns {JSX.Element} The button component.
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
