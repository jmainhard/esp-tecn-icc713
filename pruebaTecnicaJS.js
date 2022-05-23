// 2022-05-20 solución prueba téncica especialización tecnológica
// jorge mainhard

// Responsables de los cuarteles
const paddockManagers = [
  { id: 1, taxNumber: "34634251", name: "MATIAS" },
  { id: 2, taxNumber: "54642523", name: "IGNACIO" },
  { id: 3, taxNumber: "74351663", name: "CARLOS" },
  { id: 4, taxNumber: "57684353", name: "ANDREA" },
  { id: 5, taxNumber: "12341145", name: "DANIELA" },
  { id: 6, taxNumber: "98245680", name: "JOAQUIN" }
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
  { id: 1, name: "PALTOS" },
  { id: 2, name: "AVELLANOS" },
  { id: 3, name: "CEREZAS" },
  { id: 4, name: "NOGALES" },
];

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 1200,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2019,
    area: 500,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 20000,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 8401,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2020,
    area: 2877,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2017,
    area: 15902,
  },
  {
    paddockManagerId: 3,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 1736,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2020,
    area: 2965,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2018,
    area: 1651,
  },
  {
    paddockManagerId: 5,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 700,
  },
  {
    paddockManagerId: 1,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 7956,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 3745,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 11362,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 300,
  },
  {
    paddockManagerId: 3,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 19188,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 17137,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 100,
  },
  {
    paddockManagerId: 2,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2019,
    area: 11845,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 15969,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 1,
    harvestYear: 2029,
    area: 10420,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2010,
    area: 3200,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 2,
    harvestYear: 2012,
    area: 10587,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 16750,
  },
];

