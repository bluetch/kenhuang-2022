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
    <Layout title="朝聖之路 Camino de Santiago Day 10 - 卡斯蒂爾德爾加多 (Castildelgado) to 布爾戈斯 (Burgos)">
      <section>
        <Image
          src={`${CAMINO_IMG_ROOT_URL}/camino_day10_20200217_190257.jpg`}
          alt="790km"
          className="h-96 w-full object-cover"
          width={1200}
          height={675}
        />
      </section>
      <Container className="mt-20">
        <PortfolioSummary
          date="2026-02-17"
          info={[
            { key: "Trip", value: "卡斯蒂爾德爾加多 (Castildelgado) → 布爾戈斯 (Burgos) 35km" },
          ]}
          tags={["Camino de Santiago", "徒步旅行"]}
          title="朝聖之路 Day 10: 上車"
        />
        <Typography className="text-center" variant="h3">
          事件回顧：2020.02.17
        </Typography>
        <div className="py-8">
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-relaxed">
            <p>門才開一半，冷風像迎面撞來的車，直接灌進身體，寒意瞬間炸開。於是決定先留在住宿處吃早餐，等太陽露臉再出發。</p>
            <p>右膝還隱隱作痛，左腳腳趾持續麻痺。原本預計兩小時的路程，硬是走了三小時才完成。這只是開始。往 Tosantos 的路上開始下雨，風也跟著來。冷風細雨一起撲上來，只能加快腳步，在一處玄關暫時躲雨。走了 13 公里後，真的很想攔計程車。但電話那頭竟然沒營業。路牌明明寫著 24h，卻全鎮店家都關門，只能繼續在雨裡前行。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day10_20200217_075313.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day10_20200217_075942.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>再撐 90 分鐘，終於抵達 Villafranca Montes de Oca。住宿老闆說可以住，但今天餐廳不營業，整個小鎮也休息。他建議我搭巴士去 Burgos 才有東西吃。那本是明天的目的地。想了想，我是來走朝聖之路的，但不必執著每一步都用雙腳完成。於是決定去等車。</p>
            <p>到站才發現剛錯過 5 分鐘前的班次，下一班要 1 小時半。身體停下來後開始發抖，濕氣滲進骨頭，腿也用疼痛抗議。那一刻很掙扎，要不要再走兩三小時賭一把。最後還是選擇等車。幸好有 Elsa 在線上陪我聊天，撐到巴士來臨，不然真的怕冷到失去意識。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day10_20200217_153512.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day10_20200217_171329.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day10_20200217_175502.jpg`}
              alt="西班牙朝聖之路"
              className="w-full object-cover"
            />
            <p>半小時車程不算快，但暖氣把我從寒針般的冰冷裡救回來。抵達後走進 Restaurante Meson Los Herreros。那份 tapas 幾乎讓我重生。底層是烤馬鈴薯，中層是濃郁柔軟的內餡，咬下去起司流出，上面覆著熱呼呼的烘蛋，再淋上藍莓果醬，最後放上一顆草莓。那一口，像是把今天所有狼狽都化解，重新點燃鬥志。</p>
            <p>晚上訂了有浴缸的房間，泡進熱水裡，讓緊繃的身體慢慢鬆開。</p>
            <figure>
              <img
                src={`${CAMINO_IMG_ROOT_URL}/camino_day10_20200218_090800.jpg`}
                alt="西班牙朝聖之路"
                className="w-full object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Day 10
                的西班牙朝聖之路旅行筆記
              </figcaption>
            </figure>
            <Typography variant="h3">布爾戈斯 (Burgos)</Typography>
            <p>Burgos 位於西班牙北部卡斯提亞-雷昂自治區，是卡米諾法國之路上的重要城市之一。中世紀時曾是卡斯提亞王國的首都，因此保留了濃厚的歷史氣息與莊嚴氛圍。</p>
            <p>城市最著名的地標是 Burgos Cathedral，這座壯麗的哥德式大教堂建於 13 世紀，被列為世界文化遺產。高聳的尖塔與精緻雕刻，在不同光線下呈現截然不同的氣質，是許多朝聖者走進城市時最震撼的一幕。</p>
            <p>布爾戈斯同時也是民族英雄 El Cid 的故鄉，城中仍可見與他相關的雕像與歷史遺跡。沿著阿爾蘭松河散步，可以感受到這座城市比小鎮更多的生活感與節奏感。</p>
            <img
              src={`${CAMINO_IMG_ROOT_URL}/camino_day10_20200217_190258.jpg`}
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
