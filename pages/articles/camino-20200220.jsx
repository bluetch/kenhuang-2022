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
    <Layout title="朝聖之路 Camino de Santiago Day 13 - 翁塔納斯 (Hontanas) to 夫羅米斯塔 (Frómista)">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day13_20200220_095418.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-20"
          info={[
            { key: "Trip", value: "翁塔納斯 (Hontanas) to 夫羅米斯塔 (Frómista) 34km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 13: 星空到捐贈之家"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.20
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>今早依然在清晨五點醒來。更精確地說，是被一位美國人 Welly 的「宇宙級」打呼聲喚醒。那聲音幾乎整夜沒有停過，從四周不時傳來的翻身聲也能感覺到，應該有不少人和我一樣被吵得難以入眠。於是我決定乾脆提早出發，逃離這個打呼地獄。</p>
            <p>過去也曾六點出發，但從 Hontanas 出發的這個清晨，夜空的星星實在令人驚艷。那密度多到幾乎可以用「滿出來」形容，就像有良心蛋炒飯裡滿滿的蛋一樣。一路抬頭走路也不覺得脖子痠，只想多看幾眼這片星空。</p>
            <p>當然，美景的代價就是氣溫。零下兩度的寒冷讓我一路不停流鼻涕。直到太陽升起後才發現，沿路許多植物都覆著一層薄霜，就連掛在背包外晾著的襪子也硬得像冰棒，甚至讓人擔心如果用力一折會不會直接斷掉。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day13_20200220_074915.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day13_20200220_102609.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day13_20200220_103226.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>接近九點時，太陽終於開始帶來溫度。抵達 Castrojeriz 後，我吃了一頓暖胃又飽足的早餐。這個小鎮其實相當漂亮，山丘上還有一座城堡遺跡。不過比起爬上去看城堡，我更享受在寒冷空氣與溫暖陽光交織的天氣裡慢慢散步，所以稍作休息後就繼續上路。</p>
            <p>翻過 Alto de Mostelares（Hito del Camino de Santiago en el Alto de Mostelares）這座約一千公尺高的小山丘後，眼前展開的是一望無際的大草原。無論在山頂或山下，景色或許沒有特別壯觀的地標，但在這樣遼闊的天地裡行走，反而讓人感到格外平靜。藍天、草原、微風，腳上的疼痛似乎也被悄悄地消音了。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day13_20200220_084837.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day13_20200220_163454.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>一路愉快地走到原本預計停留的城鎮 Boadilla del Camino，此時已經走了約 27 公里，本來覺得正好可以休息。沒想到又遇到熟悉的劇情——整個小鎮幾乎沒有地方營業。無奈之下，只好再度背起背包，繼續往下一個城鎮 Frómista 前進。</p>
            <p>也許這就是旅途的緣分吧。我在那裡住進了 Albergue Betania。這是我第一次住到「沒有固定價格、採自由捐贈」的朝聖者住所。整體環境非常舒適，像是剛裝潢不久的新家，乾淨、溫馨又安靜。</p>
            <p>我難得放下內向的個性，和主人 Lourdes 聊了一會兒。她是一位退休老師。因為發現這個城鎮常常有朝聖者找不到住宿的地方，於是在六年前租下這棟房子開始經營。樓上原本是她母親的房子，後來整理後接手使用，也方便管理住宿。她秉持著基督徒的精神，以捐贈方式收費，也從不主動提起費用。</p>
            <p>直到聊天中提到我曾經也有過基督信仰，她才微笑地說，希望等我走到 Santiago 的時候，可以替她祈禱。我當然一口答應。畢竟這一路上，只要經過教堂，我幾乎都會停下來禱告。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day13_20200220_165121.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day13_20200220_171738.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day13_IMG_6647.jpg`}
                alt="西班牙朝聖之路"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 13
                的西班牙朝聖之路旅行筆記
              </figcaption>
            </figure>
            <Typography variant="h3">夫羅米斯塔 (Frómista)</Typography>
            <p>一座位於西班牙卡斯提亞-雷昂自治區帕倫西亞省的小鎮，人口只有約 700 人左右，Frómista 的歷史可以追溯到 中世紀。在 11 世紀時，這裡是重要的宗教與農業聚落，也因為朝聖路線而逐漸繁榮。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day13_20200220_173354.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Betania
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：Av. del Ejército Español, 26, 34440 Frómista, Palencia, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/fEpcS7BLGeR34JhR7"
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
                  href="https://insightfulljubliano.com/2023/07/09/%E6%9C%9D%E8%81%96%E4%B9%8B%E6%97%85d14%E6%97%A5-%E5%A4%AB%E7%BE%85%E7%B1%B3%E6%96%AF%E5%A1%94fromista/"
                  target="_blank"
                  rel="noreferrer"
                >
                  朝聖之旅D+14日–夫羅米斯塔(Fromista)
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.xinmedia.com/article/210177"
                  target="_blank"
                  rel="noreferrer"
                >
                  相遇，在Camino｜挑戰法國之路——在那十七公里路上，我學到了什麼？
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
