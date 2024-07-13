import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import FloatingSupport from "@/components/FloatingSupport";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
      <FloatingSupport />
    </>
  );
}