const farms = [
  { id: 1, name: "AGRICOLA SANTA ANA" },
  { id: 2, name: "VINA SANTA PAULA" },
  { id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" },
];

/*
  - Su prueba debe ejecutarse sin errores en la consola del inspector de Google Chrome
*/
// Tip: Una hectárea equivale a 10.000m2

//////////////
// #region funciones propias
//////////////

// fuente: https://stackoverflow.com/questions/51165
function sortByNameAttribute(managers) {
  // forzamos 'a' a ser un string para evitar excepciones
  return managers.sort((a, b) => ('' + a.name).localeCompare(b.name));
}

function findById(data, id) {
  return data.find(item => item.id === id);
}

function findByValue(data, val) {
  return data.find(item => item === val);
}

function getIdByType(type, paddock) {
  switch (type) {
    case 0:
      return paddock.paddockTypeId;
    case 1:
      return paddock.paddockManagerId;
    case 2:
      return paddock.farmId;
    default:
      console.log('Error: Tipo de id no existe');
      break;
  }
}

/**
 * 
 * @param {Array} data - Tiene los datos en mayor detalle de la id que se quiere
 *  asociar a un total
 * @param {number} type - Tipo de id que se buscará
 *  - 0 (default) sumará total por tipo de paddock
 *  - 1 sumará total por manager
 *  - 2 sumará total por farm
 * @returns Arreglo con los nombres y valor de la suma total del tipo dado en orden decreciente
 */
// FIXME: calcular valor de paddock undefined en caso de ser necesario
function addArea(data, type = 0, filteredPaddocks = paddocks) {
  let areaMap = new Map();
  filteredPaddocks.forEach(paddock => {
    // obtiene name desde 'padockType', 'padockManagers' o 'farms'
    let obj = findById(data, getIdByType(type, paddock));
    if (obj != undefined) {
      let mapObjToArea = { name: obj.name, totalArea: 0 };

      // agrega al map si no se encuentra y añade área de 'paddock'
      if (!areaMap.has(mapObjToArea.name))
        areaMap.set(mapObjToArea.name, 0);

      let actualArea = areaMap.get(mapObjToArea.name) + paddock.area;
      areaMap.set(mapObjToArea.name, actualArea);
    } // ignora caso undefined
  });
  // ordenar por values decreciente, transformar a Array
  return Array.from(new Map([...areaMap.entries()].sort((a, b) => b[1] - a[1])));
}

function groupBy(id, array, groupingType, groupingBy) {
  paddocks.forEach(paddock => {
    let groupingId = getIdByType(groupingType, paddock);
    let isAlreadyGrouped = findByValue(array, groupingId);
    if (isAlreadyGrouped === undefined) {
      if (id === getIdByType(groupingBy, paddock)) {
        array.push(groupingId);
      }
    }
  });
}

function groupManagersByFarm(farmId, farmManagers) {
  groupBy(farmId, farmManagers, 1, 2);
}

function groupFarmsByManager(managerId, managerFarms) {
  groupBy(managerId, managerFarms, 2, 1)
}

function getAttribute(option, obj) {
  switch (option) {
    case 0:
      return obj.taxNumber;
    case 1:
      return obj.name;
    default:
      console.log("Error: tipo de atributo no existe");
      break;
  }
}

// Deprecated: método extraido en L:305
// function sortAndReplaceIds(farmManagerMap) {
//   // FIXME: no considera caso undefined
//   farmManagerMap.forEach((value, key) => {
//     let managers = [];
//     let names = [];
//     managers = value.map(farmManagerId => findById(paddockManagers, farmManagerId));
//     names = sortByNameAttribute(managers).map(manager => manager.taxNumber);
//     farmManagerMap.set(key, names);
//   });
// }

function sortAndReplaceIds(map, from, replaceWith) {
  // FIXME: no considera caso undefined
  map.forEach((value, key) => {
    let objects = [];
    let names = [];
    objects = value.map(id => findById(from, id));
    names = sortByNameAttribute(objects).map(item => getAttribute(replaceWith, item));
    map.set(key, names);
  });
}

function filterCherriesByFarm(farmId) {
  return paddocks
    .filter(item => item.paddockTypeId === 3 && item.farmId === farmId);
}

function filterByArea(array, area) {
  return array.filter(item => item.area > area);
}

function getManagersNames(paddocks) {
  return paddocks
    .map(paddock => findById(paddockManagers, paddock.paddockManagerId).name);
}

function managerMap(paddock) {
  let managerObject = findById(paddockManagers, paddock.paddockManagerId);
  return [ managerObject.id, managerObject.name ];
}

//////////////
// #endregion
//////////////

// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
  return paddockManagers.map((paddockManager) => paddockManager.id);
}

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
  return sortByNameAttribute(paddockManagers).map(manager => manager.taxNumber);
}

/* 
  2 Arreglo con los nombres de cada tipo de cultivo, ordenados 
  decrecientemente por la suma TOTAL de la cantidad de hectáreas 
  plantadas de cada uno de ellos.
 */
function sortPaddockTypeByTotalArea() {
  // mapear a sólo nombres
  return addArea(paddockType).map(nameAndValue => nameAndValue[0]);
}

/* 
  3 Arreglo con los nombres de los administradores, ordenados 
  decrecientemente por la suma TOTAL de hectáreas que administran.
*/
function sortFarmManagerByAdminArea() {
  // mapear a sólo nombres
  return addArea(paddockManagers, 1).map(nameAndValue => nameAndValue[0]);
}

/*
  4 Objeto en que las claves sean los nombres de los campos y los valores un 
  arreglo con los ruts de sus administradores ordenados alfabéticamente por 
  nombre.
*/
function farmManagerNames() {
  let farmManagerMap = new Map();
  farms.forEach(farm => {
    let farmManagers = [];
    if (!farmManagerMap.has(farm.name)) {
      farmManagerMap.set(farm.name, farmManagers);
    }
    groupManagersByFarm(farm.id, farmManagers);
  });
  sortAndReplaceIds(farmManagerMap, paddockManagers, 0);
  return farmManagerMap;
}

