import SocialIcon from "@/components/common/SocialIcon";
import footer_data from "@/data/FooterData";
import Link from "next/link";

const FooterOne = () => {
  return (
    <footer
      className="footer-area bg-black bg-cover"
      style={{ backgroundImage: `url('/assets/img/bg/2.webp')` }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about text-center">
              <h4 className="widget-title">Follow us</h4>
              <div className="details">
                <ul className="social-media d-flex justify-content-center">
                  <SocialIcon />
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="widget widget_subscribe text-center">
              <h4 className="widget-title">Contact us</h4>
              <div className="single-input-inner style-border style-bg-none mb-3">
                <input type="text" placeholder="Your Email" />
                <button>
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
              <label>
                <input type="checkbox" />
                Maecenas tempususcondime honcus sem quam libero
              </label>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="widget widget_subscribe text-center">
              <h4 className="widget-title">Send us a message</h4>
              <div className="single-input-inner style-border style-bg-none mb-3">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="single-input-inner style-border style-bg-none mb-3">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="single-input-inner style-border style-bg-none">
                <textarea placeholder="Your Message" rows={4} />
                <button>
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center">
              <p>© 2025. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
