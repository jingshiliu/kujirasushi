import React from 'react';
import KujiraSushiMenu from "../../assets/kujirasushi.pdf";

const PdfMenu = () => {
    return (
        <section className={`mb-32`}>
            <h3 className={`font-bold text-4xl`}>PDF Menu</h3>
            <p>We provide PDF in case you need it.</p>
            <div className={`flex justify-start space-x-10 mt-10`}>
                <a className={` text-slate-50 border px-10 py-4 border-slate-300 hover:bg-slate-200 hover:text-slate-500 
                                hover:bg-opacity-90 transition duration-300 ease-in-out shadow-md shadow-slate-100 
                                bg-opacity-60 bg-slate-500 animate__animated animate__fadeInUp block w-100`}
                   href={KujiraSushiMenu}
                   target={'_blank'}
                >
                    Full Menu
                </a>
            </div>
        </section>
    );
};

export default PdfMenu;