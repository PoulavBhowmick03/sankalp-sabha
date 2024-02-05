import "@/styles/globals.css";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
const app_id = "1309218895344287769287806253054282764963406675968";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AnonAadhaarProvider _useTestAadhaar={true} _fetchArtifactsFromServer={true}>
    <Component {...pageProps} />
    </AnonAadhaarProvider>
  );
}
