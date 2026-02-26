import { useMatches } from "react-router-dom";

// returns the title of the current matched route (from handle or route.title)
export default function usePageTitle() {
  const matches = useMatches();
  const current = matches[matches.length - 1];
  return current?.handle?.title ?? current?.route?.title;
}