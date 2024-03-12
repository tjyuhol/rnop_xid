const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('LhRPomYU3Y', uuidlib.v4());
	}

module.exports = generateId
