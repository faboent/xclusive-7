import Image from "next/image"
import Link from "next/link"

type ServiceCard = {
   id: number
   img: string
   price: string
   unit: string
   title: string
   desc: string
}

const services: ServiceCard[] = [
   { id: 1, img: "", price: "₦150", unit: "/SESSION", title: "Photography", desc: "Professional photography services for personal branding and business needs." },
   { id: 2, img: "", price: "₦400", unit: "/PROJECT", title: "Brand Strategy", desc: "Comprehensive brand development and strategic planning for entrepreneurs." },
   { id: 3, img: "", price: "₦250", unit: "/MONTH", title: "Social Media Marketing", desc: "Expert social media management and content strategy for maximum engagement." },
]

const Blog = () => {
   return (
      <div className="blog-area pd-top-115 pd-bottom-60">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-9">
                  <div className="section-title text-center">
                     <h2 className="sub-title double-line">Services Offered</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               {services.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-blog-inner style-3" style={{ background: "#fff", borderRadius: 10, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}>
                        <div className="thumb" style={{ overflow: "hidden", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                              <Image src={item.img} alt={item.title} />
                        </div>
                        <div className="details" style={{ paddingTop: 22 }}>
                           <p className="m-0" style={{ color: "#7ac943", fontWeight: 800 }}>
                              {item.price}<span style={{ color: "#8d98a5", marginLeft: 4, fontWeight: 700 }}>{item.unit}</span>
                           </p>
                           <h4 className="mt-2" style={{ fontWeight: 800 }}><Link href="/service-details">{item.title}</Link></h4>
                           <p style={{ color: "#5f6b7b" }}>{item.desc}</p>
                           <Link  href="/service-details" style={{ color: "#ff3b5c", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
                              <span>Learn More</span>
                              <i className="fa fa-angle-double-right"></i>
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Blog
