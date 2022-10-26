import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-white">
      <footer
        class="lg:px-60 sm:px-10 pb-10 lg:pt-0 sm:pt-10"
        style={{ backgroundColor: "#011C53" }}
      >
        <div className="grid lg:grid-cols-2 sm:grid-cols-2 justify-between items-center">
          <div className="lg:pr-10 sm:pr-0">
            <p className="sm:text-sm lg:text-">
              ISBAAH.COM
              <br />
              আমাদের নতুন নতুন বইগুলো আপডেটেড পেতে আমাদের ইমেইল সাবস্ক্রাইব
              করুন। বই পড়ুন জ্ঞান বাড়ান
            </p>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center">
              <img
                style={{ width: "140px" }}
                src="https://i.ibb.co/4NGt7Hj/aleeha-thech-01.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-4 lg:hidden sm:block">
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
        <div className="mt-10 lg:hidden sm:grid text-white sm:grid-cols-2 gap-5">
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
          </div>
        </div>

        <p className="lg:text-center sm:text-left text-sm mt-10">
          Copyright © 2022 - All right reserved by Aleeha Tech Ltd
        </p>
      </footer>
    </div>
  );
};

export default Footer;
