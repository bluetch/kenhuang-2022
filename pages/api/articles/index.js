const Articles = (req, res) => {
  const articles = [
    {
      name: "Git 指令教學全攻略：初學者必備的常用指令與實用情境整理",
      category: [],
      desc: "想學 Git 卻總是記不起指令？這篇文章整理了最常用的 Git 指令，搭配簡單說明與實際使用情境，讓你從版本控制新手快速進入開發者日常必備技能。適合自學者與前端/後端工程師參考！",
      url: "https://medium.com/@bluetch/git-%E6%8C%87%E4%BB%A4%E6%95%99%E5%AD%B8%E5%85%A8%E6%94%BB%E7%95%A5-%E5%88%9D%E5%AD%B8%E8%80%85%E5%BF%85%E5%82%99%E7%9A%84%E5%B8%B8%E7%94%A8%E6%8C%87%E4%BB%A4%E8%88%87%E5%AF%A6%E7%94%A8%E6%83%85%E5%A2%83%E6%95%B4%E7%90%86-9448fd1024e6",
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*WzN1eeQsje4W8e9i8VVs5g.jpeg",
      code: "20250517",
      date: 20250517,
    },
    {
      name: "Reflection of Nvidia CEO Jensen Huang keynote at Computex 2024",
      category: [],
      desc: "Reflection of Nvidia CEO Jensen Huang keynote at Computex 2024.",
      url: "https://medium.com/@bluetch/reflection-of-nvidia-ceo-jensen-huang-keynote-at-computex-2024-d61a6ba61475",
      img: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*YwL7B27LAlA2oXhKk29Uvw.png",
      code: "20240605",
      date: 20240605,
    },
    {
      name: "JavaScript from ES6 to ES12 in 2022",
      category: [],
      desc: "Javascript a one of the three most crucial programming at front-end positions. However, the author Brendan Eich just spent 10 days on it. It helps a lot in the website technically, but it also caused many issues to fix, that’s why there are from ES6(2015) to ES12(2021) born to fix better JavaScript.",
      url: "https://medium.com/p/519d8be7d48c",
      img: "https://miro.medium.com/max/1400/1*AXj2HwF25HVmch0RvIZplQ.png",
      code: "20221010",
      date: 20221010,
    },
    {
      name: "Next.js project quick deploy with Vercel",
      category: [],
      desc: "工程師及設計師的證券公司Side project。",
      url: "https://medium.com/@bluetch/vercel-quick-start-with-next-js-f7becc28d4bb",
      img: "https://miro.medium.com/max/1400/1*EEEPht7Ch-B2BuLCT7AnDA.jpeg",
      code: "20221001",
      date: 20221001,
    },
    {
      name: "GoodNote 財剛起步，金融業的side project",
      category: [],
      desc: "工程師及設計師的證券公司Side project。",
      url: "https://medium.com/@bluetch/goodnote-4cd9dc67abed",
      img: "https://miro.medium.com/max/1400/1*ahmDKIGtDwFW0KFsjOKK4g.png",
      code: "20220912",
      date: 20220912,
    },
    {
      name: "美股紀錄：ESPO ETF 遊戲和電競ETF成分股",
      category: [],
      desc: "「VanEck Vectors視頻遊戲和電競ETF」(The VanEck Vectors Video Gaming and eSports ETF，美股代號ESPO)",
      url: "https://medium.com/@bluetch/espo-etf-%E6%88%90%E5%88%86%E8%82%A1-cc76a92e658c",
      img: "https://miro.medium.com/max/1400/1*qWlZRrxyaJE6_Ux4Gf-jEA.jpeg",
      code: "20200821",
      date: 20200821,
    },
    {
      name: "Ways to Improve Mobile Conversion Rate: AMP, A/B Testing, Design Sprint And More You Need To Know!",
      category: [],
      desc: "Wish to increase your conversion rate on mobile devices but unsure of what to do? Recently, Shopee was invited by Google to join a Design Sprint Workshop.",
      url: "https://medium.com/shopee/improve-mobile-search-roi-with-ux-ninja-google-design-spirit-7a7d89c93390",
      img: "https://miro.medium.com/max/1400/1*LXhlsMEbQMPDNeOAQY8Fuw.jpeg",
      code: "20180528",
      date: 20180528,
    },
    // {
    //   name: "讀書心得 — 《UX策略：設計讓人夢寐以求的創新數位產品》",
    //   category: [],
    //   desc: "繼上一本⟪UX從新手開始⟫讀完後，找到這本比較進階的內容，同樣是O’REILLY出版。會說進階，是因為跟新手那本學習門檻明顯高了也許，而且也比較專注在研究方法。裡面專案範例偏向中小型，適合給新創公司類型的設計師讀。",
    //   url: "https://medium.com/@bluetch/%E8%AE%80%E6%9B%B8%E5%BF%83%E5%BE%97-ux%E7%AD%96%E7%95%A5-%E8%A8%AD%E8%A8%88%E8%AE%93%E4%BA%BA%E5%A4%A2%E5%AF%90%E4%BB%A5%E6%B1%82%E7%9A%84%E5%89%B5%E6%96%B0%E6%95%B8%E4%BD%8D%E7%94%A2%E5%93%81-362f5a4c3083",
    //   img: "https://miro.medium.com/max/960/1*izxYql_CTOMmv7E3_mKKJQ.jpeg",
    //   code: "20170831",
    //   date: 20170831,
    // },
  ];
  return res.status(200).json(articles);
};

export default Articles;
