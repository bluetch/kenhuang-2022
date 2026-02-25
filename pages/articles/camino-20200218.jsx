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
    <Layout title="朝聖之路 Camino de Santiago Day 11 - 布爾戈斯 (Burgos) 一日遊">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day11_20200218_143345.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-18"
          info={[
            { key: "Trip", value: "布爾戈斯 (Burgos) 1 day trip" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 11: 布爾戈斯一日遊"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.18
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>難得醒來，在床上發呆了一陣子。像久違的週末，不急著起身，滑著手機找今晚的住宿。確認好後，帶著明信片出門。</p>
            <p>這兩天路過三四次的 Burgos Cathedral，終於決定走進去。它是 Burgos 的地標，高聳的尖塔與塔樓，幾乎在城裡任何角落都能望見。門票 8 歐元。想著既然被列為世界文化遺產，又有一整天可以慢慢消磨，便買票入內。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day11_20200218_135412.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day11_20200218_140541.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day11_20200218_141147.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>大教堂自 13 世紀動工，前後歷時約三百年才算完成。跨越不同世紀，也留下不同風格的痕跡。裡頭的小禮拜堂各有表情，神像與裝飾細節繁複而精緻。多角星狀的拱頂天花板，從天窗灑落的光線，帶著義大利風格的階梯設計，還有上百個唱詩班席位的木雕聖經故事，每一處都值得駐足。尤其是彩色玻璃透出的光影變化，那種靜靜流動的美，總讓我對這些幾百年前的工藝心生敬佩。</p>
            <p>接著去找西班牙的黃色郵筒，卻怎麼都沒遇見，只好直接衝去郵局寄出明信片。櫃檯人員收下時還對我說了一句 well done，像是替這段旅程蓋了個小小的章。</p>
            <p>午餐回到昨晚吃 tapas 的對面餐廳。三種 tapas、一碗湯加一杯紅酒 13 歐元。特地點了當地特色 Morcilla de Burgos，夾在法國麵包上的血腸，口感讓我想到台灣的豬血糕。少了花生粉的香氣，但多了米粒與香料的風味，是屬於這片土地的味道。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day11_20200218_114553.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day11_20200218_120025.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>真正讓我驚艷的是卡斯提雅湯 Sopa castellana。打散的蛋花、切片麵包、大蒜、馬鈴薯、些許番茄與紅椒粉，在熱湯裡融合成濃郁卻樸實的滋味。那一碗下肚，彷彿又把鬥志點燃。來西班牙，食物真的值得大大加分。</p>
            <p>餐廳員工和我聊了起來。他在 1993 年走過朝聖之路，特別推薦這碗湯，也分享當年沿途的故事。他說一定要走完。那語氣不像勸說，更像過來人的篤定。</p>
            <p>晚上遇見一位來自台灣的 Mei。印象中他是因為台灣疫情導致飯店業裁員資遣而選擇走上這條路，也當作是上天給我們的意外禮物，應該是這樣，這段回憶日記因為安眠藥藥效發揮，我當時在日記本上的文字現在回顧都有點看不懂在寫什麼</p>
            <p>寫到這裡，安眠藥開始發揮作用。剩下的，就讓夢替我收尾吧。</p>
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day11_20200219_070303.jpg`}
                alt="西班牙朝聖之路"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 11
                的西班牙朝聖之路旅行筆記
              </figcaption>
            </figure>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day11_20200218_151254.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <Typography variant="h3">布爾戈斯 (Burgos)</Typography>
            <p>Burgos 位於西班牙北部卡斯提亞-雷昂自治區，是卡米諾法國之路上的重要城市之一。中世紀時曾是卡斯提亞王國的首都，因此保留了濃厚的歷史氣息與莊嚴氛圍。</p>
            <p>城市最著名的地標是 Burgos Cathedral，這座壯麗的哥德式大教堂建於 13 世紀，被列為世界文化遺產。高聳的尖塔與精緻雕刻，在不同光線下呈現截然不同的氣質，是許多朝聖者走進城市時最震撼的一幕。</p>
            <p>布爾戈斯同時也是民族英雄 El Cid 的故鄉，城中仍可見與他相關的雕像與歷史遺跡。沿著阿爾蘭松河散步，可以感受到這座城市比小鎮更多的生活感與節奏感。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day11_20200218_075425.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Hotel Norte y Londres
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：Pl. de Alonso Martínez, 10, 09003 Burgos, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/Gu7SrsuhqSwi6ftu5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Map
                </a>
              </li>
            </ul>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Happy Hostal Carrales | Alojamiento en el Centro de Burgos
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：Pl. de Alonso Martínez, 10, 09003 Burgos, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/wyZsZFGL4Eg59FYt7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Map
                </a>
              </li>
            </ul>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              餐廳：Restaurante Mesón Los Herreros
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：Calle San Lorenzo, 20, 09003 Burgos, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/jwHq5uV931uhuiXw8"
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
                  href="https://prosabrina.com/day13_burgos/"
                  target="_blank"
                  rel="noreferrer"
                >
                  朝聖日記 Day 13 |  朝聖路上最美的世界遺產教堂就在 Burgos 布爾戈斯
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://vocus.cc/article/68033b0efd897800013518cf"
                  target="_blank"
                  rel="noreferrer"
                >
                  朝聖之路Day12：今天到了Burgos布爾戈斯
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
