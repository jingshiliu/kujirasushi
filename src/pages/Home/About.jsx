import useOnScreenOnce from "../../hook/useOnScreenOnce.js";
import AnimateOnce from "../../components/AnimateOnce.jsx";

import Sushi1 from '../../assets/images/mahmoud-fawzy-n1DePkKznLY-unsplash.jpg';
import Sushi2 from '../../assets/images/luc-bercoth-iqLnrFnGjGA-unsplash.jpg';
import Sushi3 from '../../assets/images/mahmoud-fawzy-FBezBX26dyY-unsplash.jpg';

import { BsArrowRight } from "react-icons/bs";
import {useRef} from "react";

import { BiSolidSushi } from "react-icons/bi";



const About = () => {
    const ref = useRef(null)
    const hasAnimated = useOnScreenOnce(ref)

    const introduction = [
        [
            `Our Menu is Based on All You Can Eat Style to Maximize the Best Experience for our Customers. 
            You can also order each dish individually.`,
            `当店のメニューは食べ放題スタイルです。あなたにとって最高の体験を最大化するために、各料理を個別に注文することもできます。`
        ],
        [
            `It Has 4 Big Sections, First is the Pacific Experience, Our most favorite food menu. Second part is our 
            Tokyo Experience, including all the Pacific part plus the top grade Sushi and Sashimi. Exclusive Dessert also
            will be found in this menu.`,
            `4つの大きなセクションがあり、まずは、私たちの一番人気のフードメニュー であるパシフィック・エクスペリエンスです。2番目のメニ
            ューは、最初のメニューすべてに加えて最高級の寿司と刺身が含まれた東京体験です。このメニューには限定デザートも含まれます。`
        ],
        [
            `The Ryukyu Experience (where our exclusive Whisky is made from). This Experience will bring you the Joy of 
            the food. Featuring some exclusive wine, Japanese sake or cocktails, and the best whisky in the world Kujira
            whisky from Ryukyu Island, Japan.`,
            `琉球体験 (当店限定ウイスキーの製造地) 。この体験は、食の喜びをあなたにもたらします。高級ワイン、日本酒、カクテル、そして世界
            最高のウイスキーである琉球島産の鯨ウイスキーを取り揃えております。`
        ],
        [
            `The last experience is O-Makase, our Fish Chef will prepare your dinner individually. No Menu and also some 
            of the best ingredients not on the menu wil be presented.`,
            `最後の体験は「おまかせ」です。魚料理シェフが個別にディナーをご用意いたします。 
            メニューはありません。また、メニューにはない最高の食材もいくつかあります。`
        ],
        [
            `You can order anything from the menu as many times as you like. Make sure you order what you could finish. 
            Any leftover food will be charged. Take out containers are not available for ALL YOU CAN EAT`,
            `メニューの中から好きなものを何度でも注文できます。 
            食べられるものを注文してください。食べ残しは有料となります。ではテイクアウト容器はご利用いただけません。`
        ]
    ]

    return (
        <section
            id={'about'}
            className={'lg:p-36 p-20 max-w-xs:p-10 relative h-fit text-slate-600 flex justify-center flex-col items-center space-y-20 relative'}
        >
            <section ref={ref} className={`max-md:flex-col max-md:items-start max-md:space-y-14 flex md:space-x-14 ${hasAnimated ? "animate__animated animate__slideInLeft": ""} `}>
                <div className={'text-[60px]'}>
                    <h2 className={``}>
                        The Kujira Experience
                    </h2>

                    <BsArrowRight className={' '}/>
                </div>

                <div className={'space-y-5'}>
                    <p>
                        Hi Friend! Welcome To KuJiRa<br/>
                        Here, We Will Present a Unique Japanese Experience to Your Table.<br/>
                        Please Enjoy the Fresh Ingredients From the Ocean to Pittsburgh! Thank you<br/>
                    </p>
                    <p>
                        じら体験 <br/>
                        こんにちは、友達です! クジラへようこそ<br/>
                        ここでは、ユニークな日本体験をあなたのテーブルにお届けします。 <br/>
                        海からピッツバーグまで届く新鮮な食材をぜひご賞味ください!<br/>
                        ありがとうございました
                    </p>
                </div>
            </section>

            <div className={'h-[300px] max-sm:h-[350px] w-full 2xl:w-2/3 overflow-hidden'}>
                <img className={'object-cover lg:-translate-y-40 max-sm:absolute left-0'} src={Sushi1} alt="4 sushi on a plate"/>
            </div>

            <AnimateOnce
                className={'text-[60px] self-start pl-30 w-full max-sm:text-[35px] max-sm:text-center'}
                animation={'animate__animated animate__slideInRight'}
            >
                <h2 className={``}>
                    All You Can Eat
                </h2>

                <span className={'flex -translate-x-2 max-sm:justify-center w-full'}>
                    <BiSolidSushi className={' '}/>
                    <BiSolidSushi className={' '}/>
                    <BiSolidSushi className={' '}/>
                </span>
            </AnimateOnce>

            <section className={'flex md:space-x-14 h-fit max-md:flex-col'}>
                <AnimateOnce
                    className={'space-y-10 2xl:w-3/4 xl:w-2/3 lg:w-1/2'}
                    animation={'animate__animated animate__fadeInUp'}
                    rootMargin={'-300px'}
                >
                    {introduction.map(([english, japanese], index) => {
                        if(index >= 3) return <></>
                        return (
                            <section key={index} className={'space-y-2 w-full max-xl:last:hidden'}>
                                <p className={'text-2xl font-light'}>
                                    {english}
                                </p>
                                <p>
                                    {japanese}
                                </p>
                            </section>
                        )
                    })}
                </AnimateOnce>

                <AnimateOnce
                    className={'h-full 2xl:w-1/4 xl:w-1/3 lg:w-1/2 max-md:hidden'}
                    animation={'animate__animated animate__slideInRight'}
                    rootMargin={'-300px'}

                >
                    <img className={'object-cover'} src={Sushi2} alt="one sushi picked by a pair of chopstick"/>
                </AnimateOnce>
            </section>

            <AnimateOnce
                className={'space-y-2 w-full xl:hidden'}
                animation={'animate__animated animate__slideInLeft'}
            >
                <p className={'text-2xl font-light'}>
                    {introduction[2][0]}
                </p>
                <p>
                    {introduction[2][1]}
                </p>
            </AnimateOnce>

            <section className={'flex max-lg:flex-col lg:space-x-14 max-lg:space-y-8 h-fit'}>
                <AnimateOnce
                    className={'h-full 2xl:w-1/4 xl:w-1/3 lg:w-1/2 max-sm:w-screen max-sm:h-[320px] w-full'}
                    animation={'animate__animated animate__slideInLeft'}
                >
                    <img className={'object-cover max-sm:absolute left-0 max-sm:w-screen'} src={Sushi3} alt="one sushi picked by a pair of chopstick"/>
                </AnimateOnce>

                <AnimateOnce
                    className={'space-y-10 2xl:w-3/4 xl:w-2/3 lg:w-1/2 max-sm:p-20'}
                    animation={'animate__animated animate__fadeInUp'}
                >
                    {introduction.map(([english, japanese], index) => {
                        if(index < 3) return <></>
                        return (
                            <section key={index} className={'space-y-2'}>
                                <p className={'text-2xl font-light'}>
                                    {english}
                                </p>
                                <p>
                                    {japanese}
                                </p>
                            </section>
                        )
                    })}
                </AnimateOnce>
            </section>
        </section>
    );
};

export default About;