---
layout: default
title: 소개
---

<div class="hero">
<span class="kicker">Korean BiomedicaL OmOp Multimodal Network</span>

# K-BLOOM

<p class="lead">소아 다기관 멀티모달 CDM 네트워크, K-BLOOM입니다. 소아 CDM을 활용하려는 연구자가 CDM이 무엇인지, 어떤 데이터를 쓸 수 있는지, 어떻게 접근하고 누구에게 문의하면 되는지를 한 번에 파악할 수 있도록 정리했습니다.</p>
</div>

<div class="stat-grid">
  <div class="stat"><span class="num">7</span><span class="label">참여 대학병원</span></div>
  <div class="stat"><span class="num">168만+</span><span class="label">표준화된 소아 데이터</span></div>
  <div class="stat"><span class="num">159</span><span class="label">Vocabularies</span></div>
  <div class="stat"><span class="num">13.4M</span><span class="label">Concepts</span></div>
</div>

## CDM이란 무엇인가

병원에는 진료·검사·영상 등 다양한 데이터가 여러 시스템(EMR·HIS·PACS·CIS·Device Data)에 나뉘어 저장됩니다. CDM(Common Data Model)은 각 기관의 데이터를 국제 표준 구조로 변환하여, 기관 간 동일한 방식으로 분석·재현할 수 있도록 만든 연구용 데이터베이스 인프라입니다.

데이터는 정형화 정도에 따라 정형·반정형·비정형으로 나뉘며, CDM은 진단·처방·검사수치 등 임상 데이터와 표준 용어체계(Vocabulary)를 함께 담습니다. 소아 CDM은 여기에 더해 **비정형 확장모델**을 구축하여 멀티모달 연구를 지원합니다.

<figure class="figure">
  <img src="{{ '/assets/img/fig1-data-layers.jpg' | relative_url }}" alt="병원 데이터 저장소의 종류 — 운영계(EMR·HIS·PACS·CIS·Device Data)와 연구용 저장소(CDW·CDM·Data Lake)의 구분" loading="lazy">
  <figcaption>그림 1. 병원 데이터 저장소의 종류 — 운영계와 연구용 저장소(CDW·CDM·Data Lake)의 구분</figcaption>
</figure>

<div class="graph-wrap">
<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="7개 기관 데이터가 표준화되어 하나의 소아 CDM으로 통합되는 구조">
  <g class="node-line">
    <line x1="90" y1="40" x2="320" y2="110"/>
    <line x1="90" y1="180" x2="320" y2="110"/>
    <line x1="220" y1="20" x2="320" y2="110"/>
    <line x1="220" y1="200" x2="320" y2="110"/>
    <line x1="340" y1="20" x2="320" y2="110"/>
    <line x1="340" y1="200" x2="320" y2="110"/>
    <line x1="470" y1="60" x2="320" y2="110"/>
  </g>
  <g>
    <circle class="node-site" cx="90" cy="40" r="9"/>
    <circle class="node-site" cx="90" cy="180" r="9"/>
    <circle class="node-site" cx="220" cy="20" r="9"/>
    <circle class="node-site" cx="220" cy="200" r="9"/>
    <circle class="node-site" cx="340" cy="20" r="9"/>
    <circle class="node-site" cx="340" cy="200" r="9"/>
    <circle class="node-site" cx="470" cy="60" r="9"/>
  </g>
  <circle class="node-hub" cx="320" cy="110" r="20"/>
  <text class="node-label" x="300" y="146">Harmonization</text>
  <text class="node-label" x="490" y="64">6세부</text>
  <text class="node-label" x="60" y="30">주관</text>
</svg>
<p class="graph-caption">기관별 상이한 EMR 구조 → 표준 데이터 구조로 정렬(Harmonization) → 다기관 공동연구</p>
</div>

## 이 사이트에서 확인할 수 있는 것

<div class="card-grid">
  <div class="card">
    <span class="tag">02</span>
    <h3>네트워크</h3>
    <p>주관·1~6세부 참여 병원 현황과 병원별 데이터 보유 기간, 소아 환자 수를 확인하세요.</p>
  </div>
  <div class="card">
    <span class="tag">03</span>
    <h3>데이터 구성</h3>
    <p>임상 데이터부터 생체신호·영상·유전체·디지털병리까지, 소아 CDM이 담고 있는 데이터 범위를 안내합니다.</p>
  </div>
  <div class="card">
    <span class="tag">04</span>
    <h3>이용 가이드</h3>
    <p>Atlas 계정 신청부터 정형·비정형 데이터 분석까지, 연구 착수 순서를 단계별로 정리했습니다.</p>
  </div>
  <div class="card">
    <span class="tag">05</span>
    <h3>기관별 담당자</h3>
    <p>병원별 CDM 담당자 연락처와 Atlas 접속·계정 신청 방법을 확인하세요.</p>
  </div>
</div>
