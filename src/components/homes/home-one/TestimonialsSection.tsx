import Image from "next/image"

type Testimonial = {
   id: number
   img: string
   name: string
   role: string
   quote: string
}

const testimonials: Testimonial[] = [
   { id: 1, img: "/assets/testimonial/1.webp", name: "Ada Lovelace", role: "Founder, Brandify", quote: "They transformed our online presence. Engagement grew and conversions followed." },
   { id: 2, img: "/assets/testimonial/2.webp", name: "Sam Ade", role: "Creator", quote: "Clear strategy, great execution. The team is creative and dependable." },
   { id: 3, img: "/assets/testimonial/3.webp", name: "Ifeoma K.", role: "Entrepreneur", quote: "From visuals to messaging, everything now feels on-brand and consistent." },
]

const TestimonialsSection = () => {
   return (
      <div className="pd-top-115 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-9">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-line">Testimonials</h5>
                     <h2 className="title">What Clients Say</h2>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {testimonials.map((t) => (
                  <div key={t.id} className="col-lg-4 col-md-6 mb-4">
                     <div className="single-testimonial-inner text-center" style={{ background: "#fff", borderRadius: 10, padding: 28, boxShadow: "0 12px 30px rgba(0,0,0,0.08)", height: "100%", display: "flex", flexDirection: "column" }}>
                        <div className="thumb mb-3" style={{ width: 90, height: 90, borderRadius: "50%", overflow: "hidden", margin: "0 auto" }}>
                           <Image src={t.img} alt={t.name} width={90} height={90} style={{ objectFit: "cover" }} />
                        </div>
                        <p style={{ color: "#5f6b7b", marginBottom: "auto" }}>“{t.quote}”</p>
                        <h5 className="mt-3" style={{ fontWeight: 800 }}>{t.name}</h5>
                        <span style={{ color: "#8d98a5" }}>{t.role}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default TestimonialsSection


