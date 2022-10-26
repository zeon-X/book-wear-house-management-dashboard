import React from "react";
import Carousol from "../../components/Carousol/Carousol";
import Footer from "../../components/Footer/Footer";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import "./LandingPage.css";
import m from "../../assets/mobile.png";

const LandingPage = () => {
  return (
    <div className="landingPage_container">
      <Carousol></Carousol>
      <div className="lg:px-20 sm:px-5 my-10">
        <p className="mt-5 mb-16 text-3xl font-semibold text-center">
          Recently Added Books
        </p>
      </div>
      <ProductContainer></ProductContainer>
      {/* section 1 Additional */}
      <div className="mb-40 mt-16 grid lg:grid-cols-2 gap-5">
        <div className="lg:px-28 sm:px-14 lg:order-1 sm:order-2 flex flex-col justify-center items-center text-black lg:text-right sm:text-left">
          <p className="text-5xl font-bold">অনলাইন স্টক ম্যানেজমেন্ট সিস্টেম</p>
          <p className="mt-4">
            অনলাইন স্টক ম্যানেজমেন্ট সিস্টেম এখন আরো সহজ আলিহা স্টক ম্যানেজমেন্ট
            সিস্টেম এর সাথে। বই ডেলিভার কিংবা রিস্টক/স্টক আপডেট সবকিছুই এখন করুন
            খুব সহজে। বই অথবা পাবলিশার কিংবা ক্যাটাগরি সবই এখন ক্রিয়েট হবে খুব
            সহজে। আপডেট, ডিলেট, ডিটেইস সব কিছুই দেখতে পাবেন খুব সহজে
          </p>
        </div>
        <div className="lg:order-2 sm:order-1 flex justify-center items-center lg:mb-0 sm:mb-14">
          <img
            src="https://busy.in/Images/Inventory/Inventory-Management-Mistakes.png"
            alt=""
          />
        </div>
      </div>
      {/* section 2 Additional */}
      <div className="mobile_section mt-30 grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="flex justify-center">
          <img
            className="mt-[-70px] lg:ml-28 sm:ml-0 shadow-2xl"
            style={{ width: "280px", height: "595px" }}
            src={m}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center lg:py-28 sm:py-4 lg:px-28 sm:px-14">
          <div>
            <p className="text-5xl font-bold text-white">ইসবাহ.কম</p>
            <p className="text-white">
              আপনাদের সবার প্রিয় isbaah.com এর মাধ্যমে সকল ধরনের ইসলামি বই ঘরে
              বসেই কিনতে পারবেন ইনশাআল্লাহ।
            </p>
            {/* social site  */}
            <div className="mt-4 lg:block sm:hidden">
              <span class="text-white">Social</span>
              <div class="grid grid-cols-3 gap-0 lg:pr-28">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-white"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-white"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-white"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-10 lg:grid sm:hidden text-white  lg:grid-cols-3 sm:grid-cols-2 gap-5">
              <div className="">
                <p>Important Links</p>
                <p className="text-sm">Landing-Page</p>
                <p className="text-sm">Blog-Page</p>
                <p className="text-sm">Imventory-Page</p>
                <p className="text-sm">404-Page</p>
              </div>
              <div className="">
                <p>Management</p>
                <p className="text-sm mt-2">Book</p>
                <p className="text-sm">Publisher</p>
                <p className="text-sm">Category</p>
                <p className="text-sm">Authentication</p>
              </div>
              <div></div>
              <div>
                <img
                  src="https://www.fcsok.org/wp-content/uploads/2020/04/get-it-on-google-play-badge.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/59de6bbc2c7d3a40f0ed605f/images/59e0d79f042863379ddca7c4/file-0KrvJWnUbj.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
