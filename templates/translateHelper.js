import i18next from 'i18next'

<% resKeyCollection.forEach(function(resKey){ -%>
const get<%=resKey.humpsKey %> = () => i18next.t('<%=resNS %>:<%=resKey.originalKey %>')
<% }) -%>

export default {
<% resKeyCollection.forEach(function(resKey){ -%>
  get<%= resKey.humpsKey %>,
<% }) -%>
}
