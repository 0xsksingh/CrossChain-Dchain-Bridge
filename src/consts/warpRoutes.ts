import { WarpCoreConfig } from '@hyperlane-xyz/sdk';
import { TokenStandard } from '@hyperlane-xyz/sdk';
// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      // The ChainName of the token
      chainName: 'sepolia',
      // See https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/token/TokenStandard.ts
      standard: TokenStandard.EvmHypCollateral,
      // The token metadata (decimals, symbol, name)
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
      // The router address
      addressOrDenom: '0xF6fe2F280b67E0177fac2893Cdc80e95578448da',
      // The address of the underlying collateral token
      collateralAddressOrDenom: '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8',
      // A path to a token logo image
      logoURI: '/logos/usdc.png',
      // The list of tokens this one is connected to
      connections: [ { token: 'ethereum|dchaintestnet|0x76414c98ee9AD3F776054f16A351831b71870Ff3' } ]
    },
    {
      chainName: 'dchaintestnet',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
      addressOrDenom: '0x76414c98ee9AD3F776054f16A351831b71870Ff3',
      logoURI: '/logos/usdc.png',
      connections: [ { token: 'ethereum|sepolia|0xF6fe2F280b67E0177fac2893Cdc80e95578448da' } ]
    }
  ],
  options: {},
};
