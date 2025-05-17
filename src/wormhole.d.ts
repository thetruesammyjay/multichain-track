declare module '@wormhole-foundation/sdk' {
  export type ChainName = 'ethereum' | 'solana' | 'bsc' | 'polygon' | 'avalanche' | 'arbitrum' | 'optimism';
  export type Network = 'Mainnet' | 'Testnet' | 'Devnet';

  export interface TokenId {
    chain: ChainName;
    address: string;
    symbol?: string;
  }

  export class Wormhole {
    constructor(network: Network, platforms: Record<string, any>);
    getChain(chain: ChainName): any;
  }
}

// Extend Window interface for wallet providers
interface Window {
  ethereum?: {
    request: (args: { method: string }) => Promise<string[]>;
    isMetaMask?: boolean;
  };
  solana?: {
    connect: () => Promise<{ publicKey: { toString: () => string } }>;
    isPhantom?: boolean;
  };
}