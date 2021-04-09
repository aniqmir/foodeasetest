import React, { useEffect } from "react";
import "./Landing.css";
import FoodEaseLogo from "../assets/FoodEaseLogo.png";
import { Fade } from "reactstrap";

const Landing = () => {
  useEffect(() => {
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  }, []);

  return (
    <div className="landing">
      <div>
        <img src={FoodEaseLogo} lazyload className="logo"></img>
      </div>
      <div>
        <div className="dottedLine"></div>
        {/* <div
          className="background svelte-yd0o6d teal lighten-1"
          style="opacity:0.3;left:0%;width:0%"
        ></div>
        <div
          className="determinate svelte-yd0o6d striped teal"
          style="width: 0%;"
        ></div>
        <div className="s-progress-linear__content svelte-yd0o6d"></div>
        <div className="stream teal svelte-yd0o6d" style="width: 100%;"></div> */}
      </div>

      <h1>
        <p className="static">WE ARE &nbsp;</p>
        <a
          href="#"
          className="typewrite"
          data-period="2000"
          data-type='[ "Food Ease.", "Food Revolution of 2021.", "Your Ultimate Food Guide.", "The Next Food Chapter.","COMING SOON..." ]'
        >
          <span class="wrap"></span>
        </a>
      </h1>

      <div className="comingsoon">
        <h2 className="blink_me">COMING SOON</h2>
      </div>
      <div className="footer">
        <div className="socialmedia">
          <button
            onClick={() =>
              window.open("https://www.instagram.com/foodease.live/", "_blank")
            }
            className="iconbutton facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/foodease.live/", "_blank")
            }
            className="iconbutton instagram"
          >
            <i class="fab fa-instagram"></i>
          </button>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/foodease.live/", "_blank")
            }
            className="iconbutton link"
          >
            <i class="fas fa-link"></i>
          </button>
        </div>
        <div className="allrights">© All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Landing;
