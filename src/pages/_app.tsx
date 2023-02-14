import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { AppWrapper } from "@/state/AppWarapper";
import "@/styles/global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
    </AppWrapper>
  );
}
