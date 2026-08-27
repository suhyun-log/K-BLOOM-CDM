# K-BLOOM — GitHub Pages 사이트

**K-BLOOM** = Korean **B**iomedica**L** **O**m**O**p **M**ultimodal (Network) · 소아 다기관 멀티모달 CDM 네트워크

Jekyll 기반 정적 사이트입니다. GitHub Pages가 자동으로 빌드하므로 별도의 빌드 도구 설치 없이 바로 사용할 수 있습니다.

## 1. GitHub에 올리기

```bash
cd pediatric-cdm-site
git init
git add .
git commit -m "소아 CDM 안내 사이트 초기 구성"
git branch -M main
git remote add origin https://github.com/<사용자명>/<저장소명>.git
git push -u origin main
```

## 2. GitHub Pages 활성화

1. 저장소 → **Settings → Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` / `(root)` 선택 후 저장
4. 몇 분 뒤 `https://<사용자명>.github.io/<저장소명>/` 에서 확인

## 3. 로컬에서 미리보기 (선택)

Ruby가 설치되어 있다면:

```bash
bundle install
bundle exec jekyll serve
```

`http://localhost:4000` 에서 확인할 수 있습니다.

## 4. 폴더 구조

```
pediatric-cdm-site/
├─ _config.yml        # 사이트 설정
├─ _layouts/           # 공통 레이아웃
├─ _includes/           # 헤더/내비게이션/푸터 조각
├─ assets/
│  ├─ css/style.css    # 디자인 시스템
│  ├─ js/main.js       # 모바일 메뉴, 활성 링크 표시
│  └─ img/             # 원본 안내서 그림을 추출해 넣는 폴더 (현재 비어있음)
├─ index.md            # 01 소개
├─ network.md          # 02 네트워크
├─ data.md             # 03 데이터 구성
├─ guide.md             # 04 이용 가이드
├─ contacts.md          # 05 기관별 담당자
├─ catalog.md            # 06 데이터 카탈로그
└─ assets/data/catalog/
   ├─ index.json         # 카탈로그에 표시할 기관 목록
   └─ example-hospital.json  # 기관별 JSON 스키마 템플릿 (실제 데이터 아님)
```

## 6. 데이터 카탈로그 운영 방법

병원별 프로파일링 결과(Achilles 공통 지표 + 생체신호·영상 등 특화 분석)를 정적 JSON으로 공개합니다.

1. `assets/data/catalog/example-hospital.json`을 복사해 실제 병원 데이터로 채웁니다.
   - `core_metrics`: Achilles류 공통 지표 (환자 수, 도메인별 레코드 수 등)
   - `domain_distribution`: 홈 카탈로그 페이지의 막대 그래프에 쓰이는 값
   - `modalities`: 생체신호/영상/유전체/병리 등 특화 데이터별 커스텀 지표 (자유 형식, 병원마다 항목이 달라도 됨)
   - `reviewed`: 기관 심의를 통과했는지 여부 (`false`면 "심의 전" 배지 표시)
2. **셀 크기 5 미만 등 재식별 위험이 있는 값은 숫자 대신 문자열로 마스킹**하세요. 예: `"value": "< 5"`
3. `assets/data/catalog/index.json`의 `hospitals` 배열에 `{ "id": "...", "name": "...", "file": "....json" }`을 추가하면 `/catalog.html` 페이지 탭에 자동으로 나타납니다.

> 공개 전 반드시 각 기관 데이터심의위원회/IRB 승인을 거친 집계 통계만 게재하세요. 환자 단위(row-level) 데이터나 원본 이미지·신호는 이 사이트에 올리지 않습니다.

## 5. 다음에 할 일

- [x] 원본 PDF의 그림(네트워크 지도, OMOP CDM 구조도, 임상 검사 자료 사진 등)을 `assets/img/`에서 확인할 수 있습니다 — 이미 각 페이지에 배치 완료
- [ ] 추가로 받으실 가이드라인 문서를 페이지(`.md`)로 추가 — `_includes/nav.html`에 링크만 추가하면 메뉴에 자동 반영
- [ ] 담당자 연락처는 현재 원본 그대로 게재되어 있습니다. 추후 정책이 바뀌면 `contacts.md`만 수정하면 됩니다
- [ ] 커스텀 도메인이 필요하면 저장소 루트에 `CNAME` 파일 추가 후 Settings → Pages에서 도메인 등록
- [ ] `assets/img/fig3-network-map.jpg`는 원본 안내서의 지도 이미지입니다. 자체 브랜딩용 지도로 바꾸고 싶으면 이 파일만 교체하면 됩니다

## 디자인 메모

- 팔레트: 잉크 네이비(`--ink`) · 클리니컬 틸(`--teal`) · 소아과 코럴(`--coral`) 포인트, 차분한 그레이 페이퍼 배경
- 서체: 제목 IBM Plex Sans KR, 본문 Noto Sans KR, 수치·라벨 IBM Plex Mono
- 시그니처 요소: 홈페이지의 네트워크 다이어그램(7개 기관 → 표준 CDM으로 수렴) — Harmonization 개념을 시각화
