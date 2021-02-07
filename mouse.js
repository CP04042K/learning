function Mouse(weight, color, isStomachEmpty, isSleeping) {
	this.weight = weight;
	this.color = color;
	this.isStomachEmpty = isStomachEmpty;
	this.isSleeping = isSleeping;
	this.eat = function(cheese) {
		this.isStomachEmpty = true;
	}
}

module.exports = Mouse;