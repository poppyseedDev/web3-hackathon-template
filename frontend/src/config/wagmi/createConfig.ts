import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, http } from 'wagmi'
import {
    mainnet,
    sepolia,
    polygon,
    optimism,
    arbitrum,
    base,
  } from 'wagmi/chains';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { env } from "@/env.mjs"

  /* New API that includes Wagmi's createConfig and replaces getDefaultWallets and connectorsForWallets */
export const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: env.NEXT_PUBLIC_WC_PROJECT_ID,
    chains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
    transports: {
    [mainnet.id]: http(),
  },
})
