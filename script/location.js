// a043f31c0aed6eea81b2c80752f77ef5

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
// 교통정보를 보게하는 버튼
const t = document.querySelectorAll(".traffic li");
console.log(t); //[li, li.on]
const t_on = document.querySelectorAll(".traffic li")[0]; //0번쨰 인덱스에 있는 거
// 교통정보 끄는 버튼
const t_off = document.querySelectorAll(".traffic li")[1];

// branch버튼
const branch_btns = document.querySelectorAll(".branch li");



var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.4868352, 126.7830001), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 카맵을 이용할 때는 웬만하면 var이용하기
// 객체배열에는 각 마커의 이미지 경로, 크기, 위치, 이름, 위도경도, 마커와 매치할 버튼의 인덱스 등의 정보 담을 것
var markerOption = [{
    title: "본점",
    latlng: new kakao.maps.LatLng(37.4879732, 126.8239159),
    imgSrc: "img/marker1.png",
    imgSize: new kakao.maps.Size(232, 99),
    imgPos: { offset: new kakao.maps.Point(116, 99) }, //객체로 써야해서 중괄호도 가져와야 함
    button: branch_btns[0]
}, {
    title: "지점1 ",
    latlng: new kakao.maps.LatLng(37.3929273, 126.9198252),
    imgSrc: "img/marker2.png",
    imgSize: new kakao.maps.Size(232, 99),
    imgPos: { offset: new kakao.maps.Point(116, 99) }, //객체로 써야해서 중괄호도 가져와야 함
    button: branch_btns[1]
}, {
    title: "지점2",
    latlng: new kakao.maps.LatLng(37.5004456, 126.7613135),
    imgSrc: "img/marker3.png",
    imgSize: new kakao.maps.Size(232, 99),
    imgPos: { offset: new kakao.maps.Point(116, 99) }, //객체로 써야해서 중괄호도 가져와야 함
    button: branch_btns[2]
}]

// 위 객체배열을 사용해서 반복문으로 마커 생성할거임
// 반복문을 통해서 얻은건? -> 실제로는 하나만 만들거긴한데. 실무에서는 여러 지도를 한 번에 넣거나.. 여러 기능들을 넣어야 할 수도 있기 떄문에
// 값을 객체배열에 넣고 그 값을 반복문을 돌면서 빼줌
// 아래 코드)) 3번 돌면서 마커를 3개 만듦. 마커 쓰려면 지도가 필요함 그래서 위에서 만든 map을 쓰겠다는 뜻
// 위도경도값에다가 마커 위치할거라서 넣음
// 마커 이름은 저거 타이틀 쓸거고
// 마커 이미지는 반복문을 쓸거니까 
for (let i = 0; i < markerOption.length; i++) {
    new kakao.maps.Marker({
        map: map, // 왼쪽 map은 Marker라는 메소드의 프로퍼티임 / 오른쪽 map은 위에서 지도를 생성하는 메소드를 변수에 넣은 값
        position: markerOption[i].latlng,
        // 지도의 위치. 즉 위도 경도 값을 객체변수에서 가지고 옴
        title: markerOption[i].title,
        image: new kakao.maps.MarkerImage(markerOption[i].imgSrc, markerOption[i].imgSize, markerOption[i].imgPos)
    })
    // button: branch_btns[2] 이게 담기는 것 
    markerOption[i].button.addEventListener("click", (e) => {
        e.preventDefault();

        for (let k = 0; k < markerOption.length; k++) {
            markerOption[k].button.classList.remove("on");
        }
        markerOption[i].button.classList.add("on");

        map.setCenter(markerOption[i].latlng);
    })
}

t_on.addEventListener("click",(e)=>{
    e.preventDefault();
    // 지도에 교통정보를 표시하도록 지도타입을 추가합니다

    //조건문으로 on클래스가 있는지 없는지 판별해서 
    //있으면 return으로 이벤트를 막아줍니다
    if(t_on.classList.contains("on")) return;
    // 아래 코드는 위에서 추가한 교통정보 지도타입을 제거합니다
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);    

    t_on.classList.add("on");
    t_off.classList.remove("on");


})

t_off.addEventListener("click",(e)=>{
    e.preventDefault();
    // 아래 코드는 위에서 추가한 교통정보 지도타입을 제거합니다
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);  

    t_off.classList.add("on");
    t_on.classList.remove("on");
})


// var imageSrc = 'img/marker1.png', // 마커이미지의 주소입니다    
//     imageSize = new kakao.maps.Size(232, 99), // 마커이미지의 크기입니다
//     imageOption = {offset: new kakao.maps.Point(116, 99)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
//     //                                          232의 절반인 116으로 바꿔주면 딱 맞음
// // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
// var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
//     markerPosition = new kakao.maps.LatLng(37.4868352, 126.7830001); // 마커가 표시될 위치입니다

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({ //카카오api에서 실제 마커를 만들어서 세팅하는 것
//     position: markerPosition, 
//     image: markerImage // 마커이미지 설정 
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);  

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);