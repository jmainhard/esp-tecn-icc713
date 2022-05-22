// 2022-05-20 solución prueba téncica especialización tecnológica
// jorge mainhard

// Responsables de los cuarteles
const paddockManagers = [
  { id: 1, taxNumber: "34634251", name: "MATIAS" },
  { id: 2, taxNumber: "54642523", name: "IGNACIO" },
  { id: 3, taxNumber: "74351663", name: "CARLOS" },
  { id: 4, taxNumber: "57684353", name: "ANDREA" },
  { id: 5, taxNumber: "12341145", name: "DANIELA" },
  { id: 6, taxNumber: "98245680", name: "JOAQUIN" },
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

// #region funciones propias
// fuente: https://stackoverflow.com/questions/51165
function sortManagersByName(managers) {
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
      console.log('Error: Tipo de suma no existe');
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
 * @returns Arreglo con los nombres del tipo en orden decreciente
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

function groupManagersByFarm(farmId, farmManagers) {
  paddocks.forEach(paddock => {
    let farmManagerId = paddock.paddockManagerId;
    let farmManager = findByValue(farmManagers, farmManagerId);
    if (farmManager === undefined) {
      if (farmId === paddock.farmId) {
        farmManagers.push(farmManagerId);
      }
    }
  });
}

function sortAndReplaceIds(farmManagerMap) {
  // FIXME: no considera caso undefined
  farmManagerMap.forEach((value, key) => {
    let managers = [];
    let names = [];
    managers = value.map(farmManagerId => findById(paddockManagers, farmManagerId));
    names = sortManagersByName(managers).map(manager => manager.name);
    farmManagerMap.set(key, names);
  });
}

// #endregion

// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
  return paddockManagers.map((paddockManager) => paddockManager.id);
}

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
  return sortManagersByName(paddockManagers).map(manager => manager.taxNumber);
}

/* 
  2 Arreglo con los nombres de cada tipo de cultivo, ordenados 
  decrecientemente por la suma TOTAL de la cantidad de hectáreas 
  plantadas de cada uno de ellos.
 */
function sortPaddockTypeByTotalArea() {
  // mapear a sólo nombres
  return addArea(paddockType).map(area => area[0]);
}

/* 
  3 Arreglo con los nombres de los administradores, ordenados 
  decrecientemente por la suma TOTAL de hectáreas que administran.
*/
function sortFarmManagerByAdminArea() {
  // mapear a sólo nombres
  return addArea(paddockManagers, 1).map(area => area[0]);
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
  sortAndReplaceIds(farmManagerMap);
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

}

/*
  7 Objeto en el cual las claves sean el nombre del administrador y el valor un 
  arreglo con los nombres de los campos que administra, ordenados alfabéticamente
*/
function farmManagerPaddocks() {

}

/* 
  8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de 
  plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo 
  AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del 
  administrador y el valor el nombre del administrador
*/
function paddocksManagers() {

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
function newManagerRanking() {

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
// console.log("Pregunta 7");
// console.log(farmManagerPaddocks());
// console.log("Pregunta 8");
// console.log(paddocksManagers());
// console.log("Pregunta 9");
// console.log(newManagerRanking());