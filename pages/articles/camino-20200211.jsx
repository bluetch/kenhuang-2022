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
    <Layout title="朝聖之路 Camino de Santiago Day 4 - 潘普洛納 (Pamplona) to 蓬特拉雷納 (Puente la Reina)">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day04_20200211_104113.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-11"
          info={[
            { key: "Trip", value: "潘普洛納 (Pamplona) → 蓬特拉雷納 (Puente la Reina) 22km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 4: Just Asking"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.11
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>第四天開始遇到下雨。雖然只是毛毛細雨，卻已足以讓石子路變得溼滑難走。想到如果哪天真的遇到大雨，又剛好是下坡碎石路段，恐怕不知道要摔上幾次。只希望接下來的日子別讓我遇到那種組合。</p>
            <p>同時也收到訊息，那兩位韓國女生決定在 Pamplona 多待一天，加上第一天晚上回程時留下來處理手機網路的法國人，原本 8 個人的小團體，已經有 3 人開始脫隊。看來官方提到的 15% 完走率，並不是隨口說說。</p>
            <p>這幾天也開始遇到各種不同型態的朝聖者：有人騎著腳踏車前進，有人只背著攻頂包、小步慢跑前行。看著他們的方式，不免讓我有些感觸。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day04_20200211_093657.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <Typography className="text-center" variant="h3">
              紀念碑故事
            </Typography>
            <p>這張照片中的紀念碑是獻給一位比利時朝聖者 Frans Koks（全名 Franz Joseph Koks）的路邊十字架。他是一位67歲的比利時朝聖者，在2004年4月28日或29日，於西班牙納瓦拉地區（Navarra）的 Cizur Menor 和 Zariquiegui 之間的 Camino Francés 路線上，因心臟病發作突然去世。</p>
            <p>Frans 當時正在帶領一個團體進行他的第四次聖地亞哥之路（Camino de Santiago）朝聖之旅。他據說走在隊伍最前面，突然倒下，就在原地離世。這個地點位於帕姆普洛納（Pamplona）之後不久，經過一段陡坡，接近著名的 Alto del Perdón 高地。</p>
            <p>他的家人於2005年4月2日在事故現場為他豎立了這個十字架。十字架是由他的兒子 Michel Koks 親手用鐵製成，使用了 Frans 自己工作室的材料。十字架頂端有他的帽子、鞋子，以及一枚朝聖象徵的扇貝殼（scallop shell）指向上方。獻碑儀式上，Michel 還彈著吉他唱了《Take Me Home, Country Roads》這首歌，以紀念父親。</p>
            <p>十字架上附著的小照片，正是 Frans 本人在朝聖途中背著背包行走的樣子。這個地點周圍有樹蔭下的長椅，供疲憊的朝聖者休息，也因此成為許多人經過時停下來反思的地方。隨著時間推移，朝聖者們在這裡留下絲帶、石頭、緞帶和其他紀念物，包括照片中可見的六芒星（Star of David），可能反映 Frans 有猶太血統，或是訪客的個人祈願。</p>
            <p>這個紀念碑提醒人們 Camino 雖然美麗，但也存在風險（如心臟問題或意外），同時也象徵 Frans 「永遠與 Camino 合一」，成為朝聖之路的一部分。許多走過這裡的朝聖者都形容這是個溫暖而感人的休息點，讓人感受到生命的無常與連結。1.5秒快速60 sourcesAre you satisfied with Grok's answer?</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day04_20200211_104113.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day04_20200211_104218.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <p>對啊，為什麼多數人的人生路徑看起來如此相似，但總會有少數人選擇用自己的節奏生活，而那些人，往往也走出了不太一樣的人生。</p>
            <p>或許因為細雨與濕冷的影響，今天特別覺得路程漫長。經過 Uterga 小鎮時，看到一家 Albergue Casa Baztan 門口放著幾個背包，心想應該是有營業（通常白天八點後就會關門）。走進去後，果然看到員工在一個溫馨的用餐區裡忙著，也剛好遇到腳程很快的 Jasmina 正在喝咖啡。</p>
            <p>一向比較內向的我，原本還在猶豫要不要問這裡有沒有供餐，便先問了 Jasmina。她很自然地笑著回我：「不知道耶，你為什麼不直接問他們呢？」</p>
            <p>聽完也只能笑笑，硬著頭皮開口。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day04_20200211_120012.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <p>結果是有提供朝聖者餐（pilgrim meal），只要 10 歐元，包含沙拉、飯、烤豬肉串作為主菜，還有一大杯紅酒和水果。整體相當不錯，除了飯稍微偏硬之外，烤豬肉串讓我印象非常深刻。雖然已經加進 Google Maps 的清單，但心裡也明白，應該很難再有機會回來了，更多是一種記錄當下的心情。</p>
            <p>晚上落腳的小鎮是 Puente la Reina，氣氛相當冷清，真的是個很鄉村的小地方。西班牙的營業時間依然讓我摸不著頭緒，每家店的午休時間都不太一樣，有的下午兩點到四點，有的一點半到三點半，甚至有到五點才重新開門的。這時不免好奇，那些歐洲人平常到底是怎麼打發這段時間的。</p>
            
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day04_20200211_120523.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day04_20200211_120554.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day04_food.jpg`}
              alt="旅行筆記"
              className="w-full object-cover"
            />
            <p>聊天時認識了一位西班牙人 Manuel。他提到自己三歲時因為醫療疏失，左眼留下類似白內障的後遺症，只能感覺到光影的存在。聽起來沉重，但他卻相當平靜，因為從小就已經習慣這樣的生活。更讓我驚訝的是，這條朝聖之路他已經走到第七次了，每一次都是利用換工作的空檔前來。</p>
            <p>他說，人生其實就是不斷地做選擇，而選擇本身就需要思考。因此，他會透過走這條路，來沈澱自己的擔憂、思緒與下一步的方向。和我一樣，他也習慣在夜晚安靜地寫下自己的筆記。那一刻，我對這條路所能帶來的光，又多看見了一些亮度。</p>
            <Typography variant="h3">蓬特拉雷納 (Puente la Reina)</Typography>
            <p>小鎮的名字來自橫跨阿拉加河的中世紀石橋，據說是為了讓朝聖者能安全過河而興建，至今仍靜靜地承載著來往的行人。</p>
            <p>相較於前幾天經過的城鎮，Puente la Reina 顯得格外安靜。沒有太多喧鬧，也少了觀光氣息，更像是一個專門為行走而存在的地方。白天人來人往，夜晚卻迅速回歸沉靜，彷彿提醒著每個經過的人：這裡只是停靠，不是終點。</p>
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day04_20200211_183603.jpg`}
                alt="旅行筆記"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 4
                的旅行筆記
              </figcaption>
            </figure>
          </div>
          <HR />
          <div className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
            <Typography variant="h3">朝聖紀錄點</Typography>
            <div className="h-4"></div>
            <Typography className="text-gray-600" variant="h6">
              住宿：Albergue Casa Baztán
            </Typography>
            <ul className="list-disc list-inside">
              <li>地址：C. Mayor, 46, 31133 Uterga, Navarra, 西班牙</li>
              <li>一晚10歐，餐點好吃，尤其是那個串燒，欲罷不能</li>
              <li>
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/jRjNqgN2sjNu6S2p7"
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
                  href="https://prosabrina.com/puente-de-la-reina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  【36個朝聖之路的城鎮巡禮】#5 Puente De La Reina 蓬特拉雷納
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://vocus.cc/article/66fb9e31fd897800017edc7b"
                  target="_blank"
                  rel="noreferrer"
                >
                  西班牙朝聖徒步旅行｜在寬恕之峰找到朝聖之旅同溫層？！
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
