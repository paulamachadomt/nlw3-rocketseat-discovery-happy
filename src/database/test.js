const Database = require('./db');

Database.then(async db => {
    //inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            hour,
            open_on_weekends
        ) VALUES (
            "-27.5937115",
            "-48.6272467",
            "CasaLar-Emaús",
            "Acolhemos Crianças e Adolescentes, de ambos os sexos, que tenham seus direitos violados, para delas cuidar integralmente e promover suas potencialidades psicológicas, físicas e sociais, a partir dos princípios da humildade e da caridade, sob os influxos do amor incondicional ao próximo.",
            "(55)5555-5555",
            "http://https://images.unsplash.com/photo-1586458132313-b6191b25f567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9:5500/images/home.jpg",
            "Sinta-se à vontade para vir e traga muita paciência e amor.",
            "Horário de visitas: das 7h às 18h",
            "1"
        );
    `)

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const selectedOrphanagesbyId = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(selectedOrphanagesbyId)


})