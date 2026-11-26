<script setup lang="ts">
const route = useRoute();
const menuOpen = ref(false);
const loginPage = computed(() => ["/login", "/register"].includes(route.path));
</script>
<template>
  <div class="public-layout" :class="{ 'auth-layout': loginPage }">
    <a class="skip-link" href="#main-content">Перейти к содержимому</a>
    <header v-if="loginPage" class="auth-header"><AppLogo /></header>
    <header v-else class="public-header">
      <AppLogo />
      <nav class="public-nav" aria-label="Публичная навигация">
        <NuxtLink to="/">Главная</NuxtLink><a href="#features">Статьи</a
        ><a href="#help">Помощь</a><a href="#faq">FAQ</a>
      </nav>
      <NuxtLink to="/login" class="button button-secondary">Войти</NuxtLink
      ><button
        class="menu-button"
        type="button"
        aria-label="Открыть меню"
        @click="menuOpen = true"
      >
        <AppIcon name="menu" :size="20" />
      </button>
    </header>
    <main id="main-content" tabindex="-1"><slot /></main>
    <footer v-if="!loginPage" class="public-footer">
      <span>WorkFlow © 2026</span
      ><span><a href="#help">Помощь</a> · <a href="#faq">FAQ</a></span>
    </footer>
    <AppModal :open="menuOpen" title="WorkFlow" @close="menuOpen = false"
      ><nav class="mobile-nav" aria-label="Публичное меню">
        <NuxtLink to="/" @click="menuOpen = false">Главная</NuxtLink
        ><a href="#features" @click="menuOpen = false">Статьи</a
        ><a href="#help" @click="menuOpen = false">Помощь</a
        ><a href="#faq" @click="menuOpen = false">FAQ</a>
      </nav></AppModal
    >
  </div>
</template>
