<script lang="ts" setup>
const hanko = useHanko();
const router = useRouter();
function afterLogin() {
  navigateTo("/customize_link");
  localStorage.setItem("isLogged", true);
  localStorage.setItem("hanko_login", true);
}
function gotoLogin() {
  navigateTo("/");
  localStorage.removeItem("hanko");
  localStorage.removeItem("hanko_session");
  localStorage.setItem("isLogged", false);
  localStorage.setItem("hanko_login", false);
}
function session() {
  console.log("session created");
}
</script>

<template>
  <main class="bg-[#fafafa] flex items-center justify-center md:bg-[#fafafa]">
    <Html>
      <Title>DevLinks</Title>
      <Link rel="icon" href="/img/devlinklogo.svg" />
    </Html>
    <div class="mx-auto w-fit">
      <div
        @click="gotoLogin"
        class="text-center text-[#633cff] leading-[150%] font-[600] md:text-[16px] text-[14px] cursor-pointer ml-[20px] md:ml-[0px] mb-[10px] w-fit px-[27px] border border-[#633cff] rounded-[8px] py-[11px]"
      >
        Back to Editor
      </div>
      <hanko-auth
        @onSessionCreated="session()"
        @onAuthFlowCompleted="afterLogin()"
        id="hankoAuth"
      />
      <hanko-event />
    </div>
  </main>
</template>

<style>
hanko-auth::part(container) {
  padding: 20px;
  @apply rounded-[8px] md:bg-[#fff] bg-[transparent];
}

hank-auth::part(headline1) {
  font-family: "Instrument Sans", sans-serif;
}

hank-auth::part(input) {
  font-family: "Instrument Sans", sans-serif;
  color: #fff;
  border: 1px solid #fff;
}

hank-auth::part(input)::placeholder {
  font-family: "Instrument Sans", sans-serif;
  color: #fff;
}

hank-auth::part(divider-line) {
  background: #fff;
  border: 0.5px solid #fff;
}

hank-auth::part(divider-text) {
  color: #fff;
  font-family: "Instrument Sans", sans-serif;
}

#hankAuth::part(button primary-button) {
  font-family: "Instrument Sans", sans-serif;
  border: 0px;
}

#hankAuth::part(button primary-button):hover {
  font-family: "Instrument Sans", sans-serif;
  box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
}

#hankAuth::part(button secondary-button) {
  font-family: "Instrument Sans", sans-serif;
  background: #fff;
  border: 0px;
}
</style>
