function getItems() {
    fetch('https://api.kedufront.juniortaker.com/item/')
        .then(response => response.json())
        .then(data => {
            const itemsList = document.querySelector(".products");
            itemsList.innerHTML = '';
            data.forEach(item => {
                const itemDiv = document.createElement('div');
                var image_link = "https://api.kedufront.juniortaker.com/static/img/" 
                    + item.image;
                itemDiv.classList.add('card');
                itemDiv.innerHTML = `
                            <div class="title">${item.name}</div>
                            <div class="desc">${item.description}</div>
                            <div class="box">
                                <div class="price">${item.price}€</div>
                                <div class="btn">Buy Now</div>
                            </div>
                            <div class="img">
                                <img src="${image_link}.png"/>
                            </div>
                        `;
                itemsList.appendChild(itemDiv);
            });
        })
        .catch(error => console.error('Error fetching items:', error));
}

getItems();
