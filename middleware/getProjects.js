export default async ({ $auth, store, $axios }) => {
  //ログイン済みかつ、ストアのプロジェクト一覧が存在していない場合のみ
  if ($auth.loggedIn && !store.state.projects.length) {
    await $axios.$get('/api/v1/projects')
    .then(response => store.dispatch('getProjects', response))
  }
}