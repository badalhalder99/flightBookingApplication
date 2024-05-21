import styles from './header.module.css';
import { MdCall } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <div className={`container ${styles.customContainer} my-0 ml-auto mr-auto py-1 md:px-5 2xsmall:px-4 lg:max-w-[1024px] xl:max-w-[1320px]`}>
                <div className="contentWrap flex justify-between items-center">
                    <div className="imgWrap">
                        <img src="https://i.ibb.co/Zc1cZc8/logo.png" alt="logo" className='h-[45px]' />
                    </div>
                    <div className="2xsmall:hidden xsmall:block ml-auto">
                        <div className="phoneNumber flex justify-center items-center">
                            <p><MdCall  className='text-[#ec8134]'/></p>
                            <p className='text-[#ec8134] text-[14px]'>+8801978-569290</p>
                        </div>
                    </div>
                    <div className="btnWrap small:ml-5 2xsmall:ml-2">
                        <button className='flex justify-center items-center bg-[#ec8134] text-white text-[14px] small:px-8 2xsmall:px-3 py-1 rounded-md'><FaUser  className='text-[#fff] mr-1'/> Account</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
