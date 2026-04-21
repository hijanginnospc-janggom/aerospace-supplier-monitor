const companies = [
  { id: "KAI", name: "한국항공우주산업", country: "대한민국", sales: "3.8조원", item: "KF-21, FA-50, 회전익", summary: "국내 대표 완제기 업체로 양산과 수출 영향도가 큽니다.", risk: "Low", type: "domestic", query: "KAI aerospace", category: "완제기", watch: "양산 일정, 수출 계약, 구조물 공급 안정성", note: "프로그램 일정 변화가 협력사 전반에 영향을 줄 수 있음" },
  { id: "Hanwha Aero", name: "한화에어로스페이스", country: "대한민국", sales: "9.3조원", item: "항공기 엔진, 발사체", summary: "엔진과 우주 발사체 영역의 핵심 업체입니다.", risk: "Low", type: "domestic", query: "Hanwha Aerospace", category: "엔진/발사체", watch: "엔진 소재 가격, 시험 일정, CAPA 확대", note: "엔진과 우주 분야 뉴스는 공급망 선행지표로 유용" },
  { id: "LIG Nex1", name: "LIG넥스원", country: "대한민국", sales: "2.3조원", item: "유도무기, 항공전자", summary: "방산 및 항공전자 계열 전략 업체입니다.", risk: "Low", type: "domestic", query: "LIG Nex1", category: "유도무기/항공전자", watch: "방산 수주, 전자부품 리드타임, 수출 이슈", note: "항공전자와 방산 프로그램 수요를 함께 보면 좋음" },
  { id: "Hong Tech", name: "홍테크", country: "대한민국", sales: "미공개", item: "정밀 가공 부품", summary: "항공 부품 정밀가공 및 조립 성격의 국내 업체입니다.", risk: "Medium", type: "domestic", query: "홍테크 항공", category: "정밀가공", watch: "가공 CAPA, 납기, 고객사 수주 변화", note: "정밀가공 업체는 납기 지연 징후를 빠르게 보는 것이 중요" },
  { id: "Hyundai Core Tech", name: "현대코어테크", country: "대한민국", sales: "미공개", item: "엔진 및 기체 핵심 부품", summary: "엔진과 기체 부품 관련 국내 부품사입니다.", risk: "Medium", type: "domestic", query: "현대코어테크 항공", category: "부품제조", watch: "엔진부품 수요, 생산 차질, 고객사 일정", note: "엔진 계열 이슈와 연동해 보는 것이 유용" },
  { id: "Deck Carbon", name: "데크카본", country: "대한민국", sales: "600억", item: "탄소 복합재", summary: "복합소재 계열 공급사입니다.", risk: "Low", type: "domestic", query: "데크카본 항공", category: "복합재", watch: "복합재 수요, 원재료 가격, 신규 적용 프로그램", note: "원재료 가격과 고객 플랫폼 확대 여부를 같이 확인" },
  { id: "Hanyang ENG", name: "한양이엔지", country: "대한민국", sales: "1조원", item: "설비 및 시스템", summary: "설비와 시스템 구축 성격이 강한 업체입니다.", risk: "Low", type: "domestic", query: "한양이엔지 우주항공", category: "설비/시스템", watch: "설비 투자, 프로젝트 수주, 인프라 구축 일정", note: "직접 부품보다 프로젝트 뉴스 중심으로 체크" },
  { id: "Vision Collet", name: "비전collet", country: "대한민국", sales: "미공개", item: "정밀 콜렛 및 공구", summary: "정밀 공구 및 체결 관련 국내 업체입니다.", risk: "Medium", type: "domestic", query: "비전collet 항공", category: "공구/체결", watch: "정밀공구 수요, 거래처 확대, 납품 안정성", note: "생산성 영향이 큰 보조 부품군" },
  { id: "Shinwoo System", name: "신우시스템", country: "대한민국", sales: "미공개", item: "기체 구조물 부품", summary: "기체 구조물과 부품 가공 관련 업체입니다.", risk: "Medium", type: "domestic", query: "신우시스템 항공", category: "부품제조", watch: "구조물 수주, 납기, 품질 이슈", note: "구조물 관련 병목 여부를 뉴스로 확인" },
  { id: "Segi Tech", name: "세기테크", country: "대한민국", sales: "미공개", item: "표면처리 및 정밀 가공", summary: "가공과 표면처리 계열 공급사입니다.", risk: "Medium", type: "domestic", query: "세기테크 항공", category: "정밀가공", watch: "표면처리 CAPA, 품질 클레임, 납기", note: "품질 이슈가 직접 리스크가 되기 쉬움" },
  { id: "Yeonjung", name: "연중", country: "대한민국", sales: "미공개", item: "정밀 기계부품", summary: "정밀 기계부품 중심 국내 업체입니다.", risk: "Medium", type: "domestic", query: "연중 항공 부품", category: "기계부품", watch: "정밀부품 수요, 거래처, 납기", note: "주요 고객사 뉴스와 같이 보면 더 효과적" },
  { id: "Sejong Rubber Tech", name: "세종러버테크", country: "대한민국", sales: "미공개", item: "특수 고무 및 실링", summary: "고무/실링 계열 특수 소재 업체입니다.", risk: "Medium", type: "domestic", query: "세종러버테크 항공", category: "고무/실링", watch: "소재 공급, 인증, 특수 실링 수요", note: "작은 품목이지만 생산 차질 영향이 클 수 있음" },
  { id: "Shingeumha", name: "신금하", country: "대한민국", sales: "미공개", item: "가공 구조 부품", summary: "구조부품 절삭가공 업체 성격입니다.", risk: "Medium", type: "domestic", query: "신금하 항공", category: "정밀가공", watch: "가공 부하, 인력, 납기 이슈", note: "현장 병목 징후를 보는 용도로 적합" },
  { id: "ANV", name: "에이앤브이", country: "대한민국", sales: "미공개", item: "전자 및 제어 시스템", summary: "전자/제어 시스템 관련 업체입니다.", risk: "Medium", type: "domestic", query: "에이앤브이 항공", category: "전자/시스템", watch: "전자부품 조달, 프로젝트 수주, 기술 개발", note: "항공전자 관련 뉴스와 함께 보기 좋음" },
  { id: "Seowoo", name: "서우", country: "대한민국", sales: "미공개", item: "내장부품 및 치공구", summary: "내장부품 및 치공구 관련 업체입니다.", risk: "Medium", type: "domestic", query: "서우 항공 부품", category: "부품제조", watch: "치공구 수요, 생산 안정성, 거래처 변화", note: "주요 고객 프로그램 일정과 연동해 확인" },
  { id: "Camp", name: "캠프", country: "대한민국", sales: "미공개", item: "산업용 소프트웨어", summary: "산업 특화 IT/솔루션 업체입니다.", risk: "Medium", type: "domestic", query: "캠프 항공 산업", category: "IT/솔루션", watch: "산업 SW 프로젝트, 운영 시스템 공급 확대", note: "직접 부품이 아닌 운영 시스템 뉴스 중심" },
  { id: "Yeonam Tech", name: "연암테크", country: "대한민국", sales: "500억", item: "엔진 및 샤프트 부품", summary: "엔진/기체 핵심 부품 가공 업체입니다.", risk: "Low", type: "domestic", query: "연암테크 항공", category: "정밀가공", watch: "엔진 부품 수요, 신규 수주, 생산 부하", note: "엔진 관련 고객사 뉴스와 같이 확인" },
  { id: "NDT Engineering", name: "엔디티엔지니어링", country: "대한민국", sales: "800억", item: "기체 구조물", summary: "민수/군용 구조물 조립 관련 업체입니다.", risk: "Low", type: "domestic", query: "엔디티엔지니어링 항공", category: "기체구조", watch: "구조물 조립 수주, 생산 일정, 고객 프로그램 변화", note: "민수/군용 수요 흐름 비교가 좋음" },
  { id: "Kolon Spaceworks", name: "코오롱스페이스윅스", country: "대한민국", sales: "대기업계열", item: "복합재 구조물", summary: "복합재 기반 우주/항공 부품 업체입니다.", risk: "Low", type: "domestic", query: "코오롱스페이스윅스 우주항공", category: "복합재", watch: "복합재 적용 확대, 수주, 소재 이슈", note: "우주항공/복합재 확대 뉴스가 중요" },
  { id: "GST Industry", name: "지에스티산업", country: "대한민국", sales: "미공개", item: "유압 시스템 부품", summary: "유압계통 부품 공급업체입니다.", risk: "Medium", type: "domestic", query: "지에스티산업 항공", category: "부품제조", watch: "유압 부품 수요, 공급 안정성, 고객 일정", note: "유압계통 수요 변화 점검" },
  { id: "Space Bay", name: "스페이스베이", country: "대한민국", sales: "스타트업", item: "위성 및 발사체 모듈", summary: "우주항공 분야 스타트업 성격의 업체입니다.", risk: "Medium", type: "domestic", query: "스페이스베이 우주항공", category: "우주항공", watch: "위성, 발사체, 투자/사업 제휴 이슈", note: "투자/협력 뉴스도 중요하게 볼 것" },
  { id: "Walter ENG", name: "발터이엔지", country: "대한민국", sales: "미공개", item: "시험설비 및 자동화", summary: "시험설비/자동화 시스템 업체입니다.", risk: "Medium", type: "domestic", query: "발터이엔지 항공", category: "설비/시스템", watch: "시험설비 프로젝트, 자동화 수주, 유지보수", note: "설비 프로젝트 뉴스 중심 모니터링" },
  { id: "DANAM Systems", name: "단암시스템즈", country: "대한민국", sales: "1000억", item: "통신 및 항법 장치", summary: "전술 통신과 항법 시스템 업체입니다.", risk: "Low", type: "domestic", query: "단암시스템즈 항공", category: "전자/통신", watch: "통신/항법 수주, 방산 프로젝트, 개발 이슈", note: "프로그램별 수요 변화와 함께 체크" },
  { id: "LN", name: "엘엔", country: "대한민국", sales: "미공개", item: "정밀 체결류 및 소형 부품", summary: "정밀 체결류 중심 부품 공급업체입니다.", risk: "Medium", type: "domestic", query: "엘엔 항공 부품", category: "부품제조", watch: "체결류 수요, 공급 안정성, 고객 확대", note: "작지만 라인 정지 리스크가 있을 수 있음" },
  { id: "Techron", name: "테크론", country: "대한민국", sales: "미공개", item: "CNC 가공품", summary: "CNC 가공 및 조립 성격의 국내 업체입니다.", risk: "Medium", type: "domestic", query: "테크론 항공", category: "정밀가공", watch: "CNC 생산성, 납기, 주요 수주", note: "가공업체 전반의 생산 부하 확인용" },
  { id: "Boeing", name: "Boeing", country: "미국", sales: "778억$", item: "상용기, 군용기", summary: "글로벌 완제기 제조사입니다.", risk: "Medium", type: "global", query: "Boeing", category: "완제기", watch: "인도 일정, 규제, 파업, 고객사 영향", note: "대형 OEM 이슈는 공급망 전반에 파급" },
  { id: "Airbus", name: "Airbus", country: "프랑스/독일", sales: "654억EUR", item: "상용기 전기종", summary: "유럽 대표 완제기 제조사입니다.", risk: "Low", type: "global", query: "Airbus", category: "완제기", watch: "유럽 생산 증설, 공급망 병목, 인도 계획", note: "유럽 공급망 흐름 파악에 유용" },
  { id: "Barnes Aerospace", name: "Barnes Aerospace", country: "미국", sales: "미공개", item: "엔진 부품 및 MRO", summary: "정밀 부품 및 MRO 계열 공급사입니다.", risk: "Medium", type: "global", query: "Barnes Aerospace", category: "부품/MRO", watch: "엔진부품 수요, MRO 계약, 정비시장 흐름", note: "MRO 시장 뉴스와 함께 보는 것이 좋음" },
  { id: "Kaman Corporation", name: "Kaman Corporation", country: "미국", sales: "미공개", item: "베어링 및 구조물", summary: "베어링과 구조물 관련 해외 공급사입니다.", risk: "Medium", type: "global", query: "Kaman Corporation aerospace", category: "복합재/기체", watch: "구조물 수요, 베어링 공급, 프로그램 축소/확대", note: "기체/베어링 수요 흐름 주시" },
  { id: "Magellan Aerospace", name: "Magellan Aerospace", country: "캐나다", sales: "미공개", item: "엔진 모듈 및 기체 구조물", summary: "캐나다 항공우주 제조 및 부품 공급사입니다.", risk: "Medium", type: "global", query: "Magellan Aerospace", category: "엔진/기체", watch: "엔진 모듈 생산, 구조물 수주, 북미 수요", note: "북미 공급망 흐름 확인용" },
  { id: "Constellium", name: "Constellium", country: "프랑스", sales: "81억EUR", item: "알루미늄 판재", summary: "항공용 알루미늄 소재 공급사입니다.", risk: "Medium", type: "global", query: "Constellium aerospace", category: "원소재", watch: "알루미늄 가격, 판재 수요, 공급 차질", note: "LME 알루미늄과 같이 보는 것이 좋음" },
  { id: "Alcoa", name: "Alcoa", country: "미국", sales: "105억$", item: "알루미늄 잉곳 및 합금", summary: "원자재 가격 영향이 큰 소재 공급사입니다.", risk: "High", type: "global", query: "Alcoa aerospace", category: "원소재", watch: "알루미늄 급등, 생산 차질, 원가 전가", note: "원가 민감도가 높은 리스크 모니터링 대상" },
  { id: "ATI", name: "ATI", country: "미국", sales: "38억$", item: "티타늄 및 특수 합금", summary: "특수금속 계열 항공 소재 업체입니다.", risk: "Medium", type: "global", query: "ATI aerospace titanium", category: "원소재", watch: "티타늄 가격, 합금 공급, 엔진 수요", note: "엔진/소재 관련 시장과 함께 체크" },
  { id: "Norsk Hydro", name: "Norsk Hydro", country: "노르웨이", sales: "2091억NOK", item: "알루미늄 압출재", summary: "알루미늄 계열 글로벌 소재 공급사입니다.", risk: "Low", type: "global", query: "Norsk Hydro aerospace", category: "원소재", watch: "알루미늄 압출 수요, ESG, 저탄소 소재 확대", note: "소재 안정성과 ESG 메시지를 함께 확인" },
  { id: "Kobe Steel", name: "Kobe Steel", country: "일본", sales: "2.4조JPY", item: "티타늄 단조품 및 특수강", summary: "일본 특수금속/단조 소재 공급사입니다.", risk: "Medium", type: "global", query: "Kobe Steel aerospace", category: "원소재", watch: "단조품 공급, 품질, 일본 생산 이슈", note: "엔진/기체 구조용 금속재 공급 뉴스 확인" },
  { id: "Carpenter Technology", name: "Carpenter Technology", country: "미국", sales: "25억$", item: "고성능 합금", summary: "고성능 특수합금 공급사입니다.", risk: "Low", type: "global", query: "Carpenter Technology aerospace", category: "원소재", watch: "특수합금 수요, 소재 가격, 고객 확대", note: "고성능 합금 시장 흐름 확인용" },
  { id: "Hexcel", name: "Hexcel", country: "미국", sales: "19억$", item: "탄소섬유 프리프레그", summary: "복합소재 원소재 공급사입니다.", risk: "Low", type: "global", query: "Hexcel aerospace", category: "원소재", watch: "복합재 수요, 가격, 주요 OEM 생산 계획", note: "원소재 가격과 수요를 같이 보는 것이 좋음" },
  { id: "Solvay", name: "Solvay", country: "벨기에", sales: "134억EUR", item: "고분자 화학소재", summary: "항공용 특수 화학소재 공급사입니다.", risk: "Low", type: "global", query: "Solvay aerospace", category: "원소재", watch: "고분자 소재, 접착제, 항공용 화학재 수요", note: "복합재/특수소재 이슈와 함께 보면 좋음" },
  { id: "Precision Castparts Corp.", name: "Precision Castparts Corp.", country: "미국", sales: "미공개", item: "대형 주조 및 단조품", summary: "대형 주조/단조 항공 부품 공급사입니다.", risk: "Low", type: "global", query: "Precision Castparts Corp aerospace", category: "엔진/구조", watch: "대형 주조/단조 수요, 엔진 공급망, 고객사 동향", note: "핵심 구조/엔진 파트 공급 뉴스 중요" },
  { id: "Doncasters Group", name: "Doncasters Group", country: "영국", sales: "미공개", item: "정밀주조 엔진 부품", summary: "엔진부품 정밀주조 계열 공급사입니다.", risk: "Medium", type: "global", query: "Doncasters Group aerospace", category: "엔진부품", watch: "정밀주조 수요, 엔진 프로그램 확대, 생산 차질", note: "엔진부품 공급 이슈 중점 확인" },
  { id: "Arconic", name: "Arconic", country: "미국", sales: "82억$", item: "알루미늄 시트 및 판재", summary: "구조용 알루미늄 소재 공급사입니다.", risk: "Medium", type: "global", query: "Arconic aerospace", category: "원소재", watch: "구조용 알루미늄 수요, 원자재 가격, 생산 차질", note: "구조물 수요와 함께 확인" },
  { id: "LISI Aerospace", name: "LISI Aerospace", country: "프랑스", sales: "14억EUR", item: "패스너 및 구조용 하드웨어", summary: "항공 패스너 전문 공급사입니다.", risk: "Low", type: "global", query: "LISI Aerospace", category: "패스너", watch: "체결류 수요, 생산 안정성, OEM 수요 변화", note: "패스너 계열은 생산 차질 시 영향 큼" },
  { id: "Stanley Engineered Fastening", name: "Stanley Engineered Fastening", country: "미국", sales: "그룹기반", item: "리벳 및 체결 시스템", summary: "항공용 체결 솔루션 공급사입니다.", risk: "Low", type: "global", query: "Stanley Engineered Fastening aerospace", category: "패스너", watch: "리벳/체결류 수요, 고객 확대, 공급 안정성", note: "패스너 라인업 확장 뉴스 확인" },
  { id: "Howmet Aerospace", name: "Howmet Aerospace", country: "미국", sales: "66억$", item: "패스너 및 단조 부품", summary: "패스너와 단조품 모두 영향력이 큰 공급사입니다.", risk: "Low", type: "global", query: "Howmet Aerospace", category: "엔진부품", watch: "티타늄 단조, 엔진 파트, 고객 생산 계획", note: "엔진/패스너 핵심 공급사로 영향도 높음" }
];

const metrics = [
  { key: "usd", label: "미국 환율", value: "1,384", unit: "KRW", change: "+4.3", series: [1320, 1335, 1340, 1352, 1366, 1375, 1380, 1384] },
  { key: "gbp", label: "영국 환율", value: "1,726", unit: "KRW", change: "+6.1", series: [1682, 1690, 1704, 1711, 1718, 1720, 1725, 1726] },
  { key: "cny", label: "중국 환율", value: "191", unit: "KRW", change: "-0.4", series: [198, 197, 196, 195, 194, 193, 192, 191] },
  { key: "jpy", label: "일본 환율", value: "958", unit: "KRW(100엔)", change: "+3.2", series: [931, 936, 940, 944, 949, 952, 955, 958] },
  { key: "aluminum", label: "LME 알루미늄", value: "2,418", unit: "USD/t", change: "+18", series: [2290, 2315, 2340, 2362, 2388, 2401, 2412, 2418] },
  { key: "oil", label: "유가", value: "82.4", unit: "USD/bbl", change: "+1.5", series: [76.5, 77.1, 78.3, 79.4, 80.1, 81.2, 81.8, 82.4] },
  { key: "volatility", label: "유가 변동성", value: "높음", unit: "", change: "주의", series: [42, 45, 51, 48, 55, 61, 58, 64] }
];

const chartLabels = ["1주", "2주", "3주", "4주", "5주", "6주", "7주", "8주"];
const defaultNewsQuery = "aerospace OR defense supplier";
const importantKeywords = ["파업", "지연", "리콜", "제재", "급등", "차질", "부족", "shutdown", "delay", "strike", "risk", "probe", "shortage", "recall", "sanction"];
const mediumKeywords = ["계약", "증설", "투자", "협력", "수주", "expansion", "contract", "investment", "partnership"];

let selectedCompany = null;
let selectedMetric = metrics[0];
let newsRefreshTimer = null;

function translateRisk(risk) {
  return { Low: "낮음", Medium: "보통", High: "높음" }[risk] || risk;
}

function riskTagClass(risk) {
  return { Low: "good", Medium: "warn", High: "danger" }[risk] || "warn";
}

function metricStatus(metric) {
  if (metric.key === "usd") return Number(metric.value.replace(/,/g, "")) >= 1380 ? "warn" : "good";
  if (metric.key === "gbp") return Number(metric.value.replace(/,/g, "")) >= 1720 ? "warn" : "good";
  if (metric.key === "cny") return Number(metric.value.replace(/,/g, "")) >= 195 ? "warn" : "good";
  if (metric.key === "jpy") return Number(metric.value.replace(/,/g, "")) >= 955 ? "warn" : "good";
  if (metric.key === "aluminum") return Number(metric.value.replace(/,/g, "")) >= 2400 ? "danger" : "warn";
  if (metric.key === "oil") return Number(metric.value) >= 82 ? "warn" : "good";
  if (metric.key === "volatility") return metric.value === "높음" ? "danger" : "warn";
  return "good";
}

function renderMetrics() {
  const metricGrid = document.getElementById("metricGrid");
  metricGrid.innerHTML = metrics.map(metric => `
    <div class="metric-card alert-${metricStatus(metric)}" data-key="${metric.key}">
      <h3>${metric.label}</h3>
      <strong>${metric.value}</strong>
      <span>${metric.unit} / ${metric.change}</span>
    </div>
  `).join("");

  metricGrid.querySelectorAll(".metric-card").forEach(card => {
    card.addEventListener("click", () => {
      selectedMetric = metrics.find(item => item.key === card.dataset.key);
      openModal();
      renderChart();
    });
  });
}

function renderSummary() {
  const summaryGrid = document.getElementById("summaryGrid");
  const usd = metrics.find(metric => metric.key === "usd");
  const aluminum = metrics.find(metric => metric.key === "aluminum");
  const oil = metrics.find(metric => metric.key === "oil");
  const volatility = metrics.find(metric => metric.key === "volatility");

  const cards = [
    {
      level: metricStatus(usd) === "good" ? "good" : "warn",
      title: "환율 리스크",
      body: metricStatus(usd) === "good"
        ? `달러 환율 ${usd.value}원으로 비교적 안정 구간입니다.`
        : `달러 환율 ${usd.value}원으로 상승 압력이 있어 해외 조달비용 점검이 필요합니다.`
    },
    {
      level: metricStatus(aluminum) === "danger" ? "danger" : "warn",
      title: "원자재 리스크",
      body: `LME 알루미늄 ${aluminum.value} USD/t 수준으로 항공 소재 원가 영향이 큽니다.`
    },
    {
      level: metricStatus(volatility) === "danger" || metricStatus(oil) === "warn" ? "danger" : "good",
      title: "에너지/물류 리스크",
      body: `유가 ${oil.value} USD/bbl, 변동성 ${volatility.value} 상태로 물류 및 간접원가를 함께 볼 필요가 있습니다.`
    }
  ];

  summaryGrid.innerHTML = cards.map(card => `
    <div class="summary-card ${card.level}">
      <h3>${card.title}</h3>
      <p>${card.body}</p>
    </div>
  `).join("");
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("supplierFavorites") || "[]");
  } catch {
    return [];
  }
}

function setFavorites(ids) {
  localStorage.setItem("supplierFavorites", JSON.stringify(ids));
}

function isFavorite(companyId) {
  return getFavorites().includes(companyId);
}

function toggleFavorite(companyId) {
  const favorites = getFavorites();
  if (favorites.includes(companyId)) {
    setFavorites(favorites.filter(id => id !== companyId));
  } else {
    setFavorites([...favorites, companyId]);
  }
}

function renderFavorites() {
  const favoriteList = document.getElementById("favoriteList");
  const favorites = getFavorites()
    .map(id => companies.find(company => company.id === id))
    .filter(Boolean);

  if (!favorites.length) {
    favoriteList.innerHTML = `<div class="detail-card"><p>관심업체를 추가하면 여기에 고정됩니다.</p></div>`;
    return;
  }

  favoriteList.innerHTML = favorites.map(company => `
    <div class="favorite-chip ${selectedCompany && selectedCompany.id === company.id ? "active" : ""}" data-id="${company.id}">
      ${company.name}
    </div>
  `).join("");

  favoriteList.querySelectorAll(".favorite-chip").forEach(node => {
    node.addEventListener("click", async () => {
      selectedCompany = companies.find(company => company.id === node.dataset.id) || null;
      await renderAllCompanySections();
    });
  });
}

function buildSourceLinks() {
  const container = document.getElementById("sourceLinks");
  const queryBase = selectedCompany ? (selectedCompany.query || selectedCompany.name) : defaultNewsQuery;
  const query = encodeURIComponent(queryBase);
  const links = [
    { label: "Google", url: `https://news.google.com/search?q=${query}` },
    { label: "Naver", url: `https://search.naver.com/search.naver?where=news&query=${query}` },
    { label: "SaverTicker", url: `https://www.google.com/search?q=SaverTicker+${query}` }
  ];
  container.innerHTML = links.map(link => `<a class="source-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join("");
}

function stripHtml(value) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function decodeHtml(value) {
  return value
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
    const chunk = match[1];
    const title = decodeHtml((chunk.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "");
    const link = decodeHtml((chunk.match(/<link>([\s\S]*?)<\/link>/i) || [])[1] || "");
    const pubDate = (chunk.match(/<pubDate>([\s\S]*?)<\/pubDate>/i) || [])[1] || "";
    const description = decodeHtml((chunk.match(/<description>([\s\S]*?)<\/description>/i) || [])[1] || "");
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

async function fetchGoogleNewsItems() {
  const baseQuery = selectedCompany ? `${selectedCompany.query || selectedCompany.name} aerospace OR defense` : defaultNewsQuery;
  const query = encodeURIComponent(baseQuery);
  const rssUrl = encodeURIComponent(`https://news.google.com/rss/search?q=${query}&hl=ko&gl=KR&ceid=KR:ko`);
  const endpoints = [
    `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`,
    `https://api.allorigins.win/raw?url=${rssUrl}`
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        continue;
      }

      if (endpoint.includes("rss2json")) {
        const payload = await response.json();
        const items = (payload.items || []).map(item => ({
          source: "Google News",
          title: item.title || "제목 없음",
          url: item.link,
          summary: item.description ? stripHtml(item.description) : "Google News result",
          date: item.pubDate || new Date().toISOString()
        }));
        if (items.length) return items;
      } else {
        const xml = await response.text();
        const items = parseGoogleRss(xml);
        if (items.length) return items;
      }
    } catch {
      continue;
    }
  }

  return [];
}

function formatNewsDate(dateText) {
  const date = new Date(dateText);
  if (Number.isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const hour = `${date.getHours()}`.padStart(2, "0");
  const minute = `${date.getMinutes()}`.padStart(2, "0");
  return `${year}-${month}-${day} ${hour}:${minute}`;
}

function newsPriority(item) {
  const text = `${item.title} ${item.summary}`.toLowerCase();
  if (importantKeywords.some(keyword => text.includes(keyword.toLowerCase()))) {
    return { label: "중요", level: "high" };
  }
  if (mediumKeywords.some(keyword => text.includes(keyword.toLowerCase()))) {
    return { label: "관심", level: "medium" };
  }
  return { label: "일반", level: "low" };
}

function highlightKeywords(text) {
  let result = text;
  [...importantKeywords, ...mediumKeywords].forEach(keyword => {
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");
    result = result.replace(regex, '<span class="highlight-risk">$1</span>');
  });
  return result;
}

function getFilteredCompanies(type, searchText) {
  return companies.filter(company => {
    const matchesType = company.type === type;
    const searchBase = `${company.id} ${company.name} ${company.country} ${company.item} ${company.category}`.toLowerCase();
    return matchesType && searchBase.includes(searchText.toLowerCase());
  });
}

function renderCompanyList(type, searchText = "") {
  const targetId = type === "domestic" ? "domesticList" : "globalList";
  const list = document.getElementById(targetId);
  const filtered = getFilteredCompanies(type, searchText);

  list.innerHTML = filtered.map(company => `
    <div class="company-item ${selectedCompany && selectedCompany.id === company.id ? "active" : ""}" data-id="${company.id}">
      <div class="company-title-row">
        <h3>${company.name}</h3>
        <span class="category-chip">(${company.category})</span>
      </div>
      <div class="company-meta">
        <span class="source-badge">${translateRisk(company.risk)}</span>
        ${isFavorite(company.id) ? '<span class="source-badge">관심</span>' : ""}
      </div>
      <p>${company.country} / ${company.item}</p>
    </div>
  `).join("");

  list.querySelectorAll(".company-item").forEach(item => {
    item.addEventListener("click", async () => {
      selectedCompany = companies.find(entry => entry.id === item.dataset.id) || null;
      await renderAllCompanySections();
    });
  });
}

function renderFavoriteButton() {
  const button = document.getElementById("favoriteToggleButton");
  if (!selectedCompany) {
    button.textContent = "관심업체 추가";
    button.disabled = true;
    return;
  }
  button.disabled = false;
  button.textContent = isFavorite(selectedCompany.id) ? "관심업체 해제" : "관심업체 추가";
}

function getMemoKey(companyId) {
  return `supplierMemo:${companyId}`;
}

function loadMemo() {
  const textarea = document.getElementById("supplierMemo");
  const status = document.getElementById("memoStatus");
  if (!selectedCompany) {
    textarea.value = "";
    textarea.disabled = true;
    status.textContent = "업체를 선택하면 메모를 작성할 수 있습니다.";
    return;
  }
  textarea.disabled = false;
  textarea.value = localStorage.getItem(getMemoKey(selectedCompany.id)) || "";
  status.textContent = "";
}

function renderCompanyDetail() {
  const title = document.getElementById("companyTitle");
  const detail = document.getElementById("companyDetail");
  if (!selectedCompany) {
    title.textContent = "공급업체 정보";
    detail.innerHTML = `
      <div class="detail-card">
        <p>왼쪽 공급업체를 클릭하면 국가, 매출, 공급품목, 모니터링 포인트를 볼 수 있습니다.</p>
      </div>
    `;
    renderFavoriteButton();
    loadMemo();
    return;
  }

  title.textContent = `${selectedCompany.name} 정보`;
  detail.innerHTML = `
    <div class="detail-card">
      <p>${selectedCompany.summary}</p>
    </div>
    <div class="info-grid">
      <div class="info-box">
        <span>국가</span>
        <strong>${selectedCompany.country}</strong>
      </div>
      <div class="info-box">
        <span>매출</span>
        <strong>${selectedCompany.sales}</strong>
      </div>
      <div class="info-box">
        <span>공급품목</span>
        <strong>${selectedCompany.item}</strong>
      </div>
      <div class="info-box">
        <span>카테고리</span>
        <strong>${selectedCompany.category}</strong>
      </div>
      <div class="info-box">
        <span>리스크 수준</span>
        <strong>${translateRisk(selectedCompany.risk)}</strong>
      </div>
      <div class="info-box">
        <span>뉴스 검색 키워드</span>
        <strong>${selectedCompany.query}</strong>
      </div>
    </div>
    <div class="detail-card">
      <h3 class="detail-section-title">추가로 보면 좋은 정보</h3>
      <div class="detail-list">
        <div class="info-box">
          <span>핵심 모니터링 포인트</span>
          <strong>${selectedCompany.watch}</strong>
        </div>
        <div class="info-box">
          <span>조달 메모 추천</span>
          <strong>${selectedCompany.note}</strong>
        </div>
      </div>
    </div>
    <div class="detail-card">
      <span class="tag ${riskTagClass(selectedCompany.risk)}">리스크 ${translateRisk(selectedCompany.risk)}</span>
    </div>
  `;

  renderFavoriteButton();
  loadMemo();
}

function renderNewsMode() {
  const badge = document.getElementById("newsModeBadge");
  badge.textContent = selectedCompany ? `${selectedCompany.name} 뉴스 모드` : "전체 뉴스 모드";
}

async function renderNews() {
  const newsTitle = document.getElementById("newsTitle");
  const list = document.getElementById("newsList");
  newsTitle.textContent = selectedCompany ? `${selectedCompany.name} 관련 뉴스` : "전체 최신 뉴스";
  renderNewsMode();
  buildSourceLinks();
  list.innerHTML = `<div class="detail-card"><p>${selectedCompany ? `${selectedCompany.name} 최신 뉴스를 불러오는 중입니다...` : "전체 공급망 최신 뉴스를 불러오는 중입니다..."}</p></div>`;

  try {
    const items = (await fetchGoogleNewsItems())
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 10);

    if (!items.length) {
      list.innerHTML = `<div class="detail-card"><p>실시간 뉴스를 불러오지 못했습니다. 위의 Google, Naver, SaverTicker 버튼으로 직접 확인해 주세요.</p></div>`;
      return;
    }

    list.innerHTML = items.map(item => {
      const priority = newsPriority(item);
      return `
        <a class="news-item" href="${item.url}" target="_blank" rel="noopener noreferrer">
          <div class="news-meta">
            <span class="source-badge">${item.source}</span>
            <span class="source-badge">${formatNewsDate(item.date)}</span>
            <span class="priority-badge ${priority.level}">${priority.label}</span>
          </div>
          <h3>${highlightKeywords(item.title)}</h3>
          <p>${highlightKeywords(item.summary)}</p>
        </a>
      `;
    }).join("");
  } catch {
    list.innerHTML = `<div class="detail-card"><p>실시간 뉴스를 불러오지 못했습니다. 위의 검색 버튼을 눌러 직접 기사 화면으로 이동해 주세요.</p></div>`;
  }
}

async function renderAllCompanySections() {
  renderFavorites();
  renderCompanyList("domestic", document.getElementById("domesticSearch").value);
  renderCompanyList("global", document.getElementById("globalSearch").value);
  renderCompanyDetail();
  await renderNews();
}

function renderChart() {
  const svg = document.getElementById("trendChart");
  const title = document.getElementById("chartTitle");
  title.textContent = `${selectedMetric.label} 추이`;

  const width = 860;
  const height = 320;
  const padding = { top: 24, right: 20, bottom: 40, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const maxValue = Math.max(...selectedMetric.series);
  const minValue = Math.min(...selectedMetric.series);
  const range = Math.max(1, maxValue - minValue);

  const grid = Array.from({ length: 5 }, (_, index) => {
    const y = padding.top + (chartHeight / 4) * index;
    return `<line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="#e7eef7" />`;
  }).join("");

  const labels = chartLabels.map((label, index) => {
    const x = padding.left + (chartWidth / (chartLabels.length - 1)) * index;
    return `<text x="${x}" y="${height - 12}" text-anchor="middle" fill="#7a8da3" font-size="12">${label}</text>`;
  }).join("");

  const points = selectedMetric.series.map((value, index) => {
    const x = padding.left + (chartWidth / (selectedMetric.series.length - 1)) * index;
    const y = padding.top + chartHeight - ((value - minValue) / range) * chartHeight;
    return `${x},${y}`;
  }).join(" ");

  const dots = selectedMetric.series.map((value, index) => {
    const x = padding.left + (chartWidth / (selectedMetric.series.length - 1)) * index;
    const y = padding.top + chartHeight - ((value - minValue) / range) * chartHeight;
    return `<circle cx="${x}" cy="${y}" r="5" fill="#1f6fff" /><text x="${x}" y="${y - 12}" text-anchor="middle" fill="#4f647b" font-size="11">${value}</text>`;
  }).join("");

  svg.innerHTML = `${grid}<polyline fill="none" stroke="#1f6fff" stroke-width="3" points="${points}" />${dots}${labels}`;
}

function openModal() {
  document.getElementById("chartModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("chartModal").classList.add("hidden");
}

function bindEvents() {
  document.getElementById("domesticSearch").addEventListener("input", event => {
    renderCompanyList("domestic", event.target.value);
  });

  document.getElementById("globalSearch").addEventListener("input", event => {
    renderCompanyList("global", event.target.value);
  });

  document.getElementById("refreshButton").addEventListener("click", async () => {
    renderMetrics();
    renderSummary();
    await renderAllCompanySections();
  });

  document.getElementById("showAllNewsButton").addEventListener("click", async () => {
    selectedCompany = null;
    await renderAllCompanySections();
  });

  document.getElementById("favoriteToggleButton").addEventListener("click", async () => {
    if (!selectedCompany) return;
    toggleFavorite(selectedCompany.id);
    await renderAllCompanySections();
  });

  document.getElementById("saveMemoButton").addEventListener("click", () => {
    const textarea = document.getElementById("supplierMemo");
    const status = document.getElementById("memoStatus");
    if (!selectedCompany) return;
    localStorage.setItem(getMemoKey(selectedCompany.id), textarea.value);
    status.textContent = "메모가 저장되었습니다.";
    setTimeout(() => {
      status.textContent = "";
    }, 1800);
  });

  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("modalBackdrop").addEventListener("click", closeModal);

  newsRefreshTimer = setInterval(async () => {
    renderMetrics();
    renderSummary();
    await renderNews();
  }, 60 * 60 * 1000);
}

async function init() {
  renderMetrics();
  renderSummary();
  await renderAllCompanySections();
  bindEvents();
}

init();
