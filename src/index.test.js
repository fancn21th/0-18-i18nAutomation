import JsonReader from './index'

describe('i18 resource file transformation automation', () => {
  it('获取 simple.json 里面的一组key value', () => {
    const jsonReader = new JsonReader('resources/simple.json')
    expect(jsonReader.getJson()['Key1 Key2']).toEqual('Value1')
  })
  it('获取 simple.json 里面的一组key value', () => {
    const jsonReader = new JsonReader('resources/complex.json')
    expect(jsonReader.getJson()['Key1']).toEqual('Value1')
    expect(jsonReader.getJson()['Key2']).toEqual('Value2')
    expect(jsonReader.getJson()['Key3 Key4']).toEqual('Value3 Value3')
    expect(jsonReader.getJson()['Key5 Key6 Key7']).toEqual('Value4 Value4 Value4')
  })
})
