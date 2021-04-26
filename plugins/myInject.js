class MyInject {
  constructor (ctx) {
    this.app = ctx.app
    this.error = ctx.error
  }

  // i18nページタイトル変換
  pageTitle (routeName) {
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return (typeof (title) === 'object') ? title.index : title
  }

  // 日時フォーマット変換
  dateformat (date) {
    const dateTimeFormat = new Intl.DateTimeFormat(
      'ja', { dateStyle: 'medium', timeStyle: 'short' }
    )
    return dateTimeFormat.format(new Date(date))
  }

  // プロジェクトリンク
  projectLinkTo (id, name = 'project-id-dashboard') {
    return { name, params: { id } }
  }

  // エラーハンドラ
  errorHandler({ status, statusText }) {
    console.log(status)
    console.log(statusText)
    return this.error({ statusCode: status, message: statusText })
  }
}

export default ({ app, error }, inject) => {
  inject('my', new MyInject({ app, error }))
}
