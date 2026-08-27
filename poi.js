// Hover linking between map icons and their matching Map Key entries.
// Coordinates are measured against the original 1456 × 2048 supplied school map.

const poiGroups = [
  {
    id:'hoy', label:'HOY Hub', icons:[[714,982]], key:[1066,1456,360,46],
    description:'Come here to see your Head of Year.'
  },
  {
    id:'canteen-key', label:'Canteen & Uniform Shop', icons:[[488,660]], key:[1066,1513,360,48],
    description:"Yummy food for when you don't have a packed lunch! Also the place to satisfy your uniform needs."
  },
  {
    id:'student-services-key', label:'Student Services', icons:[[423,430]], key:[1066,1566,360,48],
    description:'Guidance Officers, Psychologist, and other support.'
  },
  {
    id:'computer-support-key', label:'Computer Support', icons:[[392,666]], key:[1066,1619,360,46],
    description:'Everything you need for IT-related matters.'
  },
  {
    id:'student-counter-key', label:'Student Counter / Sick Bay', icons:[[538,414]], key:[1066,1668,360,60],
    description:"Come here when you're signing in/out. Also the place to come when you're feeling a bit off."
  },
  {
    id:'bus', label:'Bus Stop', icons:[[1415,754]], key:[1066,1732,360,48],
    description:'Arrivals and departures of school buses — stay behind the yellow line!'
  },
  {
    id:'bike', label:'Bike Racks', icons:[[1260,1218]], key:[1066,1789,360,48],
    description:'Locked during school hours.'
  },
  {
    id:'toilets', label:'Toilets', icons:[[665,575],[1207,523],[672,985],[1091,910],[390,986]], key:[1066,1845,360,48],
    description:'Make sure to check which ones are open and closed.'
  },
  {
    id:'eco', label:'Eco Garden', icons:[[887,611]], key:[1066,1901,360,48],
    description:'Ask the friendly Science staff about this!'
  }
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

function showPoiDetails(group) {
  const html = `<div class="detail-name">${group.label}</div><div class="detail-category">Map Key</div><div class="detail-copy">${group.description}</div>`;
  details.className = '';
  details.innerHTML = html;
  mobileCard.innerHTML = html;
  mobileCard.classList.add('show');
}

poiGroups.forEach(group => {
  // Map icons remain hover targets only. This preserves the existing non-clickable
  // behaviour for decorative icons such as the added D Block toilet marker.
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

  // Matching Map Key row. Hovering highlights every matching icon; clicking
  // opens the description in the Location details panel.
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
  keyHit.addEventListener('click', event => {
    event.stopPropagation();
    showPoiDetails(group);
  });
  keyHit.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showPoiDetails(group);
    }
  });
  poiOverlay.appendChild(keyHit);
});
