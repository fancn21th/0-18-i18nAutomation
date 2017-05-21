// import JsonReader from './index'
//
// const simpleJSONFilePath = 'resources/simple.json'
// const complexJSONFilePath = 'resources/complex.json'
//
// describe('JsonReader Test', () => {
//   it('获取 simple.json 里面的一组key value', () => {
//     const jsonReader = new JsonReader(simpleJSONFilePath)
//     expect(jsonReader.getJson()['Key1 Key2']).toEqual('Value1')
//   })
//   it('获取 complex.json 里面的多组key value', () => {
//     const jsonReader = new JsonReader(complexJSONFilePath)
//     expect(jsonReader.getJson()['Key1']).toEqual('Value1')
//     expect(jsonReader.getJson()['Key2']).toEqual('Value2')
//     expect(jsonReader.getJson()['Key3 Key4']).toEqual('Value3 Value3')
//     expect(jsonReader.getJson()['Key5 Key6 Key7']).toEqual('Value4 Value4 Value4')
//   })
// })
