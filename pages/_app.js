import { BreakpointProvider } from '../src/context/BreakpointContext'
import 'tailwindcss/tailwind.css'
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <BreakpointProvider>
      <Component {...pageProps} />
    </BreakpointProvider >
  )
}

export default MyApp
