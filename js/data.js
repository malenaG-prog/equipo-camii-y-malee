/* ============================================================
   DATA.JS
   Acá cargan toda la información del equipo: quiénes son,
   qué saben hacer, y el registro de proyectos / charlas / visitas.

   NO hay base de datos: todo vive en este archivo.
   Para sumar una salida nueva, copiá un bloque del array "items"
   y completá los datos. Para las fotos, guardá la imagen adentro
   de la carpeta "assets/img/" y poné ese nombre de archivo en
   la propiedad "imagen". Si no tenés foto todavía, dejá
   imagen: "" y el sitio va a mostrar un cartel de reemplazo
   automáticamente (no rompe nada).
   ============================================================ */

const equipo = {
  nombre: " equipo cammi & malee.",
  escuela: "Escuela de formación profecional N° 401 — Orientación en Informática",
  reseña:
    "Somos dos estudiantes de Informática. Durante estos años tuvimos charlas, visitamos empresas y encaramos nuevos proyectos propios que fuimos documentando en llo largo de nuestro camino. Este portfolio reúne todo eso: lo que aprendimos, dónde estuvimos, y en qué trabajamos cada una y en qué trabajamos juntas.",
};

const miembros = [
  {
    id: "persona1",
    nombre: "CAMILA ERASO",
    rol: "Desarrollo & Lógica",
    bio: "  ME GUSTA LA INFORMÁTICA PORQUE PERMITE CREAR,RESOLVER PROBLEMAS APRENDER COSAS NUEVAS USANDO LA TECNOLOGIÁ.EN EL FUTURO ME GUSTARIA ESPECIALIZARME EN PROGRAMACION Y DISEÑO DE PAGINAS WEB.EN LA ESCUELA APRENDI A USAR DISTINTOS PROGRAMAS,BUSCAR INFORMACION DE MANERA RESPONSABLE  Y TRABAJAR EN EQUIPO.",
    foto: "assets/img/cami.jpg",
    iniciales: "NA",
    habilidades: [
      { nombre: "Naturales", nivel: 5 },
      { nombre: "Lenguaje", nivel: 5 },
      { nombre: "Sociales", nivel: 4 },
      { nombre: "Matematicas", nivel: 4 },
      { nombre: "Informatica", nivel: 3 },
    ],
    redes: {
      instagram: "https://instagram.com//c.aylen.oficial/",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      email: "persona1camilaeraso2@gmail.com.",
    },
  },
  {
    id: "persona2",
    nombre: "MALENA GUERRERO",
    rol: "diseño y documentacion",
    foto: "assets/img/male.jpg",
    bio: "ME GUSTA ESTUDIAR INFORMATICA PORQUE PUEDO APRENDER A USAR LA TECNOLOGIA Y CREAR COSAS NUEVAS, ME GUSTARIA ESPECIALIZARME EN EL AREA DE DISEÑO GRAFICO Y TAMBIEN REALIZAR PAGINAS WEB. EN LA ESCUELA ME ESEÑARON A USAR ROGRAMAS Y ORGANIZAR INFORMACIÓN.",
    iniciales: "NA",
    habilidades: [
      { nombre: "Naturales", nivel: 4 },
      { nombre: "Lenguaje", nivel: 2},
      { nombre: "Sociales", nivel: 4},
      { nombre: "Matematicas", nivel: 5 },
      { nombre: "Informartica", nivel: 3 },
    ],
    redes: {
      instagram: "https://instagram.com/chinita044",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      email: "malenag1603@gmail.com",
    },
  },
];

/* tipo: "proyecto" | "charla" | "visita"
   participantes: ["persona1"] | ["persona2"] | ["persona1","persona2"] */
const items = [
  {
    id: 1,
    titulo: "Visita a LA ESTACION DE CLAYPOLE",
    tipo: "visita",
    categoria: "recorrido",
    participantes: ["persona1", "persona2"],
    fecha: "2024-06",
    descripcion:
      "recorrimos la estación de claypole de la linea Gral Roca",
    imagen: "assets/img/estacion de clatole.png",
  },
  {
    id: 2,
    titulo: "FERIA DEL LIBRO BROWN",
    tipo: "charla",
    categoria: "Salida",
    participantes: ["persona1"],
    fecha: "2025-10",
    descripcion:
      "Charla a cargo de un ingeniero en sistemas sobre modelos de lenguaje, usos responsables de la IA y su impacto en el mercado laboral actual.",
    imagen: "assets/img/feria del libro.jpg",
  },
  {
    id: 3,
    titulo: "Natatotio ",
    tipo: "proyecto",
    categoria: "Programación",
    participantes: ["persona1", "persona2"],
    fecha: "2005-08",
    descripcion:
      "en esta salida tuvimos la oprtunidad que junto a otros compaeros aprendimos cosa basicas de lo que seria nadar en una pileta pprofecional",
    imagen: "assets/img/natatorio.png",
  },
  {
    id: 4,
    titulo: "Pozo de Banfield",
    tipo: "visita",
    categoria: "Infraestructura",
    participantes: ["persona2"],
    fecha: "2024-09-11",
    descripcion:"",
    imagen: "assets/img/pozo de banfiel.png",
  },
  {
    id: 5,
    titulo: "tecnica N°3",
    tipo: "Salida educativa",
    categoria: "dia recreativo",
    participantes: ["persona2"],
    fecha: "2025-04",
    descripcion:
      "Diseño y maquetado con HTML, CSS y JavaScript de un sitio institucional para un comercio local, incluyendo catálogo y formulario de contacto.",
    imagen: "assets/img/tecnica N3.png",
  },
];
