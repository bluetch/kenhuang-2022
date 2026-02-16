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
    <Layout title="朝聖之路 Camino de Santiago Day 8 - 洛格羅尼奧 (Logroño) to 阿索夫拉 (Azofra)">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day08_20200215_074420.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-15"
          info={[
            { key: "Trip", value: "洛格羅尼奧 (Logroño) → 阿索夫拉 (Azofra) 34km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 8: 阿索夫拉的風景"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.15
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>或許我終究是個習慣與自己對話的人。團體裡的熱鬧很好，但若不是特別投緣，心裡總會想留下一段屬於自己的靜默。於是今天又提前 20 分鐘出發，讓清晨成為我的獨行時光。沒想到腳步越走越順，竟一口氣走了 34 公里。</p>
            <p>心裡仍期待在這段旅程中找到新的養分，去探尋自己真正追求的事物。於是偶爾會故意偏離官方地圖推薦的路線，走進不同的叉路；反正只要一路往西，終究都會抵達終點。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day08_20200215_074420.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day08_20200215_075451.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>第二次偏離主線後，有好一段時間完全看不到 Camino 的路標，難免有些心慌。但也正是在那段空白裡，我慢慢體會到一件事：命運有意無意，總會把人導回正途。途中有鄉民提醒方向，非主線的道路偶爾也會出現標示，引導人回到 Camino de Santiago 的正道上。</p>
            <p>更有趣的是，這些支線其實也是在地人的日常運動路線。有人來回兩點之間健行、散步。其中有一組三位阿嬤，腳程竟和我差不多，偏偏聊天聲像蟬鳴般停不下來，一路此起彼落地響著。</p>
            <p>今天有一半的路程都沿著公路旁的步道前進，風景顯得單調而一致。我從風衣口袋翻出 AirPods Pro，聽點音樂轉換心情。平常音樂只是背景聲，但或許是因為視野一望無際、不必擔心旁人聽見走音，我竟罕見地唱起歌來，還拿著登山杖手舞足蹈地打節奏。若此刻有人偷偷拍下畫面，我大概這輩子都不想回看。</p>
            <p>就這樣走著、聽著、唱著，幾個小時悄然流逝。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day08_20200215_093204.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day08_20200215_131251.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>忽然，一聲老鷹的鳴叫劃過耳際。我抬頭，在無邊無際的藍天裡，輕易發現五、六隻老鷹盤旋滑翔。牠們不疾不徐地展翅，優雅而從容，像天空真正的主人。那畫面莫名震撼，我甚至試著找路靠近，想更貼近那種居高臨下的霸氣。</p>
            <p>曾看過介紹全世界最大體型老鷹的影片：阿根廷巨鷹，雙翼展開可達七公尺，傳說中甚至能獵食大型動物。當然那是遠古已滅絕的物種，但那種對天空的絕對掌控，仍令人心生敬畏。</p>
            <p>傍晚抵達原本預計停留的城鎮：納赫拉（Nájera）。卻遇到一件讓人不太舒服的事。</p>
            <p>事前查到一家評價不錯的餐廳，在門口等候時，前面有四位客人也在等。約莫十分鐘後，一位大媽服務生出來，帶那四人進去。輪到我時，她明顯打量了一下，然後說：「抱歉，滿了。」</p>
            <p>我愣了一下。從門口望進去，明明還有不少空位。我問大概需要等多久，她卻回我：「沒有你的位子，去別的地方吃吧。」</p>
            <p>那一刻，我清楚感受到某種排斥。這大概是我第一次遇到如此明顯的歧視。怒氣在心裡慢慢升起，幾乎就要衝出口。但最後一秒，我忍住了。</p>
            <p>就算吵贏了，又如何？帶著壞心情吃一頓飯，只會破壞這趟旅程。</p>
            <p>於是我轉身離開這座城鎮，決定繼續前往下一個目的地：阿索夫拉（Azofra）。也因此打破了目前的紀錄，單日走了 34 公里。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day08_20200215_140104.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day08_20200215_164522.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <Typography variant="h3">阿索夫拉 (Azofra)</Typography>
            <p>阿索夫拉位在著名的 里奧哈產區 核心範圍內。四周大片葡萄園隨著季節變化呈現不同色彩，春天嫩綠，夏天濃密，秋天則轉為金黃與紅褐。葡萄酒文化深深影響這片土地的生活節奏，空氣裡彷彿都帶著陽光與泥土的氣味。</p>
            <p>由於鄰近 聖地亞哥朝聖之路 法國之路路線，偶爾也能看到背著背包的朝聖者經過。相比熱鬧的納赫拉，阿索夫拉顯得更加安靜，像是一段過渡的風景，讓人暫時遠離人群，只聽見風穿過葡萄藤的聲音。</p>
            <p>在這樣的小鎮停留，不是為了景點，而是為了感受。感受拉里奧哈廣闊的天空、起伏緩慢的丘陵，以及那種不急不徐的時間流動。對於旅人而言，阿索夫拉或許只是一個地圖上不起眼的名字，但走過之後，卻可能成為記憶裡最柔軟的一段風景。</p>
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day08_20200215_223736.jpg`}
                alt="西班牙朝聖之路"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 8
                的西班牙朝聖之路旅行筆記
              </figcaption>
            </figure>
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：CASA RURAL LA PLAZA AZOFRA
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：C. Pl. España, 7, 26323 Azofra, La Rioja, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/SLBZ7hcYBGaLzSvL9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Map
                </a>
              </li>
            </ul>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              餐廳：Restaurante Camino de Santiago Bar Sevilla
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：C. Mayor, 17, 26323 Azofra, La Rioja, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/uVwRhBBugVWvYwu58"
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
                  href="https://prosabrina.com/day9_azofra/"
                  target="_blank"
                  rel="noreferrer"
                >
                  朝聖日記 Day 9 | 朝聖之路的300人小城鎮，Azofra 阿索夫拉鎮上唯一的庇護所 !
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://vocus.cc/article/659eb292fd8978000170d85f"
                  target="_blank"
                  rel="noreferrer"
                >
                  我的朝聖之路-【Camino Frances】D9# 允許被改變的你是有福的
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
