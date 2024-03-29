//@ts-check
// 타입 스크립트를 체크할 것인지 확인.

/*
 *** node.js ***
: 자바스크립트에서 데이터베이스에 연결해 서버로 요청을 보내는 기능을 구현 할 수 있다.
 - node.js는 크롬 V8 자바스크립트 엔진으로 빌드 된 자바스크립트 런타임
 - node.js를 웹서버 자체로 생각하는 것은 잘못된 것이다.(서버를 다룰 수 있도록 사용하는 언어)
 - 아파치 웹서버중 하나가 아님.
 - 자바 스크립트로 브라우저가 아니라 서버에서 자바스크립트가 동작하도록 도와주는 런타임 플랫폼이라 생각하면 된다.
 - node.js에 있는 라이브러리를 사용하여 웹서버를 실행한다.
 - npm(node package manager)를 통해 라이브러리를 설치해서 사용할 수 있다.

 *** node.js의 특징 3개 ***
 1. 자바스크립트로 백엔드 서버 로직을 개발할 수 있다.(장점)
 2. 구글에서 개발한 js엔진을 쓰기 때문에 속도가 빠르다.(인터프린터 방식)
 3. 논 블로킹 방식 node.js의 모든 API는 비동기적으로 작동하며 호출 후 다른 API를 바로 불러올 수 있다.
  - 한번 불러왔던 API를 요청하면 이벤트 루프가 확인해서 동작한다.
 
 *** node.js가 생긴 이유 ***
 - 방대한 오픈소스 생태계를 구축하기 위해서
 - npm을 사용해서 패키지들을 다운받을 수 있다.
 - 리액트 익스프레스 코아 등의 유명한 패키지들은 다 npm에 등록되어 있어 활용 할 수 있다.
 - 특수한 것을 만들지 않는 이상 거의 모든 기능이 이미 나와있어 활용하는 것이 중요하다.
 - 잘 사용하면 빠르고 좋은 효과를 볼 수 있다.

 *** 모듈 ***
 : 패키지는 클래스의 묶음, 패키지의 모임이 모듈 이라고 생각하면 된다.
 - ex) 기능들의 모임, 파일의 모임
 
 *** require 란? ***
 : node.js를 통해 모듈을 가져오는 함수


*/
//node.js에서 모듈을 가져오는 require함수
//require(경로나 이름)
console.log("노드");
const http = require("http");

//http객체 안의 createServer 함수를 사용해서 서버를 만듦
//http.createServer를 아래와 같이 변수에 담으면 서버가 되는 부분을 반환 받을 수 있다.
const server = http.createServer((req, res) => {
  //req 요청값(404/500 이런 오류들)
  //http에서 ok를 나타내는 번호가 200번 이라서
  req.statusCode = 200;
  // 100번대 : 정보응답
  // 200번대 : 성공응답
  // 300번대 : 리다이렉션 메시지, 요청한 url이 변경되었을 때
  // 400번대 : 클라이언트상의 오류, 클라이언트에 오류가 있을 때
  // 500번대 : 서버 오류 응답, 서버에 오류가 있을 때
  // write : 문자를 감싸서 보내주는 함수
  res.write("123");
  //end함수 끝맺음 매개변수 문자를 보내주면서 끝
  res.end("456");
});

const PORT = 3000;

// 서버가 되는 server에 listen함수를 사용하여 서버를 열어준다.(서버를 열어줌)
server.listen(PORT, () => {
  console.log("port :", PORT);
});
// server 객체의 준비가 되면 listen함수로 해당 포트에 서버를 대기시킨다.
//서버를 대기시키는 이유는 클라이언트에서 요청이 오면 서버가 받아서 처리할 수 있다.
//listen함수에 들어가는 매개변수는(포트번호, 호스트의 이름, 백로그, 콜백함수)이다.

/*
*** node.js 실행하는 방법 ***
 node 자바스크립트 파일의 경로

 node.js 코딩을 해볼 수 있는 곳 (테스트용 코드들)
  - 코드 샌드박스
  - glitch
    등등
 => 노드 서버를 바로 볼 수 있고, 코딩도 바로바로 테스트 해볼 수 있다.

 *** glich 장점 ***
 - https 검증도 되어있는 웹 서버를 테스트로 사용해 볼 수 있다.
 - node 프로젝트 생성 버튼-> server.js에서 로직 작성 -> preview 를 통해 바로 볼수 있음.
 - 테스트용 링크가 필요하면 preview 버튼 눌렀을 때, preview in a new window 버튼을 통해 클라이언트 요청을 보내볼 웹서버 주소로 접속이 된다.

 ***node.js 버전 관리 ***
 ex) 서버노드는 최신이고 로컬노드가 구버전일 경우
  => 최신버전은 기능이 있는데 구버전에 없을 경우 기능이 실행되지 않음.
  * 해당 문제를 해결하는 방법
   1. 삭제후 재설치(귀찮음.)
   2. nvm(node version manager) 사용
    - 맥 : tj/n
    - 윈도우 : https://github.com/coreybutler/nvm-windows/releases 
      -> setup
      -> cmd에서 nvm -v (nvm버전 확인)  / nvm ls (node.js 버전 확인)
      -> 다른버전 받는 방법 : nvm install v버전
      -> 버전 사용 : nvm use 버전 (오류나면 관리권한 실행)



*/
