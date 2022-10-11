const Articles = (req, res) => {
  const articles = [
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
    {
      name: "讀書心得 — 《UX策略：設計讓人夢寐以求的創新數位產品》",
      category: [],
      desc: "繼上一本⟪UX從新手開始⟫讀完後，找到這本比較進階的內容，同樣是O’REILLY出版。會說進階，是因為跟新手那本學習門檻明顯高了也許，而且也比較專注在研究方法。裡面專案範例偏向中小型，適合給新創公司類型的設計師讀。",
      url: "https://medium.com/@bluetch/%E8%AE%80%E6%9B%B8%E5%BF%83%E5%BE%97-ux%E7%AD%96%E7%95%A5-%E8%A8%AD%E8%A8%88%E8%AE%93%E4%BA%BA%E5%A4%A2%E5%AF%90%E4%BB%A5%E6%B1%82%E7%9A%84%E5%89%B5%E6%96%B0%E6%95%B8%E4%BD%8D%E7%94%A2%E5%93%81-362f5a4c3083",
      img: "https://miro.medium.com/max/960/1*izxYql_CTOMmv7E3_mKKJQ.jpeg",
      code: "20170831",
      date: 20170831,
    },
  ];
  return res.status(200).json(articles);
};

export default Articles;
