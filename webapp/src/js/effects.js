const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Google Maps Api

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.1064, lng: -117.593109 },
    zoom: 8,
  });
}

// Loan Calculator

// // Listen for submit
// document
//   .getElementById("loan-form")
//   .addEventListener("submit", calculateResults);

// // Calculate Results
// function calculateResults(e) {
//   console.log("Calculating...");
//   // UI Vars
//   const amount = document.getElementById("amount");
//   const interest = document.getElementById("interest");
//   const years = document.getElementById("years");
//   const monthlyPayment = document.getElementById("monthly-payment");
//   const totalPayment = document.getElementById("total-payment");
//   const totalInterest = document.getElementById("total-interest");

//   const principal = parseFloat(amount.value);
//   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
//   const calculatedPayments = parseFloat(years.value) * 12;

//   // Compute monthly payment
//   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
//   const monthly = (principal * x * calculatedInterest) / (x - 1);

//   if (isFinite(monthly)) {
//     monthlyPayment.value = monthly.toFixed(2);
//     totalPayment.value = (monthly * calculatedPayments).toFixed(2);
//     totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
//   } else {
//     showError("Please check your numbers");
//   }

//   e.preventDefault();
// }

// // Show Error
// function showError(error) {
//   // Create a div
//   const errorDiv = document.createElement("div");

//   // Get elements
//   const card = document.querySelector(".card");
//   const heading = document.querySelector(".heading");

//   // Add class
//   errorDiv.className = "alert alert-danger";

//   // Create text node and append to div
//   errorDiv.appendChild(document.createTextNode(error));

//   // Insert error above heading
//   card.insertBefore(errorDiv, heading);

//   // Clear error after 3 seconds
//   setTimeout(clearError, 3000);
// }

// // Clear error
// function clearError() {
//   document.querySelector(".alert").remove();
// }

