import { Outlet } from "react-router-dom";
import { Header, TopHeader, TopSearch, PageHeader, Footer } from "../components/layout";
import usePageTitle from "../hooks/usePageTitle";

function AppRoutes({ withPageHeader = false }) {
  const title = usePageTitle();

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
