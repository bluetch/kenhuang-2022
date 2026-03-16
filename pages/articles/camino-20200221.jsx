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
    <Layout title="朝聖之路 Camino de Santiago Day 14 - 夫羅米斯塔 (Frómista) to 卡里翁德洛斯孔德斯 (Carrion de los Condes)">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day14_20200221_094635.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-21"
          info={[
            { key: "Trip", value: "夫羅米斯塔 (Frómista) to 卡里翁德洛斯孔德斯 (Carrion de los Condes) 34km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 14: 撒嬌的雞"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.21
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>早上起床時，兩位與我同住的法國老夫妻已經醒了。他們熱情地分享了自己的麵包給我，我也試著多聊了幾句，沒想到聊著聊著才知道，他們竟然已經一起走過 第 13 次 Camino！</p>
            <p>從 2007 年開始，他們幾乎每隔一段時間就會再次踏上這條路，而且始終是兩人相伴同行。聽著他們說這些年的朝聖經歷，我心裡其實有點被觸動。這樣長久而穩定的陪伴，正是我心中理想的伴侶模樣——安穩、平靜，彼此扶持，一起走過歲月。</p>
            <p>老先生還給了我一個建議：「走慢一點，給自己多一點思考的空間。」</p>
            <p>於是我決定放下原本想要「衝里程」的念頭，今天就輕鬆地走 20 公里，讓腳步慢一點。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day14_20200221_075131.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day14_20200221_083024.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>在接近第一個城鎮 Población de Campos 時，路邊開始出現此起彼落的鳥叫聲。隨著距離越來越近，聲音也變得更加熱鬧，而且明顯不只一種鳥。</p>
            <p>我試著用手機拍下牠們的身影，再查了一些資料，才知道西班牙因為特殊的地理位置，是許多鳥類遷徙的重要通道，也因此成為歐洲觀賞猛禽很有名的地方。</p>
            <p>但讓我最驚喜的是，那一刻至少有三種鳥聚在同一片田野裡「合奏」。</p>
            <p>在我的想像中，烏鴉像是在擔任節奏穩定的鼓手，鴿子的聲音像古箏一樣低沉悠長，而那隻我辨認不出的鳥則像主唱，時不時地高聲加入旋律。旁邊還有一隻 White Stork 在草地上優雅地慢慢散步，彷彿是舞台上的演員。</p>
            <p>那畫面其實很簡單，但卻讓人感到一種平淡而珍貴的幸福。</p>
            <p>或許生活本來就不需要太多華麗的風景，只要能像那對老夫妻一樣，長久地陪伴彼此、知足常樂，就已經很值得感恩了。</p>
            <p>繼續前進後，在第三個小村莊 Villarmentero de Campos，我被路邊一個指向餐廳的路牌吸引，走到一間看似 Albergue 的房子前。靠近一看才發現，這裡似乎早就已經廢棄了。</p>
            <p>正當我注意到店內有一面塗滿朝聖者留言的塗鴉牆，想走近看看時，突然一個橘紅色的身影從一張破舊的綠色桌子下衝了出來。</p>
            <p>居然是一隻雞。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day14_20200221_102716.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>而且牠奔跑的速度一點也不輸貓咪衝刺，直直朝我衝了過來。</p>
            <p>那一瞬間我的腦袋快速閃過幾個選項：</p>
            <p>「開戰？逃跑？」</p>
            <p>最後我決定——站著不動。</p>
            <p>反正如果真的被雞啄到，好像也能解鎖一個奇怪的人生成就。就在牠距離我大概 0.5 公尺、彷彿即將送上「死亡之吻」的那一刻，牠突然急停了下來。接著開始在我腳邊繞來繞去，歪著頭看我，還偶爾拍拍翅膀。</p>
            <p>我忍不住笑了。</p>
            <p>怎麼那麼像一隻在撒嬌的貓？於是我也試著和牠玩耍了一會兒。</p>
            <p>好吧，今天又多完成一個奇妙的成就 「與雞共舞」</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day14_20200221_140639.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day14_20200221_153027.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day14_20200221_184311.jpg`}
                alt="西班牙朝聖之路"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 14
                的西班牙朝聖之路旅行筆記
              </figcaption>
            </figure>
            <Typography variant="h3">卡里翁德洛斯孔德斯 (Carrion de los Condes)</Typography>
            <p>在 11 至 13 世紀，Carrión de los Condes 是卡斯提亞地區非常重要的城市之一。當時的繁榮原因主要有三個：1. 聖地牙哥朝聖之路經過: 大量朝聖者帶來經濟與文化交流。2.修道院與教會勢力:城市內曾有十多座修道院與教堂。3. 貴族與政治中心: 許多卡斯提亞伯爵與貴族居住於此。在最繁盛時期，這裡甚至被稱為：「朝聖之路上的小托雷多」</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day14_1582283691158.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Albergue Espíritu Santo
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：Cjón. San Juan, 2, 34120 Carrión de los Condes, Palencia, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/LdfUQEg6wTxj3dw8A"
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
                  href="https://vocus.cc/article/65ef12e4fd89780001f22851"
                  target="_blank"
                  rel="noreferrer"
                >
                  我的朝聖之路-【Camino Frances】D16 # 簡單就能快樂
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.backpackers.com.tw/forum/showthread.php?t=10615387"
                  target="_blank"
                  rel="noreferrer"
                >
                  法國之路Day 16 走路去Carrión de los Condes買菜
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
