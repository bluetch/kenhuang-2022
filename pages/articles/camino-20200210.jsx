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
    <Layout title="朝聖之路 Camino de Santiago Day 3 - Zubiri to Pamplona">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200210_201947.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-10"
          info={[
            { key: "Trip", value: "蘇維里 (Zubiri) → 潘普洛納 (Pamplona) 21.8km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 3: 酒精與當下"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.10
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>刻意把鬧鐘調早了 15 分鐘，只是想試著獨自出發。雖然韓國人也差不多同時間起床，一起吃了宿舍附的早餐，用餐結束後我還是道別了一聲，先行上路。</p>
            <p>摸黑出發時，腦中回想起這幾天的夜晚。沒吃藥的情況下，仍然平均兩小時醒來一次，但精神卻意外地不錯。不確定是徒步開始暖機的效果，還是心情放鬆帶來的改變，也可能身體正在進行某種調整。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200210_075218.jpg`}
              alt="摸黑出發的朝聖者，頭燈照亮前方的黑暗道路，樹林中透出微弱的晨光"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200210_113712.jpg`}
              alt="河景步道，河水清澈見底，兩岸綠樹成蔭，偶爾有幾隻鴨子悠閒地游過"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200210_080424.jpg`}
              alt="突然猛衝過來的鴨子"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200210_083208.jpg`}
              alt="路標指向下一個目的地的方向，路邊的黃色箭頭清晰可見"
              className="w-full object-cover"
            />
            <p>今天索性直接把登山杖拿出來用，果然在施力與平衡上輕鬆許多。加上路線相對平緩，腳步穩了，思緒也自然多了起來。一路上想到不少朝聖者是辭職來走這條路，也有人因為武漢病毒影響，工作變成無薪假，才有了這段空檔。相較之下，我算是幸運的，不必太擔心回去後的生活與生計。也想起西班牙文老師曾說過的話：「有能力的人，到哪裡都找得到機會。」</p>
            <p>36 歲了，接下來的人生仍然需要成長與成就，才能滿足內心的渴望。但我始終認為，幸福而穩定的感情生活，依舊是我最嚮往的狀態。過去的戀情偶爾仍會像風一樣掠過心頭，那既是回憶，也是提醒——提醒我該如何讓自己更快樂，也如何吸引一個價值相近、卻能彼此互補的伴侶。希望走完這條路，能多少找到一些答案。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200210_112420.jpg`}
              alt="馬路旁的山路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200210_132027.jpg`}
              alt="住宿裡面的床"
              className="w-full object-cover"
            />
            
            <p>晚餐時意外地沒有和韓國人一起吃，他們選擇自己下廚。反倒是西班牙女生 Jasmina 找了幾位歐洲人，邀我一起吃飯。啤酒、紅酒直接開喝，邊吃邊聊才發現，其實話題和我們並沒有太大差別：旅遊、生活、工作。不同的是，他們似乎更懂得活在當下。即使也會擔心工作與生活的平衡，但一旦做出決定，就會果斷執行。我想，這正是我需要學習與成長的地方，也許它會帶我走向一條不太一樣的人生。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200210_201947.jpg`}
              alt="四位西班牙人、一位阿根廷人和一位台灣人在餐桌上吃飯聊天"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200210_201722.jpg`}
              alt="牛肉條和麵包"
              className="w-full object-cover"
            />
            <p>西班牙朋友大力推薦的牛肉條，當時記不得叫什麼來著，畢竟英文也不是西班牙人都很強，但用Grok分析下來加上回憶，應該是Aguja（肩胛肉或牛肩頸部位）：這部位筋膜較多，烤出來會呈現長條狀、略彎曲，因為肌肉纖維走向自然會捲曲或彎。口感結實、多汁，當地人很愛推薦給朝聖者，因為價格親民、份量足、蛋白質高，適合走長路補充能量。</p>
            <p>在加利西亞，牛肉常用 Rubia Gallega（當地紅牛品種），品質極高，當地人常直接簡單烤（asada 或 a la parrilla），不加太多調味，就突出肉的鮮甜和油花。朝聖路上很多小鎮的餐廳或 albergue 附設餐廳，當地人推薦的「牛肉」主菜就是這種簡單烤法，配麵包、可能再加一點橄欖油或粗鹽。</p>
            <Typography variant="h3">潘普洛納 (Pamplona)</Typography>
            <p>Pamplona 是納瓦拉自治區的首府，對多數人來說，這座城市最有名的就是每年七月的奔牛節（San Fermín）。短短幾天，整座古城被紅白相間的人潮與喧鬧淹沒；而在二月，城市卻顯得安靜而內斂，只剩下厚實的城牆、彎曲的石板路，與緩慢流動的日常生活。</p>
            <p>作為法國之路上的重要城市節點，潘普洛納對朝聖者而言既是補給站，也是第一個真正有「城市規模」的停靠點。在這裡，徒步不再只是穿越鄉野，而是重新回到人群之中。對我來說，這也像是一種過渡——從前幾天偏向身體適應與內在整理的階段，慢慢走進更複雜、也更真實的世界。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200210_142836.jpg`}
              alt="主教堂"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200210_153940.jpg`}
              alt="門廊"
              className="w-full object-cover"
            />
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day03_20200211_165146.jpg`}
                alt="旅行筆記"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 3
                的旅行筆記，這次吃的牛肉很特別
              </figcaption>
            </figure>
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Albergue Jesus y Maria
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：C. de la Compañía, 4, 31001 Pamplona, Navarra, 西班牙</li>
              <li>一晚9歐，無餐，洗衣不用錢，烘衣好像1歐，都還滿乾淨的，但洗澡要一直按壓才有水，好像十秒就停</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/QYsmYZ4sCaLUP1de6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Map
                </a>
              </li>
            </ul>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              景點：潘普洛納主教座堂
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：C. Dormitalería, 1, 31001 Pamplona, Navarra, 西班牙</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/21tesjQK51JGWdmo8"
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
                  href="https://vocus.cc/article/66f7ba21fd89780001347231"
                  target="_blank"
                  rel="noreferrer"
                >
                  西班牙朝聖徒步旅行｜潘普洛納：奔牛節與朝聖者的城市
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://prosabrina.com/day3_pamplona/"
                  target="_blank"
                  rel="noreferrer"
                >
                  朝聖日記 Day 3 | Zubiri ➜ Pamplona ，潘普洛納鬥牛城必去的六個熱門景點介紹
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
