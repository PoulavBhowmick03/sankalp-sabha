import {
  Chat,
  Business,
  Footer,
  Navbar,
  Stats,
  Middle1,
  Hero,
} from "../components";
import { Identity } from "@semaphore-protocol/identity";

import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  AnonAadhaarProof,
} from "anon-aadhaar-react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../utils/style";
export default function Home() {

  const router = useRouter();
  const [anonAadhaar] = useAnonAadhaar();
  // useEffect(() => {
  //   console.log("Anon Aadhaar status: ", anonAadhaar.status);
  // }, [anonAadhaar]);
  const newIdentity = new Identity();
  console.log("Generated new identity: ", newIdentity);

  return (
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full overflow-hidden text-white'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Chat />
          <Middle1 />
          <Footer />
        </div>
      </div>
    </div>
  );
}
