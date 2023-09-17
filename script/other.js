const panel = document.querySelector(".panel");
const btns = document.querySelectorAll(".btns li");

//해야하는 효과
//1. 버튼에 반복을 돌면서 각 버튼에 클릭이벤트 입혀주기(forEach)
//2.a태그 기본이벤트 막기
//3.패널을 움직이게 하기
//4.모든 버튼을 비활성화 하고, 클릭한 대상의 버튼만 촬영하기
//+ ring돌리기


btns.forEach((el, index) => {
    el.addEventListener("click",(e)=> {
        e.preventDefault();

        movePanel(index);
        // panel.style.marginLeft = `${-100 * index}%`;

        // for(let el of btns) el.classList.remove("on");
        // btns[index].classList.add("on");

        actClass(btns, index);
        rotRing(index);

        // ring.className = "";
        // ring.classList.add("rot"+ index);

    })
})

function movePanel(idx){
    panel.style.marginLeft = `${-100 * idx}%`;
}

function actClass(list, index){
    for (let el of btns) el.classList.remove("on");
    list[index].classList.add("on");
}
