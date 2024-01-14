import { IoIosArrowDown } from "react-icons/io";

const ScrollableNotification = () => {
    return (
        <div className={`absolute bottom-0`}>
            <div className={`flex flex-col items-center space-y-2 text-slate-300 text-lg animate-bounce`}>
                <IoIosArrowDown />
            </div>
        </div>
    );
};

export default ScrollableNotification;