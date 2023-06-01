import React from 'react'

const Footer = () => {
  return (
  <>
<div className="container-fluid m-0 p-0">
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: '##f1f1f1'}}
          >
    
    <div className="container p-4 pb-0">
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">

          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
              © 2020 Copyright:
              <a href="/#"className="text-white">getnomad.cl/</a>
            </div>
          </div>
        
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a href="/#" className="btn btn-outline-light btn-floating m-1 text-white"role="button">
            
            </a>
            <a href="/#" className="btn btn-outline-light btn-floating m-1 text-white"role="button">
          
            </a>
            <a href="/#" className="btn btn-outline-light btn-floating m-1 text-white" role="button">
           
            </a>
          </div>
        </div>
      </section>
      
    </div>
    
  </footer>
 
</div>
</>

   
  )
}
 export default Footer