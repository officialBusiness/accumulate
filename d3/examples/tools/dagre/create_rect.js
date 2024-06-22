
export default function createRect(enter){
	let
		nodePadding = 10,

		node = enter.append("g")
			.attr("class", "node")
			.attr("id", function(d) { return d.label }),

		rects = node.append("rect"),

		labels = node.append("text")
								.attr("text-anchor", "middle")
								.attr("x", 0);

	// node.on('click', clickNode);
	// node.on('dblclick', dblclickNode);

	labels
		.append("tspan")
		.attr("x", 0)
		.attr("dy", "1em")
		.text(function(d) { return d.label; });

	labels.each(function(d) {
		var bbox = this.getBBox();
		d.bbox = bbox;
		d.width = bbox.width + 2 * nodePadding;
		d.height = bbox.height + nodePadding;
	});

	rects
		.attr("width", function(d) { return d.width; })
		.attr("height", function(d) { return d.height; });

	rects
		.attr("x", function(d) { return -(d.bbox.width / 2 + nodePadding); })
		.attr("y", function(d) { return -(d.bbox.height / 2 + nodePadding / 2); })

	labels
		.attr("x", function(d) { return -d.bbox.width / 2; })
		.attr("y", function(d) { return -d.bbox.height / 2; });

	return node;
}