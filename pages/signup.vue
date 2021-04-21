<template>
  <bef-login-form-card>
    <template #form-card-content>
      <v-form
        v-model="isValid"
      >
        <user-form-email />
        <user-form-name />
        <user-form-password />
        <v-btn
          :disabled="!isValid"
          block
          color="myblue"
          class="white--text"
        >
          登録する
        </v-btn>
      </v-form>
    </template>
  </bef-login-form-card>
</template>

<script>
import befLoginFormCard from '../components/beforeLogin/befLoginFormCard.vue'
import UserFormEmail from '../components/user/userFormEmail.vue'
import UserFormName from '../components/user/userFormName.vue'
import UserFormPassword from '../components/user/userFormPassword.vue'
export default {
  components: { befLoginFormCard, UserFormEmail, UserFormName, UserFormPassword },
  layout: 'beforeLogin',
  data () {
    return {
      isValid: false
    }
  }
}
</script>
