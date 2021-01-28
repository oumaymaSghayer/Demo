//initialize instance
var enjoyhint_instance = new EnjoyHint({});
var enjoyhint_script_steps = [
  {
    "click #search":
      " <h1>Hello !</h1>  <br/>  <h2> Welcome to our Demo! </h2> <br/> Click here to search for any product,",
    shape: "circle",
    // radius: 80,
  },
  {
    "next .product-description": " You'll find here description of the product",
    nextButton: { className: "myNext", text: "Next" },
    showSkip: false,
    showPrev: false,
  },
  /*{
    "next .left-column": " You can see the product here ,",
    nextButton: { className: "myNext", text: "Next" },
    showSkip: false,
    showPrev: false,
  },*/

  {
    "next .product-color": "Click on any to change the product color",
    nextButton: { className: "myNext", text: "Sure" },
    showSkip: false,
    showPrev: false,
  },
  {
    "click .product-price":
      " Check out the price, and  click to add it to your cart!",
    showSkip: false,
    showPrev: false,
    showNext: false,
  },
];

//set script config
enjoyhint_instance.set(enjoyhint_script_steps);

//run Enjoyhint script
enjoyhint_instance.run();
