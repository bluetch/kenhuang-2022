const Portfolio = (req, res) => {
  const portfolio = [
    // {
    //   name: "Good Finance Careers",
    //   category: ["frontend", "design"],
    //   date: 2021,
    //   url: "/portfolio/goodfinance-careers",
    //   desc: "To improve performance and get more acquisition for e-commerce",
    //   img: "/images/portfolio/goodfinance_careers_cover.png",
    //   state: true
    // },
    // {
    //   name: "Good Finance Learning Center",
    //   category: ["frontend"],
    //   date: 2022,
    //   url: "/portfolio/goodfinance-learning-center",
    //   desc: "To improve performance and get more acquisition for e-commerce",
    //   img: "/images/portfolio/goodfinance_learning_center_cover.png",
    //   state: true
    // },
    // {
    //   name: "Good Finance GoodNote",
    //   category: ["frontend", "design"],
    //   date: 2022,
    //   url: "/portfolio/goodfinance-goodnote",
    //   desc: "To improve performance and get more acquisition for e-commerce",
    //   img: "/images/portfolio/goodfinance_goodnote_cover.png",
    //   state: true
    // },
    {
      name: "Good Finance One Account Admin",
      category: ["frontend"],
      date: 2021,
      url: "/portfolio/goodfinance-one-account-admin",
      desc: "To improve performance and get more acquisition for e-commerce",
      img: "/images/portfolio/goodfinance_one_account_admin_cover.png",
      state: true
    },
    {
      name: "Shopee Product Detail Page Refactor",
      category: ["design"],
      date: 2018,
      url: "/portfolio/shopee-product-detail-page-refactor",
      desc: "To improve performance and get more acquisition for e-commerce",
      img: "/images/portfolio/shopee-amp-product-detail-page.jpg",
      state: true
    },
    // {
    //   name: "Shopee Design Language System",
    //   category: ["design"],
    //   date: 2018,
    //   url: "/portfolio/design-language-system",
    //   desc: "A set of rules and guidelines help work efficiency",
    //   img: "/images/portfolio/design-language-system-cover.jpg",
    //   state: true
    // },
    {
      name: "Pet Adoption",
      category: ["design"],
      date: 2018,
      url: "/portfolio/design-exercise-pet-adoption",
      desc: "Design exercise",
      img: "/images/portfolio/pet-adoption-cover.png",
      state: true
    },
    {
      name: "Shopee Graphic Recruitment",
      category: ["design"],
      date: 2018,
      url: "/portfolio/shopee-recruitment",
      desc: "Social network recruitment strategy",
      img: "/images/portfolio/shopee-recruitment-frog-cover.png",
      state: true
    },
    // {
    //   name: "Prescription Helper",
    //   category: ["design", "frontend"],
    //   date: 2016,
    //   url: "/portfolio/prescription-helper",
    //   desc: "A simple Medical App for get drugs of prescription",
    //   img: "/images/portfolio/prescription-helper-cover.png",
    //   state: true
    // },
    {
      name: "LINE Flash Sale",
      category: ["frontend"],
      date: 2015,
      url: "/portfolio/line-flash-sale",
      desc: "Deliver UX/UI design for Web App for LINE",
      img: "/images/portfolio/line-flash-sale-cover.png",
      state: true
    },
    {
      name: "Lost Device Protection",
      date: 2013,
      category: ["frontend"],
      url: "/portfolio/lost-device-protection",
      desc: "Trend Micro",
      img: "/images/portfolio/lost-device-protection-cover.jpg",
      state: true
    },
    // {
    //   name: "Jewelry Box",
    //   date: 2012,
    //   category: ["frontend"],
    //   url: "/portfolio/jewelry-box",
    //   desc: "Trend Micro",
    //   img: "/images/portfolio/jewelry-box-cover.jpg",
    //   state: true
    // },
  ];
  return res.status(200).json(portfolio);
};

export default Portfolio;
