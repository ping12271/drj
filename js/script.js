$(function () {
    drjart.init();
})
var drjart = {
    init: function () {
        drjart.slider();
        drjart.sliderNav();
        drjart.handleSideMenu();
        drjart.fullPage();
        drjart.toggleClass();
        drjart.slideToggle();
        drjart.reviewSlide();
        drjart.getScroll();
        drjart.renderProductBest();
        drjart.renderProductBenefit();
    },

    slider: function () {
        $('.visual, .product-slide, .main-slide').slick({
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 400,
            fade: true,
            arrows: false,
        });

        $('.story-slide').slick({
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
        });

    },

    sliderNav: function () {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    },

    handleSideMenu: function () {
        $('.all-menu').on('click', function () {
            $('html').toggleClass('open-side-menu');
        })
        $('.side-nav .screen').on('click', function () {
            $('html').removeClass('open-side-menu')
        })
    },

    fullPage: function () {
        $(document).ready(function () {
            $('#fullpage').fullpage({
                navigation: true,
                navigationPosition: 'right',
                autoScrolling: true,
                scrollHorizontally: true,
                anchors:['main-slide', 'project', 'movie', 'event']
            });

        });
    },

    toggleClass: function () {
        $('.chat').on('click', function () {
            $('.drop-icon, .chat-icon').toggleClass('is-active');
        });
    },

    slideToggle: function () {
        $('.star-score .name').on('click', function () {
            $('.star-score .dropdown').slideToggle();
        });

        $('.type-select .name').on('click', function () {
            $(this).next('.dropdown').slideDown();
            $(this).next().siblings('.dropdown').slideUp();
        });
    },

    reviewSlide: function () {
        $('.text-review .more').on('click', function () {
            $(this).closest('.item').addClass('open-review');
        });
        $('.description .open').on('click', function () {
            $(this).closest('.item').removeClass('open-review');
        })
    },

    getScroll: function () {
        $(window).on("scroll", function () {
            var scrollTop = $(window).scrollTop();
            if(scrollTop > 500) {
                $("html").addClass("get-scroll");
            } else {
                $("html").removeClass("get-scroll");
            }
        })
    },


    renderProductBest: function () {
        const products = [
            {
                a: "http://localhost:63342/drj/pages/detail.html?_ijt=6kpuc57cd6tbilqv9q7h05se9a",
                image: "../images/1560475092450.webp",
                tags: "#탱글수분크림",
                productName: "바이탈 하이드라 솔루션 바이옴 워터 크림",
                price: {
                    currentPrice: '38,000원',
                    origin: '',
                },
                labels: ["new","best","gift"]
            },
            {
                image: "../images/1587021615232.png",
                tags: "#프라이머선크림",
                productName: "솔라바이옴™프라이머 특별기획세트",
                price: {
                    currentPrice: '29,000원',
                    origin: '',
                },
                labels: [],
            },
            {
                image: "../images/1587723450681.png",
                tags: "#시카베스트세트",
                productName: "시카페어 취향저격 세트",
                price: {
                    currentPrice: '73,950원',
                    origin: '87,000원',
                },
                labels: ["new", "best", "gift", "sale"],
            },
            {
                image: "../images/1589418738580.png",
                tags: '#233억에센스+톤업샷"',
                productName: "바이옴 에센스&블루 샷",
                price: {
                    currentPrice: '35,700원',
                    origin: '42,000원원',
                },
                labels: ["best", "gift", "sale"]
            },
            {
                image: "../images/1589852789984.png",
                tags: "수분선앰플",
                productName: "솔라바이옴™앰플 특별 기획세트",
                price: {
                    currentPrice: '20,900원',
                    origin: '22,000원',
                },
                labels: ["best", "sale"]
            },
        ]

        const productsDom = products.map(function (item) {
            return `
                <li>
                        <div class="item">
                            <a href="${item.a}"></a>
                            <div class="thumb">
                                <img src=${item.image} alt="">
                                <div class="labels">
                                ${item.labels.map(function (label) {
                return `<div class="${label}">${label}</div>`
            }).join("")}
                                </div>
                            </div>
                            <div class="description">
                                <div class="tags">${item.tags}</div>
                                <h3>${item.productName}</h3>
                                <div class="price ${item.price.origin ? "sale" : ""}">
                                    <div class="origin-price">${item.price.origin}</div>
                                    <strong>${item.price.currentPrice}</strong>
                                </div>
                            </div>
                            <div class="buttons">
                                <a href="#!" class="buy">
                                    바로구매
                                    <span class="icon-plus"></span>
                                    <span class="slide-plus">
                                        <span class="screen"></span>
                                    </span>
                                </a>
                                <a href="#!" class="cart">
                                    <img src="../images/btn_cart.webp" alt="">
                                </a>
                                <div href="#!" class="favorite">
                                    <img src="../images/btn_wish.webp" alt="">
                                </div>
                            </div>
                        </divitem>
                </li>
            `
        })

        $('.product-items.best ul').html(productsDom);
    },

    renderProductBenefit: function () {
        const products = [
            {
                image: "../images/1587021615232.png",
                tags: "#탱글수분크림",
                productName: "솔라바이옴™앰플 특별 기획세트",
                price: {
                    currentPrice: '38,000원',
                    origin: '',
                },
                labels: ["new","best","gift"]
            },
            {
                image: "../images/1587021615232.png",
                tags: "#탱글수분크림",
                productName: "솔라바이옴™앰플 특별 기획세트",
                price: {
                    currentPrice: '39,000원',
                    origin: '',
                },
                labels: ["best"]
            },
            {
                image: "../images/1587021615232.png",
                tags: "#탱글수분크림",
                productName: "솔라바이옴™앰플 특별 기획세트",
                price: {
                    currentPrice: '29,000원',
                    origin: '',
                },
                labels: ["best"]
            },
            {
                image: "../images/1587021615232.png",
                tags: "#탱글수분크림",
                productName: "솔라바이옴™앰플 특별 기획세트",
                price: {
                    currentPrice: '35,700원',
                    origin: '42,000원',
                },
                labels: ["best","gift","sale"]
            },
            {
                image: "../images/1587021615232.png",
                tags: "#탱글수분크림",
                productName: "솔라바이옴™앰플 특별 기획세트",
                price: {
                    currentPrice: '22,000원',
                    origin: '',
                },
                labels: ["best"]
            },
        ]

        const producstDom = products.map(function (item) {
            return `
                <li>
                        <div class="item">
                            <div class="thumb">
                                <img src=${item.image} alt="">
                                <div class="labels">
                                ${item.labels.map(function (label) {
                return `<div class="${label}">${label}</div>`
            }).join("")}
                                </div>
                            </div>
                            <div class="description">
                                <div class="tags">${item.tags}</div>
                                <h3>${item.productName}</h3>
                                <div class="price ${item.price.origin ? "sale":""}">
                                    <div class="origin-price">${item.price.origin}</div>
                                    <stron>${item.price.currentPrice}</stron>
                                </div>
                            </div>
                            <div class="buttons">
                                <a class="buy">바로가기
                                    <span class="icon-plus"></span>
                                    <span class="slide-plus">
                                        <span class="screen"></span>
                                    </span>
                                </a>
                                <a href="#!" class="cart">
                                    <img src="../images/btn_cart.webp" alt="">
                                </a>
                                <a href="#!" class="favorite">
                                    <img src="../images/btn_wish.webp" alt="">
                                </a>
                            </div>
                        </div>
                </li>
            `
        })

        $('.product-items.benefit ul').html(producstDom);
    }

};