/*
  5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que 
  tengan más de 2 hectáreas en Paltos
*/
function biggestAvocadoFarms() {
  let filteredPaddocks = paddocks.filter(item => item.paddockTypeId === 1);
  return addArea(farms, 2, filteredPaddocks)
    .map(item => item[1])
    .filter(item => item > 20000);
}

/* 
  6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO 
  ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
*/
function biggestCherriesManagers() {
  const forestalAgricolaLoEncina = 3;
  let cherryPaddocks = filterCherriesByFarm(forestalAgricolaLoEncina);
  const finalPaddocks = filterByArea(cherryPaddocks, 1000);
  return sortByNameAttribute(getManagersNames(finalPaddocks));
}

/*
  7 Objeto en el cual las claves sean el nombre del administrador y el valor un 
  arreglo con los nombres de los campos que administra, ordenados alfabéticamente
*/
function farmManagerPaddocks() {
  let managerFarmsMap = new Map();
  paddockManagers.forEach(manager => {
    let managerFarms = [];
    if (!managerFarmsMap.has(manager.name)) {
      managerFarmsMap.set(manager.name, managerFarms);
    }
    groupFarmsByManager(manager.id, managerFarms);
  });
  sortAndReplaceIds(managerFarmsMap, farms, 1);
  return managerFarmsMap;
}

/* 
  8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de 
  plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo 
  AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del 
  administrador y el valor el nombre del administrador
*/
// FIXME: no considera caso undefined
// nota: lo había hecho con map dado que se pide estructura tipo clave, valor
// sin embargo tomar la información implica que habrá repeticiones en las claves
// - dos plantaciones del mismo tipo plantadas el mismo año - 
// por lo que utilicé arreglo como estructura
function paddocksManagers() {
  let paddocksManagersMap = [];
  paddocks.forEach(paddock => {
    let paddockTypeName = findById(paddockType, paddock.paddockTypeId).name;
    let paddockManagerKey = paddockTypeName + '-' + paddock.harvestYear;
    let paddockManagerValue = managerMap(paddock);
    paddocksManagersMap.push([paddockManagerKey, paddockManagerValue]);
  });
  console.log(paddocksManagersMap.length);
  return paddocksManagersMap;
}

/* 
  9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y 
  agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA 
  SANTA ANA, administrado por este nuevo administrador

  Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la
  pregunta 3.

  No modificar arreglos originales para no alterar las respuestas anteriores al 
  correr la solución
*/
// aquí intente traspasar los arrays a nuevas variables
// pero seguia modificando los const originales asi que los cambié de lugar
// para modificarlos para la pregunta 9 sólo
function newManagerRanking() {
  // modifiqué los originales pero en este punto para no complicarme mucho
  paddockManagers.push({ id: 7, taxNumber: '34810582', name: 'PEDRO' });
  paddocks.push(
    {
      paddockManagerId: 7,
      farmId: 1,
      paddockTypeId: 4,
      harvestYear: 2017,
      area: 900
    }
  );
  return sortFarmManagerByAdminArea().findIndex(item => item === 'PEDRO');
}

// No modificar, eliminar o alterar cualquier línea de código o comentario de acá para abajo
// Cualquier cambio hará que su prueba quede invalidada automáticamente
console.log("Pregunta 0");
console.log(listPaddockManagerIds());
console.log("Pregunta 1");
console.log(listPaddockManagersByName());
console.log("Pregunta 2");
console.log(sortPaddockTypeByTotalArea());
console.log("Pregunta 3");
console.log(sortFarmManagerByAdminArea());
console.log("Pregunta 4");
console.log(farmManagerNames());
console.log("Pregunta 5");
console.log(biggestAvocadoFarms());
console.log("Pregunta 6");
console.log(biggestCherriesManagers());
console.log("Pregunta 7");
console.log(farmManagerPaddocks());
console.log("Pregunta 8");
console.log(paddocksManagers());
console.log("Pregunta 9");
console.log(newManagerRanking());