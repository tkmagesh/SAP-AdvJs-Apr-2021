var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'}
];

/* sort, filter, groupBy, min, max, etc  */

function useCase(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

useCase("Products List", function(){
    console.table(products);
});

useCase("Sort", function(){
    useCase('Default sort [products by id]', function(){
        function sortProductsById(){
            for(var i=0; i < products.length -1; i++)
                for(var j=i+1; j<products.length; j++)
                    if (products[i].id > products[j].id){
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp;
                    }
        }
        sortProductsById();
        console.table(products);
    });
    useCase("Sort any list by any attribute", function(){
        function sort(list, attrName){
            for(var i=0; i < list.length -1; i++)
                for(var j=i+1; j<list.length; j++)
                    if (list[i][attrName] > list[j][attrName]){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        useCase('Products by cost', function(){
            sort(products, 'cost')
            console.table(products);
        });
        useCase('Products by units', function(){
            sort(products, 'units')
            console.table(products);
        });
    });

    useCase("Sort any list by any comparer", function(){
        function sort(list, comparerFn){
            for(var i=0; i < list.length -1; i++)
                for(var j=i+1; j<list.length; j++)
                    if (comparerFn(list[i], list[j]) > 0 ){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        useCase("Products by value [cost * units]", function(){
            var productsComparerByValue = function(p1, p2){
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value < p2Value) return -1;
                if (p1Value > p2Value) return 1;
                return 0;
            }
            sort(products, productsComparerByValue);
            console.table(products);
        });
    });
});