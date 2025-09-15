import Link from "next/link"

type EventItem = {
   id: number
   title: string
   category: string
   city: string
   location: string
   datetime: string
   note: string
   tag: string
   bg: string
}

const events: EventItem[] = [
   {
      id: 1,
      title: "Ashraf & Sultana",
      category: "Weddings",
      city: "Kano",
      location: "Kano, Nigeria",
      datetime: "8/8/2024 • 4:00:00 PM",
      note: "No description available",
      tag: "invitation",
      bg: "/assets/bg/11.png",
   },
   {
      id: 2,
      title: "Ashraf & Sultana",
      category: "Weddings",
      city: "Kano",
      location: "Kano, Nigeria",
      datetime: "8/8/2024 • 4:00:00 PM",
      note: "No description available",
      tag: "invitation",
      bg: "/assets/bg/11.png",
   },
   {
      id: 3,
      title: "Ashraf & Sultana",
      category: "Weddings",
      city: "Kano",
      location: "Kano, Nigeria",
      datetime: "8/8/2024 • 4:00:00 PM",
      note: "No description available",
      tag: "invitation",
      bg: "/assets/bg/11.png",
   },
]

const EventCard = () => {
   return (
      <div className="pd-top-115 pd-bottom-60">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-9">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-line">Events</h5>
                     <h2 className="title">Upcoming & Featured</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {events.map((e) => (
                  <div key={e.id} className="col-lg-4 col-md-6 mb-4">
                     <div className="border-radius-5" style={{
                        backgroundImage: `url('${e.bg}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        padding: 24,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                        borderRadius: 12,
                     }}>
                        <div className="d-flex justify-content-between align-items-start mb-3">
                           <div>
                              <h4 className="m-0">{e.title}</h4>
                              <p className="m-0"><i className="fa fa-camera me-2"></i>{e.category}</p>
                           </div>
                           <h5 className="m-0">{e.city}</h5>
                        </div>
                        <div className="border-radius-5" style={{ background: "rgba(255,255,255,0.85)", padding: 24 }}>
                           <h2 className="title mb-3">{e.title}</h2>
                           <h4 className="mb-3">{e.location}</h4>
                           <p className="mb-3">{e.datetime}</p>
                           <p className="mb-4">{e.note}</p>
                           <div className="d-flex justify-content-between align-items-center">
                              <span>{e.tag}</span>
                              <Link href="#" className="it-btn" style={{ display: "inline-block", background: "#ff3b5c", color: "#fff", padding: "14px 24px", borderRadius: 6 }}>Buy Now</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default EventCard


