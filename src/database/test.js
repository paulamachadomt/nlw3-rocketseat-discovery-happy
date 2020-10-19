const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  // await saveOrphanage(db, {
  //     lat: "27.5209897",
  //     lng: "-48.6503919",
  //     name: "Casa Lar Luz do Caminho",
  //     about: "Casa de acolhimento para atendimento de crianças de 06 a 12 anos visando a permanência necessária e temporária, até reintrodução ao convívio familiar original, colocação em família substituta, adoção (nacional ou internacional) ou preparação para vida autônoma, depois de completados 18 anos.",
  //     whatsapp: "(55)5555-5555",
  //     images: [
  //         "https://images.unsplash.com/photo-1586458132313-b6191b25f567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9:5500/images/home.jpg",

  //         "https://images.unsplash.com/photo-1584911998951-51cf64d4d151?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"
  //     ].toString(),
  //     instructions: "Sinta-se à vontade para vir e traga muita paciência e amor.",
  //     hour: "Horário de visitas: das 8h às 18h",
  //     open_on_weekends: "0"

  //consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //const selectedOrphanagesbyId = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  //console.log(selectedOrphanagesbyId)

  //delete
//   await db.run('DELETE FROM orphanages WHERE id = "3"')
});
