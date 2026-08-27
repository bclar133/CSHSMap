// Hover linking between map icons and their matching Map Key entries.
// The supplied school map remains the fixed base image; these are transparent SVG hit areas and highlight overlays.

const poiGroups = [
  { id:'hoy', label:'HOY Hub', icons:[[714,982]], key:[1068,1450,372,50] },
  { id:'canteen-key', label:'Canteen & Uniform Shop', icons:[[488,660]], key:[1068,1512,372,50] },
  { id:'student-services-key', label:'Student Services', icons:[[420,430]], key:[1068,1574,372,58] },
  { id:'computer-support-key', label:'Computer Support', icons:[[402,668]], key:[1068,1638,372,50] },
  { id:'student-counter-key', label:'Student Counter / Sick Bay', icons:[[545,408]], key:[1068,1695,372,58] },
  { id:'bus', label:'Bus Stop', icons:[[1396,754]], key:[1068,1760,372,50] },
  { id:'bike', label:'Bike Racks', icons:[[1260,1218]], key:[1068,1818,372,50] },
  { id:'toilets', label:'Toilets', icons:[[660,575],[1198,522],[666,983],[1083,910],[390,986]], key:[1068,1875,372,50] },
  { id:'eco', label:'Eco Garden', icons:[[888,608]], key:[1068,1932,372,50] }
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
  // Map icon hit areas + glow rings.
  group.icons.forEach(([cx,cy]) => {
    const glow = makeSvg('circle', {
      cx, cy, r:34,
      class:'poi-icon-glow',
      'data-poi-group':group.id
    });
    poiOverlay.appendChild(glow);

    const hit = makeSvg('circle', {
      cx, cy, r:30,
      class:'poi-icon-hit',
      'data-poi-group':group.id,
      tabindex:'0',
      'aria-label':group.label
    });
    bindPoiHover(hit, group.id);
    poiOverlay.appendChild(hit);
  });

  // Matching Map Key row. Hovering the row activates every icon in the group.
  const [x,y,width,height] = group.key;
  const keyGlow = makeSvg('rect', {
    x, y, width, height, rx:10,
    class:'poi-key-glow',
    'data-poi-group':group.id
  });
  poiOverlay.appendChild(keyGlow);

  const keyHit = makeSvg('rect', {
    x, y, width, height, rx:10,
    class:'poi-key-hit',
    'data-poi-group':group.id,
    tabindex:'0',
    'aria-label':`${group.label} in map key`
  });
  bindPoiHover(keyHit, group.id);
  poiOverlay.appendChild(keyHit);
});
