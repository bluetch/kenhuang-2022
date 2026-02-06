import Image from "next/image";
import {
  Container,
  Layout,
  HR,
  PortfolioSummary,
  Typography,
} from "components";

const CAMINO_IMG_ROOT_URL = "/images/articles/camino";

const Camino = () => {
  return (
    <Layout title="朝聖之路 Camino de Santiago Day 0 - Saint-Jean Pied du Port">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_20200207_130756.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-07"
          info={[
            { key: "Trip", value: "Day 0" },
            {
              key: "From",
              value: "Bordeaux",
            },
            {
              key: "To",
              value: "Saint-Jean Pied du Port",
            },
            { key: "Distance", value: "0 km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路起點: 聖讓皮耶德波爾"
        />
        <Typography className="text-center" variant="h3">
          起點 (事件回顧：2020.02.07)
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>
              清晨，我搭了三個小時的高速火車，終於抵達法國之路的起點——聖讓皮耶德波爾（Saint-Jean-Pied-de-Port）。沿著鐵軌延伸出的山谷，還覆著薄霧，空氣裡帶著冬日特有的濕潤與松木味，讓人清醒也感到一絲不真實。
            </p>
            <p>
              在轉乘最後一段地方列車時，車廂裡只剩下三個人：我，還有兩位法國人。
            </p>
            <p>
              其中一位頭髮全白，姑且先稱呼為John。他告訴我，自己幾年前就已經走完朝聖之路，但這次出現在這裡，並不是為了再次踏上旅程，而是因為九十一歲的母親病了。他每天搭這班車，只為探望母親，眼神裡既有溫柔，也有一種多年走過世事後的平靜與篤定。
            </p>
            <p>
              另一位年輕人大概叫Lucas? (封面照片那位)
              是第一次踏上朝聖之路，幾乎不會說英文，因此我們三人的對話全靠 John
              在中間翻譯，每一句話都像被時間放慢，溫暖又小心翼翼地傳達。
            </p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_20200207_094019.jpg`}
              alt="SJPP火車站"
              className="w-full object-cover"
            />
            <p>下車前，John 看著我們，用一種平靜卻篤定的語氣說了一句話：</p>
            <p>「走的時候，記得一直問自己：Who am I?」</p>
            <p>
              車門關上前，他朝我們點了點頭。同時思索著他留下的話，我找得到答案嗎？
            </p>
            <p>
              走出車站後，城鎮的石板路上仍帶著早晨的寒意，我一路尋找朝聖者辦公室。途中，我遇到了一位背著大背包的女生。她微笑著問我是否也在找辦公室。她來自韓國，叫
              MJ。我告訴她，我已經找到辦公室，但現在是午休時間還沒開，我們便決定先找地方吃午餐。
            </p>
            <p>
              MJ
              會說英文，聊天自然多了起來。她曾做七年的會計工作，但說不清楚自己究竟想改變什麼，只知道「不能再這樣下去」。她提到，朝聖之路在韓國非常有名，很多人都是看了節目、聽了朋友故事，才踏上這條路。我想起由羅䁐錫製作的節目《西班牙寄宿家庭》，在朝聖路上的小鎮經營韓式庇護所，讓走在路上的韓國人能吃到熟悉的家鄉料理。
            </p>
            <p>
              MJ
              笑著說，她才離開家沒幾天，就已經開始想念家裡的味道。每天以麵包為主食的生活，對她來說真的不太容易。那一刻，我忽然明白，在陌生國度能吃到熟悉料理，本身就是一種安慰，也讓人感到一絲歸屬感，即便身在千里之外。
            </p>
            <p>
              午餐後，我們回到朝聖者辦公室。Lucas
              也正站在櫃檯前填寫資料。辦公室旁邊放著一個紙箱，裡面裝滿了貝殼。朝聖者可以拿一個掛在背包上。貝殼不只是裝飾，它同時也是路標，指引前進的方向。貝殼上的放射狀線條，最終匯集成一點，象徵來自世界各地、走在不同道路上的人，最後都會朝向同一個終點——聖地牙哥。當我把貝殼掛上背包的那一刻，心裡有種微妙的儀式感，也像是在對自己宣告：這趟旅程，真的要開始了。
            </p>
            <p>
              辦公室角落放著一本簽到簿。翻開一看，短短一天內已經有八位韓國人留下名字，而最近的一位台灣人，是幾天前簽的。我闔上簿子，心裡有些失落，也許很難遇到原本期待的旅伴，但轉念一想，或許這趟路本來就該一個人走。孤單並不可怕，反而讓人更能專注在步伐、在沿途的風景，甚至在自己的思緒上。
            </p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_20200207_145815.jpg`}
              alt="朝聖之路辦公室留言板"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_20200207_195435.jpg`}
              alt="夜晚的街道"
              className="w-full object-cover"
            />
            <p>
              晚上，我還是習慣性滑著手機，看著新聞。武漢肺炎的疫情開始擴散，死亡人數已經超過當年的
              SARS。澳洲大火也奪走了上億動物的生命。世界沒有因為我停下。朋友傳訊息說，我這時候跑來西班牙，像是在避難。我沒有回覆，只是看著遠方的山峰，感受夜色的冷冽與沉靜。那一刻，我第一次試著不去想未來，也不去想過去。
            </p>
            <p>
              也許每個人都擁有很多幸福，只是慾望總是比知足多了一點，而這一天，我只想先把路走好，慢慢踏出每一步，去感受、去思考、去療癒自己。
            </p>
            <HR />
            <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700 my-8 space-y-2">
              <p>後記：六年前的當下，我深深沉浸在這段旅程中。雖然同時伴隨著不少焦慮——畢竟當時我暫停了新加坡的工作與生活，來到西班牙，試圖透過抽離，讓連夜失眠與緩慢積累的負面情緒得到喘息。</p>
              <p>回頭看，這趟旅程的確幫助我走出低潮，重新回到日常生活。即便現在回憶已略顯模糊，那段經歷帶給我的養分與改變，依然深深留存在我的身體裡，提醒著我曾經勇敢踏出的每一步。</p>
            </blockquote>
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_20200207_193333.jpg`}
                alt="旅行筆記"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                當時在旅館裡寫下的第一篇日記
              </figcaption>
            </figure>
          </div>
          <HR />
            <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <Typography className="text-red-600" variant="h6">
              朝聖者辦公室 Les Amis Du Chemin De Saint Jacques
            </Typography>
            <div>
              <ul className="list-disc list-inside mt-0">
                <li>
                  地址：39 Rue de la Citadelle, 64220 Saint Jean Pied de Port,
                  France
                </li>
                <li>
                  營業時間：週一至週日07:30~12:00、13:30~20:00、21:30~22:30
                </li>
                <li>
                  <a
                    className="underline"
                    href="https://www.google.com.tw/maps/place/39+Rue+de+la+Citadelle,+64220+Saint-Jean-Pied-de-Port,+%E6%B3%95%E5%9C%8B/@43.1634714,-1.2380399,17z/data=!3m1!4b1!4m5!3m4!1s0xd50d56156a7d4eb:0x39fca424c513ae26!8m2!3d43.1634675!4d-1.2358512?hl=zh-TW"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Map
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-4"></div>
            <Typography className="text-red-600" variant="h6">
              住宿：Albergue municipal SJPP
            </Typography>
            <ul className="list-disc list-inside">
              <li>
                地址：55 Rue de la Citadelle, 64220 Saint-Jean-Pied-de-Port,
                France
              </li>
              <li>入住時間：下午2:30, 退房時間：上午10:00</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/SuXwxd4B497Sicsh8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Map
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
// SJPP 這個地方很小，辦登記、領朝聖者護照、蓋第一個章，一切流程都比想像中簡單。但有趣的是，我在報到中心遇到一位義大利的年輕男生。原本我們在車上有聊到幾句，他說要一起去辦手續，結果下車後走散了。我本來沒特別在意，反正旅程才剛開始，結果辦完手續一回頭，就又看到他坐在另一張椅子上。
// 這件事雖然微不足道，但我第一時間的反應是：「這世界的路徑尋找機制還不錯。」

// —
// 晚上住在青年旅館，遇到一位來自台灣的媽媽。她說話的方式很像創業者，一種「我知道我要幹嘛」的篤定。她說這趟旅程是為了一個過世的朋友，也是她多年來壓在心裡沒完成的事。「那時候 SARS 她走了，我一直沒讓自己好好面對這件事。」

// 她說，這次就是來讓自己動起來，因為她知道，如果繼續卡著不動，有些東西會一直卡住。

// 我完全能理解。這趟路我不是來找答案的，我甚至不確定自己問的是什麼。但從日常節奏抽身、刻意去走一段不熟悉又具意圖的路，是我能想出最不被自己打槍的選項。

// 我記得 UX 裡面有一個核心概念是：「你不能設計一個答案給用戶，但你可以設計一段路讓他走向答案。」
// 我不知道我會走到哪裡，但我知道今天是第一步。

// 📍2020.02.07，SJPP

// 問題不一定會在第一天就出現，但腳步已經開始在回答了。

// https://blog.alexho.xyz/camino-de-santiago-day-0-saint-jean-pied-du-port
// https://prosabrina.com/sjpp/

export default Camino;
