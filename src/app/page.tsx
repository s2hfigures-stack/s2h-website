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
