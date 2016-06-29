# Attr

> A basic getter/setter mixin that abstracts accessing a data map.

## Proposed API

```javascript
import Attr from 'attr';

const myObj = { name: 'Juan' };
const attr = new Attr(myObj);

attr('name'); //> 'Juan'
attr('name', 'Optimus Prime'); //> 'Optimus Prime'
attr(); //> { name: 'Optimus Prime' }
```

or

```javascript
import Attr from 'attr';

const myObj = { name: 'Juan' };
myObj.prototype.attr = Attr();

myObj.attr('name'); //> 'Juan'
```


## Future

- Access deep properties with `.` (dot) operator. `myObj.attr('name.last')`
- Hookable getter/setter. Create any plugin needed to change getter or setter behavior.
