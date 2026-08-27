// Hover linking between map icons and their matching Map Key entries.
// Coordinates are measured against the original 1456 × 2048 supplied school map.

const poiGroups = [
  { id:'hoy', label:'HOY Hub', icons:[[714,982]], key:[1066,1456,360,46] },
  { id:'canteen-key', label:'Canteen & Uniform Shop', icons:[[488,660]], key:[1066,1513,360,48] },
  { id:'student-services-key', label:'Student Services', icons:[[423,430]], key:[1066,1566,360,58] },
  { id:'computer-support-key', label:'Computer Support', icons:[[392,666]], key:[1066,1619,360,46] },
  { id:'student-counter-key', label:'Student Counter / Sick Bay', icons:[[538,414]], key:[1066,1668,360,60] },
  { id:'bus', label:'Bus Stop', icons:[[1415,754]], key:[1066,1732,360,48] },
  { id:'bike', label:'Bike Racks', icons:[[1260,1218]], key:[1066,1789,360,48] },
  { id:'toilets', label:'Toilets', icons:[[665,575],[1207,523],[672,985],[1091,910],[390,986]], key:[1066,1845,360,48] },
  { id:'eco', label:'Eco Garden', icons:[[887,611]], key:[1066,1901,360,48] }
];

const poiOverlay = document.getElementById('poiOverlay');

function makeSvg(tag, attrs={}) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([key,value]) => el.setAttribute(key, value));
  return el;
}

function setPoiActive(groupId, active) {
  poiOverlay.querySelectorAll(`[data-poi-group="${groupId}"]`).forEach(el => {
    el.classList.toggle('poi-active', active);
  });
}

function bindPoiHover(el, groupId) {
  el.addEventListener('mouseenter', () => setPoiActive(groupId, true));
  el.addEventListener('mouseleave', () => setPoiActive(groupId, false));
  el.addEventListener('focus', () => setPoiActive(groupId, true));
  el.addEventListener('blur', () => setPoiActive(groupId, false));
}

poiGroups.forEach(group => {
  group.icons.forEach(([cx,cy]) => {
    const glow = makeSvg('circle', {
      cx, cy, r:27,
      class:'poi-icon-glow',
      'data-poi-group':group.id
    });
    poiOverlay.appendChild(glow);

    const hit = makeSvg('circle', {
      cx, cy, r:29,
      class:'poi-icon-hit',
      'data-poi-group':group.id,
      tabindex:'0',
      'aria-label':group.label
    });
    bindPoiHover(hit, group.id);
    poiOverlay.appendChild(hit);
  });

  const [x,y,width,height] = group.key;
  const keyGlow = makeSvg('rect', {
    x, y, width, height, rx:8,
    class:'poi-key-glow',
    'data-poi-group':group.id
  });
  poiOverlay.appendChild(keyGlow);

  const keyHit = makeSvg('rect', {
    x, y, width, height, rx:8,
    class:'poi-key-hit',
    'data-poi-group':group.id,
    tabindex:'0',
    'aria-label':`${group.label} in map key`
  });
  bindPoiHover(keyHit, group.id);
  poiOverlay.appendChild(keyHit);
});
