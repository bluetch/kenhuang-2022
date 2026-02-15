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
    <Layout title="朝聖之路 Camino de Santiago Day 7 - 托雷斯德爾里奧 (Torres del Rio) to 洛格羅尼奧 (Logroño)">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day07-20200214_142642.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-14"
          info={[
            { key: "Trip", value: "托雷斯德爾里奧 (Torres del Rio) → 洛格羅尼奧 (Logroño) 28km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 7: 雲霧散去"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.14
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>朝聖之路終於來到第七天。</p>
            <p>觀察目前的身體狀況與累積里程，心裡多了幾分踏實；看來真的很有機會走完全程。只是同時，也迎來了一個小小的道別。</p>
            <p>同梯的西班牙女孩 Jasmina 今天要脫隊了。她原本就只計畫走一週。活潑外向的她，西班牙文、英文都流利，和每個人都相處得很好。於是大家決定一起出發，為她送行。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day07_20200214_111548.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day07-20200214-WA0021.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day07-20200214-WA0012.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <p>今天與前幾天截然不同。無霧、無雲，天空一覽無遺。地形也平緩許多，這 20 公里走得格外舒服。習慣負重之後，腰力似乎也提升了。我把背包的受力比例從肩腰 3:7 調整為 2:8，肩膀的負擔瞬間減輕不少。前幾天右肩常常酸痛，晚上還得貼痠痛貼布，現在終於好轉。</p>
            <p>一路上，竟也沒有被任何人超車。</p>
            <p>最後 3 公里，我找到一塊視野開闊的大石頭坐下來。風不大，陽光正好。我拿出烏克麗麗，練習等著他們到來。</p>
            <p>前一天晚上先上網找了些譜放在手機裡，多半是不太熟的歌。沒有伴奏，練起來其實不太容易。唯一順利上手的是演奏版的〈小星星〉。雖然和弦比想像中多，但旋律從小熟悉，曲子也短，練起來反而容易有成就感。不知不覺就練了一個多小時。希望未來幾天能進步到自彈自唱的程度。</p>
            <p>一群人最後抵達今天的目的地：Logroño。這座城市比之前的 Pamplona 還要大一些。抵達時 Albergue 尚未開門，於是我們走向一條滿是 Tapas 店的小街。</p>
            <p>Tapas 是西班牙飲食文化裡非常重要的一部分。通常是正餐前的小點，但種類豐富，組合起來也能成為一頓完整的晚餐。常見的是在一片法國麵包上鋪著肉類、火腿、炸魚，也有海鮮飯、涼菜、起司等搭配。每份通常只是一小塊，兩三口就能吃完，很適合三五好友分食、邊聊邊品嚐。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day07-20200214-WA0007.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day07_20200214_141707.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <p>我們五個人像跑酒吧一樣，連續吃了四家 Tapas 店。</p>
            <p>其中一道讓我印象深刻的是 Alcachofa（菜薊）。這是春天的蔬菜，原產於地中海沿岸，是薊類植物尚未成熟的花苞。料理後外觀看起來像雞肉，口感卻有點像豆皮，清爽又有層次。那種第一次嘗試陌生食材的驚喜，讓旅程又多了一筆記憶。</p>
            <p>晚上回到 Albergue，只剩下我們四個男生，氣氛突然有點冷清。但意外的是，當我坐下來寫日記時，其他人也陸續拿出各自的筆記本。</p>
            <p>沒有誰開口說話。</p>
            <p>只有翻頁聲與筆尖滑過紙張的細微聲響。</p>
            <p>那樣靜靜書寫的夜晚，反而格外溫馨。</p>
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day07_20200214_202149.jpg`}
                alt="旅行筆記"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 7
                的旅行筆記
              </figcaption>
            </figure>
            <Typography variant="h3">洛格羅尼奧 (Logroño)</Typography>
            <p>洛格羅尼奧是西班牙北部拉里奧哈自治區（La Rioja）的首府，也是著名葡萄酒產區里奧哈（Rioja）的核心城市。城市位於埃布羅河（Ebro）河畔，人口不多，卻因葡萄酒文化與朝聖之路而聞名。</p>
            <p>其中的Calle Laurel（月桂街）。這條街被譽為西班牙最棒的 Tapas 小街之一。短短幾百公尺，聚集數十間小酒館與 Tapas 店。每家店通常只專精一兩道招牌小點，搭配一杯紅酒或啤酒，邊走邊吃、邊聊邊站著品嚐，是最道地的體驗方式。</p>
            <p>市中心保留了許多歷史建築，例如聖巴托洛梅教堂（Iglesia de San Bartolomé）與聖母圓頂主教座堂（Concatedral de Santa María de la Redonda）。紅砂岩外牆與巴洛克式塔樓，讓這座小城多了幾分莊嚴與古典氣息。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day07-20200214_142642.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day07-20200214-WA0022.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Hostal Rural La Pata de Oca
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：C. Ruavieja, 32, 26001 Logroño, La Rioja, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/iWXwE2ovFMxNZriR8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Map
                </a>
              </li>
            </ul>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              餐廳：Taberna del Tío Blas La Laurel
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：Calle del Laurel, 1, 26001 Logroño, La Rioja, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/3ufHdESpZL24qgnz8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Map
                </a>
              </li>
            </ul>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              餐廳：Pasión Por Ti
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：Calle del Laurel, 5, 26001 Logroño, La Rioja, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/VhxZvma8QEc8Vdio6"
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
                  href="https://prosabrina.com/day7_logrono/"
                  target="_blank"
                  rel="noreferrer"
                >
                  朝聖日記 Day 7 | Logroño 必去著名的小吃街以及你一定要去吃的蒜蘑菇 !
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://shise.com.tw/%E6%9C%9D%E8%81%96%E4%B9%8B%E8%B7%AF%E7%BE%8E%E9%A3%9F%E6%97%85%E8%A1%8C%E7%B3%BB%E5%88%97-4rioja-%E5%A4%A7%E8%98%91%E8%8F%87%E5%BB%9A%E6%88%BF%E5%A6%82%E6%88%B0%E5%A0%B4%E8%88%87%E5%B0%8F%E9%85%92/"
                  target="_blank"
                  rel="noreferrer"
                >
                  朝聖之路/法國之路飲食指南 (4)：Rioja 大蘑菇、廚房如戰場、與小酒館天堂Logroño 羅格洛尼奧
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
