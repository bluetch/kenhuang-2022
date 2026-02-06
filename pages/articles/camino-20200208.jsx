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
    <Layout title="朝聖之路 Camino de Santiago Day 1 - Saint-Jean Pied du Port to Roncesvalles">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day01_20200209_064218.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-08"
          info={[
            { key: "Trip", value: "SJPP → 倫塞斯瓦列斯 (Roncesvalles) 22km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 1: 走向未知的山路"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.08
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>
              天尚未亮，庇護所裡的朝聖者們默默起身收拾行李。漆黑的天空下，金黃色路燈映照著古老城牆，地上的黃色箭頭閃爍著，指引著前行的方向。
            </p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day01_20200209_071703.jpg`}
              alt="夜晚街道上的黃色箭頭 指引著前行的方向"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day01_20200208_072920.jpg`}
              alt="夜晚街道上的黃色箭頭 指引著前行的方向"
              className="w-full object-cover"
            />
            <p>
              六個人正好在山路起點尋找黃色箭頭，拍下今天22公里的起點照。出發後不到半小時，彼此的腳程差異就顯現了。一小時後，同行的韓國女生
              MJ
              慢了下來，示意我先行，因此如預期般，今天八小時的山路，大半時間是自己一個人在走。
            </p>
            <p>
              沿途的風景沒有特別壯麗。原因之一是冬季走的是替代路線，沒有翻越庇里牛斯山的高點景觀；原因之二，大概是我在台灣、挪威、印尼也走過不少山路，美景已不再稀奇。即便如此，冬日的山景依然寧靜而迷人。
            </p>
            <p>
              天亮後第一個停留點是一個簡單的養豬圈，木棍與鐵絲圍著，豬兒低頭專注吃草，我看不見它們的表情，只感受到生命的專注與努力。再走一段，遇到了一頭驢子，靜靜地走在路上，仿佛在默默觀察著我。
            </p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day01_20200208_084530.jpg`}
              alt="養豬圈裡的豬兒專注吃草"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day01_20200208_112503.jpg`}
              alt="溪流與瀑布流動的自然交響曲"
              className="w-full object-cover"
            />
            <p>
              最喜歡的，仍是溪水與瀑布流動的自然交響曲。我忍不住在水流前靜坐，聆聽水聲。獨自行走在無車公路上，平均每幾公里就能看到黃色箭頭或貝殼標誌，穿梭於山林、溪流、碎石路、草叢與公路的設計，像人生總會遇到各種場景、人事物的交錯。
            </p>
            <p>
              大多數人認為第一天是最難的，不只是陌生的環境，更是對體力的挑戰。對平時愛運動的我來說，健走是喜歡的行為，但真正吃力的是背著13公斤的行李，畢竟沒有做過負重訓練，我把這一切當作修行。
            </p>
            <p>
              在抵達今日終點前約20分鐘，Alto de Ibañeta
              的觀景台標示高度1057公尺。倫塞斯瓦列斯 (Roncesvalles)
              是第一晚的落腳地。這個小鎮建築不到十棟，住宿主要集中在 Albergue de
              Peregrinos Roncesvalles。因為開門時間是下午4點，我先去了隔壁的
              Casa Sabina 喝杯飲料休息。
            </p>
            <p>
              遇到早先那位法國人另一位年輕人大概叫Lucas，他的手機在這裡無法上網，我用
              Google Translator
              幫他查詢線上服務，並嘗試協助解決。最後，他決定回到前一站處理問題，隔天再回來與我們同行。我們乾了一杯，互道祝福。
            </p>
            <p>
              晚餐時，三位韓國年輕人邀我一起用餐。雖然溝通有些吃力，但氣氛不錯，大多數年輕人20~30歲。晚上，我嘗試不吃藥入睡，卻仍每兩小時醒來一次，被周圍鼾聲、翻身、床的震動聲喚醒。這種生活節奏還將持續30天，藥剩下10份，需要珍惜與適應。
            </p>
            <Typography variant="h3">倫塞斯瓦列斯（Roncesvalles）</Typography>
            <p>倫塞斯瓦列斯位在庇里牛斯山腳下，是許多朝聖者翻越法西邊界後的第一個落腳點。與其說是小鎮，不如說它更像一個被山林包圍的據點——建築不多，卻承載了無數旅人第一天的疲憊與安靜。這裡的存在，本身就像是為了接住那些剛走完最艱難路段的人。</p>
            <p>歷史上，倫塞斯瓦列斯以中世紀的修道院群聞名，也與《羅蘭之歌》中的戰役傳說有所連結。但對朝聖者來說，這些傳說往往在抵達當下顯得遙遠。更真實的，是濕冷的空氣、被汗水浸透的背包肩帶，還有一種「今天真的走到了」的踏實感。</p>
            <p>傍晚時分，山谷裡的光線很快暗下來，整個地方彷彿隨著日落一起慢慢收聲。人們陸續走進唯一的庇護所，卸下裝備、交換眼神，卻不一定多話。第一天走到這裡，沒有人急著成為朋友，但所有人都默默共享著同一種狀態——疲憊、安靜，還有對明天未知路線的一點點期待。</p>
            <p>對我而言，倫塞斯瓦列斯不是一個會讓人停留太久的地方，但它很誠實地告訴我：真正的朝聖，已經開始了。</p>
            <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700 my-8 space-y-2">
              <p>
                不斷告訴自己：學習與自己相處，孤單不可怕，反而讓人更專注於每一步、每一景，甚至每一個呼吸與思緒。每一個轉角、每一個標誌，都是前行的陪伴。
              </p>
            </blockquote>
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day01_20200209_162750.jpg`}
                alt="旅行筆記"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 1
                的旅行筆記，感謝出發前帶上的筆記本，讓我能在每天結束時整理當天的經驗與感受。
              </figcaption>
            </figure>
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              歷史地標：納瓦拉國王桑喬七世陵墓 Mausoleo del rey Sancho el Fuerte
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：31650 Roncesvalles, Navarre, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/mDBikdCcs3Xn2FYD9"
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
                  href="https://www.xinmedia.com/article/210161"
                  target="_blank"
                  rel="noreferrer"
                >
                  相遇，在Camino｜如地獄般的庇里牛斯山，法國之路上充滿勇氣與挑戰的考驗
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://travel.yam.com/article/134002"
                  target="_blank"
                  rel="noreferrer"
                >
                  龍塞斯瓦耶斯：超小城鎮卻有大庇護所，聖騎士羅蘭在此長眠
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
