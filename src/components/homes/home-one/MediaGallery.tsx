import Image from "next/image"
import Link from "next/link"

const mediaItems = [
   { id: 1, src: "/assets/banner/1.webp", title: "Showcase One" },
   { id: 2, src: "/assets/banner/2.webp", title: "Showcase Two" },
   { id: 3, src: "/assets/banner/3.webp", title: "Showcase Three" },
   { id: 4, src: "/assets/banner/4.webp", title: "Showcase Four" },
   { id: 5, src: "/assets/banner/5.webp", title: "Showcase Five" },
   { id: 6, src: "/assets/banner/6.webp", title: "Showcase Six" },
]

const MediaGallery = () => {
   return (
      <div className="project-area pd-top-115 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-9">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-line">Media Gallery</h5>
                     <h2 className="title">Explore Our Recent Media</h2>
                     <p className="content">Curated visuals from our latest work and events.</p>
                  </div>
               </div>
            </div>

            <div className="row">
               {mediaItems.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                     <div className="single-project-inner style-two">
                        <div className="thumb" style={{ position: "relative", height: 420 }}>
                           <Image src={item.src} alt={item.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        {/* <div className="details-wrap">
                           <h3><Link href="#">{item.title}</Link></h3>
                           <Link href="#">View Item <i className="fas fa-arrow-right"></i></Link>
                        </div> */}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default MediaGallery


