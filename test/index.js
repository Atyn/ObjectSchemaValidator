import DefaultSettings from '../src/DefaultSettings'
import ObjectSchemaValidator from '../src/ObjectSchemaValidator'

const obj = {
	str: 'valueA',
	b:   'a',
}

const schema = {
	Str: {
		type:     String,
		required: true,
		values:   [
			'valueA', 'valueB',
		],
	},
	anotherProp: Boolean,
	b:           {
		values: ['a', 'b'],
	},
}

const validator = new ObjectSchemaValidator(schema)

const results = validator.validate(obj)
console.log('results', results)
