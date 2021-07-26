'use strict';
const catalog = {
	pathSmall: 'images/small/',
    catalogTableElement: document.getElementById('catalog'),
	basketElement: document.getElementById('basket'),
	cols:['Номер','Изображение','Артикул','Наименование','Цена','Количество'],
    catalogValues: [
	{art:1, name:'Болт 10х30', price:0.35, count:0},
    {art:2, name:'Гайка для болта 10х30', price:0.54, count:0},
    {art:3, name:'Саморез по дереву 50', price:0.14, count:0},
    {art:4, name:'Шуруповерт', price:5740.37, count:0},
    {art:5, name:'Набор бит', price:354.25, count:0}
    ],
	basketValues: [
	],

    init() {
        this.renderCatalogTable();
		this.renderBasket()
        this.initEventHandlers();
    },

    renderCatalogTable() {
        for (let row = 0; row <= this.catalogValues.length; row++) {
            const tr = document.createElement('tr');
			//if (row > 0) tr.dataset.count = '0';
            

            for (let col = 0; col < 6; col++) {
				const td = document.createElement('td');
				
				if (row == 0 || col == 0){
					if (row == 0) td.textContent = this.cols[col];	
					if (col == 0 && row > 0) td.textContent = row;
				}

				if (col > 0 && row > 0){
					switch(col){
						case 1:
							const img = document.createElement('img');
							img.src = this.pathSmall + this.catalogValues[row-1].art.toString() + '.jpg';
							td.appendChild(img);
							break;
						case 2:
							td.textContent = this.catalogValues[row-1].art.toString();
							break;
						case 3:
							td.textContent = this.catalogValues[row-1].name.toString();
							break;
						case 4:
							td.textContent = this.catalogValues[row-1].price.toString();
							break;
						case 5:
							const inp = document.createElement('input');
							inp.type = 'number';
							inp.dataset.row = row;
							inp.value = 0;
							td.appendChild(inp);
							//td.textContent = tr.dataset.count;
							break;
						default:
							break;
					}	
				}
                
                tr.appendChild(td);
            }
		this.catalogTableElement.appendChild(tr);	
        }
    },

    initEventHandlers() {
        this.catalogTableElement.addEventListener('change', (event) => {
            this.onChangeHandler(event);
        });
		document.addEventListener('click', (event) => {
            this.onClickButtonHandler(event);
        });
    },

    onChangeHandler(event) {
        if (event.target.tagName !== 'INPUT') return;
		let row = +event.target.dataset.row;
		let val = +event.target.value;
		this.catalogValues[row - 1].count = val;
    },
	onClickButtonHandler(event){
		if (event.target.tagName !== 'BUTTON') return;
		for (let i=0;i<this.catalogValues.length;i++){
			if (this.catalogValues[i].count>0) this.basketValues.push(this.catalogValues[i]);
		}
		this.renderBasket()
	},
	renderBasket(){
		if (document.getElementById('basketTable')) document.getElementById('basketTable').remove();
		if (document.getElementById('basketPrice')) document.getElementById('basketPrice').remove();
		if (this.basketValues.length>0){
			const basketTable = document.createElement('table');
			for (let row = 0; row <= this.basketValues.length; row++) {
				const tr = document.createElement('tr');
			          

				for (let col = 0; col < 6; col++) {
					const td = document.createElement('td');
				
					if (row == 0 || col == 0){
						if (row == 0) td.textContent = this.cols[col];	
						if (col == 0 && row > 0) td.textContent = row;
					}

					if (col > 0 && row > 0){
						switch(col){
							case 1:
								const img = document.createElement('img');
								img.src = this.pathSmall + this.catalogValues[row-1].art.toString() + '.jpg';
								td.appendChild(img);
								break;
							case 2:
								td.textContent = this.catalogValues[row-1].art.toString();
								break;
							case 3:
								td.textContent = this.catalogValues[row-1].name.toString();
								break;
							case 4:
								td.textContent = this.catalogValues[row-1].price.toString();
								break;
							case 5:
								td.textContent = this.catalogValues[row-1].count.toString();
								break;
							default:
								break;
						}	
					}
                
					tr.appendChild(td);
				}
				basketTable.appendChild(tr);	
			}
			this.basketElement.appendChild(basketTable);	
			
					
		}
		const baskPrice = document.createElement('p');
		baskPrice.id = 'basketPrice';
		baskPrice.textContent = this.countBasketPrice();
		this.basketElement.appendChild(baskPrice);	
	},
	
	countBasketPrice(){
		let basketPrice = 0;
		if (this.basketValues.length == 0) return 'Корзина пуста';
		else {
			for (let i=0; i<this.basketValues.length; i++) basketPrice += this.basketValues[i].price * this.basketValues[i].count;
			return `В корзине ${this.basketValues.length} товаров, на ${basketPrice.toFixed(2)} рублей`;
		}
	},

}

catalog.init();
