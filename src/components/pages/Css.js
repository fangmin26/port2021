import React from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import Header from "../Header";
import Footer from "../Footer";

function Css() {
  return (
    <main id="root" className="lock">
      {/* <Loader /> */}
      <Header />
      <section id="Css">
        <div id="section1">
          <div className="sec1">
            <div className="title">
              <h2 className="split">
                Css animation is
                <br />
                good to pack.
              </h2>
              <p>
                CSS 애니메이션은 메모리가 부족한 JAVASCRIPT를 사용하지 않고도
                특정 HTML 요소에 애니메이션을 적용하는 방법입니다. CSS
                애니메이션의 키 프레임에는 요소에 적용될 스타일이 포함되어
                있습니다.
              </p>
            </div>
          </div>
        </div>
        <div id="section2">
          <div className="sec2">
            <div className="box_container left">
              <div className="box">
                <div className="box_desc">
                  <h3>CSS ANI PRJ1</h3>
                  <span className="view">
                    <Link to="https://codepen.io/fangmin/pen/eYvgjKL" />
                    view code
                    <span className="material-icons"> arrow_forward </span>
                  </span>
                  <p>
                    <strong>SPRING ANIMATION</strong>
                    <br />
                    전체 loader box에 자식요소인 span을 absolute 위치값으로 등비
                    배치한후 부모요소인 loader에 perspective 를 주어 3d 효과
                    구현, keyframe에 z값의 움직임을 주고, 각 자식요소 span에
                    해당하는 애니메이션의 딜레이 시간차를 부여하여 애니메이션을
                    구성하였습니다.
                  </p>
                </div>
                <div className="box_pic">
                  <Iframe
                    url="https://fangmin26.github.io/cssani/isoball/isometricball.html"
                    scrolling="no"
                    className="hover"
                    frameborder="0"
                  />
                </div>
              </div>
            </div>
            <div className="box_container right">
              <div className="box">
                <div className="box_pic">
                  <Iframe
                    url="https://fangmin26.github.io/cssani/bgani/backroundani.html"
                    scrolling="no"
                    className="hover"
                    frameborder="0"
                  />
                </div>
                <div className="box_desc">
                  <h3>CSS ANI PRJ2</h3>
                  <span className="view">
                    <Link to="https://codepen.io/fangmin/pen/OJpWdJa" />
                    view code
                    <span className="material-icons"> arrow_forward </span>
                  </span>
                  <p>
                    <strong>BACKROUND 3D</strong>
                    <br />
                    전체 화면 값을 고정시키고 pattern 부모 클래스를 생성하여
                    perspective, rotate 애니메이션을 부여합니다. 그 자식요소들의
                    위치값으로 입체적인 화면을 만들고 자식요소의
                    background-size값을 keyframe에 적용해 움직이는 듯한 효과를
                    줍니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="box_container left">
              <div className="box">
                <div className="box_desc">
                  <h3>CSS ANI PRJ3</h3>
                  <span className="view">
                    <Link to="https://codepen.io/fangmin/pen/JjWbRWE" />
                    view code
                    <span className="material-icons"> arrow_forward </span>
                  </span>
                  <p>
                    <strong>COFFEE ANIMATION</strong>
                    <br />
                    cup을 부모요소로 하여 각 요소를 배치시키고, background
                    컬러에 linear 컬러를 추가하여 입체적인 컵의 모양을 만듭니다.
                    수증기는 시간차 keyframe 으로 y축 값과 opacity 값을 조정하여
                    기본 틀을 만들고 각 span 에 filter와 animation-delay를
                    추가하였습니다.
                  </p>
                </div>
                <div className="box_pic">
                  <Iframe
                    url="https://fangmin26.github.io/cssani/coffee/coffee_css.html"
                    scrolling="no"
                    className="hover"
                    frameborder="0"
                  />
                </div>
              </div>
            </div>
            <div className="box_container right">
              <div className="box">
                <div className="box_pic">
                  <Iframe
                    url="https://fangmin26.github.io/cssani/transform/transform_css.html"
                    scrolling="no"
                    className="hover"
                    frameborder="0"
                  />
                </div>
                <div className="box_desc">
                  <h3>CSS ANI PRJ4</h3>
                  <span className="view">
                    <Link to="https://codepen.io/fangmin/pen/PopGLzp" />
                    view code
                    <span className="material-icons"> arrow_forward </span>
                  </span>
                  <p>
                    <strong>TRANSFORM ANIMATION</strong>
                    <br />
                    자주 사용하는 6가지 transform animation을 함께
                    담아보았습니다. row div를 설정하여 2열을 만들고 animation
                    값으로 scale, rotate, translate 활용하여 delay 값으로
                    움직임을 더했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
}
export default Css;
