import Layout from '../components/Layout'
import "tailwindcss/tailwind.css"


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="w-full m-auto">
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp
