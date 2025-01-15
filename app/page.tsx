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
            <main className="block md:grid w-full min-h-screen md:h-screen">
                {/* Mobile Header */}
                <div className="block md:hidden w-full px-4 py-8">
                    <div
                        className={clsx(
                            "w-full py-8 flex flex-col items-center justify-center",
                            "bg-white dark:bg-background text-black dark:text-white",
                            "border-indigo-500 border-2 rounded-lg"
                        )}
                    >
                        <h1 className="text-3xl font-bold mb-4 text-center px-4">
                            A wallet for every occasion.
                        </h1>
                        <p className="text-lg dark:text-gray-500 text-gray-600 text-center">
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

                {/* Desktop Grid / Mobile List */}
                <div className="flex flex-col md:grid md:grid-cols-2 w-full h-full gap-4 md:gap-0 p-4 md:p-0 md:col-start-1 md:row-start-1">
                    <div className="flex flex-col items-center justify-center p-6 md:p-0 bg-white dark:bg-background border-2 md:border-0 border-indigo-500 rounded-lg md:rounded-none md:border-r md:border-b">
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
                    <div className="flex flex-col items-center justify-center p-6 md:p-0 bg-white dark:bg-background border-2 md:border-0 border-indigo-500 rounded-lg md:rounded-none md:border-l md:border-b">
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
                    <div className="flex flex-col items-center justify-center p-6 md:p-0 bg-white dark:bg-background border-2 md:border-0 border-indigo-500 rounded-lg md:rounded-none md:border-r md:border-t">
                        <WalletAdvancedDefault />
                        <span className="text-base mt-3">
                            Token balances, buy button, integrated swaps. Zero
                            config.
                        </span>
                        <span className="text-2xl font-bold mt-1">
                            <a
                                href="https://onchainkit.xyz/wallet/wallet-island#quick-start"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 dark:hover:text-gray-300"
                            >
                                {"<WalletAdvancedDefault />"}
                            </a>
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 md:p-0 bg-white dark:bg-background border-2 md:border-0 border-indigo-500 rounded-lg md:rounded-none md:border-l md:border-t">
                        <span className="text-base mt-12">
                            An advanced wallet, draggable anywhere on the page.
                        </span>
                        <span className="text-2xl font-bold mt-1">
                            <a
                                href="https://onchainkit.xyz/wallet/wallet-island#quick-start"
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

                {/* Desktop Header */}
                <div className="hidden md:flex items-center justify-center col-start-1 row-start-1 pointer-events-none">
                    <div
                        className={clsx(
                            "w-2/3 h-1/4 flex flex-col items-center justify-center",
                            "bg-white dark:bg-background text-black dark:text-white",
                            "border-indigo-500 border-2",
                            "pointer-events-auto"
                        )}
                    >
                        <h1 className="text-6xl font-bold mb-4 text-center">
                            A wallet for every occasion.
                        </h1>
                        <p className="text-xl dark:text-gray-500 text-gray-600 text-center">
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
