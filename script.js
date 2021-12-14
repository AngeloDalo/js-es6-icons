function addIcon(array, container, value) {
    container.innerHTML = '';

	const all = array.filter ((elemento) => {
		if (elemento.type) {
			return true
		}
	});
	console.log(all);
	if (value == 'all') {
        for (let i = 0; i < all.length; i++) {
            const singleIcon = all[i];
            let addDiv = `
            <div class=square>
                <i class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                <span>${singleIcon.name}</span>
            </div>
            `;
            container.innerHTML += addDiv;
        }
    }

	const animal = array.filter ((elemento) => {
		if (elemento.type == 'animal') {
			return true
		}
	});
	if (value == 'animal') {
        for (let i = 0; i < animal.length; i++) {
            const singleIcon = animal[i];
            let addDiv = `
            <div class=square>
                <i class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                <span>${singleIcon.name}</span>
            </div>
            `;
            container.innerHTML += addDiv;
        }
    }

	const vegetable = array.filter ((elemento) => {
		if (elemento.type == 'vegetable') {
			return true
		}
	});
	if (value == 'vegetable') {
        for (let i = 0; i < vegetable.length; i++) {
            const singleIcon = vegetable[i];
            let addDiv = `
            <div class=square>
                <i class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                <span>${singleIcon.name}</span>
            </div>
            `;
            container.innerHTML += addDiv;
        }
    }

	const user = array.filter ((elemento) => {
		if (elemento.type == 'user') {
			return true
		}
	});
	if (value == 'user') {
        for (let i = 0; i < user.length; i++) {
            const singleIcon = user[i];
            let addDiv = `
            <div class=square>
                <i class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                <span>${singleIcon.name}</span>
            </div>
            `;
            container.innerHTML += addDiv;
        }
    }

	/**
	 *     if (value == 'all') {
        for (let i = 0; i < array.length; i++) {
            const singleIcon = array[i];
            let addDiv = `
            <div class=square>
                <i class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                <span>${singleIcon.name}</span>
            </div>
            `;
            container.innerHTML += addDiv;
        }
    }
    if (value == 'animal') {
        for (let i = 0; i < array.length; i++) {
            if (array[i].color == 'orange') {
                const singleIcon = array[i];
                let addDiv = `
                <div class=square>
                    <i class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                    <span>${singleIcon.name}</span>
                </div>
                `;
                container.innerHTML += addDiv;
            }
        }
    }
    if (value == 'vegetable') {
        for (let i = 0; i < array.length; i++) {
            if (array[i].color == 'green') {
                const singleIcon = array[i];
                let addDiv = `
                <div class=square>
                    <i class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                    <span>${singleIcon.name}</span>
                </div>
                `;
                container.innerHTML += addDiv;
            }
        }
    }
    if (value == 'user') {
        for (let i = 0; i < array.length; i++) {
            if (array[i].color == 'blue') {
                const singleIcon = array[i];
                let addDiv = `
                <div class=square>
                    <i class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                    <span>${singleIcon.name}</span>
                </div>
                `;
                container.innerHTML += addDiv;
            }
        }
    }
	 */
}

const categories=[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector('.content');
const option = document.getElementById ('categories');

option.addEventListener ('click', function () {
    addIcon(categories, container, option.value);
});


