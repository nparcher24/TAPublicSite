import React from "react";
// require("@shopify/buy-button-js");
// import ShopifyBuy from "shopify-buy";
import ShopifyBuy from "@shopify/buy-button-js";

export default function Store(props) {
  const elRef = React.useRef();

  var client = ShopifyBuy.buildClient({
    domain: "104010fitness.myshopify.com",
    storefrontAccessToken: "af1d71d65162e4fc5a0e1602bf27ee6a",
  });

  const UIComponent = ShopifyBuy.UI.init(client);

  React.useEffect(() => {
    UIComponent.createComponent("collection", {
      id: "266442342485",
      node: elRef.current,
      moneyFormat: "%24%7B%7Bamount%7D%7D",
      options: {
        product: {
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px",
                width: "calc(25% - 20px)",
              },
              img: {
                height: "calc(100% - 15px)",
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                "border-radius": "20px",
              },
              imgWrapper: {
                "padding-top": "calc(75% + 15px)",
                position: "relative",
                height: "0",
              },
              "font-family": "Montserrat, sans-serif",
            },
            button: {
              "font-family": "Montserrat, sans-serif",
              ":hover": {
                "background-color": "#2b4182",
              },
              "background-color": "#304890",
              ":focus": {
                "background-color": "#2b4182",
              },
            },
          },
          buttonDestination: "modal",
          contents: {
            options: false,
          },
          text: {
            button: "Learn More",
          },
          googleFonts: ["Montserrat"],
        },
        productSet: {
          styles: {
            products: {
              "@media (min-width: 601px)": {
                "margin-left": "-20px",
              },
            },
          },
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            button: false,
            buttonWithQuantity: true,
          },
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px",
              },
            },
            button: {
              "font-family": "Montserrat, sans-serif",
              ":hover": {
                "background-color": "#2b4182",
              },
              "background-color": "#304890",
              ":focus": {
                "background-color": "#2b4182",
              },
            },
          },
          googleFonts: ["Montserrat"],
          text: {
            button: "Add to cart",
          },
        },
        option: {},
        cart: {
          styles: {
            button: {
              "font-family": "Montserrat, sans-serif",
              ":hover": {
                "background-color": "#2b4182",
              },
              "background-color": "#304890",
              ":focus": {
                "background-color": "#2b4182",
              },
            },
          },
          text: {
            total: "Subtotal",
            button: "Checkout",
          },
          googleFonts: ["Montserrat"],
        },
        toggle: {
          styles: {
            toggle: {
              "font-family": "Montserrat, sans-serif",
              "background-color": "#304890",
              ":hover": {
                "background-color": "#2b4182",
              },
              ":focus": {
                "background-color": "#2b4182",
              },
            },
          },
          googleFonts: ["Montserrat"],
        },
      },
    });
  }, []);

  return (
    <div className="mt-20 md:mt-24 lg:mt-32 relative">
      <h1 className="font-heading text-2xl md:text-4xl lg:text-6xl w-full text-center p-2">
        OUR MERCH
      </h1>
      <div ref={elRef} />
    </div>
  );
}
