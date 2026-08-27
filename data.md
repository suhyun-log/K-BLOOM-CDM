---
layout: default
title: 데이터 구성
---

<span class="kicker">03 · Data</span>

# 소아 CDM에 담긴 데이터

임상 데이터(진단·처방·검사 등)에 더해, 소아 연구에 필요한 영상·생체신호·유전체·디지털병리 등 멀티모달 데이터로 확장되고 있습니다.

<figure class="figure">
  <img src="{{ '/assets/img/fig5-omop-structure.jpg' | relative_url }}" alt="OMOP CDM 테이블 구조와 멀티모달 데이터(생체신호·영상이미지·유전체·디지털병리) 확장" loading="lazy">
  <figcaption>그림 5. OMOP CDM 테이블 구조와 멀티모달 데이터 확장</figcaption>
</figure>

## Clinical Data

- 환자정보
- 진단·처방
- 수술·처치 기록
- 검사수치

## Multimodal Data

<div class="card-grid">
  <div class="card"><h3>생체신호 (Bio_signal)</h3><p>12-lead ECG · Holter · 운동부하 검사(Treadmill ECG) · Vital DB · EMG</p></div>
  <div class="card"><h3>영상이미지 (Image_occurrence)</h3><p>의료영상 등 다양한 모달리티의 이미지 데이터</p></div>
  <div class="card"><h3>Genomic data (Omics CDM)</h3><p>유전체 데이터 확장모델</p></div>
  <div class="card"><h3>디지털병리 (Pathology CDM)</h3><p>디지털 병리 이미지 확장모델</p></div>
</div>

## 대표 임상 검사 자료 예시

- 폐기능 검사
- 체성분 검사 (BCM · Inbody)
- 알레르기 검사 (MAST · SPT)
- NICU 퇴원기록지

<figure class="figure">
  <img src="{{ '/assets/img/fig6-clinical-examples.jpg' | relative_url }}" alt="소아 CDM에 포함되는 임상 검사 자료 예시 — 폐기능 검사, BCM 체수분검사, 알레르기검사, Inbody 체질량검사, NICU 퇴원기록지" loading="lazy">
  <figcaption>그림 6. 소아 CDM에 포함되는 임상 검사 자료 예시</figcaption>
</figure>

## 생체신호·영상 데이터

12-lead ECG · Holter · 운동부하 검사 · Vital DB · EMG · 의료영상 등 생체신호·영상 데이터가 포함됩니다.

<figure class="figure">
  <img src="{{ '/assets/img/fig7-biosignal-image.jpg' | relative_url }}" alt="생체신호 및 영상 데이터 예시 — 12-lead ECG, Holter, Treadmill ECG, Vital DB, EMG, 의료영상" loading="lazy">
  <figcaption>그림 7. 생체신호 및 영상 데이터 예시</figcaption>
</figure>

## Vocabulary

소아 CDM은 **159개 vocabularies**, **13.4M개 concepts**로 구성된 표준 용어체계를 함께 담고 있어, 진단·약물·검사 등 서로 다른 기관의 용어를 동일한 기준으로 매핑할 수 있습니다.
