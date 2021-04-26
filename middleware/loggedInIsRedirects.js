export default ({ $auth, route, redirect }) => {
  // ログイン後ユーザーリダイレクト処理
  const NonPermitAccessAfterLoggedInUserRoute = ['login', 'signup']
  if ($auth.loggedIn && NonPermitAccessAfterLoggedInUserRoute.includes(route.name)) {
    console.log('ログイン後ユーザーのためトップページへリダイレクト')
    return redirect('/')
  }
}