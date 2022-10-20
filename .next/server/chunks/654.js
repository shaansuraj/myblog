"use strict";
exports.id = 654;
exports.ids = [654];
exports.modules = {

/***/ 654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* reexport */ sections_AdjacentPosts),
  "S": () => (/* reexport */ sections_FeaturedPosts)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/index.jsx + 13 modules
var components = __webpack_require__(6016);
// EXTERNAL MODULE: ./services/index.js
var services = __webpack_require__(4607);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./sections/AdjacentPosts.jsx







const AdjacentPosts = ({
  createdAt,
  slug
}) => {
  const {
    0: adjacentPost,
    1: setAdjacentPost
  } = (0,external_react_.useState)(null);
  const {
    0: dataLoaded,
    1: setDataLoaded
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    (0,services/* getAdjacentPosts */.dp)(createdAt, slug).then(result => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [slug]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8",
    children: dataLoaded && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [adjacentPost.previous && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${adjacentPost.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`,
        children: /*#__PURE__*/jsx_runtime_.jsx(components/* AdjacentPostCard */.fo, {
          post: adjacentPost.previous,
          position: "LEFT"
        })
      }), adjacentPost.next && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${adjacentPost.previous ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`,
        children: /*#__PURE__*/jsx_runtime_.jsx(components/* AdjacentPostCard */.fo, {
          post: adjacentPost.next,
          position: "RIGHT"
        })
      })]
    })
  });
};

/* harmony default export */ const sections_AdjacentPosts = (AdjacentPosts);
// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__(2312);
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);
;// CONCATENATED MODULE: ./sections/FeaturedPosts.jsx






const responsive = {
  superLargeDesktop: {
    breakpoint: {
      max: 4000,
      min: 1024
    },
    items: 5
  },
  desktop: {
    breakpoint: {
      max: 1024,
      min: 768
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 768,
      min: 640
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 640,
      min: 0
    },
    items: 1
  }
};

const FeaturedPosts = () => {
  const {
    0: featuredPosts,
    1: setFeaturedPosts
  } = (0,external_react_.useState)([]);
  const {
    0: dataLoaded,
    1: setDataLoaded
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    (0,services/* getFeaturedPosts */.mH)().then(result => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full",
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6 text-white w-full",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M10 19l-7-7m0 0l7-7m-7 7h18"
      })
    })
  });

  const customRightArrow = /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full",
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6 text-white w-full",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M14 5l7 7m0 0l-7 7m7-7H3"
      })
    })
  });

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "mb-8",
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_multi_carousel_default()), {
      infinite: true,
      customLeftArrow: customLeftArrow,
      customRightArrow: customRightArrow,
      responsive: responsive,
      itemClass: "px-4",
      children: dataLoaded && featuredPosts.map((post, index) => /*#__PURE__*/jsx_runtime_.jsx(components/* FeaturedPostCard */.Cp, {
        post: post
      }, index))
    })
  });
};

/* harmony default export */ const sections_FeaturedPosts = (FeaturedPosts);
;// CONCATENATED MODULE: ./sections/index.js



/***/ })

};
;