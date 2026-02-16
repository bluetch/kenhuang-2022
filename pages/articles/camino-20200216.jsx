import Image from "next/image";
import {
  Container,
  Layout,
  HR,
  PortfolioSummary,
  Typography,
} from "components";
import { CAMINO_IMG_ROOT_URL } from "../../constants";

const Camino = () => {
  return (
    <Layout title="朝聖之路 Camino de Santiago Day 9 - 阿索夫拉 (Azofra) to 卡斯蒂爾德爾加多 (Castildelgado)">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day09_20200216_075230.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-16"
          info={[
            { key: "Trip", value: "阿索夫拉 (Azofra) → 卡斯蒂爾德爾加多 (Castildelgado) 30km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 9: Chower 巧達湯"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.16
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>完全獨自前行的第二天，孤獨感開始慢慢浮現。倒不是害怕寂寞，而是少了那群西班牙夥伴的活力與喧鬧，對比之下顯得特別安靜。那種落差，不是空蕩，而是節奏突然被抽離。好在今天沿途的見聞，多少填補了這份情緒。</p>
            <p>這九天以來，其實也遇見不少獨行俠。雖然沒有深入交談，但從他們的神情裡，不難看出各自正在追尋的東西。有的人是為了挑戰體能極限，有的人是慢慢閱讀沿途歷史，把每座城鎮當成一頁翻過去的書。然而，最讓我印象深刻的，還是一對來自西班牙的情侶，David 和 Carmen。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day09_20200216_091256.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day09_20200216_114702.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>兩人都二十出頭。女生剛畢業，男生正在求職 (參考: Day 6的照片)。他們的共同興趣是傳統底片攝影、一搭一唱的音樂創作，以及那種對感情自然流動的態度。他們不只一次在公共場合親吻與擁抱，但沒有誇張或刻意張揚的舉動，往往只是眼神對上，下一秒就自然地靠近彼此。那種默契，不用語言說明。</p>
            <p>他們對彼此的專注，讓我看見西班牙式的熱情。那份熱情帶著一點黏性，卻又自在坦率。在交往前的約會階段，擁抱、接吻甚至更親密的行為都可以發生，但若沒有明確公開確認關係，通常仍被視為「朋友」。腦中不禁浮現 FWB 這個詞，Friend with benefits，帶有某種砲友的概念。其實在台灣也聽過，只是對他們而言，那更像是一種過程，一段關係自然發展的階段。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day09_20200216_115913.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day09_20200216_132252.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>相較之下，亞洲文化往往較快定義關係，也較容易賦予標籤，甚至覺得曖昧關係見不得光。隨著國際化與觀察到身邊越來越多人嘗試不同的關係模式，我也在思考，是否只是價值觀轉換的問題。若始終轉不過來，或許找個鄉下女孩安穩生活，對我反而更適合。</p>
            <p>這兩晚的住宿都有獨立房間。今天算是住在一間小旅館，雖然價格稍高，但因為多走了三個城鎮，幾間 Albergue 都沒開，也只能如此。其實一晚 25 歐元，依舊比在台灣便宜。真正讓我驚喜的，是晚餐。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day09_20200216_120953.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day09_20200216_203909.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>西班牙的晚餐通常八點後才開始，而這家餐廳完全超出預期。鮮濃的海鮮蛤蜊魚湯，燉得入味的牛肉搭配紅酒，還有一道獨特的米布丁作為結尾。每一道都讓人想把胃袋再撐大一點。也學著當地人把麵包撕開，沾著湯汁吃，樸實卻極致美味。</p>
            <p>歐洲走過八個國家，目前在食物上，西班牙還沒有讓我失望。</p>
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day09_20200217_062311.jpg`}
                alt="西班牙朝聖之路"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 9
                的西班牙朝聖之路旅行筆記
              </figcaption>
            </figure>
            <Typography variant="h3">卡斯蒂爾德爾加多 (Castildelgado)</Typography>
            <p>一座人口不到百人的小村莊，規模不大，卻因為地理位置而在歷史上佔有一席之地。</p>
            <p>卡斯蒂爾德爾加多座落於開闊的高原地形上，四周多為農田與草地。從拉里奧哈進入卡斯蒂利亞-萊昂後，景色會逐漸轉為更遼闊的平原，天空顯得格外寬廣。對徒步者來說，這種地貌變化非常明顯，也象徵著路程進入新的階段。</p>
            <p>小村莊最重要的歷史意義，來自於它位在 聖地亞哥朝聖之路 法國之路沿線。自中世紀以來，無數朝聖者穿越這片土地，為村莊帶來人流與生命力。村內仍可見簡樸的石造建築與小教堂，靜靜見證歲月流轉。</p>
            <p>這裡沒有熱鬧商店街，也沒有大型觀光景點。更多時候，它只是旅人途中的一段安靜停留。清晨的薄霧、午後的陽光、黃昏的長影，都讓這個小村莊顯得格外純粹。            </p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day09_20200216_203910.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Hostal El Chocolatero
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：Ctra. Logroño, 14, 09259 Castildelgado, Burgos, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/HmpMmmkCHdMa7cHr6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Map
                </a>
              </li>
            </ul>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              其他朝聖者文章
            </Typography>
            <ul className="list-disc list-inside">
              <li>
                <a
                  className="underline"
                  href="https://vocus.cc/article/65e0b2f5fd897800012e01b9"
                  target="_blank"
                  rel="noreferrer"
                >
                  我的朝聖之路-【Camino Frances】D15 # 與內在生命相遇
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://liaoweicing.pixnet.net/blog/posts/15321119846"
                  target="_blank"
                  rel="noreferrer"
                >
                  《西班牙》Camino 朝聖之路 Day10｜一個永遠銘記於心的Darling Hug，你還會記得我嗎？
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Camino;
