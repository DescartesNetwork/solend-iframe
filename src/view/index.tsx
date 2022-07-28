import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
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
