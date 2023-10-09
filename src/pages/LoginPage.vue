<template>
  <q-page padding>
    <div class="q-pa-md">
      <h1>Login</h1>
      <div class="row">
        <q-form
          @submit="handleSubmit"
          @reset="reset"
          class="q-gutter-md col-xs-12 col-md-6 col-lg-4"
        >
          <q-input
            dense
            filled
            v-model="form.email"
            label="Your email *"
            hint="Email"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please use a valid email',
            ]"
          />

          <q-input
            dense
            filled
            v-model="form.password"
            type="password"
            label="Your password *"
            hint="Password"
            lazy-rules
            :rules="[
              (val) =>
                val.length >= 6 ||
                'Your password must be at least 6 characters long',
            ]"
          />

          <q-input
            v-if="registerClicked"
            dense
            v-model="confirmationPassword"
            filled
            type="password"
            label="Confirm your password *"
            hint="Confirm your password"
            lazy-rules
            :rules="[
              () =>
                form.password === confirmationPassword ||
                'The passwords do not match.',
            ]"
          />

          <q-toggle
            v-if="registerClicked"
            v-model="accept"
            label="I accept the license and terms"
          />

          <div>
            <q-btn
              :ripple="false"
              no-caps
              :label="registerClicked ? 'Register' : 'Login'"
              type="submit"
              color="primary"
            />
            <q-btn
              :ripple="false"
              no-caps
              @click="onRegisterClick"
              label="Don't have an accout? Register"
              color="transparent"
              text-color="primary"
              flat
              dense
            >
            </q-btn>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './../stores/auth';

const form = reactive({
  email: '',
  password: '',
});

const registerClicked = ref(false);
const confirmationPassword = ref('');
const accept = ref(false);

const onRegisterClick = () => (registerClicked.value = true);

const authStore = useAuthStore();
const router = useRouter();
const handleLoginOrRegister = async () => {
  try {
    if (registerClicked.value) {
      await authStore.register({
        username: form.email,
        password: form.password,
      });
    } else {
      await authStore.login({ username: form.email, password: form.password });
    }

    await router.push('/');
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const $q = useQuasar();
const handleSubmit = async () => {
  if (registerClicked.value && form.password !== confirmationPassword.value) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'error',
      message: 'Passwords do not match.',
    });
    return;
  }
  try {
    await handleLoginOrRegister();
  } catch (error) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'error',
      message: error ? error.toString() : 'Something went wrong.',
    });
  }
};

const reset = () => {
  form.email = '';
  form.password = '';
  confirmationPassword.value = '';
  accept.value = false;
};
</script>
