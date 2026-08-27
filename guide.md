---
layout: default
title: 이용 가이드
---

<span class="kicker">04 · Guide</span>

# CDM 활용 흐름 및 참고 자료

## 데이터·도구

| 데이터 / 도구 | 설명 | 접근 방법 |
|---|---|---|
| Atlas | 코딩 없이 코호트(연구 대상군) 정의, 발생률·데이터 특성 분석을 수행하는 웹 기반 분석 도구 | 병원별 담당자에게 계정 신청 → 지정 URL 또는 원내망으로 접속 |
| 정형 데이터 | 진단·약물·검사·인구학 정보 등을 OMOP CDM 표준 구조로 변환한 표 형태 데이터 | Atlas에서 코호트 정의 및 특성 분석 (계정 신청 후 접속) |
| 비정형 데이터 | 영상, 시그널 등 | 분석센터(안심활용센터·SCDM 분석센터 등) 예약 후 원내 폐쇄망에서 분석 |

## 이용 순서

<ol class="steps">
  <li>
    <h4>담당자 문의</h4>
    <p>해당 병원의 소아 CDM 담당자에게 연구 목적·필요 데이터를 문의합니다.</p>
  </li>
  <li>
    <h4>Atlas 계정 신청 및 코호트 정의</h4>
    <p>Atlas 계정을 신청·접속하여 정형 데이터로 코호트를 정의하고 데이터 특성을 탐색합니다.</p>
  </li>
  <li>
    <h4>비정형 데이터 분석 예약</h4>
    <p>영상 등 비정형 데이터가 필요하면 분석센터를 예약하고 승인받은 환경에서 분석합니다.</p>
  </li>
</ol>

<div class="notice">
세부 절차(계정 발급, 예약 방식 등)는 병원마다 다를 수 있으니, <a href="{{ '/contacts.html' | relative_url }}">기관별 담당자</a>에게 확인하시기 바랍니다.
</div>

## 참고 자료

<figure class="figure">
  <img src="{{ '/assets/img/fig8-ohdsi-resources.jpg' | relative_url }}" alt="OMOP CDM, ATHENA, OHDSI 등 표준 모델과 참고 자료 북마크" loading="lazy">
  <figcaption>그림 8. OMOP CDM · ATHENA · OHDSI 등 표준 모델과 참고 자료</figcaption>
</figure>

- OMOP CDM / OHDSI (표준 모델 설명) — <a href="https://ohdsi.github.io/" target="_blank" rel="noopener">ohdsi.github.io</a>
- ATHENA (표준 용어 검색·다운로드) — <a href="https://athena.ohdsi.org/" target="_blank" rel="noopener">athena.ohdsi.org</a>
- The Book of OHDSI (공식 안내서) — <a href="https://ohdsi.github.io/TheBookOfOhdsi/" target="_blank" rel="noopener">ohdsi.github.io/TheBookOfOhdsi</a>
- ATLAS 데모 (계정 없이 체험) — <a href="https://atlas-demo.ohdsi.org/" target="_blank" rel="noopener">atlas-demo.ohdsi.org</a>

<p class="graph-caption">Latest structure version: v5.4 · Latest vocabulary version: 20260227</p>
