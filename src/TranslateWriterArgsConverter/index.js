import { convertKeyCollection } from '../util'

export const convertJsonRes2VarArgs = (resJson, namespace) => ({
  templateVariables: {
    resKeyCollection: convertKeyCollection(Object.keys(resJson)),
    resNS: namespace,
  },
})

export default {
  convertJsonRes2VarArgs,
}
