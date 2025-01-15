# OnchainKit Wallet Island Demo

![wi-demo](https://github.com/user-attachments/assets/5ae85a96-75a1-45aa-bd13-351bcdac6bcb)

This demo application showcases the integration of [@coinbase/onchainkit](https://docs.onchainkit.com) wallet components in a Next.js application. It demonstrates how to implement wallet connectivity, user identity display, and wallet-related UI components using OnchainKit's pre-built components.

## Features

- **Wallet Connection**: Implements a Connect Wallet button with avatar and name display
- **Identity Components**: Demonstrates the use of OnchainKit's identity components:
  - Avatar display
  - Name resolution
  - ETH address display
  - ETH balance display
  - Social links integration
- **Wallet Dropdown**: Shows implementation of a full-featured wallet dropdown menu with:
  - User identity information
  - Wallet link
  - Fund management
  - Disconnect functionality

## Tech Stack

- [Next.js 14](https://nextjs.org)
- [@coinbase/onchainkit](https://docs.onchainkit.com) - Base UI components
- [wagmi](https://wagmi.sh/) - React Hooks for Ethereum
- [viem](https://viem.sh/) - TypeScript Interface for Ethereum
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Package manager (npm, yarn, pnpm, or bun)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage Example

The main wallet component implementation can be found in `app/WalletDemo.tsx`:

```typescript
import { Wallet, ConnectWallet } from "@coinbase/onchainkit/wallet";
import { useAccount } from "wagmi";

export function WalletDemo() {
  const { address } = useAccount();
  return (
    <Wallet>
      <ConnectWallet text="Connect Wallet">
        {/* Wallet implementation */}
      </ConnectWallet>
      {/* Additional wallet components */}
    </Wallet>
  );
}
```

## Learn More

- [OnchainKit Documentation](https://docs.onchainkit.com) - Learn about OnchainKit features and components
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [wagmi Documentation](https://wagmi.sh/) - Learn about wagmi hooks and utilities
- [viem Documentation](https://viem.sh/) - Learn about viem's Ethereum interface

## License

This project is MIT licensed.
