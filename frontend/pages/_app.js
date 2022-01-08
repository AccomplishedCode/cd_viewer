import Page from "../components/Page";
import { PreviewStateProvider } from "../lib/preview";

function MyApp({ Component, pageProps }) {
  return (
    <PreviewStateProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </PreviewStateProvider>
  );
}

export default MyApp;
