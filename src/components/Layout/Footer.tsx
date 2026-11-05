import { ArrowUpRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <a className="footer-brand" href="#hero">AB<span>.</span></a>
        <p>Designed around intelligent systems.<br />Built with care in Chennai.</p>
        <div className="footer-links">
          <a href="#hero">Back to top <ArrowUpRight size={14} /></a>
          <span>© {new Date().getFullYear()} Anusha B</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
