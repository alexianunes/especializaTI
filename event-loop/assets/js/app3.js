const store = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const store = { id: 1, name: 'Magazine XPTO'}

            resolve(store);
            // reject(store);

        }, 2000);
    })
}

const category = idStore => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const category = {id: 1, title: 'Promoções', store_id: idStore}
            
            resolve(category);
            // reject(category);

        }, 2000);
    })
}

const products = idCategory => {
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

const start = () => {
    startPreloader();

    store()
        .then(store => {
            console.log(store);
            return category(store.id);
        })
        .then(category => {
            console.log(category)
            return products(category.id);
        })
        .then(products => {
            console.log(products)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => endPreloader())
}