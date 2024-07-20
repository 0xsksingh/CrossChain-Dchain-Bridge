import { WarpCoreConfig } from '@hyperlane-xyz/sdk';
import { TokenStandard } from '@hyperlane-xyz/sdk';
// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [{
    symbol: "DUSDC",
    name: "DChain USDC",
    decimals: 18,
    chainName: "dchaintestnet",
    standard: TokenStandard.ERC20,
    addressOrDenom: "0x2AAC535db31DB35D13AECe36Ea7954A2089D55bE"
  }],
  options: {},
};
