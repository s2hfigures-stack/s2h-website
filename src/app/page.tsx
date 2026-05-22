import Script from "next/script";
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import { HowItWorks, WhyUs, CTABanner, WhatsAppFloat } from '@/components/sections/Sections'
import Marquee from '@/components/ui/Marquee'
import LoadingScreen from '@/components/ui/LoadingScreen'
import MobileOrderBar from '@/components/ui/MobileOrderBar'
import CustomCursor from '@/components/ui/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <div id="product-component-1779379310646"></div>
        <Script
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          document.head.appendChild(script);
          script.onload = ShopifyBuyInit;
        }

        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'buj9fc-vb.myshopify.com',
            storefrontAccessToken: '45f6a6055a18b587ed88716ffa9b826e',
          });

          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '7544913723463',
              node: document.getElementById('product-component-1779379310646'),
            });
          });
        }

        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
      })();
    `,
  }}
/>
        <div id='product-component-1779477950430'></div>
<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'buj9fc-vb.myshopify.com',
      storefrontAccessToken: '45f6a6055a18b587ed88716ffa9b826e',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7558002606151',
        node: document.getElementById('product-component-1779477950430'),
        moneyFormat: 'LE%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-family": "Lato, sans-serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "text": {
      "button": "Add to cart"
    },
    "googleFonts": [
      "Lato"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Lato, sans-serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "googleFonts": [
      "Lato"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Lato, sans-serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "googleFonts": [
      "Lato"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Lato, sans-serif"
      },
      "count": {
        "font-size": "16px"
      }
    },
    "googleFonts": [
      "Lato"
    ]
  }
},
      });
    });
  }
})();
/*]]>*/
</script>
        <Marquee />
        <HowItWorks />
        <WhyUs />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileOrderBar />
    </>
  )
}
