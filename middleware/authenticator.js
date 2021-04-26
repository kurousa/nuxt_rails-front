import auth from "../plugins/auth"

export default async ({ $auth, store, route, redirect }) => {
  // トップページかつユーザーが存在していない場合は、ウェルカムページ表示のため何もしない
  if (route.name === 'index' && !$auth.isUserPresent()) {
    return false
  }

  
  if (!$auth.isAuthenticated()) { // 有効期限が切れている
    let msg = 'ログインが必要です'

    if ($auth.isUserPresent()) { // ユーザーが存在する場合、トークン再発行のため再ログインさせる
      msg = 'もう一度ログインしてください'
      await $auth.logout()
    } else {
      store.dispatch('getRememberRoute', route) // ログイン後にアクセスするルートをVuexに保存
    }
    console.log(msg)
    return redirect('/login')
  } else if (!$auth.isUserPresent()) { // 有効期限内だがユーザーが存在していない
    return $auth.unauthError()
  }
}