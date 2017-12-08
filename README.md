# ObjectSchemaValidator
Validate simple javascript objects one or multiple levels

```javascript
import ObjectSchemaValidator from 'ObjectSchemaValidator'

const obj = {
  str: 'valueA',
  b: 'c'
}

const schema = {
  Str: { 
    type: String,
    required: true,
    values: [
      'valueA', valueB'
    ]
  },
  anotherProp: Boolean,
  b: {
    values: ['a', 'b']
  }
}

const options = {
  ignoreCase: false,
  noUndefinedKeys: true,
  throwError: false
}

const validator = new ObjectSchemaValidator(schema, options)

/*
errors: {
  "Str": "is not defined and required",
  "str": "is not a schema property",
  "b": "c is not a valid value"
},
warnings: {
  "anotherProp": 
}
*/
validator.validate(obj)

```
