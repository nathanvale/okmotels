/* eslint-disable func-names */
module.exports = function(migration) {
  migration.transformEntries({
    contentType: 'post',
    from: ['author'],
    to: ['author'],
    transformEntryForLocale: function() {
      const author = 'Nathan Vale'
      return {author}
    },
  })
}
