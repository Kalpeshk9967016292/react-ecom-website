import { Outlet } from "react-router";
import PageHeader from "../components/layout/Header/PageHeader";
import { Header, TopHeader, TopSearch } from "../components/layout/Header";
import Footer from "../components/layout/Footer/Footer";
import { useMatches } from "react";

function AppRoutes({ withPageHeader = false }) {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
<<<<<<< Updated upstream

  const title = currentMatch?.route?.title;
=======
  const title = currentMatch?.handle?.title ?? currentMatch?.route?.title;
>>>>>>> Stashed changes

  return (
    <>
      <TopHeader />
      <Header />
      <TopSearch />
      {withPageHeader && <PageHeader title={title} />}
      <Outlet />
      <Footer />
    </>
  );
}

export default AppRoutes;
