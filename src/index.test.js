import JsonReader from './index'

describe('i18 resource file transformation automation', function () {
  it('should read json file', function () {
    const jsonReader = new JsonReader('resources/product.json')
    expect(jsonReader.getJson()['Key1 Key2']).toEqual('Value1')
  })
})
