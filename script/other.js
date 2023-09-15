class MyTab {
    /*
    class 선언을 사용한 객체지향 코드
    객체지향: 객체를 사용한다는 뜻
    리액트는 class문법을 사용하지 못합니다
    명령어에 class사 있어서 사용할 수 없음
    리엑트는 js파일에 html이 들어있습니다
    자바스크립트는 웹에서 사용하는 객체지향 코드입니다.
    */
    constructor(){//변수설정단계 대신해줌
        //생성자함수를 통해 만들어지는 것  객체 인스턴스

        /*
        생성자 메서드 객체 인스턴스를 초기화 하는 역할을 하는 함수입니다
        매번 만들어질 인스턴스를 각 개체에 맞춰서 새로 생성해주는 역할입니다*/

    //this란 앞으로 만들어질 인스턴스의 태그

        this.tab = document.querySelector("#tab1");
        this.btns = this.tab.querySelectorAll("ul li");
        this.boxex = this.tab.querySelectorAll("article div");
        this.bindingEvent();

    }

    bindingEvent(){ // function 안 씀
        this.btns.forEach((el, index)=>{
            el.addEventListener("click", (e)=>{
                e.preventDefault();
                this.active(this.btns, index);
                this.active(this.boxex, index);
            })
        })
    }
    
   active(arr, index){
        for(let el of arr)el.classList.remove("on");
        arr[index].classList.add("on");
    }
}

new MyTab("#tab1");

//상속

class ExTab extends MyTab{
    constructor(){
        super();
        
        // this.tab = document.querySelector("#tab");
        // this.btns = this.tab.querySelectorAll("ul li");
        // this.boxex = this.tab.querySelectorAll("article div");
        // this.bindingEvent();

        /*
        super를 호출함으로써 ExTab이라는 클래스는
        MyTab 클래스의 생성자(constructor)를 실행합니다*/

        //추가작업을 하고 싶을때
        this.tab.addEventListener("mouseenter", ()=>{
            console.log("상속받은 아들임");
        })
    }

    addMethood(){
        this.tab.style.backgroundColor = "pink";
        console.log("메서드를 추가함")
    }
}

const extendTabs = new ExTab();
extendTabs.addMethood();



//다형성(약간 자동차는 아반떼 벤츠 벤틀리 가 잇듯,,,,,)
//동일한 메서드를 각각 다른 클래스의 인스턴스에서 다르게 동작하도록 하는 개념

class Music{
    constructor(name){
        this.name = name
    }

    musicSound(){
        console.log("음악소리");
    }
}

const sound = new Music("mu");
sound.musicSound();
//-------------아빠 (기본)


class Viola extends Music{
    musicSound(){
        console.log("비올라");
    }
}

const vSound = new Viola("ga");
vSound.musicSound();
//-------------------------------------아들(다형성)