import Footer from "@/components/Footer/Footer";
import { UserProvider } from "@/contexts/userContext";
import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import StudentNavbar from "@/components/StudentNavbar/StudentNavbar";
import ProtectedRoute from '@/components/protectedRoute'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const theme = createTheme({
    // palette: {
    //   primary: {
    //     main: "#a6432d",
    //   },
    //   secondary: {
    //     main: "#f5f5f5",
    //   },
    // },
    typography: {
      allVariants: {
        fontFamily: "Mulish",
        textTransform: "none",
      },
    },
  });
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-1JV51DYBDB`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1JV51DYBDB', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <ThemeProvider theme={theme}>
        <Toaster position="top-right" />
        <UserProvider>
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <ProtectedRoute>
            <StudentNavbar />
            <Component {...pageProps} />
            <Footer />
            </ProtectedRoute>
          </div>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}
