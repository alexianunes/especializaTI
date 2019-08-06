const getStore = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const store = { id: 1, name: 'Magazine XPTO'}

            resolve(store);
            // reject(store);

        }, 2000);
    })
}

const getCategory = idStore => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const category = {id: 1, title: 'Promoções', store_id: idStore}
            
            resolve(category);
            // reject(category);

        }, 2000);
    })
}

const getProducts = idCategory => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = [
                {id: 1, title: 'TV 32', category_id: idCategory},
                {id: 2, title: 'TV 42', category_id: idCategory},
                {id: 3, title: 'TV 50', category_id: idCategory},
            ]
            
            resolve(products);
            // reject(products);
        }, 2000);
    })
}

// async function nome() {}

const start = async () => {

    startPreloader();

    const store = await getStore();
    console.log(store);

    const category = await getCategory(store.id);
    console.log(category);

    const products = await getProducts(category.id);
    console.log(products);

    endPreloader();
}