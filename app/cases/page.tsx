import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Casos de Éxito | SAMANUD FIRMA',
  description: 'Explora nuestros casos de éxito y victorias legales en SAMANUD FIRMA.',
}

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Case Studies</span>
          </div>
          <h1>Case Studies</h1>
          <p>Explore our track record of successful outcomes and client victories</p>
        </div>
      </section>

      <section className="cases">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Success Stories</span>
            <h2 className="section-title">Notable Cases</h2>
            <p className="section-description">
              These cases represent just a sample of our successful outcomes for clients across various practice areas.
            </p>
          </div>
          <div className="cases-grid">
            <div className="case-card">
              <div className="case-image"></div>
              <div className="case-content">
                <span className="case-category">Corporate Law</span>
                <h3>Multi-Million Dollar M&A Transaction</h3>
                <p className="case-excerpt">
                  Successfully represented a technology company in a $250M acquisition, navigating complex regulatory 
                  requirements and negotiating favorable terms for our client.
                </p>
                <div className="case-meta">
                  <span>2023</span>
                  <span>Corporate</span>
                </div>
              </div>
            </div>
            <div className="case-card">
              <div className="case-image"></div>
              <div className="case-content">
                <span className="case-category">Real Estate</span>
                <h3>Commercial Development Approval</h3>
                <p className="case-excerpt">
                  Secured zoning approvals and necessary permits for a $50M mixed-use development project, 
                  overcoming significant regulatory hurdles and community opposition.
                </p>
                <div className="case-meta">
                  <span>2023</span>
                  <span>Real Estate</span>
                </div>
              </div>
            </div>
            <div className="case-card">
              <div className="case-image"></div>
              <div className="case-content">
                <span className="case-category">Litigation</span>
                <h3>Successful Defense Verdict</h3>
                <p className="case-excerpt">
                  Achieved a complete defense verdict in a complex commercial litigation matter, 
                  saving our client from potential liability exceeding $20M.
                </p>
                <div className="case-meta">
                  <span>2022</span>
                  <span>Litigation</span>
                </div>
              </div>
            </div>
            <div className="case-card">
              <div className="case-image"></div>
              <div className="case-content">
                <span className="case-category">Intellectual Property</span>
                <h3>Patent Infringement Victory</h3>
                <p className="case-excerpt">
                  Successfully defended a technology startup against patent infringement claims, 
                  securing a favorable settlement that allowed the company to continue operations.
                </p>
                <div className="case-meta">
                  <span>2023</span>
                  <span>IP</span>
                </div>
              </div>
            </div>
            <div className="case-card">
              <div className="case-image"></div>
              <div className="case-content">
                <span className="case-category">Family Law</span>
                <h3>Custody Case Resolution</h3>
                <p className="case-excerpt">
                  Helped a parent secure primary custody and favorable support arrangements in a complex family law matter, 
                  prioritizing the best interests of the children involved.
                </p>
                <div className="case-meta">
                  <span>2022</span>
                  <span>Family</span>
                </div>
              </div>
            </div>
            <div className="case-card">
              <div className="case-image"></div>
              <div className="case-content">
                <span className="case-category">Employment Law</span>
                <h3>Wrongful Termination Settlement</h3>
                <p className="case-excerpt">
                  Negotiated a significant settlement for an executive wrongfully terminated, 
                  achieving compensation that exceeded our client&apos;s expectations.
                </p>
                <div className="case-meta">
                  <span>2023</span>
                  <span>Employment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero" style={{ minHeight: 'auto', padding: '80px 0' }}>
        <div className="container">
          <div className="hero-content">
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Ready to Achieve Your Own Success?</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', fontSize: '1.1rem' }}>
              Let our experience work for you.
            </p>
            <Link href="/contact" className="btn btn-primary">Schedule Consultation</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

