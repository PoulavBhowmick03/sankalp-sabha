import React, { useState, useEffect } from "react";
import "../app/App.css";
import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
} from "anon-aadhaar-react";
import { AnonAadhaarPCD, exportCallDataGroth16FromPCD } from "anon-aadhaar-pcd";
import { ethers } from "ethers";
import pro_voting from "../app/abi/pro_voting.json";
import { Identity } from "@semaphore-protocol/identity";
import { useRouter, useSearchParams } from "next/navigation";
function Anon() {
  const [appState, setAppState] = useState("");
  const [pcd, setPcd] = useState();
  const [identity, setIdentity] = useState();
  const [anonAadhaar] = useAnonAadhaar();
  const router = useRouter();
  const params = useSearchParams();

  let zk3contract = null;
  let signer = null;
  const provider = new ethers.providers.Web3Provider(window.ethereum); // Change this line

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
    if (anonAadhaar.status === "logged-in") {
      console.log("Anon Aadhaar pcd: ", anonAadhaar.pcd);
      setPcd(anonAadhaar.pcd);
    }
  }, [anonAadhaar]);

  useEffect(() => {
    if (!identity) {
      const newIdentity = new Identity();
      setIdentity(newIdentity);
      console.log("Generated new identity: ", newIdentity);
    }
  }, [identity]);

  const register = async () => {
    setAppState("registering");
    signer = await provider.getSigner();
    console.log(signer);
    zk3contract = new ethers.Contract(
      "0x4B6DF5B2399d7ae2e87b610db70A106Bd856617f",
      pro_voting,
      signer
    );
    const { a, b, c, Input } = await exportCallDataGroth16FromPCD(pcd);
    const tx = await zk3contract.register(identity?.commitment, a, b, c, Input);
    await tx.wait();
    setAppState("registered");
  };

  return (
    <div className='App'>
      <LogInWithAnonAadhaar />
      <div>
        {anonAadhaar?.status === "logged-in" && appState !== "registered" && (
          <>
            <p>✅ Proof is valid</p>
            <p>Got your Aadhaar Identity Proof</p>
            <>Welcome anon!</>
            <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)} />
            <button onClick={register}>Register for Voting</button>
          </>
        )}

        {appState === "registered" && (
          <>
            <p>✅ Registered for voting</p>
            <p>✅ Your identity is registered</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Anon;
