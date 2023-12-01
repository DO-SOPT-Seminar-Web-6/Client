<div align='center'>

# 🎥 WatchPedia 🎥

<img width="600" height="400" src="https://an2-ast.amz.wtchn.net/ayg/images/watchaOgImage.765d3bef573141645ce0.png"/>
<br/><br/>
📺 <b> 영화, 책, TV 프로그램 추천 및 평가 서비스 📺 <br/>
7억 개의 평가를 기반으로 나에게 딱 맞는 영화, 드라마, 책을 추천받으세요.</b> <br />

<br/>

</div>

<div >

## 🙋🏻‍♀️ WATCHA PEDIA FE

<div align='center'>
<b> 🎞️ 영화 보고 싶어! 🎞️ </b>
</div>
<br/>
<table align="center">
    <tr align="center">
        <td style="min-width: 150px; height: 150px" background-color="white">
              <b>❤️ 혠찌 ❤️</b>
              <br/><br/>
            <a href="https://github.com/hae2ni">
              <img style="height: 150px;" src="https://i.pinimg.com/236x/c7/fa/c8/c7fac8a40e58093ba9388f329ad6b08f.jpg" height='150' width="200">
            </a> 
        </td>
        <td style="min-width: 150px;">
              <b>🧡 언석 🧡</b>
               <br /><br/>
            <a href="https://github.com/eonseok-jeon">
              <img style="height: 150px;" src="https://github.com/Gwasuwon-shot/Tutice_Client/assets/100409061/9780e525-0324-4ef7-be3a-dc15fca024a4" width="200" >    
            </a>
        </td>
        <td style="min-width: 150px;" background-color="white">
              <b>💛 민영💛</b>
               <br/><br/>
            <a href="https://github.com/Rose-my">
              <img style="height: 150px;" src="https://github.com/DO-SOPT-Seminar-Web-6/Client/assets/100409061/bfd9c3f7-3537-42fc-acc7-a41ff014d871" width="200" >
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
           코멘트 page </br>애니메이션 page <br/>
           애니메이션 <b>POST, GET</b>
      </td>
        <td>
        출연 제작 page,</br> 공통 컴포넌트 </br>
        출연 제작 page <b> GET</b> </br>
        코멘트 page 정렬 <b>GET </b>
        </td>
        <td>
            메인 page 전체 </br>
메인 출연 제작 <B>GET</B> <BR/> 코멘트 <B>GET</B>
        </td>
    </tr>

</table>
</aside>

## ⚒️ 기술 스택

<div align="center">

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |
| Data Fetching        | <img  alt="ReactQuery" src="https://img.shields.io/badge/reactquery-E34F26?style=for-the-badge&logo=reactquery&logoColor=white">                                                                                  |

</div>

<BR/>

## 📏 GIT RULES

### ✅ ISSUES

- 기능별로 Issue 파기 ( feat, fix, refactor, etc)
- 이슈제목 **`[ 페이지명 ] - 기능명`**
- 작업할 이슈에 대한 **label & assign**
- **마일스톤** 사용
- **브랜치 파고 작업하기 전에 아래의 과정을 반드시 거칩니다!**
  ```jsx
  git checkout develop
  git fetch
  git pull origin develop
  git checkout -b 새로운 브랜치이름
  ```
- **꼭 커밋 단위를 쪼개서 올립니다.**
  ```jsx
  git commit -m "[ feat ] 헤더 뷰 구현"
  git commit -m "[ design ] 헤더 스타일링"
  git commit -m "[ feat ] 헤더 navigate 구현"
  ```
    </BR>

### ✅ PR

1. **리뷰어 등록**
2. **Label**
3. **PR 템플릿** 내용 지키기

→ 팀원 모두 approve하지 않으면 머지를 할 수 없습니다

</br>

### ✅ Commit Convention

