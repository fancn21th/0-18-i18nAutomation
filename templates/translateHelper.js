import i18next from 'i18next'

<% resKeyCollection.forEach(function(resKey){ %>
const get<%=resKey %> = () => i18next.t('<%=resNS %>:<%=resKey %>')
<% }) %>

export default {
<% resKeyCollection.forEach(function(resKey){ %>
  get<%= resKey %>,
<% }) %>
}
