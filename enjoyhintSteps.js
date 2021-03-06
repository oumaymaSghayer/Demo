//initialize instance
var enjoyhint_instance = new EnjoyHint({});
var enjoyhint_script_steps = [
  {
    "next .product-description":
      " 👋 Hello! <br/> Read the description to find out more about the product 🔎",
    nextButton: { className: "myNext", text: "Next" },
    showSkip: false,
    showPrev: false,
  },

  {
    "next .product-color": "And hey, you can check the different colors 😎",
    nextButton: { className: "myNext", text: "Sure" },
    showSkip: false,
    showPrev: false,
  },

  {
    "next #recomend__widget":
      "But most of all, check what people have to say about it 🤔!<br/> Just scroll and watch reviews ✨",
    nextButton: { className: "myNext", text: "Got it!" },
    showSkip: false,
    showPrev: false,
  },
  {
    "next .rating-block": "Filter by rate here",
    nextButton: { className: "myNext", text: "Okay!" },
    showSkip: false,
    showPrev: false,
  },
  {
    "next .reviews-block": "Watch reviews and Scroll for more reviews",
    nextButton: { className: "myNext", text: "Okay!" },
    showSkip: false,
    showPrev: false,
  },
  {
    "next .product-price":
      " Made up your mind already? Good for you 🤗, <br/> just click on add to cart and go get that order 👌",
    nextButton: { className: "myNext", text: "Done!" },
    showPrev: false,
    showSkip: false,
  },
];

//set script config
enjoyhint_instance.set(enjoyhint_script_steps);

//run Enjoyhint script
enjoyhint_instance.run();
