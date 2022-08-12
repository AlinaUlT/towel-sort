
// You should implement your task here.

module.exports = function towelSort (m) {

	let res = [];
	if ( m === [] || m === undefined) {
		return [];
	}
	for  (let i = 0; i < m.length; i++) {
		if (i % 2 !== 0) {
			m[i].reverse();
		} 	
		for (let j = 0; j < m[i].length; j++) {
			if (m[i][j] !== undefined) {
				res.push(m[i][j]);
			}
		}
	}

  return res;
}
