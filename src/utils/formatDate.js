export const formatDate = time => 
    new Date(time || new Date().toString())
		.toString()
		.split(' ')
		.slice(0, 3)
		.join(' ')
		.replace(' ', ', ')
