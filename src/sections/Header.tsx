import { Button } from "@/components/ui";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
      <img src="/images/logo.png" alt="Logo" className="object-contain" />

      <div className="flex items-center gap-4 sm:gap-6">
        <nav>
          <a href="#" className="text-link text-sm">
            Blog
          </a>
        </nav>
        <Button>Join the waitlist</Button>
      </div>
    </header>
  );
};

export default Header;
