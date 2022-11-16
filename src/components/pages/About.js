import React, {  useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../Loader";
import { start } from "../../function/LoaderFunc";
import { Welcometomysite } from "../data/DataList";

const About = () => {
  useEffect(()=>{
    start()
  },[]);
  const welcome = (el) =>{
    return(
      <span aria-hidden='true'aria-label>{el}</span>
    )
  }
  return (
    <main id="root" 
    className="lock ">
      <Loader />
      <Header />
      <section id="About w-full">
        <section id="section1 w-full overflw-x-hidden">
          <div className="container max-w-[1400px] margin_auto">
            <div className="sec1 w-full h-[850px] pt-[250px] relative">
              <h2 className="split text-[150px] font-rajdhani max-w-[60%] pb-[45px]">
              {Welcometomysite.map((letter)=>
                  <>
                  {welcome(letter)}
                  </>
              )}
              </h2>
              <span className="dot"id="dot"></span>
              <h3 className="absolute right-0 block text-[150px] w-[78%] pt-[45px]">
                <strong className="block w-full font-semibold text-left">LET'S MAKE</strong>
                <em className="block w-full font-semibold text-right">AWSOMNESS.</em>
              </h3>
              <div className="distort"></div>
            </div>
          </div>
        </section>
        <section id="section2 w-full">
          <div className="container max-w-[1400px] margin_auto">
            <div className="sec2 pb-[260px]">
              <ul className="index_tit w-full flex justify-between">
                <li>00</li>
                <li>INTRO</li>
                <li>NAME: MINJI HWANG</li>
              </ul>
              <ul className="index_box">
                <li>
                  <div className="boxes">
                    <h4 className="split box1">SMART</h4>
                    <div className="profile">
                      <div className="profile1"></div>
                    </div>
                    <span className="fonts FF">Font Family</span>
                    <span className="fonts FN">‘Railway’</span>
                    <span className="fonts FM">
                      Meaning “excuted with force and vigor”
                    </span>
                    <span className="fonts FO">(see smart(v.))</span>
                  </div>
                </li>
                <li>
                  <div className="boxes">
                    <h4 className="split box2">DEVELOPER</h4>
                    <div className="profile">
                      <div className="profile2"></div>
                    </div>
                    <span className="fonts FF">Font Family</span>
                    <span className="fonts FN">‘Raiway Dots’</span>
                    <span className="fonts FM">
                      Meaning “speculative builder”{" "}
                    </span>
                    <span className="fonts FO">(see developer(n.))</span>
                  </div>
                </li>
                <li>
                  <div className="boxes">
                    <h4 className="split box3">WORLDWIDE</h4>
                    <div className="profile">
                      <div className="profile3"></div>
                    </div>
                    <span className="fonts FF">Font Family</span>
                    <span className="fonts FN">‘Rajdhani’</span>
                    <span className="fonts FM">
                      Meaning “1630s,from world + wide”
                    </span>
                    <span className="fonts FO">(see worldwide(n.))</span>
                  </div>
                </li>
                <li>
                  <div className="boxes last">
                    <h4 className="split box4">HELLO WORLD</h4>
                    <span className="fonts FF">Font Family</span>
                    <span className="fonts FN">‘Racing Sans One’</span>
                    <span className="fonts FM">
                      Meaning “excuted with force and vigor”
                    </span>
                    <span className="fonts FO">
                      (Dennis Ritchie's First Example(ex.))
                    </span>
                  </div>
                </li>
                <li>
                  <div className="boxes desc">
                    <span className="fonts FF">Font Family</span>
                    <span className="fonts FN">‘Iropke Batang’</span>
                    <span className="fonts FM">
                      Meaning “until the seed becomes a tree”
                    </span>
                    <span className="fonts FO">
                      (This is my short introduction(p.))
                    </span>
                    <p>
                      안녕하세요. 신입 프론트엔드 디자이너 황민지입니다.
                      <br />
                      새로운 도전을 하고 싶어 시작한 코딩이 삶의 많은 부분을
                      변화시켰습니다. <br />
                      하루중 많은 시간을 할애하여 자연스럽게 코딩을 하루의
                      일과로 만들고, 그에 따른 배움을 삶의 여정이라 느끼며
                      성장하고 있습니다. 10시간 이상을 앉아 고민하고, 새로운
                      코드를 작성해보는 과정은 매일매일 저에게 새로운 도전의식을
                      부여합니다.
                      <br />
                      다양한 모바일 환경에 적응하고 웹 최적화를 위해 끊임없이
                      공부하는 개발자가 되고 싶습니다. 꾸준한 노력과 배움에서
                      느끼는 기쁨, 긍정적인 마인드셋을 항상 기억하며 어제보다
                      오늘이 더 나은, 오늘 보다 내일이 더 나은 개발자가
                      되겠습니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
export default About;
