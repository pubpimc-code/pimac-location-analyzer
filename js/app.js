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

    status.innerHTML="매장 정보를 불러오는 중...";

    try{

        const response=await fetch("data/stores.csv");

        const csv=await response.text();

        console.log(csv);

        status.innerHTML="CSV 읽기 성공";

    }

    catch(e){

        console.error(e);

        status.innerHTML="CSV 읽기 실패";

    }

}
