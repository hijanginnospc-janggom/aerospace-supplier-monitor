const http = require("http");
const https = require("https");
const { URL } = require("url");

const PORT = process.env.PORT || 3000;

const companies = {
  "KAI": { query: "KAI aerospace OR defense" },
  "Hanwha Aero": { query: "Hanwha Aerospace" },
  "LIG Nex1": { query: "LIG Nex1" },
  "Hong Tech": { query: "홍테크 항공" },
  "Hyundai Core Tech": { query: "현대코어테크 항공" },
  "Deck Carbon": { query: "데크카본 항공" },
  "Hanyang ENG": { query: "한양이엔지 우주항공" },
  "Vision Collet": { query: "비전collet 항공" },
  "Shinwoo System": { query: "신우시스템 항공" },
  "Segi Tech": { query: "세기테크 항공" },
  "Yeonjung": { query: "연중 항공 부품" },
  "Sejong Rubber Tech": { query: "세종러버테크 항공" },
  "Shingeumha": { query: "신금하 항공" },
  "ANV": { query: "에이앤브이 항공" },
  "Seowoo": { query: "서우 항공 부품" },
  "Camp": { query: "캠프 항공 산업" },
  "Yeonam Tech": { query: "연암테크 항공" },
  "NDT Engineering": { query: "엔디티엔지니어링 항공" },
  "Kolon Spaceworks": { query: "코오롱스페이스윅스 우주항공" },
  "GST Industry": { query: "지에스티산업 항공" },
  "Space Bay": { query: "스페이스베이 우주항공" },
  "Walter ENG": { query: "발터이엔지 항공" },
  "DANAM Systems": { query: "단암시스템즈 항공" },
  "LN": { query: "엘엔 항공 부품" },
  "Techron": { query: "테크론 항공" },
  "Boeing": { query: "Boeing" },
  "Airbus": { query: "Airbus" },
  "Barnes Aerospace": { query: "Barnes Aerospace" },
  "Kaman Corporation": { query: "Kaman Corporation aerospace" },
  "Magellan Aerospace": { query: "Magellan Aerospace" },
  "Constellium": { query: "Constellium aerospace" },
  "Alcoa": { query: "Alcoa aerospace" },
  "ATI": { query: "ATI aerospace titanium" },
  "Norsk Hydro": { query: "Norsk Hydro aerospace" },
  "Kobe Steel": { query: "Kobe Steel aerospace" },
  "Carpenter Technology": { query: "Carpenter Technology aerospace" },
  "Hexcel": { query: "Hexcel aerospace" },
  "Solvay": { query: "Solvay aerospace" },
  "Precision Castparts Corp.": { query: "Precision Castparts Corp aerospace" },
  "Doncasters Group": { query: "Doncasters Group aerospace" },
  "Arconic": { query: "Arconic aerospace" },
  "LISI Aerospace": { query: "LISI Aerospace" },
  "Stanley Engineered Fastening": { query: "Stanley Engineered Fastening aerospace" },
  "Howmet Aerospace": { query: "Howmet Aerospace" }
};

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

function decodeHtml(text) {
  return text
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseGoogleRss(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = decodeHtml((block.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "");
    const link = decodeHtml((block.match(/<link>([\s\S]*?)<\/link>/i) || [])[1] || "");
    const pubDate = (block.match(/<pubDate>([\s\S]*?)<\/pubDate>/i) || [])[1] || "";
    const description = decodeHtml((block.match(/<description>([\s\S]*?)<\/description>/i) || [])[1] || "");

    if (title && link) {
      items.push({
        source: "Google News",
        title,
        url: link,
        summary: description || "Google News result",
        date: pubDate || new Date().toISOString()
      });
    }
  }

  return items;
}

async function getNews(query) {
  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=ko&gl=KR&ceid=KR:ko`;
  const xml = await fetchText(rssUrl);
  return parseGoogleRss(xml).slice(0, 10);
}

const server = http.createServer(async (req, res) => {
  setCors(res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

  if (parsedUrl.pathname === "/api/news") {
    try {
      const companyId = parsedUrl.searchParams.get("companyId");
      const company = companyId ? companies[companyId] : null;
      const query = company ? company.query : "aerospace OR defense supplier";
      const items = await getNews(query);

      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ items }));
      return;
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: "Failed to fetch news" }));
      return;
    }
  }

  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Aerospace news server is running.");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
