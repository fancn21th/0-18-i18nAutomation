import { shortenKey } from './index'

describe('shortenKey function Test', () => {
  it('截取过长的Key', () => {
    const key = 'a b c d e f g'
    expect(shortenKey(key)).toEqual('a b c d e')
  })

  it('不截取5个单词的Key', () => {
    const key = 'a b c d e'
    expect(shortenKey(key)).toEqual('a b c d e')
  })

  it('不截取5个单词以内的的Key', () => {
    const key = 'a b c d'
    expect(shortenKey(key)).toEqual('a b c d')
  })
})
