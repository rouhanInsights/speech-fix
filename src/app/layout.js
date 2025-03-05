import Navbar from "../components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
    <html>
      <body>
      <Navbar />
        {children}
      </body>
    </html>
    </>
  );
}
