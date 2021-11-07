import 'tailwindcss/tailwind.css'
import '../styles/main.css'
import { BreakpointProvider } from '../lib/context/BreakpointContext'

function MyApp({ Component, pageProps }) {
  return (
    <BreakpointProvider>
      <Component {...pageProps} />
    </BreakpointProvider >
  )
}

export default MyApp
