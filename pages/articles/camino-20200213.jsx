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
    <Layout title="朝聖之路 Camino de Santiago Day 6 - 埃斯特利亞 (Estella) to 洛格羅尼奧 (Logroño)">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day06_20200213_093002.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-13"
          info={[
            { key: "Trip", value: "埃斯特利亞 (Estella) → 托雷斯德爾裡奧 (Torres del Rio) 27km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 6: 迷霧中"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.13
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>今早的光景又不太一樣。</p>
            <p>濃霧低垂，天未亮就出發的徒步更顯得迷惘。視線只剩下幾公尺遠的輪廓，前方的路像被時間抹去，只能一步一步試探著前進。這幾天我總是比同一間庇護所的朝聖者早兩個小時出發，卻幾乎都在中午十二點左右被他們追上腳程。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day06_20200213_092150.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day06_20200213_092155.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day06_20200213_093002.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day06_20200213_093213.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <p>不只一位旅人建議我把行李寄送到下一個落腳點，減輕負擔。但我仍想堅持當初的決定：既然選擇自己背負，就把這重量當成體能訓練，也當成一種靈性的修行。背包壓在肩上時，彷彿也提醒著我：有些重量，本來就該自己承擔。</p>
            <p>或許正因為迷霧遮蔽了遠方，這一天的思考特別深。當視線收縮，內心反而變得清晰。我開始反覆思索，究竟該如何擁有一段幸福的感情。</p>
            <p>不少朋友告訴我，感情不能強求，緣分到了自然會來。過去的經驗確實如此；沒有想太多，就在一起了。上一段關係結束至今也一年多了，說沒有反思當然不可能，但若要我明確說出「適合的對象是什麼樣子」、「該如何擁有」，我仍然說不上來。</p>
            <p>我能做的，只是在有好感的前提下不斷嘗試。於是，我累積了比一般人更多的戀愛經驗。曾經也自以為這樣比較厲害，彷彿體驗過不同類型的對象，就是一種成長。只是分手的次數也隨之增加。那感覺有點像讀的書比別人多，賺的錢卻比別人少...一種說不上來的落寞。</p>
            <p>難過的方式每次都不太一樣，但最後還是只能接受；也許我的人生節奏就是如此。</p>
            <p>晚上，一群人預約了在地餐廳：Hostel Rural La Pata de Oca。</p>
            <p>老闆在店裡擺滿中古世紀的盔甲與武器，氣氛讓我十分喜歡。餐點本身倒是普通；看似選擇很多，其實只是牛排、雞排、魚排以不同方式組合的變化。</p>
            <p>用餐接近尾聲時，老闆走出來向大家說了幾句祝福，也介紹了他的理念，接著問有沒有人會音樂，特別是會西班牙語歌的。在我還聽不太懂時，同伴已經指著我說：「他會彈 ukulele。」</p>
            <p>我愣住了。</p>
            <p>等我弄清楚狀況，才知道老闆希望大家一起彈唱。對於容易怯場的我來說，那瞬間真的有點慌張。幸好還有一位西班牙人 David 真正會彈。沒多久老闆拿出吉他和烏克麗麗，準備開始。</p>
            <p>看著 David 行雲流水地彈奏，我臉都綠了。老闆教了我幾個基本和弦，但那早已超出我平常練習的範圍。我只能小聲輕刷，當作伴奏，盡量不讓自己成為破音的來源。好在 David 的功力夠好，大家的注意力都在他身上。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day06_20200213_203330.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <p>我們唱的是：「La Bamba」，和弦 C、F、G——算是安全過關。</p>
            <p>那一刻我心裡只想著：「以後還是不要隨便說自己會彈樂器好了。」</p>
            <p>最後，老闆請我和 David 在樂器上簽名。看著上面滿滿的名字，我寫下自己的名字時竟有些心虛。但也在心裡暗暗對自己說「未來不要辜負這個簽名。」</p>
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day06_20200213_diary.jpg`}
                alt="旅行筆記"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 4
                的旅行筆記
              </figcaption>
            </figure>
            <Typography variant="h3">托雷斯德爾裡奧 (Torres del Rio)</Typography>
            <p>在納瓦拉荒原與葡萄園之間，靜靜坐落著小村莊，Torres del Río。</p>
            <p>它不大，卻在朝聖之路上擁有極高的辨識度。對多數走在 Camino Francés 的朝聖者而言，這裡是一段沉靜卻帶著神秘氣息的停留。</p>
            <p>村莊最重要的地標，是建於 12 世紀的Iglesia del Santo Sepulcro。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day06_church.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day06_20200213_182920.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <p>這座教堂外觀看似樸素，卻有著罕見的八角形結構，常被認為與聖殿騎士團有關。雖然歷史上尚無絕對證據證明騎士團直接建造了它，但八角形設計明顯呼應了耶路撒冷的聖墓教堂樣式，因此被視為象徵「通往聖城」的建築意象。對中世紀的朝聖者來說，這裡像是一座微型的耶路撒冷——即使無法前往聖地，也能在此觸碰信仰的核心。</p>
            <p>走進教堂內部，更能感受到它的獨特。穹頂採用交錯拱肋設計，帶有早期穆德哈爾（Mudéjar）風格影響，融合了基督教與伊斯蘭建築元素。當陽光從小窗斜射進來，石牆顯得格外沉穩而神祕。據說過去朝聖者會在此祈禱，請求平安跨越接下來通往拉里奧哈邊境的崎嶇道路。</p>
            <p>Torres del Río 這個名字意為「河邊的塔樓」，源自中世紀防禦與邊境管理的歷史背景。這裡曾位於納瓦拉王國的重要通道上，在收復失地運動（Reconquista）時期扮演交通與宗教樞紐的角色。如今城鎮規模雖小，卻仍保有濃厚的石造建築風貌與寧靜氛圍。</p>
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Hostal Rural La Pata de Oca
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：C. Mayor, 5, 31229 Torres del Río, Navarra, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/hFUrGQzhaE3VSXXx8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Map
                </a>
              </li>
            </ul>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              Iglesia del Santo Sepulcro
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：C. el Sepulcro, 4, 31229 Torres del Río, Navarra, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/vAhan4HCb4wiSxEL8"
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
                  href="https://vocus.cc/article/656cd414fd897800019affe0"
                  target="_blank"
                  rel="noreferrer"
                >
                  我的朝聖之路-【Camino Frances】D6# 學習做一個有福的人
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
