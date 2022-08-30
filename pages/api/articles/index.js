const Articles = (req, res) => {
  const articles = [
    {
      name: "人才推薦方案1.0在今天正式啟動",
      category: ["activity", "recruitment"],
      desc: "People Team 推出人才推薦方案1.0。:megaphone:期待透過各位夥伴的力量推薦志同道合的人才，加入美好金融團隊、一起邁向明天的金融，持續為客戶提供美好的體驗。",
      url: "https://drive.google.com/file/d/1zo64_UkGzmPk20sCEMCm9g_9_5GYV8gi/view?usp=sharing",
      img: "",
      code: "20220704",
      date: 20220704,
    },
    {
      name: "名片、信封設計概念說明",
      category: ["training"],
      desc: "大家應該有看到，名片上各有六種不同的圖案，而信封分別有三種圖案，這些是什麼呢？這些圖案，其實是代表每個人在前進美好的路上所呈現的姿態。為了讓同事能更了解這些美好的姿態所代表的意義，品牌部準備了一份設計概念說明，讓大家對於姿態的概念、名片＆信封的設計有更多的認識，期待跟大家一起美好。",
      url: "https://drive.google.com/file/d/1Q-XmcFSyn-W4vu-3mdjpSshsSCrwp0I0/view?usp=sharing",
      img: "",
      code: "20220630",
      date: 20220630,
    },
    {
      name: "美好證董座：四引擎趨動營運向上、公司淨值攀升12.3%",
      category: ["news"],
      desc: "在「經紀與融資融券、自營投資、資產管理、科技投資等四大引擎趨動下，美好證營運向上增溫；美好證公司淨值，短短一年已攀升至55.9億元，年增12.3%，股東財富同步增加。",
      url: "https://money.udn.com/money/story/5613/6358427?from=edn_newest_index",
      img: "",
      code: "20220602",
      date: 20220602,
    },
    {
      name: "美好證券股份有限公司 110 年法說會",
      category: ["news"],
      desc: "6/2為美好證券股東會與法說會，今年因應疫情準備了官網直播，歡迎公司同仁們一起線上參與。推薦各位把下午「法說會」的時間保留起來，Hank將會分享：公司更名、營運成果及未來的展望，歡迎各位一起來了解公司前進的策略與方向。",
      url: "https://www.tcstock.com.tw/meeting/earnings_call.html",
      img: "",
      code: "20220601-2",
      date: 20220601,
    },
  ];
  return res.status(200).json(articles);
};

export default Articles;
