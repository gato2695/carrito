const data = [
    {"id": 1,
    "img": "https://cdn.pixabay.com/photo/2012/04/13/00/39/drums-31362_960_720.png",    
    "title": "Bateria",
    "categoria": "Percusion",
    "price": "700",
    "stock": "5"

    },

    {"id": 2,
    "img": "https://cdn.pixabay.com/photo/2012/04/13/00/39/drums-31362_960_720.png", 
    "title": "Guitarra Electrica",
    "categoria": "Cuerdas",
    "price": "850",
    "stock": "7"
    },

    {"id": 3,
    "img": "https://cdn.pixabay.com/photo/2012/04/13/00/39/drums-31362_960_720.png", 
    "title": "Violin",
    "categoria": "Cuerdas",
    "price": "500",
    "stock": "7"
    },

    {"id": 4,
    "img": "https://cdn.pixabay.com/photo/2012/04/13/00/39/drums-31362_960_720.png", 
    "title": "Ocarina", 
    "categoria": "Aire",
    "price": "120",
    "stock": "7"
    },


   {"id": 5,
    "img": "https://cdn.pixabay.com/photo/2012/04/13/00/39/drums-31362_960_720.png", 
    "title": "Darbuka",
    "categoria": "Percusion",
    "price": "200",
    "stock": "7"
    },

    {"id": 6,
    "img": "https://cdn.pixabay.com/photo/2012/04/13/00/39/drums-31362_960_720.png", 
    "title": "Cuatro",
    "categoria": "percusion",
    "price": "500",
    "stock": "7"
    }
]
const getProducts = new Promise  ((resolve) => {
    setTimeout(()=>{
        resolve (data)
    }, 2000)
})

export default getProducts