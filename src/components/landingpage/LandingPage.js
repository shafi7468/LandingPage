import React from 'react';



export default function LandingPage() {
  return (
    <>
   
    <nav className="navbar navbar-expand-lg bg-black text-uppercase fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="#page-top">

                <img
            style={{ width: "100%",height:"100px" }}
            alt="ss"
            src="/images/Home.png"
            className="img-responsive"
          
          />
            </a>
            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                   
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#home">Home</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#work">Work</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    
    


    <div style={{backgroundColor: '#000', padding: '107px 0 0 0'}} id="home">
      

        <div className="img-wrapper">
            <img src="images/Home.png" width="100%" alt=''/>
            <div className="img-overlay">                
                <a className="btn btn-md btn-warning" href="https://www.behance.net/saiamudala/">Browse Projects</a>
            </div>
        </div>


    </div>

  
    <section className="page-section bg-black text-white mb-0" id="about">
        <div className="container">
           
            <h4 className="text-uppercase" style={{textAlign: 'center'}}>About</h4>
            <br />
         
            <div className="row">
                <div className="col-lg-5">
                    <p className="lead" style={{padding: '20px'}}>My name is Sai Teja.I find joy in exploring new ideas and challenges.I'm Constantly seeking opportunities for personal and professional growth. I am a Graphic designer & UI/UX designer. I am continually educationg myselfwith workshop and practice. I am dedicated and enthusiastic individual who strives to make a positive impact in the world.</p>
                </div>
                <div className="col-lg-7 me-auto">
                    Photoshop
                    <div className="row">
                        <div className="col-11">
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

                            </div>
                        </div>
                        <div className="col-1" style={{margin: '-4px!important'}}>95%</div>

                    </div>
                    Illustrator
                     <div className="row">
                         <div className="col-11">
                             <div className="progress">
                                 <div className="progress-bar bg-info" role="progressbar" style={{width: '98%'}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                             </div>
                         </div>
                         <div className="col-1" style={{margin: '-4px!important'}}>98%</div>
                     </div>
                    Indesign
                     <div className="row">
                         <div className="col-11">
                             <div className="progress">
                                 <div className="progress-bar bg-gradient" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                             </div>
                         </div>
                         <div className="col-1" style={{margin: '-4px!important'}}>90%</div>
                     </div>
                    Coreldraw
                      <div className="row">
                          <div className="col-11">
                              <div className="progress">
                                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                          <div className="col-1" style={{margin: '-4px!important'}}>85%</div>
                      </div>
                    Adobe XD
                      <div className="row">
                          <div className="col-11">
                              <div className="progress">
                                  <div className="progress-bar bg-dark" role="progressbar" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                          <div className="col-1" style={{margin: '-4px!important'}}>85%</div>
                      </div>
                    Figma
                    <div className="row">
                        <div className="col-11">
                            <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: '95%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-1" style={{margin: '-4px!important'}}>85%</div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <h4 className="text-uppercase" style={{textAlign: 'center'}}>What I do</h4>
            <br />
            <div className="row justify-content-center">
               
                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                        <img src="/images/whatido1.png" className="img-fluid" style={{paddingTop: '20px'}} alt=''/>
                    </div>
                </div>
             
                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                        <img src="/images/whatido2.png" className="img-fluid" style={{paddingTop: '20px'}} alt=''/>
                    </div>
                </div>
               
                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                        <img src="/images/whatido3.png" className="img-fluid" style={{paddingTop: '20px'}} alt=''/>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">

                        <img src="/images/whatido4.png" className="img-fluid" style={{paddingTop: '20px'}} alt=''/>
                    </div>
                </div>

            </div>

        </div>
    </section>
   

   
   
    </>
  )
}


