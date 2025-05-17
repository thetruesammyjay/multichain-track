import { Wormhole, ChainName, TokenId } from '@wormhole-foundation/sdk';
import  EvmPlatform  from '@wormhole-foundation/sdk/evm';
import  SolanaPlatform  from '@wormhole-foundation/sdk/solana';
import { BrowserProvider } from 'ethers'; 
import { Connection } from '@solana/web3.js';

export interface BridgeParams {
  fromChain: ChainName;
  toChain: ChainName;
  tokenAddress: string;
  amount: string;
  senderAddress: string;
}

export async function initiateBridgeTransfer(params: BridgeParams): Promise<string> {
  // Validate input
  if (!params.fromChain || !params.toChain || !params.tokenAddress || !params.amount || !params.senderAddress) {
    throw new Error('Missing required bridge parameters');
  }

  try {
    // Initialize with testnet for development
    const wh = new Wormhole('Testnet', {
      evm: EvmPlatform,
      solana: SolanaPlatform
    });

    const sourceChain = wh.getChain(params.fromChain);
    const targetChain = wh.getChain(params.toChain);

    // Setup providers
    let provider;
    if (params.fromChain === 'ethereum') {
      if (!window.ethereum) throw new Error('Ethereum wallet not detected');
      provider = new BrowserProvider(window.ethereum); // Changed to BrowserProvider
    } else if (params.fromChain === 'solana') {
      provider = new Connection('https://api.testnet.solana.com');
    } else {
      throw new Error('Unsupported source chain');
    }

    const tokenId: TokenId = {
      chain: params.fromChain,
      address: params.tokenAddress,
      symbol: 'USDC'
    };

    // Create transfer
    const transfer = await sourceChain.tokenTransfer(
      tokenId,
      params.amount,
      params.senderAddress,
      targetChain.chain
    );

    // Execute transfer
    const txIds = await transfer.transfer(provider);
    if (!txIds || txIds.length === 0) {
      throw new Error('No transaction ID returned');
    }

    return txIds[0];
  } catch (error) {
    console.error('Bridge transfer failed:', error);
    throw new Error(`Bridge failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// USDC addresses for different chains
export const USDC_CONTRACTS: Record<ChainName, string> = {
  ethereum: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  solana: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  bsc: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  polygon: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  avalanche: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
  arbitrum: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
  optimism: '0x7f5c764cbc14f9669b88837ca1490cca17c31607'
};