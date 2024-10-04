/**
 * A page component that displays a Star Wars person's details.
 *
 * It uses the person's ID from the URL parameters to fetch their details using the `fetchStarWarsPerson` function.
 * If the person is not found, an error message is shown.
 *
 * If the user navigated from the search page, the component also uses the search results passed in via `location.state`.
 * In this case, it renders the person's details from the search results. If the person is not found in the search
 * results, it fetches the person's data from the API.
 *
 * The component includes a back button that navigates back to the search page.
 *
 * @returns {JSX.Element} A JSX element displaying the person's details or an error message.
 */

import { fetchStarWarsPerson } from "../api/fetchStarWarsPerson";
import DetailsCard from "../components/details/DetailsCard";
import { useLocation, useParams } from "react-router-dom";
import BackButton from "../components/button/BackButton";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { chakra } from "@chakra-ui/react";
import { StarWarsPerson } from "../types";

const MotionBox = chakra(motion(Box));

function DetailsPage() {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { data, personName } = location.state || {};

  const {
    data: fetchedPerson,
    error,
    isLoading,
  } = useQuery<StarWarsPerson[], Error>({
    queryKey: ["starWarsPerson", id],
    queryFn: () => fetchStarWarsPerson(id as string),
    enabled: !!id && !data,
  });

  const person = data
    ? data.find((person: StarWarsPerson) => person.name === personName)
    : fetchedPerson;

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Text color="red">Error fetching person details.</Text>;
  }

  return (
    <AnimatePresence>
      <MotionBox
        key={person?.id || id}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <BackButton />
      </MotionBox>

      <MotionBox
        key={person?.id || id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        <DetailsCard
          person={person}
          searchedPersonName={personName || person?.name}
        />
      </MotionBox>
    </AnimatePresence>
  );
}

export default DetailsPage;
