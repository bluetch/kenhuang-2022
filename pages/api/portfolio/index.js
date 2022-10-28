const Portfolio = (req, res) => {
  const portfolio = [
    // {
    //   name: "Careers",
    //   company: "Good Finance",
    //   category: ["frontend", "design"],
    //   date: 2021,
    //   url: "/portfolio/goodfinance-careers",
    //   desc: "To improve performance and get more acquisition for e-commerce",
    //   img: "/images/portfolio/goodfinance_careers_cover.png",
    //   state: true
    // },
    // {
    //   name: "Learning Center",
    //   company: "Good Finance",
    //   category: ["frontend"],
    //   date: 2022,
    //   url: "/portfolio/goodfinance-learning-center",
    //   desc: "To improve performance and get more acquisition for e-commerce",
    //   img: "/images/portfolio/goodfinance_learning_center_cover.png",
    //   state: true
    // },
    // {
    //   name: "GoodNote",
    //   company: "Good Finance",
    //   category: ["frontend", "design"],
    //   date: 2022,
    //   url: "/portfolio/goodfinance-goodnote",
    //   desc: "To improve performance and get more acquisition for e-commerce",
    //   img: "/images/portfolio/goodfinance_goodnote_cover.png",
    //   state: true
    // },
    {
      name: "One Account Admin",
      company: "Good Finance",
      category: ["frontend"],
      date: 2021,
      url: "/portfolio/goodfinance-one-account-admin",
      desc: "Make an all in one account platform to help different services and business units work stability and efficiency.",
      img: "/images/portfolio/goodfinance_one_account_admin_cover.png",
      state: true
    },
    {
      name: "Product Detail Page Refactor",
      company: "Shopee",
      category: ["design"],
      date: 2018,
      url: "/portfolio/shopee-product-detail-page-refactor",
      desc: "To improve performance and get more acquisition for e-commerce",
      img: "/images/portfolio/shopee-amp-product-detail-page.jpg",
      state: true
    },
    // {
    //   name: "Design Language System",
    //   company: "Shopee",
    //   category: ["design"],
    //   date: 2018,
    //   url: "/portfolio/design-language-system",
    //   desc: "A set of rules and guidelines help work efficiency",
    //   img: "/images/portfolio/design-language-system-cover.jpg",
    //   state: true
    // },
    {
      name: "Pet Adoption",
      company: "Side Project",
      category: ["design"],
      date: 2018,
      url: "/portfolio/pet-adoption",
      desc: "Design an experience that will help connect people looking for a new pet with the right companion for them. Help an adopter find a pet which matches their lifestyle, considering factors including breed, gender, age, temperament, and health status.",
      img: "/images/portfolio/pet-adoption-cover.png",
      state: true
    },
    {
      name: "Graphic Recruitment",
      company: "Shopee",
      category: ["design"],
      date: 2018,
      url: "/portfolio/shopee-recruitment",
      desc: "Social network recruitment strategy",
      img: "/images/portfolio/shopee-recruitment-frog-cover.png",
      state: true
    },
    // {
    //   name: "Prescription Helper",
    //   company: "Uitox",
    //   category: ["design", "frontend"],
    //   date: 2016,
    //   url: "/portfolio/prescription-helper",
    //   desc: "A simple Medical App for get drugs of prescription",
    //   img: "/images/portfolio/prescription-helper-cover.png",
    //   state: true
    // },
    {
      name: "LINE Flash Sale",
      company: "Uitox, LINE",
      category: ["frontend"],
      date: 2015,
      url: "/portfolio/line-flash-sale",
      desc: "LINE Flash Sale is the first E-commerce service of LINE in Asia. I was very excited to be a part of this team. It was my proud project for LINE when I worked in Uitox and business trip in South Korea.",
      img: "/images/portfolio/line-flash-sale-cover.png",
      state: true
    },
    {
      name: "Lost Device Protection",
      company: "Trend Micro",
      date: 2013,
      category: ["frontend"],
      url: "/portfolio/lost-device-protection",
      desc: "Protects you against malicious apps, ransomware, dangerous websites, unsafe Wi-Fi networks, unwanted access to your device, and more. Optimize your mobile phone to keep it running at peak performance.",
      img: "/images/portfolio/lost-device-protection-cover.jpg",
      state: true
    },
    // {
    //   name: "Jewelry Box",
    //  company: "Trend Micro",
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
