"use client";

import { base } from "wagmi/chains";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import type { ReactNode } from "react";

export function Providers(props: { children: ReactNode }) {
<<<<<<< HEAD
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      projectId={process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_ID}
      chain={base}
      config={{ appearance: { mode: 'auto' } }}
    >
      {props.children}
    </OnchainKitProvider>
  );
=======
    return (
        <OnchainKitProvider
            apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
            projectId={process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_ID}
            chain={base}
            config={{
                appearance: {
                    mode: "auto",
                },
            }}
        >
            {props.children}
        </OnchainKitProvider>
    );
>>>>>>> 8751c3b3ad3c6671ad3bbf1d598f830419acaf30
}
