module.exports = {
  prompts: {
    name: {
      message: 'package.jsonのname',
      role: 'folder:name',
    },
    description: {
      message: 'package.jsonのdescription',
      default: '',
    },
    author: {
      message: 'package.jsonのauthor',
      default: '',
    },
    docRootDir: {
      message: 'ドキュメントルートディレクトリ',
      default: 'dist',
    },
    site_url: {
      message: 'サイトのURL',
      default: '',
    },
    site_name: {
      message: 'サイト名',
      default: '',
    },
    site_description: {
      message: 'ディスクリプション',
      default: '',
    },
    site_theme_color: {
      message: 'サイトのテーマカラー',
      default: '#CCCCCC',
    },
    google_analytics_id: {
      message: 'Google AnalyticsのID',
      default: '',
    },
  },
};
