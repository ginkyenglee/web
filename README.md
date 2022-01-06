# 참고사이트

- 브라우저에서의 호환성 탐색 : https://caniuse.com
- Polyfill(fetch가 호환되지 않는 브라우저에서의 활용방법) : https://github.com/github/fetch
- https://babeljs.io/ : 현재 및 이전 브라우저 환경에서 ECMAScript 2015+ 이전 버전의 javascript로 변환하는데 주로 사용되는 도구

# Application

1.Login : preventDefault, LocalStorage
2.Clock : intervals,padStart
3.ToDoList : preventDefault, LocalStorage,JSON.parse(),JSON.stringify()
4.Weather : API,fetch

# Ajax

- 기본적인 구조 재사용하여서 재사용할 수 있는 부분과 바뀌는 부분 구분
- Ajax 활용해서 바뀌는 부분만 동적으로 변경
- 사용자입장 : 빠름 / 제공자입장 : 시간,돈,네트워크 자원 절약
- 싱글페이지 어플리케이션 구현 가능
- Asynchronous(동시에 일어나지 않음), 병렬적인 : fetch 라인이 실행될 때, 다른 것들도 병렬적으로 실행될 수 있음
- response 객체가 응답으로 옴 (status : 200 --> 성공, 404 --> not found)

_공통 : contents와 application을 구분하자. 파일 나누기가 중요_

```javascript
function callbackme() {
  console.log('response end');
}
fetch('html').then(callbackme); //client가 html을 서버에 요청함, 요청 응답끝나면 callbackme 함수 실행
console.log(1); // Asynchronous이므로, fetch 요청 후 기다리는 동안 실행될 수 있음
console.log(2); // Asynchronous이므로, fetch 요청 후 기다리는 동안 실행될 수 있음
// 1
// 2
// response end
```

- hash 를 활용한 북마크 : 주소를 통해, 사용자가 보던 화면을 나타내고 싶어함

```javascript
location.hash// 현재의 해쉬값
<li><a href="#!html" onclick="contentsFetch('html')">html</a></li> // 관습적으로 #! 해쉬뱅을 활용하여 해쉬 구축
```

# object-oriented

- this : 자신이 속한 객체의 대명사
- *new*를 통해 객체를 생성하는 _생성자 함수_ 구현 : 같은 구조로 되어있는 객체를 매번 새로 정의하는 것이 아니라 생성자를 한번 정의하고 객체를 대량 생성 가능 ( ex. 사람 생성자 함수 - 이름,나이,키 )
- 객채는 함수에서 시작!
- prototype : 원형(원래의 모습), 생성자 함수를 통해 만든 모든 객체가 공통적으로 이용하는 함수를 프로토타입을 통해 따로 정의(객체끼리 share) --> 성능, 메모리 효율
  - 생성자를 통해 객체를 매번 생성할 때마다, 동일한 함수도 같이 정의됨(메모리 낭비)
  - 생성자를 통해 생성된 객체의 함수를 바꾸고 싶으면, 매 객체마다 다 새로 정의해야함
  - 생성자함수에 대한 프로토타입 메소드를 선언해 사용하고, 필요할 때 개별 객체에 별도의 메소드 정의 (만약 해당 객체에 해당 feature가 정의되어있는지 확인 후, 정의가 이미 되어있다면 해당 feature를 활용하고 정의가 되어있지 않다면 protytpe의 feature를 사용)
  - 이 프로토타입 함수를 사용하는 모든 객체에 일괄 반영되기때문에 수정용이

```javascript
function Patient(name,height,weight){
	name : this.name;
	height : this.height;
	weight : this.weight;
}

Patient.prototype.introduce = function(){
	console.log(`${this.name} : ${this.height}/${this.weight}`);
}

Patient1 = new Patient("gin",160,55);
Patient1.introduce() // gin : 160/55

Patient2 = new Patient("ornrim"),168,60);
Patient2.introduce = function(){
	console.log("revisit needed");
	}
Patient2.introduce() // "revisit needed"

```

- class : prototype을 활용해서도 객체 생성할 수 있지만, class 활용해서도 가능
  - constructor() 라는 이미 약속된 함수를 활용하여 초깃값 세팅
  - prototype 도 동일하게 활용가능하며, 클래스 내에 함수를 정의시 같은 효과
  - 필요할 때 개별 객체 별도 메소드 정의(해당 객체 함수 이미 정의되어있다면 객체 자체 함수활용, 아니면 공통 함수 활용)

```javascript
class Patient {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  introduce() {
    console.log(`${this.name} : ${this.height}/${this.weight}`);
  }
}

const patient1 = new Patient('gin', 160, 55);
patient1.introduce();
```
