importScripts("https://mnutze.github.io/bsc.monitoring-courses/libs/js/logic.js");
var range = function(start, end) { return (new Date(this.created_at) > start && new Date(this.created_at) < end) };
var has = function(key) { return !!deepValue(this, key) }; // deepValue(this, key) ? true : false
if (jsonLogic)
	jsonLogic.add_operation("range", range);
if (jsonLogic)
	jsonLogic.add_operation("has", has);
/** @from ccm.js
 * @summary get or set the value of a deeper object property
 * @param {Object} obj - object that contains the deeper property
 * @param {string} key - key path to the deeper property in dot notation
 * @param {*} [value] - value that should be set for the deeper property
 * @returns {*} value of the deeper property
 * @example
 * var obj = {
 *   test: 123,
 *   foo: {
 *     bar: 'abc',
 *     baz: 'xyz'
 *   }
 * };
 * var result = ccm.helper.deepValue( obj, 'foo.bar' );
 * console.log( result ); // => 'abc'
 * @example
 * var obj = {};
 * var result = ccm.helper.deepValue( obj, 'foo.bar', 'abc' );
 * console.log( obj );    // => { foo: { bar: 'abc' } }
 * console.log( result ); // => 'abc'
 */
function deepValue ( obj, key, value ) {
    return recursive( obj, key.split( '.' ), value );
    /**
     * recursive helper function, key path is given as array
     */
    function recursive( obj, key, value ) {
        if ( !obj ) return;
        var next = key.shift();
        if ( key.length === 0 )
            return value !== undefined ? obj[ next ] = value : obj[ next ];
        if ( !obj[ next ] && value !== undefined ) obj[ next ] = isNaN( key[ 0 ] ) ? {} : [];
        return recursive( obj[ next ], key, value );  // recursive call
    }
}

// This is the code for: 'sharedWorker1.js' file
// Shared workers that handle the connections and Welcome each new script
self.addEventListener("connect", function(e) {
	var port = e.ports[0];
	port.addEventListener("message", function(e) {
		let data = e.data.data.filter(dataset => jsonLogic.apply(e.data.rules, dataset));
		//let workerResult = { widget: widget, data: data.filter(dataset => jsonLogic.apply(rules, dataset)) };
		var workerResult = { data: data, key: e.data.key, widget: e.data.widget };
        port.postMessage(workerResult);

	}, false);
	//
	port.start();
}, false);