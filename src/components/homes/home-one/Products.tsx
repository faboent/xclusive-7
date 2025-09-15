import Image from "next/image"
import Link from "next/link"

type ProductItem = {
   id: number
   img: string
   rating: string
   price: string
   title: string
}

const products: ProductItem[] = [
   { id: 1, img: "", rating: "4.5", price: "₦49,000", title: "Sneakers" },
   { id: 2, img: "", rating: "4.5", price: "₦19,000", title: "Wrist Watch" },
   { id: 3, img: "", rating: "4.5", price: "₦99,000", title: "Green Handbag" },
]

const Products = () => {
   return (
      <div className="blog-area pd-top-115 pd-bottom-60">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-9">
                  <div className="section-title text-center">
                     <h2 className="sub-title double-line">Our Products</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               {products.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-blog-inner style-3" style={{ background: "#fff", borderRadius: 10, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}>
                        <div className="thumb" style={{ overflow: "hidden", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                           <Image src={item.img} alt={item.title} />
                        </div>
                        <div className="details" style={{ paddingTop: 22 }}>
                           <p className="m-0" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <span style={{ color: "#ffc107" }}><i className="fa fa-star"></i></span>
                              <span style={{ color: "#1f2b3e", fontWeight: 700 }}>{item.rating}</span>
                           </p>
                           <p className="m-0" style={{ color: "#1f2b3e", fontWeight: 800 }}>{item.price}</p>
                           <h4 className="mt-2" style={{ fontWeight: 800 }}>{item.title}</h4>
                           <Link href="#" className="it-btn" style={{ display: "inline-block", background: "#ff3b5c", color: "#fff", padding: "14px 24px", borderRadius: 6, marginTop: 12 }}>Buy Now</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Products


