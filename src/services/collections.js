import conciliaciones from "@/assets/json/conciliaciones.json";
import fuentes from "@/assets/json/fuentes.json";
import tableros from "@/assets/json/tableros.json";
import usuarios from "@/assets/json/usuarios.json";

const collectionKeys = (collectionData) => {
  const collection = collectionData[0];
  return Object.keys(collection);
};

const collectionConfig = (title, collectionData) => {
  return {
    title: title,
    data: collectionData,
    keys: collectionKeys(collectionData),
  };
};

const collections = [
  collectionConfig("Conciliaciones", conciliaciones),
  collectionConfig("Fuentes", fuentes),
  collectionConfig("Tableros", tableros),
  collectionConfig("Usuarios", usuarios),
];

export default collections;
