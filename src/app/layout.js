import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});


export default function Layout({ children }) {
  return (
    <>
    <html>
      <body className={poppins.className}>
        <div id="root">
        {children}
        </div>
      </body>
    </html>
    </>
  );
}
