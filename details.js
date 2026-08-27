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

// J Block
patchZone('j', {
  aliases: 'J block Year 7 Hub science staffroom HOY head of year hub toilets classrooms',
  description: 'Year 7 Hub and teaching block in the centre of the campus.',
  features: ['Science Staffroom', 'HoY Hub', 'Toilets', 'Classrooms']
});
addSearchItem({id:'j-sciencestaff', name:'Science Staffroom', parentId:'j', category:'J Block', aliases:'science staffroom staff room teachers'});
addSearchItem({id:'j-hoy', name:'HoY Hub', parentId:'j', category:'J Block', aliases:'HOY head of year hub year 7'});
addSearchItem({id:'j-toilets', name:'Toilets', parentId:'j', category:'J Block', aliases:'toilet toilets bathroom bathrooms WC'});
addSearchItem({id:'j-classrooms', name:'Classrooms', parentId:'j', category:'J Block', aliases:'classroom classrooms teaching rooms'});

// K Block
patchZone('k', {
  aliases: 'K block art visual arts classrooms green screen room greenscreen media',
  description: 'Visual Art teaching block on the eastern side of the upper campus.',
  features: ['Art classrooms', 'Green screen room']
});
addSearchItem({id:'k-art', name:'Art classrooms', parentId:'k', category:'K Block', aliases:'art visual arts classroom classrooms'});
addSearchItem({id:'k-greenscreen', name:'Green screen room', parentId:'k', category:'K Block', aliases:'green screen greenscreen media room'});

// L Block / Resource Centre
patchZone('resource', {
  name: 'L Block (Resource Centre)',
  aliases: 'L block resource centre library classrooms staff wellbeing room offices study areas',
  description: 'L Block houses the Resource Centre and a range of learning, staff and study spaces.',
  features: ['Library', 'Classrooms', 'Staff Wellbeing Room', 'Offices', 'Study areas']
});
addSearchItem({id:'l-library', name:'Library', parentId:'resource', category:'L Block', aliases:'library resource centre books'});
addSearchItem({id:'l-classrooms', name:'Classrooms', parentId:'resource', category:'L Block', aliases:'classroom classrooms teaching rooms'});
addSearchItem({id:'l-wellbeing', name:'Staff Wellbeing Room', parentId:'resource', category:'L Block', aliases:'staff wellbeing well-being room'});
addSearchItem({id:'l-offices', name:'Offices', parentId:'resource', category:'L Block', aliases:'office offices staff'});
addSearchItem({id:'l-study', name:'Study areas', parentId:'resource', category:'L Block', aliases:'study area study areas quiet study'});

// M Block
patchZone('m', {
  aliases: 'M block music music classrooms',
  description: 'Music teaching block on the eastern side of the campus.',
  features: ['Music classrooms']
});
addSearchItem({id:'m-music', name:'Music classrooms', parentId:'m', category:'M Block', aliases:'music classroom classrooms'});

// N Block
patchZone('n', {
  aliases: 'N block humanities humanities staffroom inclusive learning staffroom classrooms office F block inclusive learning',
  description: 'Two-storey N Block containing Humanities and Inclusive Learning spaces.',
  features: ['Humanities Staffroom', 'Inclusive Learning Staffroom', 'Classrooms', 'Office']
});
addSearchItem({id:'n-humanitiesstaff', name:'Humanities Staffroom', parentId:'n', category:'N Block', aliases:'humanities staffroom staff room teachers'});
addSearchItem({id:'n-inclusivestaff', name:'Inclusive Learning Staffroom', parentId:'n', category:'N Block', aliases:'inclusive learning staffroom staff room teachers'});
addSearchItem({id:'n-classrooms', name:'Classrooms', parentId:'n', category:'N Block', aliases:'classroom classrooms humanities inclusive learning'});
addSearchItem({id:'n-office', name:'Office', parentId:'n', category:'N Block', aliases:'office administration'});

// P Block
patchZone('p', {
  aliases: 'P block performing arts arts staffroom dance studio dance performing arts',
  description: 'Performing Arts block near Queen Street.',
  features: ['Performing Arts', 'Arts Staffroom', 'Dance studio']
});
addSearchItem({id:'p-performing', name:'Performing Arts', parentId:'p', category:'P Block', aliases:'performing arts performance drama'});
addSearchItem({id:'p-staffroom', name:'Arts Staffroom', parentId:'p', category:'P Block', aliases:'arts staffroom staff room teachers'});
addSearchItem({id:'p-dance', name:'Dance studio', parentId:'p', category:'P Block', aliases:'dance studio dance room'});

// S Block / Student Centre
patchZone('student', {
  name: 'S Block (Student Centre)',
  aliases: 'S block student centre sports hall gym classroom PE staffroom change rooms changerooms physical education',
  description: 'S Block is the Student Centre and contains sports and Physical Education facilities.',
  features: ['Sports hall', 'Gym', 'Classroom', 'PE Staffroom', 'Change rooms']
});
addSearchItem({id:'s-sportshall', name:'Sports hall', parentId:'student', category:'S Block', aliases:'sports hall indoor sport student centre'});
addSearchItem({id:'s-gym', name:'Gym', parentId:'student', category:'S Block', aliases:'gym gymnasium fitness'});
addSearchItem({id:'s-classroom', name:'Classroom', parentId:'student', category:'S Block', aliases:'classroom teaching room'});
addSearchItem({id:'s-pestaff', name:'PE Staffroom', parentId:'student', category:'S Block', aliases:'PE staffroom physical education staff room teachers'});
addSearchItem({id:'s-changerooms', name:'Change rooms', parentId:'student', category:'S Block', aliases:'change room change rooms changerooms changing rooms locker rooms'});

// Trade Training Centre
patchZone('ttc', {
  description: 'Trade Training Centre at the southern end of the school grounds. Visit the <a href="https://sunshinecoastttc.eq.edu.au/" target="_blank" rel="noopener noreferrer">Sunshine Coast Technical Trade Training Centre website</a>.'
});

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

// Only call out height for buildings that are fully two storeys.
// Mixed-height B Block and the tall single-volume Student Centre are not described by height.
renderDetails = function(z) {
  const twoStoreyIds = new Set(['a','c','d','n']);
  const height = twoStoreyIds.has(z.id) && z.height
    ? `<div class="detail-height"><strong>Building height:</strong> ${z.height}</div>`
    : '';
  const features = z.features?.length
    ? `<div class="detail-heading">What you'll find here</div><ul class="detail-list">${z.features.map(f=>`<li>${f}</li>`).join('')}</ul>`
    : '';
  return `<div class="detail-name">${z.name}</div><div class="detail-category">${z.category}</div>${height}<div class="detail-copy">${z.description||''}</div>${features}`;
};
