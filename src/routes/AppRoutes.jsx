import { Outlet } from "react-router";
import PageHeader from "../components/layout/Header/PageHeader";
import { Header, TopHeader, TopSearch } from "../components/layout/Header";
import Footer from "../components/layout/Footer/Footer";
import { useMatches } from "react";

function AppRoutesWithoutHeader() {
  return (
    <>
      <TopHeader />
      <Header />
      <TopSearch />
      <Outlet />
      <Footer />
    </>
  );
}

function AppRoutesWithHeader() {
  const matches = useMatches();
  // Get the last matched route
  const currentMatch = matches[matches.length - 1];

  const title = currentMatch?.route?.title;

  return (
    <>
      <TopHeader />
      <Header />
      <TopSearch />
      <PageHeader title={title} />
      <Outlet />
      <Footer />
    </>
  );
}

export { AppRoutesWithoutHeader, AppRoutesWithHeader };
