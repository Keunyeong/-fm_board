# Football Manager Board

- 팀을 등록하고 팀의 스쿼드를 짜는 페이지

## 배포 페이지

[FM-Board](https://cheerful-horse-118f00.netlify.app/)

## skill

- typescript
- react.js
- recoil
- firebase firestore

## 페이지 설명

### 팀 생성

<img width="710" alt="스크린샷 2022-06-05 오전 12 46 29" src="https://user-images.githubusercontent.com/79135142/172013458-1406b81f-1ba7-4be5-8c95-c9e900cf8a83.png">

- 팀명을 입력하면 이미 등록되어있는 팀명인지 바로 확인하여 보여줌.

- 비밀번호 입력, 비밀번호 확인 입력 하고 등록

- 비밀번호 확인이 맞지 않으면 modal로 알림 뜸. (react-portal)

### 팀 로그인

<img width="1439" alt="스크린샷 2022-06-05 오전 12 46 07" src="https://user-images.githubusercontent.com/79135142/172013451-febef163-a50b-4c86-8ce6-d4cbf209f578.png">

- 생성한 팀명과 비밀번호를 입력하고 입장.

### 팀 구성 페이지

<img width="759" alt="스크린샷 2022-06-05 오전 12 53 19" src="https://user-images.githubusercontent.com/79135142/172013687-a67de59a-a8f1-4e7e-9649-9e74924df26b.png">

- 팀원을 등번호, 이름, 포지션 을 입력하여 추가.

- 이미 등번호가 있는 경우 등록 안됨.

- 추가되는 팀원은 바로 firebase firestore 서버에 저장되어 이후에 재 로그인하여도 구성 되어있음.

- 추가된 팀원이 11명이 넘으면 상단에 스쿼드 버튼 활성화

- 등번호가 1번인 골키퍼가 필수로 있어야 하도록 설정 (예정)

### 스쿼드 페이지

<img width="715" alt="스크린샷 2022-06-05 오전 12 46 55" src="https://user-images.githubusercontent.com/79135142/172013492-19341b36-47ec-4448-98e5-b69635086d0e.png">

- 등록된 팀원들을 드롭다운에 있는 포지션으로 배치

- 각 포지션의 번호를 누르면 선수 정보가 아래에 보임.

- 선수를 드래그하여 다른 선수 위에 놓으면 두 선수의 포지션 교체(예정)

- 해당 스쿼드를 저장.(예정)
