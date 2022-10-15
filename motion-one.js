"use strict";

import { inView, animate } from "https://cdn.skypack.dev/motion";

inView(".animate-container", ({ target }) => {
  animate(
    target.querySelectorAll(".animate-inview"),
    { opacity: 1, transform: "none" },
    { delay: 0.5, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});
