import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import homeStyle from '../public/css/home.module.css';
import Image from 'next/image';



export default function Home() {
  return (
    <Layout>
      <div className={homeStyle.outerRow}>
        <Image className={`${homeStyle.imageCus}`} src="/images/banner-grey.jpg" layout="responsive" width={2810} height={1080} 
         alt="Your Name"/>
         
      </div>
     
      <section className={`${homeStyle.sectionabout}`}>
        <div className='row'>
          <div className="col-md-4">
            <h3 className= {`${homeStyle.heading}`}> About us</h3>
            <p>Our portfolio of Branded accessories covers all majors mobile accessory categories: protection, Power, Connectivity,
              personal Audio and Health & Wellness. Our distribution business reaches a board customer base.
            </p>
            
             <a href="#" target=""className={`${homeStyle.iconouter}`}><span className={`${homeStyle.btntext}`}>Learn More</span><span className={`${homeStyle.Arrowicon}`}>&#8594;</span></a>
           
          </div>

          <div className="col-md-4">
          <h3 className= {`${homeStyle.heading}`}> Services</h3>
            <p>Our portfolio of Branded accessories covers all majors mobile accessory categories: protection, Power, Connectivity,
              personal Audio and Health & Wellness. Our distribution business reaches a board customer base.
            </p>
            
             <a href="#" target=""className={`${homeStyle.iconouter}`}><span className={`${homeStyle.btntext}`}>Learn More</span><span className={`${homeStyle.Arrowicon}`}>&#8594;</span></a>
          </div>
          <div className="col-md-4">
            <h3 className={`${homeStyle.heading}`}> Sustainability</h3>
            <p className={`p-0`}>Our portfolio of Branded accessories covers all majors mobile accessory categories: protection, Power, Connectivity,
              personal Audio and Health & Wellness. Our distribution business reaches a board customer base.
            </p>
            
             <a href="#" target=""className={`${homeStyle.iconouter}`}><span className={`${homeStyle.btntext}`}>Learn More</span><span className={`${homeStyle.Arrowicon}`}>&#8594;</span></a>
          </div>

        </div>


      </section>
   


  <section className={`${homeStyle.sectionOuter}`}>
    <div className="">
      <div  className={`  ${homeStyle.rowOuter}`}>
      <div className={` ${homeStyle.blockVisual}`}>
         <div className={`${homeStyle.blockVisualinner}`}>
         <Image className={`${homeStyle.imageCus}`} src="/images/img-2.png" layout="responsive" width={900} height={700}alt="Your Name"/>
         </div>
       </div>
      <div className={` ${homeStyle.blockContent}`}>
         <div className={` ${homeStyle.blockContentinner}`}>
          <h2 className={`block__title title--xl font--primary ${homeStyle.contentHeading}`}>We Innovate</h2>
          <ul className={`${homeStyle.deisg}`}>
            <li>World's leading partner for industrial desig</li>
            <li>Subsidiary in asia overseas sourcing and production</li>
            <li>Professional quality control</li>
            <li>Complete range of private lable options </li>
          </ul>
          
          <div className={`block__clickable ${homeStyle.clickBtn}`}><a className={`btn btn-light rounded-pill ${homeStyle.clickBtnBtn}`} href="#"><span className="link__label">Learn more</span></a></div>
        </div>
       </div>     
       
   
      </div>
      </div>
      </section>


      <section className={`${homeStyle.sectionOuter }`} >
    <div className="">
      <div  className={`  ${homeStyle.rowouterone}`}>
      <div className={` ${homeStyle.blockVisualone}`}>
         <div className={`${homeStyle.blockVisualinnerone}`}>
         <Image className={`${homeStyle.imageCus}`} src="/images/img-1.png" layout="responsive" width={900} height={700}alt="Your Name"/>
         </div>
       </div>
      <div className={` ${homeStyle.blockContentone}`}>
         <div className={` ${homeStyle.blockContentinnerone}`}>
          <h2 className={`block__title title--xl font--primary ${homeStyle.contentHeading}`}>We Inspire</h2>
          <ul className={`${homeStyle.deisg}`}>
            <li>New trends analysis, Rangelens,etc</li>
            <li>Go to market planning</li>
            <li>POS, tranning, 3D resources</li>
          </ul>
          
          <div className={`block__clickable ${homeStyle.clickBtn}`}><a className={`btn btn-light rounded-pill ${homeStyle.clickBtnBtn}`} href="#"><span className="link__label">Learn more</span></a></div>
        </div>
       </div>
      

       
       
   
      </div>
      </div>
      </section>


      <section className={`${homeStyle.sectionOuter}`}>
    <div className="">
      <div  className={`sm-d-grid  ${homeStyle.rowOuter}`}>
      <div className={` ${homeStyle.blockVisual}`}>
         <div className={`${homeStyle.blockVisualinner}`}>
         <Image className={`${homeStyle.imageCus}`} src="/images/img-3.png" layout="responsive" width={900} height={700}alt="Your Name"/>
         </div>
       </div>
      <div className={` ${homeStyle.blockContent}`}>
         <div className={` ${homeStyle.blockContentinner}`}>
          <h2 className={`block__title title--xl font--primary ${homeStyle.contentHeading}`}>We deliver</h2>
          <ul className={`${homeStyle.deisg}`}>
            <li>Customized logistics and distribution services</li>
            <li>Central warehouse in Germany (certified ISO 9001), fulfilment in Asia</li>
            <li>4,500 m2 for storage and packinging(scalable up to 6,500 m2)</li>
            <li>More than 27 international providers</li>
          </ul>
          
          <div className={`block__clickable ${homeStyle.clickBtn}`}><a className={`btn btn-light ${homeStyle.clickBtnBtn}`} href="#"><span className="link__label">Learn more</span></a></div>
        </div>
       </div>     
       
   
      </div>
      </div>
      </section >


      <section className={`${homeStyle.create}`}>
        <div className="row">
          <h2 className={`${homeStyle.createheading}`}>We Create<hr className={`${homeStyle.createhr}`}></hr></h2>
          
          <p className={`text-center  mb-5 ${homeStyle.createp}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className="col-md-6 p-0">
          <Image className={`${homeStyle.imageCus}`} src="/images/img-5.png" layout="responsive" width={962} height={959}alt="Your Name"/>
          </div>
          <div className="col-md-3 p-0">
          <Image className={`${homeStyle.imageCus}`} src="/images/img-6.png" layout="responsive" width={482} height={961}alt="Your Name"/>
          </div>
          <div className="col-md-3 p-0">
          <Image className={`${homeStyle.imageCus}`} src="/images/img-7.png" layout="responsive" width={482} height={961}alt="Your Name"/>
          </div>

          <div className="col-md-6 p-0">
          <Image className={`${homeStyle.imageCus}`} src="/images/img-9.png" layout="responsive" width={962} height={959}alt="Your Name"/>
          </div>
          <div className="col-md-6 p-0">
          <Image className={`${homeStyle.imageCus}`} src="/images/img-10.png" layout="responsive" width={962} height={959}alt="Your Name"/>
          </div>

          <div className="col-md-4 p-0">
          <Image className={`${homeStyle.imageCus}`} src="/images/img-12.png" layout="responsive" width={640} height={960}alt="Your Name"/>
          </div>
          <div className="col-md-4 p-0">
          <Image className={`${homeStyle.imageCus}`} src="/images/img-13.png" layout="responsive" width={640} height={960}alt="Your Name"/>
          </div>
          <div className="col-md-4 p-0">
          <Image className={`${homeStyle.imageCus}`} src="/images/img-14.png" layout="responsive" width={640} height={960}alt="Your Name"/>
          </div>

          <a href="#" target=""className={`py-4 ${homeStyle.iconouterone}`}><span className={`${homeStyle.btntextone}`}>View all brands</span><span className={`${homeStyle.Arrowiconone}`}>&#8594;</span></a>
        </div>


      </section>


      <section className={`${homeStyle.news}`}>
        <div className="row">
          <h2 className={`${homeStyle.createheading}`}>News<hr className={`${homeStyle.createhr}`}></hr></h2>
          <div className={`col-md-4 ${homeStyle.topimageouter}`}>
            <div className={`${homeStyle.topimage}`}>
               <Image className={`${homeStyle.imagenews}`} src="/images/cov-test.jpg" layout="responsive" width={1184} height={570}alt="Your Name"/>
               <a href="#" target=""className={` ${homeStyle.iconouternews}`}><span className={`${homeStyle.btntextnews}`}>Read more</span><span className={`${homeStyle.Arrowiconnews}`}>&#8594;</span></a>
            </div>
            <a href="#"><h5><strong>STRAX enters a partnership to deliver Covid-19 tests to regional government body in Europe</strong></h5></a>
            <div className={`${homeStyle.newsmeta}`}><p><strong>Company</strong> · 5 January 2022</p></div>
            <div className={`${homeStyle.newsdesc}`}><p>STRAX has partnered with a German personal protective equipment (PPE) specialist company to deliver Covid-19 tests to a regional government body in Europe. Total sales...</p></div>
            <a href="#" target=""className={`${homeStyle.iconouter}`}><span className={`${homeStyle.btntext}`}>Read More</span><span className={`${homeStyle.Arrowicon}`}>&#8594;</span></a>
          </div>

          <div className={`col-md-4 ${homeStyle.topimageouter}`}>
            <div className={`${homeStyle.topimage}`}>
               <Image className={`${homeStyle.imagenews}`} src="/images/urbanista-la.jpg" layout="responsive" width={1184} height={570}alt="Your Name"/>
               <a href="#" target=""className={` ${homeStyle.iconouternews}`}><span className={`${homeStyle.btntextnews}`}>Read more</span><span className={`${homeStyle.Arrowiconnews}`}>&#8594;</span></a>
            </div>
            <a href="#"><h5><strong>Urbanista introduces Los Angeles – Solar powered headphones with virtually infinite playtime</strong></h5></a>
            <div className={`${homeStyle.newsmeta}`}><p><strong>BRANDS</strong> · 18 April 2021</p></div>
            <div className={`${homeStyle.newsdesc}`}><p>SSTRAX subsidiary Urbanista, the Swedish lifestyle audio brand, announces Urbanista Los Angeles, the world’s first self-charging, wireless active noise cancelling headphones, powered by Powerfoyle™ solar...</p></div>
            <a href="#" target=""className={`${homeStyle.iconouter}`}><span className={`${homeStyle.btntext}`}>Read More</span><span className={`${homeStyle.Arrowicon}`}>&#8594;</span></a>
          </div>


          <div className={`col-md-4 ${homeStyle.topimageouter}`}>
            <div className={`${homeStyle.topimage}`}>
               <Image className={`${homeStyle.imagenews}`} src="/images/4ocean-header.jpg" layout="responsive" width={1184} height={570}alt="Your Name"/>
               <a href="#" target=""className={` ${homeStyle.iconouternews}`}><span className={`${homeStyle.btntextnews}`}>Read more</span><span className={`${homeStyle.Arrowiconnews}`}>&#8594;</span></a>
            </div>
            <a href="#"><h5><strong>Collaboration with 4ocean to support the development and manufacturing of 4ocean signature iPhone cases</strong></h5></a>
            <div className={`${homeStyle.newsmeta}`}><p><strong>Company</strong> · 3 December 2020</p></div>
            <div className={`${homeStyle.newsdesc}`}><p>STRAX is pleased to announce a collaboration with 4ocean, a purpose driven business with the mission to end the ocean plastic crisis and support the...</p></div>
            <a href="#" target=""className={`${homeStyle.iconouter}`}><span className={`${homeStyle.btntext}`}>Read More</span><span className={`${homeStyle.Arrowicon}`}>&#8594;</span></a>
          </div>

          <a href="#" target=""className={`py-4 ${homeStyle.iconouterone}`}><span className={`${homeStyle.btntextone}`}>Read More News</span><span className={`${homeStyle.Arrowiconone}`}>&#8594;</span></a>
        </div>
      </section>



      


      
     
      {/* <h1 className={homeStyle.title}>Home Page</h1> */}
      {/* <h2>
        <Link href="/contact">
          <a>Contact us page</a>
        </Link>
      </h2> */}
    </Layout>
  )
}