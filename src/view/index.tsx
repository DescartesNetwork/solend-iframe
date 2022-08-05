import { useEffect } from 'react'
import { net, useUI } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'

import configs from 'configs'
import MainnetOnly from './mainnetOnly'

const {
  manifest: { appId },
} = configs

const View = () => {
  const { setBackground } = useUI()

  useEffect(() => {
    setBackground({ light: '#0f1118', dark: '#0f1118' })
  }, [setBackground])

  if (net !== 'mainnet') return <MainnetOnly />
  return (
    <EmbededView
      appId={appId}
      src={'https://solend.fi/dashboard/'}
      title="Solend is the autonomous interest rate machine for lending on Solana."
      wallet={window.sentre.wallet}
    />
  )
}

export default View
