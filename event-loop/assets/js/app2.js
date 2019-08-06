const start = () => {
    setTimeout(() => {
        const store = { id: 1, name: 'Magazine XPTO'}
        console.log(store)

        setTimeout(idStore => {
            const category = {id: 1, title: 'Promoções', store_id: idStore}
            console.log(category)

            setTimeout(idCategory => {
                const products = [
                    {id: 1, title: 'TV 32', category_id: idCategory},
                    {id: 2, title: 'TV 42', category_id: idCategory},
                    {id: 3, title: 'TV 50', category_id: idCategory},
                ]

                console.log(products)

            }, 2000, category.id);

        }, 2000, store.id);


    }, 2000);
}