function Mouse(){
	this.name = 'Mickey';
	this.weight = 0.5;
	this.dead = false;
}

Mouse.prototype.die = function() {
	this.dead = true;
}
module.exports = Mouse;