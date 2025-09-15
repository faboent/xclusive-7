const ContentHub = () => {
   return (
      <div style={{ background: "#f6f5fb" }} className="pd-top-90 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-9 text-center">
                  <h2 className="title" style={{ color: "#7b5cff", fontWeight: 800, letterSpacing: 1 }}>TAGLINE</h2>
                  <p className="mt-2 mb-4" style={{ color: "#ff8a3d", fontSize: 22 }}>Empowering entrepreneurs to build brands they love</p>
                  <h3 className="mb-4" style={{ fontWeight: 800 }}>Content Hub</h3>

                  <div className="d-flex justify-content-center gap-3">
                     <a href="#" aria-label="Instagram" style={{ width: 72, height: 72, borderRadius: "50%", border: "2px solid #1a1a1a", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#1a1a1a" }}>
                        <i className="fab fa-instagram" style={{ fontSize: 28 }}></i>
                     </a>
                     <a href="#" aria-label="YouTube" style={{ width: 72, height: 72, borderRadius: "50%", border: "2px solid #1a1a1a", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#1a1a1a" }}>
                        <i className="fab fa-youtube" style={{ fontSize: 28 }}></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContentHub


