</> JavaScript
// ==========================================
// 피맥 출점 분석 시스템 v1.0
// app.js
// ==========================================

// 지도 생성
const map = L.map("map").setView([37.5665,126.9780],11);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:'© OpenStreetMap'
}).addTo(map);


// 현재 표시중인 마커
let markers=[];


// 상태창
const status=document.getElementById("status");


// 버튼
const loadBtn=document.getElementById("loadBtn");


// CSV 불러오기
loadBtn.addEventListener("click",loadStores);


// CSV 읽기
async function loadStores(){

    status.innerHTML = "매장 정보를 불러오는 중...";

    try {

        const response = await fetch("data/stores.csv");
        const csv = await response.text();

        const lines = csv.trim().split("\n");

        let recordCount = 0;
        let pimacCount = 0;

        // 첫 줄(헤더) 제외
        for (let i = 1; i < lines.length; i++) {

            const cols = lines[i].split(",");

            const brand = cols[0].trim();

            if (brand === "레코드피자") {

                recordCount++;

            } else if (brand === "피맥하우스") {

                pimacCount++;

            }

        }

        status.innerHTML =
            "레코드피자 : " + recordCount + "개<br>" +
            "피맥하우스 : " + pimacCount + "개<br>" +
            "총 매장 : " + (recordCount + pimacCount) + "개";

    }

    catch (e) {

        console.error(e);

        status.innerHTML = "CSV 읽기 실패";

    }

}
