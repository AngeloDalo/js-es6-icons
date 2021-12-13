function addIcon(array, container, value) {
    container.innerHTML = '';
    if (value == 'all') {
        for (let i = 0; i < array.length; i++) {
            const singleIcon = array[i];
            let addDiv = `
            <div class=square>
                <i style="color:${singleIcon.color}" class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                <span>${singleIcon.name}</span>
            </div>
            `;
            container.innerHTML += addDiv;
        }
    }
    if (value == 'animal') {
        for (let i = 0; i < array.length; i++) {
            if (array[i].type == 'animal') {
                const singleIcon = array[i];
                let addDiv = `
                <div class=square>
                    <i style="color:${singleIcon.color}" class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                    <span>${singleIcon.name}</span>
                </div>
                `;
                container.innerHTML += addDiv;
            }
        }
    }
    if (value == 'vegetable') {
        for (let i = 0; i < array.length; i++) {
            if (array[i].type == 'vegetable') {
                const singleIcon = array[i];
                let addDiv = `
                <div class=square>
                    <i style="color:${singleIcon.color}" class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                    <span>${singleIcon.name}</span>
                </div>
                `;
                container.innerHTML += addDiv;
            }
        }
    }
    if (value == 'user') {
        for (let i = 0; i < array.length; i++) {
            if (array[i].type == 'user') {
                const singleIcon = array[i];
                let addDiv = `
                <div class=square>
                    <i style="color:${singleIcon.color}" class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.color}"></i>
                    <span>${singleIcon.name}</span>
                </div>
                `;
                container.innerHTML += addDiv;
            }
        }
    }
}

const categories=[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: null
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: null
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: null
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: null
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: null
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: null
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: null
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: null
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: null
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: null
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: null
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: null
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: null
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: null
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: null
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: null
	}
];

const container = document.querySelector('.content');
const option = document.getElementById ('categories');

for (let i=0; i<categories.length; i++) {
	let singlePosition = '0123456789ABCDEF';
	let cancelletto = '#';
	for (let y = 0; y < 6; y++) {
		cancelletto += singlePosition[Math.floor(Math.random() * 16)];
	}
	categories[i].color = cancelletto;
}

option.addEventListener ('click', function () {
    addIcon(categories, container, option.value);
});