| [ 구현한 기능 ] | 기능 설명                                                            |
| --------------- | -------------------------------------------------------------------- |
| [ feat ]        | 새로운 기능이 추가되었을 때                                          |
| [ fix ]         | 버그를 고친 경우                                                     |
| (에러, 깃 에러) |
| [ design ]      | css 혹은 UI를 생성 & 변경한 경우                                     |
| [ style ]       | 코드포맷 변경 (기능에 변화가 없는 경우)                              |
| [ refactor ]    | 더 좋은 코드로 개선한 경우 ( 기능에 변화가 없는 경우/코드리뷰 반영 ) |
| [ docs ]        | README 등 문서를 추가한 경우                                         |
| [ test ]        | 테스트코드 작성                                                      |
| [ assets ]      | 이미지 추가                                                          |
| [ etc ]         | 이 외 잡일들, 패키지 추가, 불필요 코드 삭제                          |
| [ init ]        | 초기 세팅 시                                                         |
| [ reverse ]     | 코드를 되돌릴 시                                                     |

<BR/>
### ✅ 브랜치 전략

> feat#{이슈번호}-{page}/{기능명}

**기본**. `**feat#1-main/bannerUI**`

**오류 수정**. `**fix#1-main/banner**`

**리팩토링**. `**refactor#1-main/banner**`

</aside>

<BR/><BR/>

## 🤝 Coding Convention

### 1️⃣ 변수, 컴포넌트

- 상수: 영문 대문자 스네이크 표기법 (예를 들면 키값)
- 컴포넌트, 인터페이스 : 파스칼 케이스
- 그 외: 카멜 케이스
- 변수는 var 사용 ⛔
- const를 let 보다 위에 선언
- 변수 등을 조합해서 문자열을 생성시 **리터럴** 사용
- \*\*변수명은 간결한 표현 사용변수명을 충분히 고민하는게 필요!!
- **interface 선언시, 그 외인자는 `~Type(s)`, props 인자는 `~propsType(s)`**
- type은 재활용성이 있을 경우 파일로 분리

### 2️⃣ 함수

- 컴포넌트는 \*\*`rfc`
- \*\*함수의 선언은 `function 함수명() {}`
- \*\*이벤트 핸들링함수 `handle`로 시작  


### 3️⃣ 메소드

- 배열 복사 시 **스프레드 연산자** 사용.
- 축약 메소드 표기 금지
- **axios, async await을 이용할 때 try & catch** 금지
- react-query의 onSuccess, onError 사용.
- **2개 이상부터! : 구조분해할당쓰기**
- \*\*switch-case 사용시 break를 강제
- **for는 지양하고 forEach, map을 사용.**
- **불필요한 반복문은 지양**

### 4️⃣ 스타일

- 선택자 및 className 지양 (통일성)
- color & font :: `scpt`
- **시멘틱 태그 이용**
- svg파일
        ```jsx
        return <LoginIcon/>

        const LoginIcon = styled(LoginIc)`
          margin-right: 2.2rem;
        `;
        ```

- 단위: rem, border 속성: px
- 반복되는 스타일링은 export해서 쓰기

<BR/><BR/>

## 📁 폴더 구조

```
|-- 📁 .github
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 api
	|-- 📁 atom
	|-- 📁 assets
			|-- 📁 icon
			|-- 📁 image
			|-- 📁 assets.d.ts
			|-- 📁 index.ts
	|-- 📁 core
	|-- 📁 components
			|-- 📁 common
	|-- 📁 hooks
	|-- 📁 mocks
	|-- 📁 pages
	|-- 📁 style
    		|-- 📁 common
			|-- globalStyle.ts
			|-- style.d.ts
			|-- theme.ts
	|-- 📁 utils
	|-- 📁 types
	|-- App.tsx
	|-- main.tsx
	|-- Router.tsx
	|-- vite-env.d.ts
|-- .eslintrc.cjs
|-- .gitignore
|-- .prettierrc
|-- index.html
|-- package.json
|-- README.md
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- yarn.lock
```
