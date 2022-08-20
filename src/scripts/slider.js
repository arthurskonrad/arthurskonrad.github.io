const sliders = document.querySelectorAll("[data-slider]");

const advance = ({ slider, index = 1, type = "right" }) => {
  const rail = slider.querySelector("[data-slider-rail]");

  const position = parseInt(rail.dataset.sliderCurrentPosition, 10);

  const railCount = rail.childElementCount;

  if (position >= railCount - 1 && type === "right") {
    rail.dataset.sliderCurrentPosition = 0;
  } else if (position >= railCount - 1 && type === "left") {
    rail.dataset.sliderCurrentPosition = position - 1;
  } else if (position <= 0 && type === "left") {
    rail.dataset.sliderCurrentPosition = railCount - 1;
  } else if (position < 0) {
    rail.dataset.sliderCurrentPosition = railCount - 1;
  } else {
    rail.dataset.sliderCurrentPosition = position + index;
  }

  const newPosition = parseInt(rail.dataset.sliderCurrentPosition, 10);

  const translateX = `translateX(-${newPosition * 240}px)`;

  rail.style.webkitTransform = translateX;
  rail.style.MozTransform = translateX;
  rail.style.msTransform = translateX;
  rail.style.OTransform = translateX;
  rail.style.transform = translateX;
};

sliders.forEach((slider) => {
  const rail = slider.querySelector("[data-slider-rail]");
  const left = slider.querySelector("[data-slider-left]");
  const right = slider.querySelector("[data-slider-right]");

  for (let index = 0; index < rail.children.length; index++) {
    const image = rail.children[index];

    image.dataset.sliderImagePosition = index;
  }

  rail.dataset.sliderCurrentPosition = 0;

  const automateScrollStart = () => {
    return setInterval(() => advance({ slider }), 2500);
  };

  let automateScroll = automateScrollStart();

  left.addEventListener("click", () =>
    advance({ slider, index: -1, type: "left" })
  );
  right.addEventListener("click", () => advance({ slider, index: 1 }));

  left.addEventListener("click", () => {
    clearInterval(automateScroll);
  });

  right.addEventListener("click", () => {
    clearInterval(automateScroll);
  });

  slider.addEventListener("mouseover", () => {
    clearInterval(automateScroll);
  });

  slider.addEventListener("mouseout", () => {
    automateScroll = automateScrollStart();
  });
});
