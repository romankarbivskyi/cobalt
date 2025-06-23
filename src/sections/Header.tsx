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
      duration: 0.8,
      ease: "power2.out",
    }).from(
      [navRef.current, buttonRef.current],
      {
        x: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      },
      "-=0.4",
    );

    ScrollTrigger.create({
      start: "100px top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(headerRef.current, {
          backgroundColor: "rgba(9, 9, 11, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(39, 39, 42, 0.5)",
          duration: 0.3,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(headerRef.current, {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          borderBottom: "1px solid transparent",
          duration: 0.3,
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
          if (currentY > lastScrollY && currentY > 350) {
            gsap.to(headerRef.current, {
              y: -100,
              duration: 0.3,
              ease: "power2.out",
            });
          } else if (currentY < lastScrollY) {
            gsap.to(headerRef.current, {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        }

        lastScrollY = currentY;
      },
    });
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50" ref={headerRef}>
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
