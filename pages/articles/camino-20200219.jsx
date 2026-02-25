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
    <Layout title="朝聖之路 Camino de Santiago Day 12 - 布爾戈斯 (Burgos) to 翁塔納斯 (Hontanas)">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day12_20200219_164104.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-19"
          info={[
            { key: "Trip", value: "布爾戈斯 (Burgos) to 翁塔納斯 (Hontanas) 34km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 12: 旅店老闆的表演天賦"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.19
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>與前天截然不同，今天的天氣好得不可思議。陽光溫暖，天空乾淨得沒有一絲雲。走在路上，步伐變得輕盈許多。雖然沒有再遇到動物與葡萄園，但遼闊的大草原、潺潺溪流，再次構成屬於卡米諾的大自然交響曲。小鳥也準時登場，替這段路添了幾分生氣。</p>
            <p>今天走了 34 公里，比原定多 5 公里。原本預計停留的城鎮依舊什麼都沒開，只好繼續前行。也因為這個決定，遇見了一群新的人。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day12_20200219_074327.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day12_20200219_084615.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day12_PWKCE3220.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>今晚住在 Hontanas 的 Albergue Municipal de Hontanas。下午五點抵達時，已經有四個人。兩位來自美國的女孩 Sarah，來自芬蘭的 Rebecca，還有一位比利時人。難得整晚幾乎都說英文，而不是西班牙文。後來又來了五位，雖然沒有太多交談，但知道他們幾乎都從 Saint-Jean-Pied-de-Port 出發，只比我早一天，因此對我的腳程感到驚訝。美國人聊天真的像電影裡一樣，語氣自然又誇張，三不五時冒出幾句語助詞，節奏鮮明。</p>
            <p>最讓我笑開懷的，是這間住宿的老闆。白天與他交談後，就不時聽到他模仿玩具般的聲音。起初沒太在意，因為大多是西班牙語。直到晚餐時大家圍坐一起，他頻繁進出廚房與餐廳，與不同人對話時，竟然用腹語般的方式替自己加上旁白與吐槽。鳥叫聲、小孩聲、不知名動物的叫聲，全成了他表達情緒的工具。像在唱雙簧，一人分飾多角。整桌人都笑著說 he is so interesting。那種幽默是自然流露的，沒有刻意，卻很有感染力。</p>
            <p>我的思緒其實有些複雜。想更了解他們的故事，卻又不想投入太多互動。或許他們也習慣並尊重各種性格的人。餐桌上也有人安靜少語，大家依然自在相處。有人主動遞食物和點心給我，卻不追問、不打探。那種剛剛好的距離，讓我覺得安心。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day12_WBVBE6502.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day12_20200219_195326.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day12_20200219_210816.jpg`}
                alt="西班牙朝聖之路"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 12
                的西班牙朝聖之路旅行筆記
              </figcaption>
            </figure>
            <Typography variant="h3">翁塔納斯 (Hontanas)</Typography>
            <p>這座村莊最大的特色，是它隱身在低窪的山谷之中。朝聖者往往要走過一段遼闊、幾乎沒有遮蔽的高原地形後，才會在視線盡頭突然看見屋頂從地平線下方冒出來，有種「走進大地懷抱」的感覺。也因此，Hontanas 常被形容為一座藏在沙色山丘中的聚落。</p>
            <p>村莊規模不大，常住人口只有數十人，街道簡單而安靜，生活節奏緩慢。當地的 Iglesia de la Inmaculada Concepcion 是主要地標之一，樸實的石造外觀與周圍土黃色建築融為一體。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day12_20200219_103742.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Albergue Municipal "San Juan"
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：C. Real, 26, 09227 Hontanas, Burgos, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/acoNAhuM25qe4SSN6"
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
                  href="https://prosabrina.com/day14_hontanas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  朝聖日記 Day 14 | 私心推薦 Hontanas 必吃的朝聖晚餐推薦，美味的西班牙海鮮燉飯
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
