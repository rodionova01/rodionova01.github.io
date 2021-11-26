const items = buildItems()
console.log("Сортировка по цене даёт:")
testGreedy(items, 20, cmpValue)
console.log("Сортировка по обратному весу даёт:")
testGreedy(items, 20, cmpWeightInverse)

function testGreedy(items, maxWeight, cmpFunction)
{
	const {totalValue, taken} = greedy(items, maxWeight, cmpFunction)
	console.log("Полная цена = ", totalValue)
	console.log("Взяли:", taken)
}

function greedy(items, maxWeight, cmpFunction)
{
	items.sort(cmpFunction)
	items.reverse()
	let totalWeight = 0
	let totalValue = 0
	const taken = []
	for (let i = 0; i < items.length; i++)
	{
		if( totalWeight + items[i].weight <= maxWeight)
		{
			taken.push(items[i].name)
			totalWeight += items[i].weight
			totalValue += items[i].value
		}
	}
	return {totalValue: totalValue, taken: taken}
}

function cmpValue(itemA, itemB)
{
	let r = itemA.value - itemB.value
	return r
}

function cmpWeightInverse(itemA, itemB)
{
	let r = 1/itemA.weight - 1/itemB.weight
	return r
}

function buildItems()
{
	const names = ['часы', 'картина', 'радио', 'выза', 'книга', 'компьютер']
	const values = [175, 90, 20, 50, 10, 200]
	const weights = [10, 9, 4, 2, 1, 20]
	const items = []
	for (let i = 0; i < values.length; i++)
	{
		items.push({
			name:names[i], 
			value: values[i], 
			weight: weights[i]
		})
	} 
	return items
}

