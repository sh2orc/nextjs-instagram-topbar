import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { PlusCircleIcon, HomeIcon  } from "@heroicons/react/solid";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { faCompass, faPlusSquare, faHeart } from '@fortawesome/free-regular-svg-icons'
import HeartTip from "./HeartTip";
import SearchTip from "./SearchTip";

const Header = () =>{
    
    const [searchVisibility, setSearchVisibility] = useState(true)
    const [crossVisibility, setCrossVisibility] = useState(false)
    const [showToolTip, setShowToolTip] = useState(false)
    const inputAreaRef = useRef(null)

    useEffect(()=>{
        const checkIfClickedOutside = e => {
            if(!inputAreaRef?.current?.contains(e.target)){
                console.log("inputAreaRef 밖에서 발생")
                setCrossVisibility(false)
                setSearchVisibility(true)
                setShowToolTip(false)
            }else{                
                console.log("inputAreaRef 안에서 발생")
                setCrossVisibility(true)
                setSearchVisibility(false)
                setShowToolTip(true)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)
        return () =>{
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    })

    return(
        <div className="shadow-sm border-b bg-white top-0 fixed w-full">            
        
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto p-2">
                <div className="relative w-24 h-8 lg-inline-grid">                
                <Image src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" layout="fill" objectFit="contain" />
                </div>

                <div ref={inputAreaRef} className="relative mt-1 p-1 pl-2 rounded-sm sm:text-sm border-solid border-[1.2px] border-gray-300 flex bg-gray-50">
                    {searchVisibility && <SearchIcon className="h-5 w-5 text-gray-400" />}
                    <input type="text" placeholder="search" className="headerinput pl-1 bg-gray-50 focus:outline-none" />
                    {crossVisibility && <PlusCircleIcon className="h-5 w-5 rotate-45 text-gray-400" />}

                    {showToolTip && <SearchTip />}
                </div>

                <div className="flex items-center justify-end space-x-4 ">

                    <HomeIcon className="h-6 cursor-pointer " />
                    <div className="relative">
                        <FontAwesomeIcon className="cursor-pointer" icon={faFacebookMessenger} size="lg" />
                        <span className="absolute -top-1 -right-2 bg-red-500  rounded-full h-4 w-4 text-white text-xs items-center justify-center flex leading-none ">
                            3
                        </span>
                    </div>
                    <div className="relative ">
                        <FontAwesomeIcon className="cursor-pointer" icon={faHeart} size="lg" />
                        <div className="absolute w-1 h-1 left-1/2 -translate-x-1/2 bg-red-600 rounded-full " />
                        <HeartTip/>
                    </div>

                    <FontAwesomeIcon className="cursor-pointer" icon={faPlusSquare} size="lg" />
                    <FontAwesomeIcon className="cursor-pointer" icon={faCompass} size="lg" />
                    <div className="avatar">
                        <div className="rounded-full w-8 h-8">
                            <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
                        </div>
                    </div>

                </div>     
            </div>




        </div>
    )
}

export default Header;