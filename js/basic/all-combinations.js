function allComb( arr1, arr2, arr3 ) {

	var resultArr = [];

	for ( var i = 0; i < arr1.length; i++ ) { // 1
		for ( var j = 0; j < arr2.length; j++ ) { // 0
			for ( var h = 0; h < arr3.length; h++ ) { // 0
				resultArr.push( arr1[ i ].toString() + arr2[ j ] + arr3[ h ] );
			}
		}
	}

	return resultArr;

}

console.log( allComb( [ 1, 2 ], [ 'b', 'z' ], [ 'etc.', 'you get the idea' ] ) );
