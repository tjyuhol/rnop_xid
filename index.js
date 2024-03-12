const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('znRre68ddp', uuidlib.v4());
	}

module.exports = generateId
