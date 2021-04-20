<template>
  <div>
    <v-card-title class="font-weight-bold justify-center">
      メンバー
    </v-card-title>
    <v-row justify="space-around">
      <v-col
        v-for="(user, i) in users"
        :key="`user-${i}`"
      >
        <v-list-item>
          <v-list-item-icon>
            <img
              :src="user.photo"
              :alt="user.name"
              :aspect-ratio="192 / 336"
              width="50"
            >
          </v-list-item-icon>
          <v-list-item-content>
            <div>
              {{ user.name }}
            </div>
            <v-list-item-action-text>
              {{ user.email }}
            </v-list-item-action-text>
            <v-list-item-action-text>
              {{ user.position }}
            </v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <v-card-title class="font-weight-bold justify-center">
      会社情報
    </v-card-title>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="8"
      >
        <v-list
          flat
          dense
        >
          <v-divider />
          <template v-for="(info, i) in infomations">
            <v-list-item :key="`info-list-${i}`">
              <v-list-item-icon>
                <v-icon v-text="info.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <a
                  v-if="info.link"
                  :href="info.link"
                  rel="nofollow"
                  target="_blank"
                  class="text-decoration-none"
                >
                  {{ info.link }}
                </a>
                <div
                  v-else
                  class="text-subtitle-1"
                  v-text="info.text"
                />
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="`info-divider-${i}`" />
          </template>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import member1 from '~/assets/images/member1.jpg'
export default {
  async asyncData ({ $axios }) {
    let users = []
    await $axios.get(
      'https://uifaces.co/api?limit=10',
      {
        headers: {
          'X-API-KEY': process.env.uiFaceApiKey
        }
      }
    ).then(res => (users = res))
    console.log(users)
    return { users }
  },
  data () {
    const companyUrl = 'https://nextjs-blog-ebon-delta.vercel.app'
    return {
      users: [
        { name: 'test1', email: 'test1', position: 'test1', photo: member1 },
        { name: 'test2', email: 'test2', position: 'test2', photo: member1 },
        { name: 'test3', email: 'test3', position: 'test3', photo: member1 }
      ],
      infomations: [
        { icon: 'mdi-domain', text: 'SampleComany' },
        { icon: 'mdi-link-variant', link: companyUrl },
        { icon: 'mdi-flag', text: '2021年4月に設立' },
        { icon: 'mdi-account-multiple', text: '3人のメンバー' },
        { icon: 'mdi-map-marker', text: '東京都○x区1-1-1' },
        { icon: 'mdi-handshake', text: 'Webアプリ開発・経営コンサルティング' }
      ]
    }
  }
}
</script>
