<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <v-layout align-center justify-center>
                  <img src="/static/m.png" width="120" height="120">
                  <h1 class="primary--text">Vuetify-Pro</h1>
                </v-layout>
                <v-layout align-center justify-center>
                  <h1 class="primary--text">注册</h1>
                </v-layout>

                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    append-icon="person"
                    name="login"
                    label="邮箱"
                    type="text"
                    v-model="username"
                    :rules="emailRules"
                  ></v-text-field>
                  <v-text-field
                    append-icon="lock"
                    name="password"
                    label="密码"
                    id="password"
                    type="password"
                    :rules="passwordRules"
                    v-model="password"
                  ></v-text-field>
                  <v-text-field
                    append-icon="lock"
                    name="repeatPassword"
                    label="确认密码"
                    id="repeatPassword"
                    type="password"
                    v-model="repeatPassword"
                    :rules="repeatPasswordRules"
                    :sameAs="password"
                  ></v-text-field>
                  <v-layout align-center justify-space-between>
                    <v-flex>
                      <v-btn block color="primary" @click="login" :loading="loading">注册</v-btn>
                    </v-flex>
                    <v-flex style="text-align:right">
                      <a>已有账户?去登陆</a>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-card-text>
              <v-card-actions></v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    loading: false,
    username: "",
    password: "",
    repeatPassword: "",
    emailRules: [
      v => !!v || "请输入邮箱",
      v => /.+@.+/.test(v) || "邮箱格式不正确"
    ],
    passwordRules: [
      v => !!v || "请输入密码",
      v => (v.length > 5 && v.length < 21) || "密码长度6-20位"
    ],
    repeatPasswordRules: [v => !!v || "请输入密码"]
  }),
  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push("/dashboard");
      }, 1000);
    }
  }
};
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
