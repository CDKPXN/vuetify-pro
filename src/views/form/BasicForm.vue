<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="green" title="编辑" text="完善信息">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field label="公司" disabled />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field class="purple-input" label="用户名" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="邮箱" class="purple-input" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="姓名" class="purple-input" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-menu
                    :close-on-content-click="false"
                    v-model="menu2"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="date"
                      label="出生日期"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-date-picker
                      v-model="date"
                      @input="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 md12>
                  <v-text-field label="地址" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="城市" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="国家" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    label="电话号码"
                    type="number"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="info">
                    保存
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  })
};
</script>
