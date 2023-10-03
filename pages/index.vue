<script setup lang="ts"></script>
<template>
    <main class="bg-[#fff] w-full hidden lg:block">

        <Head>
            <Title>Plan it</Title>
        </Head>
        <MenusHeader />
        <BodyHerosection />
        <BodyTailored />
        <BodyNotifySection />
        <MenusFooter />
    </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,1000;1,9..40,900&display=swap');

html {
    height: 100%;
}

body,
main {
    min-height: 100vh;
    font-family: 'DM Sans', sans-serif;
}

body {
    overflow-y: auto;
    overflow-x: hidden;
}

.body_font {
    font-family: 'DM Sans', sans-serif;
}
</style>