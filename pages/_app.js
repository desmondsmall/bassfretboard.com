import 'tailwindcss/tailwind.css'
import '../styles/main.css'
import { BreakpointWrapper } from '../lib/context/BreakpointContext'

function MyApp({ Component, pageProps }) {
  return (
    <BreakpointWrapper>
      <Component {...pageProps} />
    </BreakpointWrapper >
  )
}

export default MyApp
