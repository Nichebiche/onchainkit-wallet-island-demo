"use client";

import clsx from "clsx";
import { WalletDemo } from "./WalletDemo";
import {
    WalletDefault,
    WalletAdvancedDefault,
    WalletIsland,
} from "@coinbase/onchainkit/wallet";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
            <main className="grid w-full h-screen">
                <div className="grid grid-cols-2 w-full h-full gap-0 col-start-1 row-start-1">
                    <div className="border-r border-b border-indigo-500 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold mb-1">
                            <a
                                href="https://onchainkit.xyz/wallet/wallet#quick-start"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 dark:hover:text-gray-300"
                            >
                                {"<WalletDefault />"}
                            </a>
                        </span>
                        <span className="text-base mb-3">
                            Simple and elegant, with zero configuration.
                        </span>
                        <WalletDefault />
                    </div>
                    <div className="border-l border-b border-indigo-500 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold mb-1">
                            Custom{" "}
                            <a
                                href="https://onchainkit.xyz/wallet/wallet#drop-in-the-wallet--components"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 dark:hover:text-gray-300"
                            >
                                {"<Wallet />"}
                            </a>
                        </span>
                        <span className="text-base mb-3">
                            Customize your wallet to cover the basics and more.
                        </span>
                        <WalletDemo />
                    </div>
                    <div className="border-r border-t border-indigo-500 flex flex-col items-center justify-center">
                        <WalletAdvancedDefault />
                        <span className="text-base mt-3">
                            Token balances, buy button, integrated swaps. Zero
                            config.
                        </span>
                        <span className="text-2xl font-bold mt-1">
                            <a
                                href="https://onchainkit.xyz/wallet/wallet-advanced#quick-start"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 dark:hover:text-gray-300"
                            >
                                {"<WalletAdvancedDefault />"}
                            </a>
                        </span>
                    </div>
                    <div className="border-l border-t border-indigo-500 flex flex-col items-center justify-center">
                        <span className="text-base mt-12">
                            An advanced wallet, draggable anywhere on the page.
                        </span>
                        <span className="text-2xl font-bold mt-1">
                            <a
                                href="https://onchainkit.xyz/wallet/wallet-advanced#quick-start"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 dark:hover:text-gray-300"
                            >
                                {"<WalletIsland />"}
                            </a>
                        </span>
                        <WalletIsland />
                    </div>
                </div>
                <div className="flex items-center justify-center col-start-1 row-start-1 pointer-events-none">
                    <div
                        className={clsx(
                            "w-2/3 h-1/4 flex flex-col items-center justify-center",
                            "bg-white dark:bg-background text-black dark:text-white",
                            "border-indigo-500 border-2",
                            "pointer-events-auto"
                        )}
                    >
                        <h1 className="text-6xl font-bold mb-4">
                            A wallet for every occasion.
                        </h1>
                        <p className="text-xl dark:text-gray-500 text-gray-600 mb-8">
                            Powered by{" "}
                            <a
                                href="https://onchainkit.xyz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 dark:hover:text-gray-300"
                            >
                                OnchainKit
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
