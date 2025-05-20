# Xport - Cross-Chain NFT Trading Platform

Xport is a modern web application that enables seamless cross-chain NFT purchases, allowing users to buy Solana NFTs using Ethereum USDC.

## Features

- **Cross-Chain Bridging**: Bridge USDC from Ethereum to Solana using Wormhole
- **NFT Marketplace Integration**: Purchase NFTs directly from Magic Eden
- **Multi-Wallet Support**: Connect both Ethereum (MetaMask) and Solana (Phantom) wallets
- **Real-Time Transaction Tracking**: Monitor bridge and purchase status with WormholeScan integration
- **User Notifications**: Receive alerts when NFTs are successfully delivered

## Prerequisites

- Node.js (v18 or higher)
- MetaMask wallet extension
- Phantom wallet extension
- Test USDC on Ethereum Sepolia testnet
- Some SOL on Solana devnet for transaction fees

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the provided local URL

## Usage Flow

1. **Connect Wallets**
   - Click "Connect Wallets" to link both your Ethereum and Solana wallets
   - Approve the connection requests in your wallet extensions

2. **Select NFT**
   - Browse available NFTs in the Magic Eden marketplace section
   - Choose an NFT to purchase

3. **Bridge & Purchase**
   - Click "Purchase NFT" to initiate the transaction
   - Approve the USDC transfer in MetaMask
   - Wait for the bridging process to complete
   - Confirm the NFT purchase transaction in Phantom

4. **Confirmation**
   - Receive a notification when your NFT arrives
   - View transaction details on WormholeScan
   - Check your Phantom wallet for the new NFT

## Environment Setup

Create a `.env` file with the following variables:
```env
VITE_MAGIC_EDEN_API_KEY=your_api_key
VITE_INFURA_API_KEY=your_infura_key
```

## Development

The project uses:
- React with TypeScript
- Vite for development and building
- Tailwind CSS for styling
- Wormhole SDK for cross-chain operations
- Magic Eden API for NFT interactions

## Testing

The application is configured to work with:
- Ethereum Sepolia testnet
- Solana devnet
- Wormhole testnet
- Magic Eden devnet API

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT License - see LICENSE file for details

## Contact Us
- **X (Twitter):** [@thatbwoysammyj](https://x.com/thatbwoysammyj)  
- **Telegram:** [t.me/sammyjayisthename](https://t.me/sammyjayisthename)  
- **Email:** [thetruesammyjay@gmail.com](mailto:thetruesammyjay@gmail.com)