// Lightbox
/*!
 * Lightbox v2.11.1
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], b)
    : "object" == typeof exports
    ? (module.exports = b(require("jquery")))
    : (a.lightbox = b(a.jQuery));
})(this, function (a) {
  function b(b) {
    (this.album = []),
      (this.currentImageIndex = void 0),
      this.init(),
      (this.options = a.extend({}, this.constructor.defaults)),
      this.option(b);
  }
  return (
    (b.defaults = {
      albumLabel: "Image %1 of %2",
      alwaysShowNavOnTouchDevices: !1,
      fadeDuration: 600,
      fitImagesInViewport: !0,
      imageFadeDuration: 600,
      positionFromTop: 50,
      resizeDuration: 700,
      showImageNumberLabel: !0,
      wrapAround: !1,
      disableScrolling: !1,
      sanitizeTitle: !1,
    }),
    (b.prototype.option = function (b) {
      a.extend(this.options, b);
    }),
    (b.prototype.imageCountLabel = function (a, b) {
      return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b);
    }),
    (b.prototype.init = function () {
      var b = this;
      a(document).ready(function () {
        b.enable(), b.build();
      });
    }),
    (b.prototype.enable = function () {
      var b = this;
      a("body").on(
        "click",
        "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",
        function (c) {
          return b.start(a(c.currentTarget)), !1;
        }
      );
    }),
    (b.prototype.build = function () {
      if (!(a("#lightbox").length > 0)) {
        var b = this;
        a(
          '<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>'
        ).appendTo(a("body")),
          (this.$lightbox = a("#lightbox")),
          (this.$overlay = a("#lightboxOverlay")),
          (this.$outerContainer = this.$lightbox.find(".lb-outerContainer")),
          (this.$container = this.$lightbox.find(".lb-container")),
          (this.$image = this.$lightbox.find(".lb-image")),
          (this.$nav = this.$lightbox.find(".lb-nav")),
          (this.containerPadding = {
            top: parseInt(this.$container.css("padding-top"), 10),
            right: parseInt(this.$container.css("padding-right"), 10),
            bottom: parseInt(this.$container.css("padding-bottom"), 10),
            left: parseInt(this.$container.css("padding-left"), 10),
          }),
          (this.imageBorderWidth = {
            top: parseInt(this.$image.css("border-top-width"), 10),
            right: parseInt(this.$image.css("border-right-width"), 10),
            bottom: parseInt(this.$image.css("border-bottom-width"), 10),
            left: parseInt(this.$image.css("border-left-width"), 10),
          }),
          this.$overlay.hide().on("click", function () {
            return b.end(), !1;
          }),
          this.$lightbox.hide().on("click", function (c) {
            "lightbox" === a(c.target).attr("id") && b.end();
          }),
          this.$outerContainer.on("click", function (c) {
            return "lightbox" === a(c.target).attr("id") && b.end(), !1;
          }),
          this.$lightbox.find(".lb-prev").on("click", function () {
            return (
              0 === b.currentImageIndex
                ? b.changeImage(b.album.length - 1)
                : b.changeImage(b.currentImageIndex - 1),
              !1
            );
          }),
          this.$lightbox.find(".lb-next").on("click", function () {
            return (
              b.currentImageIndex === b.album.length - 1
                ? b.changeImage(0)
                : b.changeImage(b.currentImageIndex + 1),
              !1
            );
          }),
          this.$nav.on("mousedown", function (a) {
            3 === a.which &&
              (b.$nav.css("pointer-events", "none"),
              b.$lightbox.one("contextmenu", function () {
                setTimeout(
                  function () {
                    this.$nav.css("pointer-events", "auto");
                  }.bind(b),
                  0
                );
              }));
          }),
          this.$lightbox.find(".lb-loader, .lb-close").on("click", function () {
            return b.end(), !1;
          });
      }
    }),
    (b.prototype.start = function (b) {
      function c(a) {
        d.album.push({
          alt: a.attr("data-alt"),
          link: a.attr("href"),
          title: a.attr("data-title") || a.attr("title"),
        });
      }
      var d = this,
        e = a(window);
      e.on("resize", a.proxy(this.sizeOverlay, this)),
        this.sizeOverlay(),
        (this.album = []);
      var f,
        g = 0,
        h = b.attr("data-lightbox");
      if (h) {
        f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');
        for (var i = 0; i < f.length; i = ++i)
          c(a(f[i])), f[i] === b[0] && (g = i);
      } else if ("lightbox" === b.attr("rel")) c(b);
      else {
        f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
        for (var j = 0; j < f.length; j = ++j)
          c(a(f[j])), f[j] === b[0] && (g = j);
      }
      var k = e.scrollTop() + this.options.positionFromTop,
        l = e.scrollLeft();
      this.$lightbox
        .css({ top: k + "px", left: l + "px" })
        .fadeIn(this.options.fadeDuration),
        this.options.disableScrolling &&
          a("body").addClass("lb-disable-scrolling"),
        this.changeImage(g);
    }),
    (b.prototype.changeImage = function (b) {
      var c = this,
        d = this.album[b].link,
        e = d.split(".").slice(-1)[0],
        f = this.$lightbox.find(".lb-image");
      this.disableKeyboardNav(),
        this.$overlay.fadeIn(this.options.fadeDuration),
        a(".lb-loader").fadeIn("slow"),
        this.$lightbox
          .find(
            ".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption"
          )
          .hide(),
        this.$outerContainer.addClass("animating");
      var g = new Image();
      (g.onload = function () {
        var h, i, j, k, l, m;
        f.attr({ alt: c.album[b].alt, src: d }),
          a(g),
          f.width(g.width),
          f.height(g.height),
          (m = a(window).width()),
          (l = a(window).height()),
          (k =
            m -
            c.containerPadding.left -
            c.containerPadding.right -
            c.imageBorderWidth.left -
            c.imageBorderWidth.right -
            20),
          (j =
            l -
            c.containerPadding.top -
            c.containerPadding.bottom -
            c.imageBorderWidth.top -
            c.imageBorderWidth.bottom -
            c.options.positionFromTop -
            70),
          "svg" === e &&
            ((0 !== g.width && 0 !== g.height) || (f.width(k), f.height(j))),
          c.options.fitImagesInViewport
            ? (c.options.maxWidth &&
                c.options.maxWidth < k &&
                (k = c.options.maxWidth),
              c.options.maxHeight &&
                c.options.maxHeight < j &&
                (j = c.options.maxHeight))
            : ((k = c.options.maxWidth || g.width || k),
              (j = c.options.maxHeight || g.height || j)),
          (g.width > k || g.height > j) &&
            (g.width / k > g.height / j
              ? ((i = k),
                (h = parseInt(g.height / (g.width / i), 10)),
                f.width(i),
                f.height(h))
              : ((h = j),
                (i = parseInt(g.width / (g.height / h), 10)),
                f.width(i),
                f.height(h))),
          c.sizeContainer(f.width(), f.height());
      }),
        (g.src = this.album[b].link),
        (this.currentImageIndex = b);
    }),
    (b.prototype.sizeOverlay = function () {
      var b = this;
      setTimeout(function () {
        b.$overlay.width(a(document).width()).height(a(document).height());
      }, 0);
    }),
    (b.prototype.sizeContainer = function (a, b) {
      function c() {
        d.$lightbox.find(".lb-dataContainer").width(g),
          d.$lightbox.find(".lb-prevLink").height(h),
          d.$lightbox.find(".lb-nextLink").height(h),
          d.$overlay.focus(),
          d.showImage();
      }
      var d = this,
        e = this.$outerContainer.outerWidth(),
        f = this.$outerContainer.outerHeight(),
        g =
          a +
          this.containerPadding.left +
          this.containerPadding.right +
          this.imageBorderWidth.left +
          this.imageBorderWidth.right,
        h =
          b +
          this.containerPadding.top +
          this.containerPadding.bottom +
          this.imageBorderWidth.top +
          this.imageBorderWidth.bottom;
      e !== g || f !== h
        ? this.$outerContainer.animate(
            { width: g, height: h },
            this.options.resizeDuration,
            "swing",
            function () {
              c();
            }
          )
        : c();
    }),
    (b.prototype.showImage = function () {
      this.$lightbox.find(".lb-loader").stop(!0).hide(),
        this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),
        this.updateNav(),
        this.updateDetails(),
        this.preloadNeighboringImages(),
        this.enableKeyboardNav();
    }),
    (b.prototype.updateNav = function () {
      var a = !1;
      try {
        document.createEvent("TouchEvent"),
          (a = !!this.options.alwaysShowNavOnTouchDevices);
      } catch (a) {}
      this.$lightbox.find(".lb-nav").show(),
        this.album.length > 1 &&
          (this.options.wrapAround
            ? (a &&
                this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"),
              this.$lightbox.find(".lb-prev, .lb-next").show())
            : (this.currentImageIndex > 0 &&
                (this.$lightbox.find(".lb-prev").show(),
                a && this.$lightbox.find(".lb-prev").css("opacity", "1")),
              this.currentImageIndex < this.album.length - 1 &&
                (this.$lightbox.find(".lb-next").show(),
                a && this.$lightbox.find(".lb-next").css("opacity", "1"))));
    }),
    (b.prototype.updateDetails = function () {
      var a = this;
      if (
        void 0 !== this.album[this.currentImageIndex].title &&
        "" !== this.album[this.currentImageIndex].title
      ) {
        var b = this.$lightbox.find(".lb-caption");
        this.options.sanitizeTitle
          ? b.text(this.album[this.currentImageIndex].title)
          : b.html(this.album[this.currentImageIndex].title),
          b.fadeIn("fast");
      }
      if (this.album.length > 1 && this.options.showImageNumberLabel) {
        var c = this.imageCountLabel(
          this.currentImageIndex + 1,
          this.album.length
        );
        this.$lightbox.find(".lb-number").text(c).fadeIn("fast");
      } else this.$lightbox.find(".lb-number").hide();
      this.$outerContainer.removeClass("animating"),
        this.$lightbox
          .find(".lb-dataContainer")
          .fadeIn(this.options.resizeDuration, function () {
            return a.sizeOverlay();
          });
    }),
    (b.prototype.preloadNeighboringImages = function () {
      if (this.album.length > this.currentImageIndex + 1) {
        new Image().src = this.album[this.currentImageIndex + 1].link;
      }
      if (this.currentImageIndex > 0) {
        new Image().src = this.album[this.currentImageIndex - 1].link;
      }
    }),
    (b.prototype.enableKeyboardNav = function () {
      this.$lightbox.on("keyup.keyboard", a.proxy(this.keyboardAction, this)),
        this.$overlay.on("keyup.keyboard", a.proxy(this.keyboardAction, this));
    }),
    (b.prototype.disableKeyboardNav = function () {
      this.$lightbox.off(".keyboard"), this.$overlay.off(".keyboard");
    }),
    (b.prototype.keyboardAction = function (a) {
      var b = a.keyCode;
      27 === b
        ? (a.stopPropagation(), this.end())
        : 37 === b
        ? 0 !== this.currentImageIndex
          ? this.changeImage(this.currentImageIndex - 1)
          : this.options.wrapAround &&
            this.album.length > 1 &&
            this.changeImage(this.album.length - 1)
        : 39 === b &&
          (this.currentImageIndex !== this.album.length - 1
            ? this.changeImage(this.currentImageIndex + 1)
            : this.options.wrapAround &&
              this.album.length > 1 &&
              this.changeImage(0));
    }),
    (b.prototype.end = function () {
      this.disableKeyboardNav(),
        a(window).off("resize", this.sizeOverlay),
        this.$lightbox.fadeOut(this.options.fadeDuration),
        this.$overlay.fadeOut(this.options.fadeDuration),
        this.options.disableScrolling &&
          a("body").removeClass("lb-disable-scrolling");
    }),
    new b()
  );
});
//# sourceMappingURL=lightbox.min.map


