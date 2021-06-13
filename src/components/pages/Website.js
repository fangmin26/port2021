import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import sony from "./../../img/sonyfront.png";
import mega from "./../../img/megafront.png";
import gabia from "./../../img/gabiafront.png";
import deponde from "./../../img/deondefront.png";
import baemin from "./../../img/baeminfront.png";
import andmarq from "./../../img/andmarqfront.png";
function Website() {
  return (
    <main id="root" className="lock">
      {/* <Loader /> */}
      <Header />
      <section id="Website">
        <div id="section1">
          <div className="container">
            <div className="sec1">
              <div className="title">
                <h2 className="split">RESPONSIVE IS LIKE A WATER</h2>
                <p>
                  반응형 웹 디자인이란 하나의 웹사이트에서 PC, 스마트폰, 태블릿
                  PC 등 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로
                  변하도록 만든 웹페이지 접근 기법을 의미합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="section2">
          <div className="sec2">
            <div className="left">
              <ul>
                <li>Website</li>
                <li>responsive : 6PRJ</li>
              </ul>
              <span className="dot"></span>
            </div>
            <div className="right">
              <ul className="boxes" id="boxTop">
                <li className="box box1">
                  <div className="desc">
                    <div className="desc_container">
                      <div className="desc_tit">
                        <em>Project 01</em>
                        <h4>Sony Korea</h4>
                      </div>
                      <p>
                        소니 반응형 MAIN
                        <br />
                        SLICK와 SWIPER 플러그인 사용하여 슬라이드를 구성하고
                        레이아웃 구성시 일부분 FLEX와 GRID를 활용하여 화면
                        구성하였습니다. 오른쪽 고정 네비게이션으로 패럴랙스 및
                        호버효과 구현하였습니다.
                      </p>
                      <span className="view">
                        <Link to="https://fangmin26.github.io/sony/">
                          view site
                          <span className="material-icons">arrow_forward</span>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="pic_container">
                      <img src={sony} alt="sony" id="desk1" />
                      <span id="text1">P01</span>
                    </div>
                  </div>
                </li>
                <li className="box box2">
                  <div className="desc">
                    <div className="desc_container">
                      <div className="desc_tit">
                        <em>Project 02</em>
                        <h4>Megabox</h4>
                      </div>
                      <p>
                        메가박스 반응형 MAIN
                        <br />
                        swiper.js 플러그인을 사용하여 슬라이드를 구성하고
                        이미지스프라이트 기법으로 전체적인 아이콘 및 이미지
                        구성하였습니다. select태그를 활용하여 옵션값을 지정
                        해보았고, 유튜브 api를 활용하여 클릭시 팝업
                        구현하였습니다.
                      </p>
                      <span className="view">
                        <Link to="https://fangmin26.github.io/megabox/">
                          view site
                          <span className="material-icons">arrow_forward</span>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="pic_container">
                      <img src={mega} alt="mega" id="desk2" />
                      <span id="text2">P02</span>
                    </div>
                  </div>
                </li>
                <li className="box box3">
                  <div className="desc">
                    <div className="desc_container">
                      <div className="desc_tit">
                        <em>Project 03</em>
                        <h4>Baemin Site</h4>
                      </div>
                      <p>
                        배달의 민족 반응형 MAIN
                        <br />
                        css animation을 활용하여 스크롤시 캐릭터들을
                        이동시키거나, 스크롤 값에 따라 캐릭터들이 보이고
                        사라지는 효과를 넣어보았습니다. 패럴럭스 네비게이션을
                        추가 하여 생동감 있는 페이지를 구성하였습니다.
                      </p>
                      <span className="view">
                        <Link to="https://fangmin26.github.io/baemin/">
                          view site
                          <span className="material-icons">arrow_forward</span>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="pic_container">
                      <img src={baemin} alt="baemin" id="desk3" />
                      <span id="text3">P03</span>
                    </div>
                  </div>
                </li>
                <li className="box box4">
                  <div className="desc">
                    <div className="desc_container">
                      <div className="desc_tit">
                        <em>Project 04</em>
                        <h4>Gabia Site</h4>
                      </div>
                      <p>
                        가비아 반응형 MAIN
                        <br />
                        swiper.js 로 상단 슬라이드를 구성하고, hover시 메뉴별
                        애니메이션 효과를 적용 하였습니다.input의 기본 속성을
                        변형, placeholder를 활용한 레이아웃 구성을 하였습니다.
                      </p>
                      <span className="view">
                        <Link to="https://fangmin26.github.io/gabia/">
                          view site
                          <span className="material-icons">arrow_forward</span>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="pic_container">
                      <img src={gabia} alt="gabia" id="desk4" />
                      <span id="text4">P04</span>
                    </div>
                  </div>
                </li>
                <li className="box box5">
                  <div className="desc">
                    <div className="desc_container">
                      <div className="desc_tit">
                        <em>Project 05</em>
                        <h4>Andmarq</h4>
                      </div>
                      <p>
                        앤드마크 리디자인 MAIN + 4 SUB
                        <br />
                        4개의 서브페이지를 포함한 앤드마크 리디자인
                        홈페이지입니다. <br />
                        skrolljs 플러그인과 jquery를 활용한 가로스크롤 반응형
                        디자인입니다.햄버거 메뉴 및 커버 이미지에 css
                        animation을 일부 적용시켰습니다.
                      </p>
                      <span className="view">
                        <Link to="https://fangmin26.github.io/andmarq/index.html">
                          view site
                          <span className="material-icons">arrow_forward</span>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="pic_container">
                      <img src={andmarq} alt="andmarq" id="desk5" />
                      <span id="text5">P05</span>
                    </div>
                  </div>
                </li>
                <li className="box box6">
                  <div className="desc">
                    <div className="desc_container">
                      <div className="desc_tit">
                        <em>Project 06</em>
                        <h4>Deponde</h4>
                      </div>
                      <p>
                        디폰데 리디자인 MAIN + 3SUB
                        <br />
                        3개의 서브페이지를 포함한 디폰데 리디자인
                        홈페이지입니다.
                        <br />
                        swiper 플러그인의 패럴럭스 기능과 grid 시스템을 활용하여
                        작업하였습니다. index 페이지 상품 메뉴 호버시 transform
                        속성을 적용해 가볍게 원근감을 주었습니다.
                      </p>
                      <span className="view">
                        <Link to="https://fangmin26.github.io/deponde/">
                          view site
                          <span className="material-icons">arrow_forward</span>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="pic_container">
                      <img src={deponde} alt="deponde" id="desk6" />
                      <span id="text6">P06</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
export default Website;
