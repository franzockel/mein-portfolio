import { useState, useEffect } from "react";

import dataVita from "../dataVita";
import cursorRight from "../assets/cursors/cursor-scroll-right.png";
import cursorRightTransparent from "../assets/cursors/cursor-scroll-right-transparent.png";
import cursorLeft from "../assets/cursors/cursor-scroll-left.png";
import cursorLeftTransparent from "../assets/cursors/cursor-scroll-left-transparent.png";

import "./SectionVita.css";

import SectionVitaTile from "./SectionVitaTile";

export default function SectionVita() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const gap = 64;

  let headline = "Lebens&shy;lauf";
  const processedHeadline = headline.replace(/&shy;/g, "\u00AD");

  useEffect(() => {
    const slider = document.querySelector(".slider");
    const tile = document.querySelector(".vita-tile");
    if (!slider || !tile) return;

    const tileWidth = tile.offsetWidth;
    const windowWidth = window.innerWidth;

    let shiftAmount;

    if (windowWidth <= 768) {
      shiftAmount = -(tileWidth + 32) * currentSlide - gap + 64;
    } else {
      shiftAmount = -(tileWidth + gap) * currentSlide;
    }

    slider.style.transform = `translateX(${shiftAmount}px)`;
  }, [currentSlide]);

  function handleHover(event) {
    const hoverPosition = event.clientX;
    const windowWidth = window.innerWidth;
    const sliderContainer = document.querySelector(".slider-container");

    let cursor;

    if (hoverPosition > windowWidth / 2) {
      if (currentSlide >= dataVita.length - 1) {
        cursor = `url(${cursorRightTransparent}) 30 15, grab`;
      } else {
        cursor = `url(${cursorRight}) 30 15, grab`;
      }
    } else {
      if (currentSlide === 0) {
        cursor = `url(${cursorLeftTransparent}) 0 15, grab`;
      } else {
        cursor = `url(${cursorLeft}) 0 15, grab`;
      }
    }

    sliderContainer.style.cursor = cursor;
  }

  function handleClick(event) {
    const clickPosition = event.clientX;
    const windowWidth = window.innerWidth;

    let newSlide = currentSlide;

    if (clickPosition > windowWidth / 2) {
      if (currentSlide < dataVita.length - 1) {
        newSlide = currentSlide + 1;
      }
    } else {
      if (currentSlide > 0) {
        newSlide = currentSlide - 1;
      }
    }
    if (newSlide !== currentSlide) {
      setCurrentSlide(newSlide);
    }
  }

  function buttonLeft() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function buttonRight() {
    if (currentSlide < dataVita.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <section className="section-vita">
      <h2>{processedHeadline}</h2>
      <div
        className="slider-container"
        onClick={handleClick}
        onMouseMove={handleHover}
      >
        <div className="slider">
          {dataVita.map(function (data) {
            return (
              <SectionVitaTile
                key={data.job}
                time={data.time}
                job={data.job}
                place={data.place}
                info={data.info}
              />
            );
          })}
        </div>
      </div>
      <div className="mobile-slider-navigation">
        <button
          onClick={buttonLeft}
          className={currentSlide === 0 ? "disabled" : ""}
        >
          <img src={cursorLeft} alt="Scroll left" />
        </button>
        <button
          onClick={buttonRight}
          className={currentSlide >= dataVita.length - 1 ? "disabled" : ""}
        >
          <img src={cursorRight} alt="Scroll right" />
        </button>
      </div>
    </section>
  );
}
