//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: 9D6FD210-D976-4226-A20C-FCE434A74110
//==============================================================================


var length = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0}

var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig

function parse(path) {
	var data = []
	path.replace(segment, function(_, command, args){
		var type = command.toLowerCase()
		args = parseValues(args)

		// overloaded moveTo
		if (type == 'm' && args.length > 2) {
			data.push([command].concat(args.splice(0, 2)))
			type = 'l'
			command = command == 'm' ? 'l' : 'L'
		}

		while (true) {
			if (args.length == length[type]) {
				args.unshift(command)
				return data.push(args)
			}
			if (args.length < length[type]) throw new Error('malformed path data')
			data.push([command].concat(args.splice(0, length[type])))
		}
	})
	return data
}

var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig

function parseValues(args) {
	var numbers = args.match(number)
	return numbers ? numbers.map(Number) : []
}


function svgToJSONPath(pathStr)  {
  const commands = parse(pathStr);
  let cursor = {x: 0, y: 0};
  let object = new Array();
  commands.forEach((command)=>{
    if (command[0] === 'M' || command[0] === 'm') { // Move to
      if (command[0] === 'm') { // MoveTo relative mode
        cursor = {"x": cursor.x + command[1],"y": cursor.y + command[2]};
      } else {
        cursor = {"x":command[1],"y":command[2]};
      }
      object.push({"type":"moveTo", "point" : cursor});
    } else if (command[0] === 'L' || command[0] === 'l') { // Line to
      if (command[0] === 'l') { // Line to relative mode
        cursor = {"x": cursor.x + command[1],"y": cursor.y + command[2]};
      } else {
        cursor = {"x":command[1],"y":command[2]};
      }
      cursor = {"x":command[1],"y":command[2]};
      object.push({"type":"lineTo", "point" : cursor});
    } else if (command[0] === 'H' || command[0] === 'h') { // Horizontal Line
      if (command[0] === 'h') { // Horizontal relative mode
        cursor = {"x":cursor.x + command[1],"y":cursor.y};
      } else {
        cursor = {"x":command[1],"y":cursor.y};
      }
      object.push({"type":"lineTo", "point" : cursor});
    } else if (command[0] === 'V' || command[0] === 'v') { // Vertical Line
      if (command[0] === 'v') { // Vertical relative mode
        cursor = {"x":cursor.x,"y":command[1] + cursor.y};
      } else {
        cursor = {"x":cursor.x,"y":command[1]};
      }
      object.push({"type":"lineTo", "point" : cursor});
    } else if (command[0] === 'Z' || command[0] === 'z') { // Close Path
      object.push({"type":"closePath"});
    } else if (command[0] === 'C') { // Curve
      cursor = {"x":command[5],"y":command[6]};
      object.push({"type":"curveTo", "curveFrom" : {"x":command[1],"y":command[2]}, "curveTo" :{"x":command[3],"y":command[4]}, "point" : {"x":command[5],"y":command[6]}});
    } else if (command[0] === 'c') { // Curve relative mode
      object.push({"type":"curveTo", "curveFrom" : {"x":command[1] + cursor.x,"y":command[2] + cursor.y}, "curveTo" :{"x":command[3] + cursor.x,"y":command[4] + cursor.y}, "point" : {"x":command[5] + cursor.x,"y":command[6] + cursor.y}});
      cursor = {"x":command[5] + cursor.x,"y":command[6] + cursor.y};
    } else {
      throw new Error(`Unsupported Command ${command[0]}`);
    }
  });
  return {"path":object};
}

var patch = new Patch();

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("SVG", types.STRING, ""),
];

patch.outputs = [
  new PatchOutput("JSON", types.JSON),
];

// Add your logic in this function.
patch.evaluate = function() {
  patch.outputs[0].value = svgToJSONPath(patch.inputs[0].value);
}

return patch;
