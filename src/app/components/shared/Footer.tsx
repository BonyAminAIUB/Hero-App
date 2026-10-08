import Image from "next/image";
import logo from "@/assets/logo.png";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#001931] text-white">

            <div className="container mx-auto px-6">

                {/* Main Footer */}
                <div className="flex items-center justify-between border-b border-[#16324A] py-7">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="Hero.IO logo"
                            className="h-9 w-9 object-contain"
                        />
                        <span className="font-bold">
                            HERO.IO
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="text-right">
                        <h3 className="text-lg font-medium">
                            Social Links
                        </h3>

                        <div className="mt-3 flex justify-end gap-4">

                            {/* GitHub */}
                            <a
                                href="https://github.com/BonyAminAIUB"
                                className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#001931] hover:bg-blue-400"
                            >
                                <FaGithub size={12} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/md-bony-amin-50a653344/"
                                className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#001931] hover:bg-blue-400"
                            >
                                <FaLinkedinIn size={11} />
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/md.bony.amin.534899"
                                className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#001931] hover:bg-blue-400"
                            >
                                <FaFacebookF size={11} />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="py-6 text-center text-sm text-gray-300">
                    Copyright © 2025 - All right reserved
                </div>

            </div>

        </div>
    );
};

export default Footer;