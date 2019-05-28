<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">第一步</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">第二步</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">完成</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            :error-messages="selectErrors"
            label="Item"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
          <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="Do you agree?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>

          <!-- <v-btn @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn> -->
        </form>

        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-alert v-model="alert" dismissible type="success">
          This is a success alert that is closable.
        </v-alert>

        <!-- <div class="text-xs-center">
          <v-btn v-if="!alert" color="primary" dark @click="alert = true">
            Reset
          </v-btn>
        </div> -->

        <v-btn color="primary" @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <div class="about">
          <img src="../../images/fail.png" class="pictrue" />
          <h2 class="h3">提交成功</h2>
          <h3 class="h3">操作成功，请等待通知信息，或者查询相关状态。</h3>
        </div>

        <v-btn
          color="primary"
          @click="
            submit();
            e1 = 1;
          "
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      alert: true,
      e1: 0,
      name: "",
      email: "",
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false
    };
  },
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },
  // data: () => ({
  //   name: "",
  //   email: "",
  //   select: null,
  //   items: ["Item 1", "Item 2", "Item 3", "Item 4"],
  //   checkbox: false
  // }),
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>
<style>
.about {
  text-align: center;
  margin-top: 1%;
  padding: 30px;
  text-shadow: 0 0 5px rgb(240, 248, 244);
}
.h3 {
  margin-top: 40px;
}
.button {
  margin-top: 120px;
  border-radius: 8px;
}
</style>
