import Header from './Header'
import Footer from './Footer'
import FloatingSupport from './FloatingSupport'

export default function Layout({ children }) {
  try {
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
  } catch (error) {
    console.error('Error in Layout component:', error);
    return <div>An error occurred. Please try refreshing the page.</div>;
  }
}