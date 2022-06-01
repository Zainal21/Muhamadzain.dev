import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function footer() {
  return (
    <footer className="container mx-auto">
      <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
        <div className="mr-auto flex flex-col items-center sm:flex-row">
          <a href="/" className="mr-auto sm:mr-6"></a>
          <p className="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
            ©2022 Muhamadzain.
          </p>
        </div>
        <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
          <a href="https://github.com/Zainal21 " target="_blank">
            <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-zainal-arifin/ "
            target="_blank"
          >
            <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
