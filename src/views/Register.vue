<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email" />
            <input type="password" placeholder="Ingrese la contraseña" v-model.trim="password" />
            <button type="submit" :disabled="userStore.loadingUser">Crear usuario</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from '../stores/user'
//import {useRouter} from 'vue-router'

const userStore = useUserStore();
//const router = useRouter();
const email = ref("jprada@gmail.com");
const password = ref("123456789");

const handleSubmit = async () => {
    if (!email.value || !password.value) {
        return alert("Llena los campos")
    }

    await userStore.registerUser(email.value, password.value);
    //router.push("/")
};
</script>
