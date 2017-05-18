import i18next from 'i18next'

const get<%= resKey %> = () => i18next.t('<%= resNS %>:<%= resVal %>')

export default {
  get<%= resKey %>,
}

