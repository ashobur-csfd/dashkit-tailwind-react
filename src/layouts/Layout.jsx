import { Outlet, useLocation } from "react-router-dom";
import HeaderOne from "@/components/Header/HeaderOne";
import MenuOne from "@/components/Menu/MenuOne";
import Scrollbar from 'smooth-scrollbar';
import { useEffect } from "react";
import 'flowbite';
import 'flowbite/dist/flowbite.css';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default function Layout() {
  useEffect(() => {
    // INTIALIZE SMOOTH SCROLLBAR
    let option = {
      continuousScrolling: false,
      alwaysShowTracks: true,
    };
    if (document.querySelector("[data-scrollbar]")) {
      Scrollbar.initAll(option);
    }
  }, [Scrollbar])
  
  // prism
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  // current location 
  const currentLocation = useLocation()

  return (
    <>
      <HeaderOne />
      {(currentLocation?.pathname === "/documentation") ? <></>: <MenuOne />}
      <Outlet/>
    </>
  );
}
