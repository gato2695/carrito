const data = [
    {"id": 1,
    "title": "Plato cuadrado",
    "description": "Plato de 19 x 20 cm",
    "categoria": "Platos Seco",
    "price": "4500",
    "stock": "5"

    },

    {"id": 2,
    "title": "Plato redondo",
    "description": "Plato de 20 cm de radio",
    "categoria": "Platos Seco",
    "price": "4100",
    "stock": "7"
    },

    {"id": 3,
    "title": "Plato sopero redondo",
    "description": "Plato de 14 cm de radio",
    "categoria": "Platos Seco",
    "price": "4700",
    "stock": "7"
    },
]
const getProducts = new Promise  ((resolve) => {
    setTimeout(()=>{
        resolve (data)
    }, 2000)
})

export default getProducts