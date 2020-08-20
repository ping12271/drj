$(function () {
    drjart.init();
})
const drjart = {
    init: function () {
        drjart.slider();
        drjart.sliderNav();
        drjart.handleSideMenu();
        drjart.fullPage();
        drjart.toggleClass();
        drjart.slideToggle();
        drjart.tabMenu();
        drjart.getScroll();
        drjart.renderProductBest();
        drjart.renderProductBenefit();
    },

    slider: function () {
        $('.visual,.product-slide,.main-slide').slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 2000,
            fade: true,
        });
        const slickCustomEvent = {
            init : function(){
                slickCustomEvent.initialize()
                slickCustomEvent.beforeChange()
                slickCustomEvent.afterChange()
            },
            initialize : function(){
                const dataIndex = $('[data-slick-index="0"]');
                dataIndex.find('h1,p,.slide-btn').addClass('fadeInUp');
            },
            beforeChange : function(){
                $('.fade').on('beforeChange', function(event, slick, currentSlide){
                    $('h1,p,.slide-btn').removeClass('fadeInUp');
                })
            },
            afterChange : function(){
                $('.fade').on('afterChange', function(event, slick, currentSlide){
                    const dataIndex = $('[data-slick-index="' + currentSlide + '"]');
                    dataIndex.find('h1,p,.slide-btn').addClass('fadeInUp');
                });
            }
        }
        slickCustomEvent.init();

        $('.story-slide').slick({
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
        });
    },

    sliderNav: function () {
        $('.visual-for').slick({
            autoplay: true,
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.visual-nav'
        });
        $('.visual-nav').slick({
            autoplay: true,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.visual-for',
            centerMode: true,
            focusOnSelect: true,
            vertical: true
        });
    },

    handleSideMenu: function () {
        $('.all-menu').on('click', function () {
            $('html').toggleClass('open-side-menu');
        })
        $('.side-header .screen').on('click', function () {
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
        $('.text-review .more,.description .close').on('click', function () {
            $(this).closest('.item').toggleClass('open-review');
        });
    },

    slideToggle: function () {
        $('.star-score .name').on('click', function () {
            $('.star-score .dropdown').slideToggle();
        });

        $('.menu-item .name').on('click', function () {
            $(this).find('i').toggleClass('active');
            $(this).closest('.menu-item').siblings().find('i').removeClass('active');
            $(this).next('.dropdown').slideToggle();
            $(this).closest('.menu-item').siblings().find('.dropdown').slideUp();
        });

        $('.type-select').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    },

    tabMenu: function () {
        $('.contents nav a').on('click', function () {
            const index = $(this).index();
            $(this).addClass('is-active').siblings().removeClass('is-active');
            $('.contents .content').eq(index).show().siblings().hide();
        }).eq(0).trigger('click');
    },


    getScroll: function () {
        $(window).on("scroll", function () {
            const scrollTop = $(window).scrollTop();
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
                a: "https://ping12271.github.io/drj/pages/detail.html",
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
                a: "https://ping12271.github.io/drj/pages/detail.html",
                image: "../images/1591672265339.webp",
                tags: "#프라이머선크림",
                productName: "솔라바이옴™프라이머 특별기획세트",
                price: {
                    currentPrice: '29,000원',
                    origin: '',
                },
                labels: [],
            },
            {
                a: "https://ping12271.github.io/drj/pages/detail.html",
                image: "../images/1587723450681.webp",
                tags: "#시카베스트세트",
                productName: "시카페어 취향저격 세트",
                price: {
                    currentPrice: '73,950원',
                    origin: '87,000원',
                },
                labels: ["new", "best", "gift", "sale"],
            },
            {
                a: "https://ping12271.github.io/drj/pages/detail.html",
                image: "../images/1589418738580.webp",
                tags: '#233억에센스+톤업샷"',
                productName: "바이옴 에센스&블루 샷",
                price: {
                    currentPrice: '35,700원',
                    origin: '42,000원원',
                },
                labels: ["best", "gift", "sale"]
            },
            {
                a: "https://ping12271.github.io/drj/pages/detail.html",
                image: "../images/1589852789984.webp",
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
                            <a href="${item.a}">
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
                            </a>
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
                                <a href="#!" class="favorite">
                                    <img src="../images/btn_wish.webp" alt="">
                                </a>
                            </div>
                        </div>
                </li>
            `
        })

        $('.product-items.best ul').html(productsDom);
    },

    renderProductBenefit: function () {
        const products = [
            {
                a: "https://ping12271.github.io/drj/pages/detail.html",
                image: "../images/1590393773811.webp",
                tags: "#시카리페어세럼 ",
                productName: "2세대 시카페어 세럼",
                price: {
                    currentPrice: '37,050원',
                    origin: '39,000원',
                },
                labels: ["new","best","gift"]
            },
            {
                a: "https://ping12271.github.io/drj/pages/detail.html",
                image: "../images/1587020955660.webp",
                tags: "#수분체질개선_에센스",
                productName: "바이탈 하이드라 솔루션 바이옴 에센스 150mL",
                price: {
                    currentPrice: '49,000원',
                    origin: '',
                },
                labels: ["best"]
            },
            {
                a: "https://ping12271.github.io/drj/pages/detail.html",
                image: "../images/1587022010571.webp",
                tags: "# 함께해서 15% SALE",
                productName: "티트리먼트™ 대용량 2종세트",
                price: {
                    currentPrice: '56,950원',
                    origin: '67,000',
                },
                labels: ["best"]
            },
            {
                a: "https://ping12271.github.io/drj/pages/detail.html",
                image: "../images/1563762254864.webp",
                tags: "#탱글수분크림",
                productName: "솔라바이옴™앰플 특별 기획세트",
                price: {
                    currentPrice: '35,700원',
                    origin: '42,000원',
                },
                labels: ["best","gift","sale"]
            },
            {
                a: "https://ping12271.github.io/drj/pages/detail.html",
                image: "../images/1591944934738.webp",
                tags: "#민감피부선크림",
                productName: "솔라바이옴™징크림 특별 기획세트",
                price: {
                    currentPrice: '26,100원',
                    origin: '29,000원',
                },
                labels: ["best"]
            },
        ]
        const producstDom = products.map(function (item) {
            return `
                <li>
                        <div class="item">
                            <a href="${item.a}">
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
                            </a>
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
                                <a href="#!" class="favorite">
                                    <img src="../images/btn_wish.webp" alt="">
                                </a>
                            </div>
                        </div>
                </li>
            `
        })

        $('.product-items.benefit ul').html(producstDom);
    },

};