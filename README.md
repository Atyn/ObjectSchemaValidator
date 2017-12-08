# ObjectSchemaValidator
Validate simple javascript objects one or multiple levels

## options
### keys
  ignoreCase: Boolean,
  onlyDefined: Boolean,
### values
  ignoreCase: Boolean,

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
      'valueA', 'valueB'
    ]
  },
  anotherProp: Boolean,
  b: {
    values: ['a', 'b']
  }
}

const options = {
  keys: {
    ignoreCase: false,
    onlyDefined: false,
  },
  values: {
    ignoreCase: false,
  },
  failOnError: false
}

const validator = new ObjectSchemaValidator(schema, options)

const results = validator.validate(obj)
/* Results:
errors: {
  "Str": "is not defined and required",
  "str": "is not a schema property",
  "b": "c is not a valid value"
},
warnings: {
  "anotherProp":
}
*/
```
