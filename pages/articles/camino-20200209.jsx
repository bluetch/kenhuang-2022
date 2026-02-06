import Image from "next/image";
import {
  Container,
  Layout,
  HR,
  PortfolioSummary,
  Typography,
} from "components";
import { CAMINO_IMG_ROOT_URL } from "./constants";

const Camino = () => {
  return (
    <Layout title="朝聖之路 Camino de Santiago Day 2 - Roncesvalles to Zubiri">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day02_20200209_075601.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-09"
          info={[
            { key: "Trip", value: "龍塞斯瓦列斯 (Roncesvalles) → 蘇維里 (Zubiri) 22km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 2: 在餐桌上"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.09
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>大約清晨五點半，就被庇護所裡此起彼落的起床聲弄醒。原本想再躺一下，但我一向不太喜歡在狹小空間裡和一群人擠在同一時間盥洗，於是索性起身，默默把行李移到大廳整理。六點半左右，和前一晚一起吃飯的三位韓國人會合，天色仍暗，我們就這樣踏上第二天的路。</p>
            <p>走沒多久便遇到岔路，指標指向一片伸手不見五指的樹林。原本以為派不上用場的頭燈，在第二天終於發揮了存在價值。黑暗中前進，反而讓感官變得更敏銳，腳步聲、呼吸聲都被放大。等天色漸亮，日出從樹縫間灑落下來，那一刻真的很美，也讓人慶幸沒有賴床。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day02_20200209_083259.jpg`}
              alt="頭燈照亮前方的黑暗道路，樹林中透出微弱的晨光"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day02_20200209_072710.jpg`}
              alt="頭燈照亮前方的黑暗道路，樹林中透出微弱的晨光"
              className="w-full object-cover"
            />
            <p>沿途經過豬圈、馬場、牛舍，與第一天的山路相比，多了一些生活氣息。動物們各自忙著自己的日常，讓人感覺自己只是暫時借道而行的過客。這一天的路況其實並不輕鬆，有些地方倒了不少大樹橫在路中央，只能彎身、側身，甚至蹲下來慢慢通過。背上又大又重的登山包在這種時候特別礙事，一個不小心還摔了一跤，好在沒有受傷，只是提醒自己得再放慢一點。</p>
            <p>途中也遇到少見的頁岩步道，岩片密度高又滑，整隻鞋子很難穩穩踩實，幸好有登山杖輔助，才不至於太狼狽。這條路不斷在提醒我：即使是看似平緩的日子，也隨時可能需要多一點耐心與調整。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day02_20200209_101736.jpg`}
              alt="蘇維里 (Zubiri) 鎮上尋找黃色箭頭的路標，指引著前往下一個目的地的方向"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day02_zubiri_bridge.jpg`}
              alt="蘇維里橋 (Puente de la Rabia) 上的黃色箭頭路標，指引著前往下一個目的地的方向"
              className="w-full object-cover"
            />
            <Typography variant="h3">傍晚抵達蘇維里 (Zubiri)</Typography>
            <p>Zubiri 是一個小而安靜的朝聖小鎮，位在阿拉貢河（Río Arga）旁，幾乎所有踏上法國之路的朝聖者，都會在這裡度過第一個真正「走完一整天」後的夜晚。城鎮不大，街道短短的，從橋頭走到另一端不用太久，但對剛翻過庇里牛斯山、背著行李走了二十多公里的人來說，這裡卻像是一個剛剛好的停靠點。</p>
            <p>小鎮最醒目的地標，是那座橫跨河流的中世紀石橋——Puente de la Rabia。橋名直譯是「憤怒之橋」，相傳過去農民會牽著牲畜繞橋一圈，祈求牠們免於疾病。如今只剩下傳說，但橋下湍急的河水依舊流動不息，在傍晚時分傳來持續而規律的水聲，彷彿替整個小鎮降下節奏。</p>
            <p>Zubiri 沒有太多觀光客，街上大多是朝聖者、居民，以及為他們準備餐點與床位的人。白天大家匆匆抵達、洗衣、補給、休息；夜晚則慢慢安靜下來，只剩下餐廳裡低聲的交談與杯盤聲。對我來說，Zubiri 是一個讓人從「走路模式」切換成「生活模式」的小地方，也是在朝聖之路上，第一次感覺自己真的融入這條路的地方。</p>
            <p>六個人又不約而同住進同一間庇護所。這天他們決定自己煮晚餐。本來因為有點不想社交，我已經打算買杯泡麵簡單解決，但聽到他們要做韓式烤肉，還會搭配一些西班牙料理，我還是加入了。</p>
            <p>那頓晚餐意外地熱鬧。語言不通的地方靠比手畫腳補齊，味道則成了最直接的共通語言。也許我原本預期這趟路會更多獨處，但至少在這一天，並沒有讓我一個人吃三餐。有人一起吃飯、聊天，填補的不只是胃，也撫平了旅途中偶爾冒出的空虛感。</p>
            <p>有些事情不必刻意安排，順著走，該遇見的自然會出現。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day02_20200209_194017.jpg`}
              alt="蘇維里 (Zubiri) 鎮上尋找黃色箭頭的路標，指引著前往下一個目的地的方向"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day02_20200209_133645.jpg`}
              alt="蘇維里 (Zubiri) 鎮上尋找黃色箭頭的路標，指引著前往下一個目的地的方向"
              className="w-full object-cover"
            />
            <p>在淡季走朝聖之路的好處之一，是有比較高的機率能夠一人一個房間。對於對聲音特別敏感的人來說，這樣的空間實在難得。夜裡不必戴著耳塞猜測是哪個方向傳來的鼾聲，也不用在半夢半醒之間被床板的晃動驚醒，只剩下自己的呼吸聲，和窗外偶爾吹過的風。</p>
            <p>時間變得安靜，也讓思緒慢慢回到自己身上，繼續思考 Who Am I? 這個問題，奇妙的是對於出發前的各種焦慮好像隨著步行撒在路邊的石子裡消失不見。</p>
            <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700 my-8 space-y-2">
              <p>
                不斷告訴自己：學習與自己相處，孤單不可怕，反而讓人更專注於每一步、每一景，甚至每一個呼吸與思緒。每一個轉角、每一個標誌，都是前行的陪伴。
              </p>
            </blockquote>
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day02_20200209_diary.jpg`}
                alt="旅行筆記"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 2
                的旅行筆記，開始畫一些動物了，因為路上遇到的動物們都讓人感到溫暖。
              </figcaption>
            </figure>
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Hostel Rio Arga
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：Calle Río Arga, 7, 31630 Zubiri, Navarra, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/Muv6bqxMayHNg1KRA"
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
                  href="https://travel.yam.com/article/134003"
                  target="_blank"
                  rel="noreferrer"
                >
                  西班牙朝聖之路│橋之城Zubiri：感受橋上的神話色彩，阿爾加河畔的小鎮
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://vocus.cc/article/67e6247bfd89780001874b2d"
                  target="_blank"
                  rel="noreferrer"
                >
                  西班牙朝聖之路-D3 祖比里(Zubiri)午後的極樂時光與意外的「震撼教育」
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
