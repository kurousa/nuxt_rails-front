<template>
  <v-text-field
    v-model="setPassword"
    :rules="form.rules"
    :counter="!noValidation"
    :hint="form.hint"
    label="パスワードを入力"
    :placeholder="form.placeholder"
    :hide-details="noValidation"
    :append-icon="toggle.icon"
    :type="toggle.type"
    outlined
    autocomplete="on"
    @click:append="show = !show"
  />
</template>

<script>
export default {
  props: {
    password: {
      type: String,
      default: ''
    },
    noValidation: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    setPassword: {
      get () { return this.password },
      set (newVal) { return this.$emit('update:password', newVal) }
    },
    form () {
      /*
      会員登録フォームの場合とログインフォームの場合でチェック要素切り替え

      バリデーション(rules)：会員登録フォームは文字数及び書式チェック、ログインフォームは入力必須のみ
      文字数カウント(counter)：会員登録フォームは必要、ログインフォームは不要
      入力ヒント(hint) : 会員登録フォームは表示、ログインフォームは非表示
      プレースホルダ(placeholder) : 会員登録フォームは表示、ログインフォームは非表示
      エラーメッセージ表示余白(hidedetails) : 会員登録フォームは隠さない、ログインフォームは隠す
      */
      const min = '8文字以上'
      const msg = `${min}。半角英数字•ﾊｲﾌﾝ•ｱﾝﾀﾞｰﾊﾞｰが使えます`
      const required = v => !!v || ''
      const format = v => /^[\w-]{8,72}$/.test(v) || msg

      const rules = this.noValidation ? [required] : [format]
      const hint = this.noValidation ? undefined : msg
      const placeholder = this.noValidation ? undefined : min

      return { rules, hint, placeholder }
    },
    toggle () {
      const icon = this.show ? 'mdi-eye' : 'mdi-eye-off'
      const type = this.show ? 'text' : 'password'
      return { icon, type }
    }
  }
}
</script>
