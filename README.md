# vanila javascript

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

```javascript
function callbackme(){
	console.log('response end')
}
fetch('html').then(callbackme); //client가 html을 서버에 요청함, 요청 응답끝나면 callbackme 함수 실행
console.log(1); // Asynchronous이므로, fetch 요청 후 기다리는 동안 실행될 수 있음
console.log(2);// Asynchronous이므로, fetch 요청 후 기다리는 동안 실행될 수 있음

# 1
# 2
# response end
```

- hash 를 활용한 북마크 : 주소를 통해, 사용자가 보던 화면을 나타내고 싶어함
```javascript
location.hash// 현재의 해쉬값
<li><a href="#!html" onclick="contentsFetch('html')">html</a></li> // 관습적으로 #! 해쉬뱅을 활용하여 해쉬 구축
```
