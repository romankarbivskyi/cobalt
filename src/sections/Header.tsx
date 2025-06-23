import Button from "@/components/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.5, // Reduced from 0.8
      ease: "power2.out",
    }).from(
      [navRef.current, buttonRef.current],
      {
        x: 50,
        opacity: 0,
        duration: 0.4, // Reduced from 0.6
        ease: "power2.out",
        stagger: 0.05, // Reduced from 0.1
      },
      "-=0.3", // Reduced from "-=0.4"
    );

    ScrollTrigger.create({
      start: "60px top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(headerRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "50px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
          marginTop: "5px",
          marginLeft: "12px",
          marginRight: "12px",
          padding: "0",
          duration: 0.2,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(headerRef.current, {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          borderRadius: "0px",
          border: "1px solid transparent",
          boxShadow: "none",
          marginTop: "0px",
          marginLeft: "0px",
          marginRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          duration: 0.2,
          ease: "power2.out",
        });
      },
    });

    let lastScrollY = 0;

    ScrollTrigger.create({
      start: "200px top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const currentY = self.scroll();

        if (currentY > 200) {
          if (currentY > lastScrollY && currentY > 400) {
            gsap.to(headerRef.current, {
              y: -120,
              duration: 0.2,
              ease: "power2.out",
            });
          } else if (currentY < lastScrollY) {
            gsap.to(headerRef.current, {
              y: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          }
        }

        lastScrollY = currentY;
      },
    });
  }, []);

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-150" // Reduced from duration-300
      ref={headerRef}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="object-contain"
          ref={logoRef}
        />

        <div className="flex items-center gap-4 sm:gap-6">
          <nav ref={navRef}>
            <a
              href="#"
              className="text-link text-sm transition-colors hover:text-white"
            >
              Blog
            </a>
          </nav>
          <div ref={buttonRef}>
            <Button>Join the waitlist</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
