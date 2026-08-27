---
layout: default
title: 데이터 카탈로그
---

<span class="kicker">06 · Catalog</span>

# 데이터 카탈로그

각 기관의 CDM 프로파일링 결과를 요약해 공개합니다. Achilles 등 표준 프로파일링 도구의 공통 지표와, 생체신호·영상·유전체·병리 등 특화 데이터별 분석 결과를 함께 담습니다.

<div class="notice">
<strong>공개 전 확인:</strong> 아래 수치는 기관별 심의(IRB/데이터심의위원회)를 통과한 <em>집계 통계</em>만 게재하는 것을 원칙으로 합니다. 5명 미만 등 소규모 셀은 <code>&quot;&lt; 5&quot;</code>로 마스킹해 등록해주세요. 현재 표시되는 항목은 실제 데이터를 넣기 전 <strong>스키마 예시</strong>입니다.
</div>

<div id="catalogRoot" data-base="{{ '/assets/data/catalog/' | relative_url }}">
  <p class="muted-note">불러오는 중…</p>
</div>

## 카탈로그 등록 방법

<ol class="steps">
  <li>
    <h4>기관 심의</h4>
    <p>프로파일링 결과 중 공개 가능한 집계 항목을 기관 데이터심의위원회에서 확인받습니다.</p>
  </li>
  <li>
    <h4>JSON 작성</h4>
    <p><code>assets/data/catalog/example-hospital.json</code>을 복사해 병원 데이터로 채웁니다. <code>core_metrics</code>는 Achilles류 공통 지표, <code>modalities</code>는 생체신호·영상 등 특화 분석 결과입니다.</p>
  </li>
  <li>
    <h4>인덱스 등록</h4>
    <p><code>assets/data/catalog/index.json</code>의 <code>hospitals</code> 배열에 <code>{ id, name, file }</code> 한 줄을 추가하면 이 페이지 탭에 자동으로 나타납니다.</p>
  </li>
</ol>
