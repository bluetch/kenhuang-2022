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
    <Layout title="朝聖之路 Camino de Santiago Day 5 - 蓬特拉雷納 (Puente la Reina) to 埃斯特利亞 (Estella)">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day05_20200212_093508.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-12"
          info={[
            { key: "Trip", value: "蓬特拉雷納 (Puente la Reina) → 埃斯特利亞 (Estella) 22km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 5: 當選擇成為一條被走過千年的路"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.12
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>昨晚睡了將近 12 個小時，今天更有本錢早起一些。天還沒亮時，遇到一位同樣摸黑出門的日本人同行。我們都從法國之路的起點開始走，但他一天平均 40 公里，是我的兩倍，因此很快就追上了我的行程。</p>
            <p>他提到自己是橄欖球隊成員，這趟旅程對他來說某種程度也是體能訓練。聊了一陣子後，在第一段上坡路時自然分開：：他的節奏明顯更快，我則維持自己的步調。</p>
            <p>約莫上午十點，在 Cirauqui 與 Lorca 之間，路邊出現一處看起來頗為舒適的休息區，牌子上寫著 Olive Garden。抱著好奇心走進這個整理得相當用心的小園地，遇到兩位西班牙人。原來他們兩年前來到這裡，從搬石頭、挖地基、種植小樹開始，一點一滴打造這個休息站，如今已能提供酒水、水果與麵包給朝聖者補給。</p>
            <p>這是一種很踏實的創業精神。後來聽其他朝聖者說，他們未來打算以自家紅酒與橄欖作為主要收入來源。整個空間是露天的，頭頂是稍微會碰到額頭的樹叢遮蔭，椅子像國小教室裡的學生椅，簡單卻溫暖。那是一個仍在成長中的地方。看著他們擁有一塊屬於自己的天地，同時願意分享給路過的人，心裡其實很嚮往。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day05_20200212_093508.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day05_20200212_094248.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>11:40 左右，在 Villatuerta 小鎮前的一片曠野草地，我找了塊大石頭坐下，旁邊剛好有棵能擋風的小樹。照例拿出烏克麗麗，繼續每天的練習。還是從最基本的〈小星星〉、〈生日快樂〉、〈致愛麗絲〉開始。多虧出發前亭潔小老師幫我打了些基礎，至少能看懂單音譜，自得其樂。</p>
            <p>大概過了半小時，同梯的朝聖者們從後方叉路的集結點陸續走來。打聲招呼後，也自然地坐在我挑的「風水寶地」上休息、聊天、吃水果。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day05_20200212-WA0000.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day05_20200212-WA0002.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day05_20200212-WA0004.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>旅行對我的友善之一，就是在國外丟臉也沒人認識我。於是反而比較敢在陌生人面前彈奏這些還不熟練的曲子。當他們笑著說：「不要停，你繼續彈～」我也就真的默默繼續彈著。偶爾穿插幾句聊天，聽他們分享剛才路上的趣事，也分到一些水果與點心。</p>
            <p>突然覺得，自己現在這樣的角色還挺自在的：在一旁提供一點背景音樂，不需要太多言語，卻仍能參與其中、聆聽旅人的故事。走了這麼久，似乎終於找到一種更適合自己的背包客狀態。</p>
            <p>Check in 完後，一群人一起找了間餐廳吃午餐。大多時間仍然聽著他們講西班牙語聊天，但互動慢慢多了一些，他們也教我幾句簡單實用的西班牙語。對我而言，能認識新的人與事物都是加分。也漸漸喜歡上這個國家與這裡的人。心裡想著，如果未來真有機會在這裡生活，語言還是得認真學好。            </p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day05_20200212_132056.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day05_20200211-WA0008.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day05_estella.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <Typography variant="h3">埃斯特利亞 (Estella)</Typography>
            <p>這座城市在 11 世紀由納瓦拉國王為了保護並服務朝聖者而發展起來，原本只是沿著 Ega 河的小聚落，卻因朝聖之路而繁榮。它的名字在拉丁文中意為「星辰」，據說象徵指引旅人的光，因此也被稱為「星之城」。</p>
            <p>走進城區時，能明顯感受到中世紀留下的痕跡。老城區保留著多座羅馬式與哥德式教堂，例如 San Pedro de la Rúa 教堂仍矗立在石階之上；橫跨河流的石橋與狹窄街道，彷彿還維持著數百年前朝聖者往來時的樣貌。當年不同國家的商人與朝聖者在此聚集，讓這座城市一度成為納瓦拉王國的重要據點。</p>
            <p>Estella 不只是補給站，而是一種時間層層堆疊後留下的城市。走了一整天的田野與碎石路，再次踏上鋪設整齊的石板街道時，會突然意識到：幾百年前也有人用同樣的步伐走進這裡。這條路不是新鮮的冒險，而是一條已經被無數選擇與思考踩踏過的方向。</p>
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Albergue de peregrinos de Estella
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：La Rua, 50, 31200 Estella, Navarra, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/635KFFtLHHC6xxxA7"
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
                  href="https://blog.mook.com.tw/article/desc/200000396"
                  target="_blank"
                  rel="noreferrer"
                >
                  朝聖之路前進星星鎮 Estella：烈陽下蹣跚步履，到底還有多遠？
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://travel.yam.com/article/134007"
                  target="_blank"
                  rel="noreferrer"
                >
                  西班牙朝聖之路│星星鎮Estella：悠閒玩水舒緩旅途壓力，還有迪卡儂可逛！
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
