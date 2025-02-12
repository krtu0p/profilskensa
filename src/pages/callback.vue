<script setup>
import { onMounted } from "vue";
import { userManager } from "@/auth";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(async () => {
  try {
    await userManager.signinRedirectCallback();
    router.push("/");
  } catch (error) {
    console.error("❌ Callback error:", error);
    router.push("/");
  }
});
</script>

<template>
  <div>
    <h2>Processing login...</h2>
  </div>
</template>
