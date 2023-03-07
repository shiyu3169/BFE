


type SerializablePrimitives = undefined | null | number | string | bigint | boolean

type Serializable = {
  [index: string]: Serializable
} | Serializable[] | SerializablePrimitives

type DataTypeUndefined = {
  type: 'undefined',
  value: "undefined"
}

type DataTypeNull = {
  type: 'null',
  value: 'null'
}

type DataTypeNumber = {
  type: 'number',
  value: string
}

type DataTypeString = {
  type: 'string',
  value: string
}

type DataTypeBigInit = {
  type: 'bigint',
  value: string // without n
}

type DataTypeBoolean = {
  type: 'boolean',
  value: boolean
}

type DataTypePrimitives = DataTypeUndefined | DataTypeNull | DataTypeNumber | DataTypeString | DataTypeBigInit | DataTypeBoolean

type DataTypeObjectLiteral = {
  type: 'objectLiteral',
  value: Record<string, DataTypeWrapper>
}

type DataTypeArray = {
  type: "array",
  value: DataTypeWrapper[]
}

type DataTypeWrapper = DataTypeObjectLiteral | DataTypeArray | DataTypePrimitives




const wrap = (data: Serializable, visited = new Set()): DataTypeWrapper => {
  switch(typeof data) {
    case 'undefined':
      return {
        type: "undefined",
        value: "undefined"
      }
    case 'string':
      return {
        type: 'string',
        value: data
      }
    case 'number':
      return {
        type: 'number',
        value: data.toString() // string here to support NaN and infinity
      }
    case 'boolean':
      return {
        type: 'boolean',
        value: data
      }
    case 'bigint':
      return {
        type: 'bigint',
        value: data.toString() //without n
      }
    case 'object':
      if (data === null) {
        return {
          type: 'null',
          value: 'null'
        }
      }
      if(visited.has(data)) {
        throw new Error('circular reference found')
      }
      visited.add(data)

      if(Array.isArray(data)) {
        return {
          type: 'array',
          value: data.map(datum => wrap(datum, new Set(visited)))
        }
      }
      const keys = Object.keys(data)
      const value = keys.reduce((result,key) => {
        result[key] = wrap(data[key], new Set(visited))
        return result
      },{} as Record<string, DataTypeWrapper>)
      return {
        type: "objectLiteral",
        value
      }
    default:
      throw new Error("unsupported data type")
  }
}

const unwrap = (wrapper: DataTypeWrapper): Serializable => {
  switch(wrapper.type) {
    case 'undefined':
      return undefined
    case 'null':
      return null
    case 'number':
      return Number(wrapper.value)
    case 'string':
      return wrapper.value
    case 'bigint':
      return BigInt(wrapper.value)
    case 'boolean':
      return wrapper.value
    case 'array':
      return wrapper.value.map(unwrap)
    case 'objectLiteral':
      const keys = Object.keys(wrapper.value)
      return keys.reduce((result, key) => {
        result[key] = unwrap(wrapper.value[key])
        return result
      },{} as Record<string, Serializable>)
    default:
      throw new Error("unsupported data type")
  }
}

const stringify = (data: Serializable): string => {
  // your code here
  return JSON.stringify(wrap(data))
}

const parse = (data: string): Serializable => {
  // your code here
  return unwrap(JSON.parse(data))
}