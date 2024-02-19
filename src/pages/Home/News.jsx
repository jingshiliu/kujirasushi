import React from 'react';

function News() {
    return (
        <section className={`px-10 py-16 shadow-md bg-slate-500 text-slate-50 flex justify-center `}>
            <div className={'container'}>
                <h1 className={`font-bold text-[50px]`}>News</h1>
                <ul>
                    <li>
                        <p>
                            Please make a reservation before you joining us for dinner. And reservation is highly
                            recommended. Walk in customer expecting waiting time between 30 to 60 mins. Thank you!
                        </p>
                    </li>
                    <li className={'mt-5'}>
                        <p>
                            Post Gazette wrote about us!
                            <a className={'inline-block mt-1 ml-4 border border-slate-400 px-5 py-2 hover:bg-slate-400 hover:text-slate-50 transition duration-500 '}
                               href={'https://www.post-gazette.com/life/dining/2024/01/02/kujira-all-you-can-eat-sushi-shadyside-pittsburgh/stories/202312220079?fbclid=PAAaZxoBUx5LF9mH3iyloscdLenmT9fgLbB4OJxTsDsbKqGTZQ8yCN__F68hU_aem_AdN4-G0Yd27jKX7JxEcwkJX7CgN84UQ5aJ808zNLcnI-q9M0_0H3PBv2OuluBvWYO60'}
                               target={'_blank'}>
                                Let&apos;s read.
                            </a>
                        </p>

                    </li>
                </ul>
            </div>
        </section>
    );
}

export default News;