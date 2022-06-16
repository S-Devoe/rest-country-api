import Header from "../components/Header";

function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
export default Layout;
