<template>
  <header>
    <nav :class="{ scrolled: isScrolled }">
      <div class="logo">
        <a href="#"><img src="@/images/social/logoskensa.png" alt="Logo"></a>
      </div>
      <ul class="menu" :class="{ active: isMenuActive }">
        <li><a href="#">Home</a></li>
        <li><a href="#">Profil</a></li>
        <li><a href="#">Konsentrasi Keahlian</a></li>
        <li v-if="isLoggedIn">
          <a href="#">Daftar Siswa</a>
        </li>
        <li v-if="isLoggedIn">
          <span class="user-email">👤 {{ userEmail }}</span>
        </li>
        <li>
          <a class="login" href="#" @click="toggleLogin">
            {{ isLoggedIn ? "Logout" : "Login" }}
          </a>
        </li>
      </ul>
      <div class="menu-toggle" @click="toggleMenu">&#9776;</div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { userManager, signInRedirect, signOutRedirect, getUser } from "@/auth";

export default {
  setup() {
    const isLoggedIn = ref(false);
    const userEmail = ref("");
    const isScrolled = ref(false);
    const isMenuActive = ref(false);
    let isUpdatingStatus = false; // Flag untuk mencegah loop status

    // 🔥 Periksa status login saat pertama kali load
    const checkLoginStatus = async () => {
      const user = await getUser();
      if (user) {
        userEmail.value = user.profile?.email || "Unknown User";
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
        userEmail.value = "";
      }
    };

    // 🔥 Tambahkan event listener agar update otomatis
    const updateUserStatus = async () => {
      if (isUpdatingStatus) return; // Jangan update jika sedang update status
      isUpdatingStatus = true;
      console.log("✅ User status updated!");
      await checkLoginStatus();
      isUpdatingStatus = false;
    };

    onMounted(async () => {
      await checkLoginStatus();
      userManager.events.addUserLoaded(updateUserStatus);
      userManager.events.addUserUnloaded(updateUserStatus);
      window.addEventListener("scroll", () => {
        isScrolled.value = window.scrollY > 50;
      });
    });

    onUnmounted(() => {
      userManager.events.removeUserLoaded(updateUserStatus);
      userManager.events.removeUserUnloaded(updateUserStatus);
    });

    // 🔥 Fungsi login/logout Cognito
    const toggleLogin = async () => {
      try {
        if (isLoggedIn.value) {
          // Menandakan bahwa logout sedang diproses
          isLoggedIn.value = false;
          userEmail.value = "";

          // Logout dan alihkan
          await signOutRedirect();
          // Redirect manual jika perlu
          window.location.href = "/"; // Redirect ke halaman utama setelah logout
        } else {
          // Login dan alihkan
          await signInRedirect();
        }
      } catch (error) {
        console.error("Login/Logout error:", error);
        alert("Terdapat kesalahan saat proses login/logout.");
      }
    };

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
    };

    return {
      isLoggedIn,
      userEmail,
      isScrolled,
      isMenuActive,
      toggleLogin,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
/* 🔥 Navbar transparan saat di atas */
nav {
  font-family: "Montserrat SemiBold";
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 15px 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
}

/* 🔥 Navbar berubah lebih gelap saat scroll */
nav.scrolled {
  background-color: rgba(0, 0, 0, 0.9);
}

/* Logo */
nav .logo a img {
  width: 150px;
  height: auto;
  padding-top: 10px;
}

/* Menu */
.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.menu li {
  margin-left: 30px;
}

.menu li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

.menu li a:hover {
  text-decoration: underline;
  color: #ff6347;
}

/* 🔥 Email pengguna setelah login */
.user-email {
  color: white;
  font-size: 16px;
  padding: 10px 15px;
}

/* Tombol login/logout */
.login {
  font-size: 18px;
  padding: 10px 15px;
  border: 2px solid white;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.login:hover {
  background-color: white;
  color: black;
  transform: scale(1.05);
}

/* 🔥 Responsive menu */
.menu-toggle {
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: white;
}

@media (max-width: 768px) {
  .menu {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    display: none;
    text-align: center;
  }

  .menu.active {
    display: flex;
  }

  .menu li {
    margin-bottom: 15px;
    margin-left: 0;
  }

  .menu li a {
    font-size: 16px;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
