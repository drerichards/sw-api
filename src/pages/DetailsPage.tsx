/**
 * It fetches the person data from the SWAPI API if the person is not provided
 * in the state from the search page.
 *
 * The page renders a `DetailsCard` and a `BackButton` component.
 *
 * If the person is not found or fetching fails, it renders an error message.
 */

import { fetchStarWarsPerson } from "../api/fetchStarWarsPerson";
import LoadingSpinner from "components/spinner/LoadingSpinner";
import { useFetchFilmTitles } from "hooks/useFetchFilmTitles";
import { StyledErrorText } from "./styled/SearchPage.styled";
import DetailsCard from "../components/details/DetailsCard";
import { useLocation, useParams } from "react-router-dom";
import BackButton from "../components/button/BackButton";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { chakra } from "@chakra-ui/react";
import { StarWarsPerson } from "../types";
import { Box } from "@chakra-ui/react";

const MotionBox = chakra(motion(Box));

function DetailsPage() {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { personName, data } = location.state || {};

  const {
    data: fetchedPerson,
    isLoading,
    error,
  } = useQuery<StarWarsPerson[], Error>({
    queryKey: ["starWarsPerson", id],
    queryFn: () => fetchStarWarsPerson(personName),
    enabled: !!id && !data, // Only fetches when id exists but data is not provided from search
  });

  // When the user navigates from search (with data) or
  // When user directly visits the details page (will fetch person from API)
  const person = data || fetchedPerson?.[0];

  const {
    fetchAndAddFilmTitles,
    isLoading: isLoadingFilms,
    filmError,
  } = useFetchFilmTitles(person);

  // Fetch film titles when the person is available
  if (person && !person.filmTitles?.length && !isLoadingFilms) {
    fetchAndAddFilmTitles();
  }

  if (isLoading || isLoadingFilms) {
    return <LoadingSpinner />;
  }

  if (error || filmError) {
    return <StyledErrorText>{error?.message || filmError}</StyledErrorText>;
  }

  return (
    <AnimatePresence>
      <MotionBox
        key="backButton"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <BackButton />
      </MotionBox>

      <MotionBox
        key="detailsCard"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        <DetailsCard person={person} />
      </MotionBox>
    </AnimatePresence>
  );
}

export default DetailsPage;
