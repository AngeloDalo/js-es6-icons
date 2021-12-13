function addIcon(array, container, value) {
    container.innerHTML = '';
    if (value == 'all') {
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


