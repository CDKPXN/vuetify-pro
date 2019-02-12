<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-card>
            <v-layout row wrap align-center="true">
              <v-flex lg3>
                <v-text-field
                  v-model="name"
                  label="用户名"
                  maxlength="20"
                  style="margin-left:12px"
                ></v-text-field>
              </v-flex>

              <v-flex lg3>
                <v-text-field
                  v-model="email"
                  label="邮箱"
                  maxlength="20"
                ></v-text-field>
              </v-flex>

              <v-flex lg3>
                <v-text-field
                  v-model="phone"
                  label="手机"
                  maxlength="20"
                ></v-text-field>
              </v-flex>
              <v-flex lg3>
                <v-btn color="primary" small>查询</v-btn>
                <v-btn @click="clear" small>重置</v-btn>
              </v-flex>
            </v-layout>
            <v-layout row wrap align-center="true">
              <v-flex lg1>
                <v-btn color="primary" small>新增</v-btn>
              </v-flex>
              <v-flex lg2>
                <v-select
                  :items="select1"
                  v-model="e1"
                  label="批量操作"
                  item-text="name"
                  item-value="id"
                  @change="batch"
                ></v-select>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :rows-per-page-items="[10, 25, 50, { text: 'All', value: -1 }]"
                class="elevation-1"
                item-key="name"
                select-all
                v-model="complex.selected"
                @input="batch"
              >
                <template slot="items" slot-scope="props">
                  <td>
                    <v-checkbox
                      primary
                      hide-details
                      v-model="props.selected"
                    ></v-checkbox>
                  </td>
                  <td>
                    <v-avatar size="32">
                      <img :src="props.item.avatar" alt />
                    </v-avatar>
                  </td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.email }}</td>
                  <td>{{ props.item.phone }}</td>
                  <td>
                    <v-btn
                      depressed
                      outline
                      icon
                      fab
                      dark
                      color="primary"
                      small
                    >
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon @click="go(props.item.phone)">delete</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { Items as Users } from "@/api/user";
export default {
  data() {
    return {
      email: "",
      phone: "",
      name: "",
      select1: [
        {
          name: "操作1",
          id: "1"
        },
        { name: "操作2", id: "2" }
      ],
      e1: null,
      search: "",
      complex: {
        selected: [],
        headers: [
          {
            text: "头像",
            value: "avatar",
            sortable:false
          },
          {
            text: "用户名",
            value: "name"
          },
          {
            text: "邮箱",
            value: "email"
          },
          {
            text: "手机",
            value: "phone"
          },
          {
            text: "操作",
            value: ""
          }
        ],
        items: Users
      }
    };
  },
  methods: {
    go(id) {
      alert(id)
    },
    batch() {
      console.log("批量操作", this.complex.selected);
    },
    clear() {
      this.name = "";
      this.email = "";
      this.phone = "";
    }
  }
};
</script>
