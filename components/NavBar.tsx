import NavbarItem from "./NavbarItem";
import  { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import { useState, useCallback,useEffect } from 'react'
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const NavBar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(true);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((currentMobileMenu) => {
            return !currentMobileMenu;
        })
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((currentAccountMenu) => {
            return !currentAccountMenu;
        })
    }, [])

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY >= TOP_OFFSET){
            setShowBackground(false);
        } else {
            setShowBackground(true);
        }
      }

      window.addEventListener('scroll', handleScroll);


      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
    


    return ( 
        <nav className="w-full fixed z-40">
            <div
            className={`
            px-4
            md:px-16
            py-6
            flex
            items-center
            transition
            duration-500
            ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
            `}
            >
                <img className="h-4 lg:h-7" src="images/logo.png" alt="logo" />
                <div 
                className="
                flex-row
                hidden
                ml-8
                gap-4
                lg:flex
                ">
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My list" />
                    <NavbarItem label="Browse By Languge" />
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`text-white transition ${!showMobileMenu ? 'rotate-0':'rotate-180'} `}  />
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className="flex flex-row items-center ml-auto gap-7">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell/>
                    </div>
                    <div 
                    onClick={toggleAccountMenu}
                    className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt="" />
                        </div>
                        <BsChevronDown  className={`w-4 text-white fill-white transition ${!showAccountMenu ? 'rotate-0':'rotate-180'}`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;