const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/inicio", (req, res) => {
    res.json({ "mensaje": "Bienvenido A Mi Plataforma" });
});

app.get("/informacion", (req, res) => {
    res.json({ "mensaje": "Datos Del Servicio" });
})

app.post("/solicitudes", (req, res) => {
    const { nombre, apellido, correo } = req.body;
    if (!correo.includes('@') || !correo.includes('.')) {
        return res.status(400).json({
            error: "Ingrese Corre Electronico Valido"
        });
    }

    res.json({
        "nombre": nombre,
        "apellido": apellido,
        "correo": correo,
        "mensaje": "Solicitud recibida"
    })
})
/*puerto*/
app.listen(PORT, () => {
    console.log("servidor ejecutandose correctamente " + PORT);
});