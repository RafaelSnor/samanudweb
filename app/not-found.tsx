import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="page-header" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '6rem', marginBottom: '20px' }}>404</h1>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Page Not Found</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', fontSize: '1.1rem' }}>
            The page you are looking for does not exist.
          </p>
          <Link href="/" className="btn btn-primary">Go Home</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

