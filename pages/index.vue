<script setup lang="ts"></script>
<template>
    <main class="bg-[#fff] md:bg-[#fafafa] px-[20px] md:px-[0px] py-[32px] md:py-[226px] lg:py-[206px] w-full md:block">
        <Html>
        <Title>DevLinks</Title>
        <Link rel="icon" href="/img/devlinklogo.svg" />

        </Html>
        <div class="w-full">
            <div class="flex mb-[58.5px] md:mx-auto w-fit items-center space-x-[7.5px]">
                <div><img src="/img/devlinklogo.svg" class="" /></div>
                <div><img src="/img/name.svg" class="" /></div>
            </div>
            <FormsLogin />
        </div>
    </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;700&display=swap');


html {
    height: 100%;
}

body,
main {
    min-height: 100vh;
    font-family: 'Instrument Sans', sans-serif;
}

body {
    font-family: 'Instrument Sans', sans-serif;
}
</style>