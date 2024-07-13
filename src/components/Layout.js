import Header from './Header'
import Footer from './Footer'
import FloatingSupport from './FloatingSupport'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingSupport />
    </div>
  )
}