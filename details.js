// Additional searchable rooms, services and block details.
// Kept separate from app.js so the location database can grow without changing map behaviour.

function patchZone(id, updates) {
  const zone = zones.find(z => z.id === id);
  if (zone) Object.assign(zone, updates);
}

function addSearchItem(item) {
  if (!searchItems.some(existing => existing.id === item.id)) searchItems.push(item);
}

// C Block
patchZone('c', {
  aliases: 'C block digital technology digital technologies computers STEM tuckshop canteen cafe IT support psychologist uniform shop',
  description: 'Two-storey C Block containing Digital Technologies, STEM and a number of student services and facilities.',
  features: ['Digital Technologies', 'STEM', 'Tuckshop / Canteen / Cafe', 'IT Support', 'Psychologist', 'Uniform Shop']
});
patchZone('canteen', {
  aliases: 'tuckshop canteen cafe uniform shop food C block',
  description: 'Tuckshop / Canteen / Cafe and Uniform Shop located at C Block.',
  features: ['Tuckshop / Canteen / Cafe', 'Uniform Shop']
});
patchZone('computersupport', {
  name: 'IT Support',
  aliases: 'IT support computer support computers help C block',
  description: 'IT Support located at C Block.',
  features: ['IT and computer support']
});
patchZone('studentservices', {
  aliases: 'guidance officer guidance officers student services',
  features: ['Guidance Officers']
});
addSearchItem({id:'c-digital', name:'Digital Technologies', parentId:'c', category:'C Block', aliases:'digital technology digital technologies computers'});
addSearchItem({id:'c-stem', name:'STEM', parentId:'c', category:'C Block', aliases:'STEM science technology engineering mathematics'});
addSearchItem({id:'c-psychologist', name:'Psychologist', parentId:'c', category:'C Block', aliases:'psychologist psychology wellbeing student support'});

// D Block
patchZone('d', {
  aliases: 'D block food technology kitchens kitchen dining room mathematics maths classrooms D14 toilets bathroom WC',
  description: 'Two-storey D Block used for Food Technology and Mathematics.',
  features: ['Food Technology / Kitchens', 'Dining Room', 'Mathematics classrooms', 'D14', 'Toilets']
});
addSearchItem({id:'d-foodtech', name:'Food Technology / Kitchens', parentId:'d', category:'D Block', aliases:'food technology kitchen kitchens cooking'});
addSearchItem({id:'d-dining', name:'Dining Room', parentId:'d', category:'D Block', aliases:'dining room food technology'});
addSearchItem({id:'d-maths', name:'Mathematics classrooms', parentId:'d', category:'D Block', aliases:'maths mathematics classrooms'});
addSearchItem({id:'d14', name:'D14', parentId:'d', category:'D Block', aliases:'D14 room D14 classroom'});
addSearchItem({id:'d-toilets', name:'Toilets', parentId:'d', category:'D Block', aliases:'toilet toilets bathroom bathrooms WC'});

// E Block
patchZone('e1', {
  aliases: 'E block maths mathematics classrooms',
  description: 'E Block mathematics teaching building on the western side of the campus.',
  features: ['Mathematics classrooms']
});
patchZone('e2', {
  aliases: 'E block maths mathematics classrooms',
  description: 'E Block mathematics teaching building on the western side of the campus.',
  features: ['Mathematics classrooms']
});
addSearchItem({id:'e1-maths', name:'Mathematics classrooms', parentId:'e1', category:'E Block 1', aliases:'E block maths mathematics classrooms'});
addSearchItem({id:'e2-maths', name:'Mathematics classrooms', parentId:'e2', category:'E Block 2', aliases:'E block maths mathematics classrooms'});

// F Block / Inclusive Learning. The current base map groups this area with N Block,
// so search focuses on that Inclusive Learning area until a separate F Block hotspot is added.
patchZone('n', {
  aliases: 'N block humanities inclusive learning F block inclusive learning classrooms',
  features: ['Humanities', 'Inclusive Learning', 'Inclusive Learning classrooms']
});
addSearchItem({
  id:'f-inclusive',
  name:'Inclusive Learning classrooms',
  parentId:'n',
  category:'F Block',
  aliases:'F block inclusive learning classroom classrooms',
  locationText:'Located in F Block / the Inclusive Learning area.'
});

// G Block
['g1','g2','g3'].forEach(id => patchZone(id, {
  aliases: 'G block science science labs science laboratories laboratory labs',
  description: 'Science teaching block containing science laboratories.',
  features: ['Science labs']
}));

// H Block
patchZone('h', {
  aliases: 'H block English staffroom classrooms staff PD room professional development toilets bathroom WC',
  description: 'English teaching block in the north-eastern part of the campus.',
  features: ['English Staffroom', 'English classrooms', 'Staff PD Room', 'Toilets']
});
addSearchItem({id:'h-staffroom', name:'English Staffroom', parentId:'h', category:'H Block', aliases:'English staffroom teachers staff room'});
addSearchItem({id:'h-classrooms', name:'English classrooms', parentId:'h', category:'H Block', aliases:'English classroom classrooms'});
addSearchItem({id:'h-pd', name:'Staff PD Room', parentId:'h', category:'H Block', aliases:'staff PD room professional development room'});
addSearchItem({id:'h-toilets', name:'Toilets', parentId:'h', category:'H Block', aliases:'toilet toilets bathroom bathrooms WC'});

// Support custom wording for search items such as F Block while retaining the existing parent hotspot.
showSearchItem = function(item) {
  const parent = byId[item.parentId];
  const locationText = item.locationText || `Located in ${parent.name}.`;
  const html = `<div class="detail-name">${item.name}</div><div class="detail-category">${item.category}</div><div class="detail-copy">${locationText}</div>`;
  details.className = '';
  details.innerHTML = html;
  mobileCard.innerHTML = html;
  mobileCard.classList.add('show');
};
