var animationEnd = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
var transitionEnd = "transitionend webkitTransitionEnd oTransitionEnd";

var requireAll = r => r.keys().forEach(r);

var getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomInt, requireAll, animationEnd, transitionEnd };