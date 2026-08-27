(function () {
  var root = document.getElementById('catalogRoot');
  if (!root) return;

  var DATA_BASE = root.getAttribute('data-base') || '/assets/data/catalog/';

  function fmt(n) {
    if (typeof n === 'string') return n; // 마스킹된 값 ("< 5" 등) 그대로 표시
    if (typeof n !== 'number') return '—';
    return n.toLocaleString('ko-KR');
  }

  function bar(label, value, max) {
    var pct = typeof value === 'number' && max > 0 ? Math.max(4, Math.round((value / max) * 100)) : 4;
    var displayVal = fmt(value);
    var el = document.createElement('div');
    el.className = 'bar-row';
    el.innerHTML =
      '<span class="bar-label">' + label + '</span>' +
      '<span class="bar-track"><span class="bar-fill" style="width:' + pct + '%"></span></span>' +
      '<span class="bar-value">' + displayVal + '</span>';
    return el;
  }

  function renderHospital(data) {
    var wrap = document.createElement('div');
    wrap.className = 'catalog-panel';

    var reviewedBadge = data.reviewed
      ? '<span class="badge badge-ok">심의 완료 · 공개 승인</span>'
      : '<span class="badge badge-pending">심의 전 · 예시 데이터</span>';

    var header = document.createElement('div');
    header.className = 'catalog-header';
    header.innerHTML =
      '<h3>' + data.hospital_name + '</h3>' +
      reviewedBadge +
      '<p class="graph-caption">데이터 기간 ' + (data.period ? data.period.start + ' – ' + data.period.end : '—') +
      ' · 소아 환자 수 ' + fmt(data.patient_count) + '명 · 업데이트 ' + (data.updated || '—') + '</p>';
    wrap.appendChild(header);

    // core metrics
    if (data.core_metrics && data.core_metrics.length) {
      var coreGrid = document.createElement('div');
      coreGrid.className = 'stat-grid';
      data.core_metrics.forEach(function (m) {
        var s = document.createElement('div');
        s.className = 'stat';
        s.innerHTML = '<span class="num">' + fmt(m.value) + '</span><span class="label">' + m.label + '</span>';
        coreGrid.appendChild(s);
      });
      wrap.appendChild(coreGrid);
    }

    // domain distribution bar chart
    if (data.domain_distribution && data.domain_distribution.length) {
      var max = Math.max.apply(null, data.domain_distribution
        .map(function (d) { return typeof d.value === 'number' ? d.value : 0; }));
      var chart = document.createElement('div');
      chart.className = 'bar-chart';
      var title = document.createElement('h4');
      title.textContent = '도메인별 레코드 분포';
      chart.appendChild(title);
      data.domain_distribution.forEach(function (d) {
        chart.appendChild(bar(d.label, d.value, max));
      });
      wrap.appendChild(chart);
    }

    // modality sections
    if (data.modalities && data.modalities.length) {
      var modWrap = document.createElement('div');
      modWrap.className = 'card-grid';
      data.modalities.forEach(function (mod) {
        var card = document.createElement('div');
        card.className = 'card';
        var metricsHtml = (mod.metrics && mod.metrics.length)
          ? '<ul class="mono-list">' + mod.metrics.map(function (m) {
              return '<li><span>' + m.label + '</span><span class="mono">' + fmt(m.value) + '</span></li>';
            }).join('') + '</ul>'
          : '<p class="muted-note">데이터 없음</p>';
        card.innerHTML =
          '<h3>' + mod.name + '</h3>' +
          (mod.note ? '<p>' + mod.note + '</p>' : '') +
          metricsHtml;
        modWrap.appendChild(card);
      });
      wrap.appendChild(modWrap);
    }

    return wrap;
  }

  function renderError(msg) {
    root.innerHTML = '<div class="notice">' + msg + '</div>';
  }

  fetch(DATA_BASE + 'index.json')
    .then(function (r) { if (!r.ok) throw new Error('index.json 로드 실패'); return r.json(); })
    .then(function (index) {
      var hospitals = index.hospitals || [];
      if (!hospitals.length) {
        renderError('아직 등록된 기관 카탈로그가 없습니다.');
        return;
      }

      var tabs = document.createElement('div');
      tabs.className = 'catalog-tabs';
      var panelHost = document.createElement('div');
      panelHost.className = 'catalog-panel-host';

      var cache = {};

      function activate(h, btn) {
        Array.prototype.forEach.call(tabs.children, function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        panelHost.innerHTML = '<p class="muted-note">불러오는 중…</p>';

        var go = function (data) {
          panelHost.innerHTML = '';
          panelHost.appendChild(renderHospital(data));
        };

        if (cache[h.id]) { go(cache[h.id]); return; }
        fetch(DATA_BASE + h.file)
          .then(function (r) { if (!r.ok) throw new Error('로드 실패'); return r.json(); })
          .then(function (data) { cache[h.id] = data; go(data); })
          .catch(function () { panelHost.innerHTML = '<div class="notice">' + h.name + ' 데이터를 불러오지 못했습니다.</div>'; });
      }

      hospitals.forEach(function (h, i) {
        var btn = document.createElement('button');
        btn.className = 'catalog-tab';
        btn.type = 'button';
        btn.textContent = h.name;
        btn.addEventListener('click', function () { activate(h, btn); });
        tabs.appendChild(btn);
        if (i === 0) { activate(h, btn); }
      });

      root.innerHTML = '';
      root.appendChild(tabs);
      root.appendChild(panelHost);
    })
    .catch(function (e) {
      renderError('카탈로그 인덱스를 불러오지 못했습니다 (' + e.message + ').');
    });
})();
