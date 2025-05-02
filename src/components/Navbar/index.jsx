import Desktop from "@/components/Navbar/Desktop";
import Mobile from "@/components/Navbar/Mobile";
import { useState, useEffect } from "react";

export const Navbar = () => {
  // this component render desktop or mobile navbar depending on the screen size

  const isDesktop = window.innerWidth > 768;
  const [navbar, setNavbar] = useState(isDesktop ? <Desktop /> : <Mobile />);

  useEffect(() => {

    const handleResize = () => {
      const isDesktop = window.innerWidth > 768;
      setNavbar(isDesktop ? <Desktop /> : <Mobile />);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
      {navbar}
    </div>
  );

};
