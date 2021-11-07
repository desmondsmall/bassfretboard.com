import 'tailwindcss/tailwind.css'
import '../styles/main.css'
import { BreakpointProvider } from '../src/context/BreakpointContext'

function MyApp({ Component, pageProps }) {
  return (
    <BreakpointProvider>
      <Component {...pageProps} />
    </BreakpointProvider >
  )
}

export default MyApp
