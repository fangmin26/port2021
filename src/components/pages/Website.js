import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import WrapTitle from "../basis/WrapTitle";
import PropTypes from "prop-types";

function Weblist({
  link,
  image,
  imgAlt,
  title,
  view,
  projectName,
  category1,
  category2,
  arrow,
  imgTxt,
}) {
  return (
    <>
      <li className="box">
        <div className="desc">
          <div className="desc_container">
            <div className="desc_tit">
              <em>{projectName}</em>
              <h4>{title}</h4>
            </div>
            <p>
              {category1}
              <br />
              {category2}
            </p>
            <span className="view">
              <a href={link}>
                {view}
                <span className="material-icons">{arrow}</span>
              </a>
            </span>
          </div>
        </div>
        <div className="pic">
          <div className="pic_container">
            <img src={image} alt={imgAlt} />
            <span id="text1">{imgTxt}</span>
          </div>
        </div>
      </li>
    </>
  );
}

const websInfo = [
  {
    id: "1",
    link: "https://fangmin26.github.io/sony/",
    imgAlt: "sonykorea",
    projectName: "Project 01",
    view: "view site",
    title: "sonykorea",
    image: "../img/sonyfront.png",
    category1: "소니 반응형 MAIN",
    category2: `SLICK와 SWIPER 플러그인 사용하여 슬라이드를 구성하고
    레이아웃 구성시 일부분 FLEX와 GRID를 활용하여 화면
    구성하였습니다. 오른쪽 고정 네비게이션으로 패럴랙스 및
    호버효과 구현하였습니다.`,
    arrow: "arrow_forward",
    imgTxt: "P01",
  },
  {
    id: "2",
    link: "https://fangmin26.github.io/megabox/",
    imgAlt: "megabox",
    projectName: "Project 02",
    view: "view site",
    title: "megabox",
    image: "../img/megafront.png",
    category1: "메가박스 반응형 MAIN",
    category2: `swiper.js 플러그인을 사용하여 슬라이드를 구성하고
    이미지스프라이트 기법으로 전체적인 아이콘 및 이미지
    구성하였습니다. select태그를 활용하여 옵션값을 지정
    해보았고, 유튜브 api를 활용하여 클릭시 팝업
    구현하였습니다.`,
    arrow: "arrow_forward",
    imgTxt: "P02",
  },
  {
    id: "3",
    link: "https://fangmin26.github.io/sony/",
    imgAlt: "baemin",
    projectName: "Project 03",
    view: "view site",
    title: "baemin",
    image: "../img/baeminfront.png",
    category1: "배달의민족 반응형 MAIN",
    category2: `css animation을 활용하여 스크롤시 캐릭터들을
    이동시키거나, 스크롤 값에 따라 캐릭터들이 보이고
    사라지는 효과를 넣어보았습니다. 패럴럭스 네비게이션을
    추가 하여 생동감 있는 페이지를 구성하였습니다.`,
    arrow: "arrow_forward",
    imgTxt: "P03",
  },
  {
    id: "4",
    link: "https://fangmin26.github.io/gabia/",
    imgAlt: "gabiakorea",
    projectName: "Project 04",
    view: "view site",
    title: "gabiakorea",
    image: "../img/gabiafront.png",
    category1: "가비아반응형 MAIN",
    category2: `swiper.js 로 상단 슬라이드를 구성하고, hover시 메뉴별
    애니메이션 효과를 적용 하였습니다.input의 기본 속성을
    변형, placeholder를 활용한 레이아웃 구성을 하였습니다`,
    arrow: "arrow_forward",
    imgTxt: "P04",
  },
  {
    id: "5",
    link: "https://fangmin26.github.io/andmarq/index.html",
    imgAlt: "andmarq",
    projectName: "Project 05",
    view: "view site",
    title: "andmaurq",
    image: "../img/andmarqfront.png",
    category1: "앤드마크 리디자인 메인 + 서브4",
    category2: `
    skrolljs 플러그인과 jquery를 활용한 가로스크롤 반응형
    디자인입니다.햄버거 메뉴 및 커버 이미지에 css
    animation을 일부 적용시켰습니다.`,
    arrow: "arrow_forward",
    imgTxt: "P05",
  },
  {
    id: "6",
    link: "https://fangmin26.github.io/deponde/",
    imgAlt: "deponde",
    projectName: "Project 06",
    view: "view site",
    title: "deponde",
    image: "../img/deondefront.png",
    category1: "디폰데 반응형 MAIN",
    category2: `swiper 플러그인의 패럴럭스 기능과 grid 시스템을 활용하여
    작업하였습니다. index 페이지 상품 메뉴 호버시 transform
    속성을 적용해 가볍게 원근감을 주었습니다.`,
    arrow: "arrow_forward",
    imgTxt: "P06",
  },
];

function Website() {
  return (
    <main id="root" className="lock">
      {/* <Loader /> */}
      <Header />
      <section id="Website">
        <WrapTitle />

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
                {websInfo.map((info) => (
                  <Weblist
                    key={info.id}
                    link={info.link}
                    image={info.image}
                    imgAlt={info.imgAlt}
                    title={info.title}
                    view={info.view}
                    projectName={info.projectName}
                    category1={info.category1}
                    category2={info.category2}
                    arrow={info.arrow}
                    imgTxt={info.imgTxt}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
Weblist.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  category1: PropTypes.string.isRequired,
  category2: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired,
  imgTxt: PropTypes.string.isRequired,
};
export default Website;
