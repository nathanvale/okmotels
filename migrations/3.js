/* eslint-disable func-names */
module.exports = function(migration) {
  migration.transformEntries({
    contentType: 'post',
    from: ['author'],
    to: ['author'],
    transformEntryForLocale: function(fromFields, currentLocale) {
      const author = 'Nathan Vale'
      return {author}
    },
  })
}
