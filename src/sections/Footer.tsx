"use client";

import React from "react";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import j2dsLogo from "@/assets/images/j2ds-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Login",
    href: "#header",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/J2DevStudio",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/j2devstudio/",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "https://x.com/j2devstudio",
  },
  {
    name: "Facebook",
    icon: faFacebookSquare,
    href: "https://www.facebook.com/J2DevStudio",
  },
];

export const j2Logo = [
  {
    src: j2dsLogo,
    alt: "J2 DevStudio Logo",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          <a href="https://www.j2devstudio.com/">
            <div className="bg-white/80 rounded-full">
              <Image
                src={j2Logo[0].src}
                alt={j2Logo[0].alt}
                className="size-20"
              />
            </div>
          </a>
          <nav className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className="uppercase text-sm tracking-widest font-bold text-gray-400 hover:text-white transition"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col md:flex-row-reverse md:justify-between items-center gap-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.name}>
                <div className="size-10 rounded-full bg-gray-900 hover:text-white transition inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={link.icon} className="size-6" />
                </div>
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2025 &nbsp;|&nbsp; J2 DevStudio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
