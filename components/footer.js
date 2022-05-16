import Head from 'next/head';
import Image from 'next/image';
import footerStyle from '../public/css/footer.module.css';
import { Container, Nav, Navbar, NavDropdown,Button,fluid,svg,span } from 'react-bootstrap';


export default function Footer() {
  return (
    <div>
       <footer className={` ${footerStyle.FooterCustom}`}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Powered by{' '}
          Strax */}
          <div className="row">
            <div className={`col-md-3 ${footerStyle.footNavOuter}`}>
              <strong>Own Brands</strong>
            <ul className={`${footerStyle.footNav}`}>
              <li><a href="https://www.strax.com/brands/urbanista/" target=""className={`${footerStyle.iconouter}`}><span>Urbanista</span> <span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
               <li><a href="https://www.strax.com/brands/clckr/" target=""className={`${footerStyle.iconouter}`}><span>Clckr</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                <li><a href="https://www.strax.com/brands/richmond-finch/" target=""className={`${footerStyle.iconouter}`}><span>Richmond &amp; Finch</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                 <li><a href="https://www.strax.com/brands/xqisit/" target=""className={`${footerStyle.iconouter}`}><span>Xqisit</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                  <li><a href="https://www.strax.com/brands/planet-buddies/" target=""className={`${footerStyle.iconouter}`}><span>Planet Buddies</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                   <li><a href="https://www.strax.com/brands/avo/" target=""className={`${footerStyle.iconouter}`}><span>Avo+</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                 <li><a href="https://www.strax.com/brands/thor-glass/" target=""className={`${footerStyle.iconouter}`}><span>Thor Glass</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                <li><a href="https://www.strax.com/brands/grell/" target=""className={`${footerStyle.iconouter}`}><span>grell</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
               <li><a href="https://www.strax.com/brands/dottir/" target=""className={`${footerStyle.iconouter}`}><span>Dóttir</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
            </ul>
            </div>

            <div className={`col-md-3 ${footerStyle.footNavOuter}`}>
            <strong>Company</strong>
            <ul className={`${footerStyle.footNav}`}>
                <li><a href="https://www.strax.com/about/" target=""className={`${footerStyle.iconouter}`}><span>About us</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                 <li><a href="http://investors.strax.com/?lang=en" target="_blank" className={`${footerStyle.iconouter}`}><span>Investors</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                  <li><a href="https://www.linkedin.com/company/strax/" target="_blank" className={`${footerStyle.iconouter}`}><span>Careers</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                    <li><a href="https://www.strax.com/wp-content/uploads/2020/11/strax-code-of-conduct.pdf" target=""className={`${footerStyle.iconouter}`}><span>Corporate Behaviour</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                  <li><a href="https://www.strax.com/wp-content/uploads/2021/06/strax-2020-sustainability-report-cop.pdf" target=""className={`${footerStyle.iconouter}`}><span>Sustainability</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                 <li><a href="https://www.strax.com/compliance/" target=""className={`${footerStyle.iconouter}`}><span>Compliance</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                <li><a href="https://www.strax.com/media-brand/" target=""className={`${footerStyle.iconouter}`}><span>Media &amp; Brand</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
            </ul>
            </div>
            <div className={`col-md-3 ${footerStyle.footNavOuter}`}>
             <strong>Web Shop</strong>
             <ul className={`${footerStyle.footNav}`}>
               <li><a href="https://shop.strax.com/" target="_blank" className={`${footerStyle.iconouter}`}><span>Web Shop</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
             </ul>
             <strong>Legal</strong>
             <ul className={`${footerStyle.footNav}`}>
               <li><a href="https://www.strax.com/terms-conditions/" target=""className={`${footerStyle.iconouter}`}><span>Terms &amp; conditions</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
                <li><a href="https://www.strax.com/strax-policies/" target=""className={`${footerStyle.iconouter}`}><span>Legal notice</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
               <li><a href="https://www.strax.com/strax-policies#data-protection" target=""className={`${footerStyle.iconouter}`}><span>Data protection</span><span className={`${footerStyle.Arrowicon}`}>&#8594;</span></a></li>
             </ul>

            </div>
            <div className={`col-md-3 ${footerStyle.footNavOuter}`}>
            <p className={`${footerStyle.stinfo}`}>STRAX Germany GmbH<br></br>Belgische Allee 52 + 54<br></br>53842 Troisdorf<br></br>Germany<br></br>+49 (0) 2241 951270<br></br>info@strax.com</p>   
            <Image src="/images/logo-strax-footer.png" height={35} // Desired size with correct aspect ratio
               width={150} // Desired size with correct aspect ratio
                alt="Your Name"/>
              
            </div>
            </div>
            <div className={`row border-top border-secondary pt-4 ${footerStyle.row}`}>
            <div className={`col-md-6 ${footerStyle.socialMedia}`} >
                 <ul className={`${footerStyle.socialMediaOut}`}>
                    <li><a href='#'><Image src="/images/icon-social-fb.png" width={100} height={100} alt="Your Name"/></a></li>
                     <li><a href='#'><Image src="/images/icon-social-ig.png" width={100} height={100}alt="Your Name"/></a></li>
                     <li><a href='#'><Image src="/images/icon-social-li.png" width={100} height={100}alt="Your Name"/></a></li>
                    <li><a href='#'><Image src="/images/icon-social-xi.png" width={100} height={100}alt="Your Name"/></a></li>
                 </ul>
            </div>
            <div className={`col-md-6 text-align-right ${footerStyle.copyRight}`} >
             <p>© 2022 Strax GmbH | All rights reserved</p>
            </div>
          </div>
        </a>
      </footer>
    </div>
  )
}
