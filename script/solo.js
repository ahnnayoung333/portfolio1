const btns = document.querySelectorAll(".left1 ul li");
const boxes = document.querySelectorAll(".right1 div");

const p = document.querySelectorAll(".flower");

const delay1 = covertSpeed(boxes[0]); //div의 트랜지션듀레이션을 가져오는 것
const delay2 = covertSpeed(p[0]);  //.flower의 트랜지션듀레이션을 가져오는 것

//재클릭이벤트방지?>...그 딜레이 주는거 잇잔아 아예 눌러도 클릭안되게하는거
enableClick = true;
btns.forEach((el, index)=>{
    el.addEventListener("click",(e)=>{
        e.preventDefault();
        if(el.classList.contains("on")) return; //불린값.....리턴을 해서 클릭 해도 함수자체 못건들게 함
        /*
        이 구문은 해당 요소에 on클래스가 있으면 return하므로 클릭이 방지됩니다
        ->함수의 실행을 중단하는 역할을 합니다 따라서, 불필요한 함수 호출을 방지하고
        이에 따라서 성능향상에 도움을 줄 수 있습니다
        */

        // 활성화 시키는 코드
        if(enableClick){
            /* 클릭의 가능여부를 통해서, 이벤트의 활성화여부를 조절 할 수 있습니다 */
            enableClick = false; // 시간동안만 이벤트활성화
            active(index)
        }
       
    })
})


function active(index){
    //모든버튼에 on을 비활성화 하고
    //해당 버튼인덱스에만 활성화
    // for(let el of btns) el.classList.remove("on");
    //on이 붙은 btns를 추적해서 그 대상만 remove하는 코드로 변경해보세요
    
    document.querySelector(".left1 ul li.on").classList.remove("on");
    btns[index].classList.add("on");

    //모든 박스에 on을 비활성화 하고
    //해당 박스 인덱스만 활성화
    boxes.forEach((el)=>{el.classList.remove("on")});
    boxes[index].classList.add("on");

    setTimeout(()=>{
        //p태그의 on클래스를 지우는 코드
        p.forEach((el)=>{el.classList.remove("on")});
        //해당 box안의 p태그에만 on을 붙이는 코드
        boxes[index].querySelector("p").classList.add("on");

        setTimeout(()=>{
            enableClick = true;
        },delay2)
    }, delay1)
    //딜레이 시간을 변경이 되는 요소에 부여된 transition-duration의
    //값으로 정확하게 동기화되어야 합니다
}

console.log(delay1);
console.log(delay2);
// console.log(convertSpeed(p[0]));
function covertSpeed(el){
    //해당요소의 트렌시젼 듀레이션의 값을 가지고 옵니다
    let speed = getComputedStyle(el).transitionDuration; //0.5
    //이때 css에서 가져오기 때문에 0.5s같이 실수값을 문자값으로 형변환된 값이 옵니다
    //따라서 s를 떼버려야 하고
    [0.5]
    speed = speed.split("s")[0] //0.5 -> 문자열 메소드를 이용한 s 제외방법
    // speed = parseFloat(speed); //0.5-> 형변환 이용한 s탈락

    
    speed = speed * 1000; //500
    // js에서 사용되는 밀리세컨드 단위로 변경해주어야 합니다
    return speed;
    //값으로 사용할 수 있게 return해야합니다
}

// const convertSpeed = el=>{
//     const item = document.querySelector(el);
//     const duration = parseFloat(getComputedStyle(item).transitionDuration) *1000;
//     return duration;
// }