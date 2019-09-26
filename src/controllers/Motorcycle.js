export function getById (req, res) {
	const { motorcycleId } = req.params
	let motorcycle
	if (motorcycleId === '1') {
		motorcycle = {
			name: 'Twister',
			cc: 250,
			brand: 'Honda'	
		}
	} else if (motorcycleId === '2') {
		motorcycle = {
			name: 'Ninja 650',
			cc: 650,
			brand: 'Kawasaki'
		}
	} else {
		motorcycle = {}
	}
	res.send(motorcycle)
} 