import DefaultSettings from './DefaultSettings'

export default
class ObjectSchemaValidator {

	constructor(schema, options = DefaultSettings) {
		this.schema = schema,
		this.options = options
	}

	_validatePair(def, objValue) {
		// Check values
		if (
			def.values &&
			!def.values.includes(objValue)
		) {
			return 'wrong value'
		}
		// Check type
		if (
			def.type &&
			(def.type !== objValue.constructor)
		) {
			return 'wrong type'
		}
		return false
	}

	validate(obj) {
		const errors = {}
		const warnings = {}
		if (this.options.keys.onlyDefined) {
			Object.keys(obj)
				.forEach(key => {
					if (!(key in this.schema)) {
						errors[key] = `${key} was not defined in schema`
					}
				})
		}
		Object.keys(this.schema)
			.forEach(key => {
				const objValue = obj[key]
				if (
					(!this.options.keys.allDefined) &&
					(!objValue)
				) {
					return
				}
				const _def = this.schema[key]
				const def = (_def.constructor === Object) ?
					_def : {
						type: _def,
					}
				const error = this._validatePair(
					def,
					objValue
				)
				if (error) {
					errors[key] = error
				}
			})
		// TODO: Check all required
		return { errors, warnings }
	}

}

/*

// this.options.keys.onlyDefined
// this.options.keys.ignoreCase

const obj = {
  str: 'valueA',
  b: 'c'
}

const schema = {
  Str: {
    type: String,
    required: true,
    values: [
      'valueA', 'valueB'
    ]
  },
  anotherProp: Boolean,
  b: {
    values: ['a', 'b']
  }
}

const validator = new ObjectSchemaValidator(schema)

const results = validator.validate(obj)
*/
