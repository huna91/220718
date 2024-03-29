/*
 *** npm 설치 ***
 - formatting, Linting 설정
 - node 프로젝트를 여러명이나 개인이 작업하다 보면 예상하지 못한 오류가 생길경우 찾아내기 힘들다.
 - 런타임 코드를 이용자에게 전달하기 전에 문제를 잡아준다.
 - formatting에서 좋은 확장 프로그램 : Prettier
 - Prettier -> Code formatter를 마켓에서 설치
 
 *** formatting을 해주는 Prettier 패키지 설치 명령어 ***
--------------------------------------------------------------
npm install --save-dev prettier
--------------------------------------------------------------
--save-dev : 프로젝트를 개발할 때만 사용할 패키지

npm 패키지를 설치하면 package.json에 내용이 추가되고
package.json의 중요한 역할 중 하나는 메타 데이터를 표현하는 것도 있는데
현재 프로젝트가 사용하는 의존성 내용을 나열하는 것에도 목적이 있다.

"devDependencies": {
    "prettier": "^2.7.1"
}

ㅗprettier라는 패키지가 2.7.1버전으로 설치가 되었다.

- node modules 폴더는 git에 따로 올리지 않고 package.json만 올린다.
- npm i나 npm install로 설치 후 작업한다.

- package-lock.json에 기록되어 있는 내요은 실제로 설치된 패키지들이 어떤 것인지 알려준다.
팀에서 프로젝트 작업을 같이 한다 하면 lock.json도 같이 업로드 해주는 것이 좋다.

 - package.json에는 버전 앞에 "prettier":"^2.7.1" 로 ^웃음 표시가 있는데
   이 기호는 버전이 정확하지 않아도 설치 할 수 있도록 해준다.
   => lock.json 파일을 서로 공유해야 하는 이유!! 작업자들의 버전이 서로 맞지 않는 문제를 해결할 수 있다.
   
   - node_modules파일도 생겼는 npm 설치를 하니 이 폴더안에 설치되어 있는 
   .bin폴더를 제외하고 다른 폴더들은 현재 프로젝트가 의존하고 있는 패키지들이다.
   - .bin폴더는 컴퓨터가 이해할 수 있는 텍스트 파일(바이너리 파일)이다.
   
   *** formatting 방법 ***
   1. 설치한 prettier를 사용해서 프로젝트 단위로 설정을 해준다.
   2. .prettierrc 파일을 만들어 준다.
   3. .vscode 폴더를 만들고 안에 settings.json을 만들고 입력한다.
   - .vscode에 설정한 이유는 개인이 사용하는 vscode 설정 외의 프로젝트 단위로 설정을 같은 폴더에 적용할 수 있다.
   - 팀이나 회사에서 작업을 하면 여러명이 작업 할 때 설정 값을 미리 정해놓고 시작하게 되어 병합 시 충돌을  덜어준다.
   
   
   *** Linting 하는 방법 ***
   : Linting에서 좋은 점!! ESLint 패키지이자 플러그인
   - ESLint 설치 명령어
   - --save-dev 개발환경이니
   --------------------------------------------------------------
   npm install --save-dev eslint
   --------------------------------------------------------------
   
   
   */
let aa;
