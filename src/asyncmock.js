const products = [

{
    id:1,
    name:'punkffies',
    price: 1000,
    category:'food',
    img: 'https://i.pinimg.com/originals/f2/4f/c3/f24fc332d02af868b8cdd43a2c0d8c96.jpg',
    stock:20,
    description:'muffins de bandas de rock'
},
{
    id:1,
    name:'punkcakes',
    price: 2000,
    category:'food',
    img: 'https://i.pinimg.com/originals/ef/39/fc/ef39fc2052cb72551e9da42e0e645a90.jpg',
    stock:20,
    description:'tortas de bandas de rock'
},

{
    id:1,
    name:'punktres',
    price: 1000,
    category:'food',
    img: 'https://i.pinimg.com/564x/95/1d/35/951d35cc62467166f7017cd94b6b17fe.jpg',
    stock:20,
    description:'postres rockeros'
}
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
} 
 